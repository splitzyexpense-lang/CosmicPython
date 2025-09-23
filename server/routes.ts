import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertSupportTicketSchema, insertLiveStatsSchema } from "@shared/schema";
import { z } from "zod";

export async function registerRoutes(app: Express): Promise<Server> {
  // Support ticket endpoints
  app.post("/api/support/tickets", async (req, res) => {
    try {
      const ticketData = insertSupportTicketSchema.parse(req.body);
      const ticket = await storage.createSupportTicket(ticketData);
      res.status(201).json(ticket);
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid ticket data", errors: error.errors });
      } else {
        console.error("Error creating support ticket:", error);
        res.status(500).json({ message: "Failed to create support ticket" });
      }
    }
  });

  app.get("/api/support/tickets", async (req, res) => {
    try {
      const tickets = await storage.getAllSupportTickets();
      res.json(tickets);
    } catch (error) {
      console.error("Error fetching support tickets:", error);
      res.status(500).json({ message: "Failed to fetch support tickets" });
    }
  });

  // Live stats endpoints
  app.get("/api/stats/live", async (req, res) => {
    try {
      const stats = await storage.getLiveStats();
      if (!stats) {
        // Return default stats if none exist
        res.json({
          totalMiners: 12847,
          totalMined: 892431,
          lastUpdated: new Date().toISOString()
        });
      } else {
        res.json({
          totalMiners: parseInt(stats.totalMiners),
          totalMined: parseInt(stats.totalMined),
          lastUpdated: stats.lastUpdated.toISOString()
        });
      }
    } catch (error) {
      console.error("Error fetching live stats:", error);
      res.status(500).json({ message: "Failed to fetch live stats" });
    }
  });

  app.post("/api/stats/live", async (req, res) => {
    try {
      const statsData = insertLiveStatsSchema.parse(req.body);
      const stats = await storage.updateLiveStats(statsData);
      res.json({
        totalMiners: parseInt(stats.totalMiners),
        totalMined: parseInt(stats.totalMined),
        lastUpdated: stats.lastUpdated.toISOString()
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        res.status(400).json({ message: "Invalid stats data", errors: error.errors });
      } else {
        console.error("Error updating live stats:", error);
        res.status(500).json({ message: "Failed to update live stats" });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}

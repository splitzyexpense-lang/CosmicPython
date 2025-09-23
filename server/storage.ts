import { type User, type InsertUser, type SupportTicket, type InsertSupportTicket, type LiveStats, type InsertLiveStats } from "@shared/schema";
import { randomUUID } from "crypto";

export interface IStorage {
  getUser(id: string): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  createSupportTicket(ticket: InsertSupportTicket): Promise<SupportTicket>;
  getAllSupportTickets(): Promise<SupportTicket[]>;
  getSupportTicketById(id: string): Promise<SupportTicket | undefined>;
  
  getLiveStats(): Promise<LiveStats | undefined>;
  updateLiveStats(stats: InsertLiveStats): Promise<LiveStats>;
}

export class MemStorage implements IStorage {
  private users: Map<string, User>;
  private supportTickets: Map<string, SupportTicket>;
  private liveStats: LiveStats | undefined;

  constructor() {
    this.users = new Map();
    this.supportTickets = new Map();
    this.liveStats = undefined;
    
    // Initialize with default stats
    this.initializeDefaultStats();
  }

  private initializeDefaultStats() {
    this.liveStats = {
      id: "live",
      totalMiners: "12847",
      totalMined: "892431",
      lastUpdated: new Date(),
    };
  }

  async getUser(id: string): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username,
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = randomUUID();
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }

  async createSupportTicket(insertTicket: InsertSupportTicket): Promise<SupportTicket> {
    const id = randomUUID();
    const now = new Date();
    const ticket: SupportTicket = {
      ...insertTicket,
      id,
      status: "open",
      createdAt: now,
      updatedAt: now,
    };
    this.supportTickets.set(id, ticket);
    return ticket;
  }

  async getAllSupportTickets(): Promise<SupportTicket[]> {
    return Array.from(this.supportTickets.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getSupportTicketById(id: string): Promise<SupportTicket | undefined> {
    return this.supportTickets.get(id);
  }

  async getLiveStats(): Promise<LiveStats | undefined> {
    return this.liveStats;
  }

  async updateLiveStats(insertStats: InsertLiveStats): Promise<LiveStats> {
    const stats: LiveStats = {
      id: "live",
      totalMiners: insertStats.totalMiners,
      totalMined: insertStats.totalMined,
      lastUpdated: new Date(),
    };
    this.liveStats = stats;
    return stats;
  }
}

export const storage = new MemStorage();

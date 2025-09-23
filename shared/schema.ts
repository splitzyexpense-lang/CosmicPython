import { sql } from "drizzle-orm";
import { pgTable, text, varchar, timestamp, boolean } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

export const users = pgTable("users", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  username: text("username").notNull().unique(),
  password: text("password").notNull(),
});

export const supportTickets = pgTable("support_tickets", {
  id: varchar("id").primaryKey().default(sql`gen_random_uuid()`),
  name: text("name").notNull(),
  email: text("email").notNull(),
  category: text("category").notNull(),
  subject: text("subject").notNull(),
  message: text("message").notNull(),
  status: text("status").notNull().default("open"),
  createdAt: timestamp("created_at").notNull().defaultNow(),
  updatedAt: timestamp("updated_at").notNull().defaultNow(),
});

export const liveStats = pgTable("live_stats", {
  id: varchar("id").primaryKey().default("live"),
  totalMiners: text("total_miners").notNull().default("0"),
  totalMined: text("total_mined").notNull().default("0"),
  lastUpdated: timestamp("last_updated").notNull().defaultNow(),
});

export const insertUserSchema = createInsertSchema(users).pick({
  username: true,
  password: true,
});

export const insertSupportTicketSchema = createInsertSchema(supportTickets).pick({
  name: true,
  email: true,
  category: true,
  subject: true,
  message: true,
});

export const insertLiveStatsSchema = createInsertSchema(liveStats).pick({
  totalMiners: true,
  totalMined: true,
});

export type InsertUser = z.infer<typeof insertUserSchema>;
export type User = typeof users.$inferSelect;

export type InsertSupportTicket = z.infer<typeof insertSupportTicketSchema>;
export type SupportTicket = typeof supportTickets.$inferSelect;

export type InsertLiveStats = z.infer<typeof insertLiveStatsSchema>;
export type LiveStats = typeof liveStats.$inferSelect;

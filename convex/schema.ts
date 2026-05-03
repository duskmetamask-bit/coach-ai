import { defineSchema, defineTable } from "convex/server";

export default defineSchema({
  users: defineTable({
    email: string,
    name: string,
    clerkId: string,
    subscriptionStatus: string,
    subscriptionTier: string,
    createdAt: number,
  }).index("clerkId", (q) => q.field("clerkId")),

  sessions: defineTable({
    userId: string,
    title: string,
    messages: array(object({
      role: string,
      content: string,
      timestamp: number,
    })),
    createdAt: number,
    updatedAt: number,
  }).index("userId", (q) => q.field("userId")),

  usage: defineTable({
    userId: string,
    month: string,
    messageCount: number,
  }).index("userId", (q) => q.field("userId")),
});
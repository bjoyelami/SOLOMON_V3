// Import necessary libraries and middleware
import { NextApiRequest, NextApiResponse } from "next";
import * as z from "zod";
import { db } from "@/app/api/lib/db";

// Define the schema for input validation
const messageSchema = z.object({
  userId: z.string().uuid(), // Ensure the userId is a valid UUID
  conversationId: z.string().uuid(), //
  userContent: z.string().min(1, "User message content is required"),
  botResponse: z.string().optional(), // Bot response might be asynchronous
  firstConvo: z.boolean().optional(),
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    console.log("Received POST request to /api/messages");
    try {
      const { userId, conversationId, userContent, botResponse, firstConvo } =
        messageSchema.parse(req.body);
      console.log(
        `Processing message from user ${userId} in conversation ${conversationId}`
      );

      

      // Create a new message and link it to a user and a conversation
      const newMessage = await db.messages.create({
        data: {
          authorId: userId,
          conversationId: conversationId,
          userContent: userContent,
          botResponse: botResponse, // Handle optional bot response
          title: "Chat Interaction",
          published: true,
          firstConvo: firstConvo,
        },
      });

      res
        .status(201)
        .json({ message: "Message saved successfully", data: newMessage });
    } catch (error) {
      console.error("Error saving message:", error);
      res
        .status(500)
        .json({
          message: "Failed to save message",
          error: (error as Error).message,
        });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

import { PrismaClient } from "@prisma/client";

export type TopicDTO = {
  userId: number;
  title: string;
  description: string;
}
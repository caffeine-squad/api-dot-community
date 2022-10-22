import { PrismaClient } from "@prisma/client";

export type TopicDTO = {
  id: number;
  description: string;
}
import { PrismaClient } from "@prisma/client";

export type CommentDTO = {
    id: number;
    description: string;
  }
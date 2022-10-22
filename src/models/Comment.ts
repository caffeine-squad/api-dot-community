import { Prisma } from "@prisma/client";

export type CommentDTO = {
    description: string;
    userId: number;
    topicId: number;
  }
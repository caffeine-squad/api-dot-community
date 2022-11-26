import { PrismaClient } from "@prisma/client";

export type TopicDTO = {
  userId: number;
  title: string;
  description: string;
}

export type GetTopicDTO = {
  id: number,
  title: string,
  description: string,
  creationDate: Date,
  userId: number,
  userName: string,
}

export type GetAllTopicDTO = {
  id: number,
  title: string,
  description: string,
  creationDate: Date,
  userId: number,
  userName: string,
  numberOfComments: number,
}
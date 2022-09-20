import express from "express";

import { PrismaClient } from "@prisma/client";

const app = express();
const prisma = new PrismaClient();

app.get("/games", async (request, response) => {
  const games = await prisma.game.findMany();

  return response.json(games);
});

app.get("/ads", (request, response) => {
  return response.status(200).json([]);
});

app.post("/ads", (request, response) => {
  return response.status(201).json([]);
});

app.get("/games/:id/ads", (request, response) => {
  // const gameId = request.params.id;

  return response.json([
    {
      id: 1,
      name: "Ad 1",
    },
    {
      id: 2,
      name: "Ad 2",
    },
    {
      id: 3,
      name: "Ad 3",
    },
    {
      id: 4,
      name: "Ad 4",
    },
    {
      id: 5,
      name: "Ad 5",
    },
  ]);
});

app.get("/ads/:id/discord", (request, response) => {
  // const adId = request.params.id;

  return response.json([]);
});

app.listen(3333);

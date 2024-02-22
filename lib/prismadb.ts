import { PrismaClient } from "@prisma/client";
import dotenv from 'dotenv'; // Add if using dotenv

dotenv.config(); // Load environment variables (if using dotenv)

declare global {
  var prisma: PrismaClient | undefined;
}

const prismadb = globalThis.prisma || new PrismaClient({
  datasources: {
    db: {
      url: env("DATABASE_URL"),
    },
  },
});

if (process.env.NODE_ENV !== "production") globalThis.prisma = prismadb;

export default prismadb;

function env(key: string) {
  return process.env[key];
}


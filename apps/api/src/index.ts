import { buildApp } from './app.js';
import { env } from './config/env.js';
import { prisma } from './lib/prisma.js';

const app = buildApp();

const start = async () => {
  try {
    await prisma.$connect();
    app.log.info('Connected to PostgreSQL via Prisma');

    await app.listen({ host: env.HOST, port: env.PORT });
    app.log.info(`API server listening on http://${env.HOST}:${env.PORT}`);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

void start();

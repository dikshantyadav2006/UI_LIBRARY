import Fastify, { type FastifyServerOptions } from 'fastify';
import {
  type ZodTypeProvider,
  serializerCompiler,
  validatorCompiler,
} from 'fastify-type-provider-zod';
import helmet from '@fastify/helmet';
import cookie from '@fastify/cookie';
import { healthRoutes } from './routes/health.js';
import { env } from './config/env.js';

export function buildApp(opts: FastifyServerOptions = {}) {
  const { logger: loggerOpts, ...rest } = opts;

  const app = Fastify({
    logger: loggerOpts ?? { level: env.LOG_LEVEL },
    ...rest,
  }).withTypeProvider<ZodTypeProvider>();

  app.setValidatorCompiler(validatorCompiler);
  app.setSerializerCompiler(serializerCompiler);

  void app.register(helmet, { global: true });
  void app.register(cookie);

  void app.register(healthRoutes);

  return app;
}

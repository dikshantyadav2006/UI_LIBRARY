import type { FastifyPluginAsyncZod } from 'fastify-type-provider-zod';
import { HealthResponseSchema, type HealthResponse } from '@ui-library/types';

export const healthRoutes: FastifyPluginAsyncZod = async (fastify) => {
  fastify.get(
    '/health',
    {
      schema: {
        response: {
          200: HealthResponseSchema,
        },
      },
    },
    async (): Promise<HealthResponse> => {
      return {
        success: true,
        timestamp: new Date().toISOString(),
      };
    },
  );
};

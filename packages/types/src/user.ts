import { z } from 'zod';

export const HealthResponseSchema = z.object({
  success: z.boolean(),
  timestamp: z.string(),
});

export type HealthResponse = z.infer<typeof HealthResponseSchema>;

export const UserSchema = z.object({
  id: z.string(),
  email: z.string().email(),
  name: z.string().min(1).nullable(),
  createdAt: z.string(),
  updatedAt: z.string(),
});

export type User = z.infer<typeof UserSchema>;

export const CreateUserSchema = z.object({
  body: z.object({
    email: z.string().email(),
    name: z.string().min(1).optional(),
  }),
});

export type CreateUserBody = z.infer<typeof CreateUserSchema.shape.body>;

export const UpdateUserSchema = z.object({
  body: z
    .object({
      email: z.string().email().optional(),
      name: z.string().min(1).optional(),
    })
    .refine((data) => Object.keys(data).length > 0, {
      message: 'At least one field must be provided',
    }),
});

export type UpdateUserBody = z.infer<typeof UpdateUserSchema.shape.body>;

export interface UserDTO {
  user: User;
}

export interface UserListDTO {
  users: User[];
  total: number;
}

export interface PaginationParams {
  page: number;
  pageSize: number;
}

export interface ApiError {
  error: {
    code: string;
    message: string;
    details?: unknown;
  };
}

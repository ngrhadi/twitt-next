import { z } from 'zod';

export const loginSchema = z.object({
	username: z.string({ required_error: 'Username must be provided' }),
	password: z.string({ required_error: 'Password must be provided' }),
});

export type LoginFormSchemaType = z.infer<typeof loginSchema>;

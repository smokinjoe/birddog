import z from "zod";

export const AddressSchema = z.object({
  id: z.string(),
  street: z.string().optional(),
  city: z.string(),
  state: z.string(),
  zip: z.number().optional(),
});

export type Address = z.infer<typeof AddressSchema>;

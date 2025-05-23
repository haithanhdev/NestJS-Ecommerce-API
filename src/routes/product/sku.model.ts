import { SKUSchema } from 'src/shared/models/shared-sku.model'
import { z } from 'zod'

export const UpsertSKUBodySchema = SKUSchema.pick({
  value: true,
  price: true,
  stock: true,
  image: true,
}).extend({
  id: z.number().optional(),
})

export type UpsertSKUBodyType = z.infer<typeof UpsertSKUBodySchema>

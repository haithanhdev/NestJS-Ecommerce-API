/*
  Warnings:

  - You are about to drop the column `images` on the `ProductSKUSnapshot` table. All the data in the column will be lost.
  - Added the required column `image` to the `ProductSKUSnapshot` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Order" ALTER COLUMN "shopId" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ProductSKUSnapshot" DROP COLUMN "images",
ADD COLUMN     "image" TEXT NOT NULL;

/*
  Warnings:

  - You are about to drop the column `TotalEmisiones` on the `emisioncategoria` table. All the data in the column will be lost.
  - Added the required column `totalEmisiones` to the `EmisionCategoria` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `emisioncategoria` DROP COLUMN `TotalEmisiones`,
    ADD COLUMN `totalEmisiones` DECIMAL(10, 4) NOT NULL;

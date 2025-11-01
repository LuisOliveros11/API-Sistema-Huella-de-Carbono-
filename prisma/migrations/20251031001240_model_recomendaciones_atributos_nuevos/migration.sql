/*
  Warnings:

  - You are about to drop the `recomendaciones` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE `recomendaciones`;

-- CreateTable
CREATE TABLE `Recomendacion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(255) NOT NULL,
    `descripcion` TEXT NOT NULL,
    `categoria` VARCHAR(255) NOT NULL,
    `dificultad` VARCHAR(255) NOT NULL,
    `preguntaCodigo` VARCHAR(255) NULL,
    `limite` DECIMAL(10, 4) NULL,
    `operador` VARCHAR(10) NULL,
    `activo` BOOLEAN NOT NULL DEFAULT true,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

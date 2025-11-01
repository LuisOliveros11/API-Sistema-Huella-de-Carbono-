-- CreateTable
CREATE TABLE `RecomendacionUsuario` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `usuarioId` INTEGER NOT NULL,
    `recomendacionId` INTEGER NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `RecomendacionUsuario_usuarioId_recomendacionId_key`(`usuarioId`, `recomendacionId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `RecomendacionUsuario` ADD CONSTRAINT `RecomendacionUsuario_usuarioId_fkey` FOREIGN KEY (`usuarioId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RecomendacionUsuario` ADD CONSTRAINT `RecomendacionUsuario_recomendacionId_fkey` FOREIGN KEY (`recomendacionId`) REFERENCES `Recomendacion`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

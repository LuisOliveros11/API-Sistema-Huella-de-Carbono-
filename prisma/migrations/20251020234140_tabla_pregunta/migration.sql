-- CreateTable
CREATE TABLE `Pregunta` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `codigo` VARCHAR(255) NOT NULL,
    `texto` TEXT NOT NULL,
    `unidadMedida` VARCHAR(255) NOT NULL,
    `categoria` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `Pregunta_codigo_key`(`codigo`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

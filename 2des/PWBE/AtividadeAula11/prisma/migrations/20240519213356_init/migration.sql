-- CreateTable
CREATE TABLE `Destino` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(50) NOT NULL,
    `valor` DOUBLE NOT NULL,
    `data` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `Destino_nome_key`(`nome`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `PontosTuristicos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(50) NOT NULL,
    `endereco` VARCHAR(100) NOT NULL,
    `telefone` VARCHAR(20) NOT NULL,
    `valor` DOUBLE NOT NULL,
    `destinoId` INTEGER NOT NULL,

    UNIQUE INDEX `PontosTuristicos_nome_key`(`nome`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Hoteis` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nome` VARCHAR(50) NOT NULL,
    `valor` DOUBLE NOT NULL,
    `avaliacao` INTEGER NOT NULL,
    `email` VARCHAR(191) NULL,
    `site` VARCHAR(100) NULL,
    `destinoId` INTEGER NOT NULL,
    `pontosTuristicosId` INTEGER NOT NULL,

    UNIQUE INDEX `Hoteis_nome_key`(`nome`),
    UNIQUE INDEX `Hoteis_email_key`(`email`),
    UNIQUE INDEX `Hoteis_site_key`(`site`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `PontosTuristicos` ADD CONSTRAINT `PontosTuristicos_destinoId_fkey` FOREIGN KEY (`destinoId`) REFERENCES `Destino`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Hoteis` ADD CONSTRAINT `Hoteis_destinoId_fkey` FOREIGN KEY (`destinoId`) REFERENCES `Destino`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Hoteis` ADD CONSTRAINT `Hoteis_pontosTuristicosId_fkey` FOREIGN KEY (`pontosTuristicosId`) REFERENCES `PontosTuristicos`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

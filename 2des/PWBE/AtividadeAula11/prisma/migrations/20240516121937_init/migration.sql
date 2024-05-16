-- CreateTable
CREATE TABLE `destinos` (
    `nome` VARCHAR(50) NOT NULL,
    `valor` DOUBLE NOT NULL,
    `data` DATETIME(3) NOT NULL,

    UNIQUE INDEX `destinos_nome_key`(`nome`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `pontos_turisticos` (
    `nome` VARCHAR(50) NOT NULL,
    `endereco` VARCHAR(100) NOT NULL,
    `telefone` VARCHAR(20) NOT NULL,
    `valor` DOUBLE NOT NULL,

    UNIQUE INDEX `pontos_turisticos_nome_key`(`nome`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `hoteis` (
    `nome` VARCHAR(50) NOT NULL,
    `valor` DOUBLE NOT NULL,
    `avaliacao` INTEGER NOT NULL,
    `email` VARCHAR(191) NULL,
    `site` VARCHAR(100) NOT NULL,

    UNIQUE INDEX `hoteis_nome_key`(`nome`),
    UNIQUE INDEX `hoteis_email_key`(`email`),
    UNIQUE INDEX `hoteis_site_key`(`site`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

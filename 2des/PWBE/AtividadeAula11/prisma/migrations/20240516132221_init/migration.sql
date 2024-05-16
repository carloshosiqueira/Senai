/*
  Warnings:

  - Added the required column `id` to the `destinos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `hoteis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome_destino` to the `hoteis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `id` to the `pontos_turisticos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome_destino` to the `pontos_turisticos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `destinos` ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `hoteis` ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `nome_destino` VARCHAR(50) NOT NULL,
    MODIFY `site` VARCHAR(100) NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `pontos_turisticos` ADD COLUMN `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `nome_destino` VARCHAR(50) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `pontos_turisticos` ADD CONSTRAINT `pontos_turisticos_nome_destino_fkey` FOREIGN KEY (`nome_destino`) REFERENCES `destinos`(`nome`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `hoteis` ADD CONSTRAINT `hoteis_nome_destino_fkey` FOREIGN KEY (`nome_destino`) REFERENCES `destinos`(`nome`) ON DELETE RESTRICT ON UPDATE CASCADE;

/*
  Warnings:

  - Added the required column `nome_turistico` to the `hoteis` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nome_hotel` to the `pontos_turisticos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `hoteis` ADD COLUMN `nome_turistico` VARCHAR(50) NOT NULL;

-- AlterTable
ALTER TABLE `pontos_turisticos` ADD COLUMN `nome_hotel` VARCHAR(50) NOT NULL;

-- AddForeignKey
ALTER TABLE `hoteis` ADD CONSTRAINT `hoteis_nome_turistico_fkey` FOREIGN KEY (`nome_turistico`) REFERENCES `pontos_turisticos`(`nome`) ON DELETE RESTRICT ON UPDATE CASCADE;

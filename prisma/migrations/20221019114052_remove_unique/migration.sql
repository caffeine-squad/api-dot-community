/*
  Warnings:

  - A unique constraint covering the columns `[cnpj]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- DropIndex
DROP INDEX "User_bloodTypeId_key";

-- DropIndex
DROP INDEX "UserComobidity_comorbidityId_key";

-- DropIndex
DROP INDEX "UserComobidity_userCodUser_key";

-- CreateIndex
CREATE UNIQUE INDEX "User_cnpj_key" ON "User"("cnpj");

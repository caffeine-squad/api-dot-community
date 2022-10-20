-- CreateTable
CREATE TABLE "UserType" (
    "id" SERIAL NOT NULL,
    "accessType" VARCHAR(20) NOT NULL,

    CONSTRAINT "UserType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Address" (
    "id" SERIAL NOT NULL,
    "cep" VARCHAR(10) NOT NULL,
    "address" VARCHAR(100) NOT NULL,
    "number" INTEGER NOT NULL,
    "complement" VARCHAR(10) NOT NULL,
    "district" VARCHAR(10) NOT NULL,
    "city" VARCHAR(10) NOT NULL,
    "uf" VARCHAR(10) NOT NULL,

    CONSTRAINT "Address_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BloodType" (
    "id" SERIAL NOT NULL,
    "description" VARCHAR(4) NOT NULL,

    CONSTRAINT "BloodType_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comorbidity" (
    "id" SERIAL NOT NULL,
    "description" VARCHAR(50) NOT NULL,

    CONSTRAINT "Comorbidity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Organ" (
    "id" SERIAL NOT NULL,
    "description" VARCHAR(50) NOT NULL,
    "organType" CHAR(1) NOT NULL,

    CONSTRAINT "Organ_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "OrganUser" (
    "id" SERIAL NOT NULL,
    "userId" INTEGER NOT NULL,
    "organId" INTEGER NOT NULL,

    CONSTRAINT "OrganUser_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserComobidity" (
    "id" SERIAL NOT NULL,
    "userCodUser" INTEGER,
    "comorbidityId" INTEGER,

    CONSTRAINT "UserComobidity_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "codUser" SERIAL NOT NULL,
    "name" VARCHAR(100) NOT NULL,
    "email" VARCHAR(50) NOT NULL,
    "birthDate" TIMESTAMP(3),
    "cnpj" VARCHAR(14),
    "cellPhone" VARCHAR(15) NOT NULL,
    "password" VARCHAR(20) NOT NULL,
    "userTypeId" INTEGER NOT NULL,
    "addressId" INTEGER,
    "bloodTypeId" INTEGER,

    CONSTRAINT "User_pkey" PRIMARY KEY ("codUser")
);

-- CreateTable
CREATE TABLE "Topic" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(50) NOT NULL,
    "description" TEXT NOT NULL,
    "creationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Topic_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" SERIAL NOT NULL,
    "description" TEXT NOT NULL,
    "creationDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" INTEGER NOT NULL,
    "topicId" INTEGER NOT NULL,

    CONSTRAINT "Comment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "UserComobidity_userCodUser_key" ON "UserComobidity"("userCodUser");

-- CreateIndex
CREATE UNIQUE INDEX "UserComobidity_comorbidityId_key" ON "UserComobidity"("comorbidityId");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_userTypeId_key" ON "User"("userTypeId");

-- CreateIndex
CREATE UNIQUE INDEX "User_addressId_key" ON "User"("addressId");

-- CreateIndex
CREATE UNIQUE INDEX "User_bloodTypeId_key" ON "User"("bloodTypeId");

-- AddForeignKey
ALTER TABLE "OrganUser" ADD CONSTRAINT "OrganUser_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("codUser") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "OrganUser" ADD CONSTRAINT "OrganUser_organId_fkey" FOREIGN KEY ("organId") REFERENCES "Organ"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserComobidity" ADD CONSTRAINT "UserComobidity_userCodUser_fkey" FOREIGN KEY ("userCodUser") REFERENCES "User"("codUser") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserComobidity" ADD CONSTRAINT "UserComobidity_comorbidityId_fkey" FOREIGN KEY ("comorbidityId") REFERENCES "Comorbidity"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_userTypeId_fkey" FOREIGN KEY ("userTypeId") REFERENCES "UserType"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_addressId_fkey" FOREIGN KEY ("addressId") REFERENCES "Address"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_bloodTypeId_fkey" FOREIGN KEY ("bloodTypeId") REFERENCES "BloodType"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Topic" ADD CONSTRAINT "Topic_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("codUser") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("codUser") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Comment" ADD CONSTRAINT "Comment_topicId_fkey" FOREIGN KEY ("topicId") REFERENCES "Topic"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

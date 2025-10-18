-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "planId" TEXT NOT NULL,
    CONSTRAINT "User_planId_fkey" FOREIGN KEY ("planId") REFERENCES "Plan" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Plan" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "maxChatbots" INTEGER NOT NULL,
    "maxDocuments" INTEGER NOT NULL,
    "featuresJson" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "DifyResource" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "localUserId" TEXT NOT NULL,
    "difyResourceId" TEXT NOT NULL,
    "resourceType" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT "DifyResource_localUserId_fkey" FOREIGN KEY ("localUserId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "UserSync" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "localUserId" TEXT NOT NULL,
    "difyUserId" TEXT NOT NULL,
    "difyToken" TEXT NOT NULL,
    "refreshToken" TEXT NOT NULL,
    "lastSynced" DATETIME NOT NULL,
    CONSTRAINT "UserSync_localUserId_fkey" FOREIGN KEY ("localUserId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Plan_name_key" ON "Plan"("name");

-- CreateIndex
CREATE UNIQUE INDEX "UserSync_localUserId_key" ON "UserSync"("localUserId");

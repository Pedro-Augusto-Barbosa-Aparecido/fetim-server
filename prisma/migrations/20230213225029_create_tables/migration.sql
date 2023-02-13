-- CreateTable
CREATE TABLE "supports" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "message" TEXT NOT NULL,
    "requester" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "active" BOOLEAN NOT NULL DEFAULT true
);

-- CreateTable
CREATE TABLE "students" (
    "registration" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "domain_id" TEXT NOT NULL,
    "firebase_id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "photo_url" TEXT NOT NULL,
    "tenant_id" TEXT NOT NULL,
    "username" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "students_firebase_id_key" ON "students"("firebase_id");

-- CreateIndex
CREATE INDEX "students_domain_id_firebase_id_email_registration_idx" ON "students"("domain_id", "firebase_id", "email", "registration");

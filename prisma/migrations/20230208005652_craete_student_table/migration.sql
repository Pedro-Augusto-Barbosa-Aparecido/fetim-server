-- CreateTable
CREATE TABLE "students" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "firebase_id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "photo_url" TEXT NOT NULL,
    "tenant_id" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "students_firebase_id_key" ON "students"("firebase_id");

-- CreateIndex
CREATE INDEX "students_id_firebase_id_idx" ON "students"("id", "firebase_id");

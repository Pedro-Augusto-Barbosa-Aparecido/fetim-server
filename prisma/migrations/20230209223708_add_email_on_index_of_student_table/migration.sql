/*
  Warnings:

  - You are about to drop the column `password` on the `students` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_students" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "firebase_id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "photo_url" TEXT NOT NULL,
    "tenant_id" TEXT NOT NULL,
    "username" TEXT NOT NULL
);
INSERT INTO "new_students" ("email", "firebase_id", "id", "photo_url", "tenant_id", "username") SELECT "email", "firebase_id", "id", "photo_url", "tenant_id", "username" FROM "students";
DROP TABLE "students";
ALTER TABLE "new_students" RENAME TO "students";
CREATE UNIQUE INDEX "students_firebase_id_key" ON "students"("firebase_id");
CREATE INDEX "students_id_firebase_id_email_idx" ON "students"("id", "firebase_id", "email");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

/*
  Warnings:

  - Added the required column `username` to the `students` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_students" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "firebase_id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "photo_url" TEXT NOT NULL,
    "tenant_id" TEXT NOT NULL,
    "username" TEXT NOT NULL
);
INSERT INTO "new_students" ("email", "firebase_id", "id", "password", "photo_url", "tenant_id") SELECT "email", "firebase_id", "id", "password", "photo_url", "tenant_id" FROM "students";
DROP TABLE "students";
ALTER TABLE "new_students" RENAME TO "students";
CREATE UNIQUE INDEX "students_firebase_id_key" ON "students"("firebase_id");
CREATE INDEX "students_id_firebase_id_idx" ON "students"("id", "firebase_id");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

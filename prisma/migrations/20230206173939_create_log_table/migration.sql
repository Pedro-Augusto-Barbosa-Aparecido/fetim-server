-- CreateTable
CREATE TABLE "logs" (
    "jobId" TEXT NOT NULL PRIMARY KEY,
    "active" BOOLEAN NOT NULL,
    "finished" BOOLEAN NOT NULL,
    "inProgress" BOOLEAN NOT NULL,
    "error" TEXT
);

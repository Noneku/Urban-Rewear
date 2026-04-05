-- CreateTable
CREATE TABLE "Article" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "condition" TEXT NOT NULL,
    "size" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "addedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "vintedLink" TEXT NOT NULL,

    CONSTRAINT "Article_pkey" PRIMARY KEY ("id")
);

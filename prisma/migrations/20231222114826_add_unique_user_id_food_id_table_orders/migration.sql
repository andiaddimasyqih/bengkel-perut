/*
  Warnings:

  - A unique constraint covering the columns `[user_id,food_id]` on the table `Orders` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `Orders_user_id_food_id_key` ON `Orders`(`user_id`, `food_id`);

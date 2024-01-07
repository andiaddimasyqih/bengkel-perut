-- AddForeignKey
ALTER TABLE `Orders` ADD CONSTRAINT `Orders_food_id_fkey` FOREIGN KEY (`food_id`) REFERENCES `Foods`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

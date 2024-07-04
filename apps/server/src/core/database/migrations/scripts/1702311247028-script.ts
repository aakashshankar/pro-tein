import { MigrationInterface, QueryRunner } from 'typeorm'

export class Script1702311247028 implements MigrationInterface {
  name = 'Script1702311247028'

  public async up(queryRunner: QueryRunner): Promise<void> {
    try {
      await queryRunner.query(
        `
        INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('d30d53d4-de1c-488d-a56d-d5d3217c9d47', '1Elmira_Gerhold@gmail.com', 'Alex Jones', 'https://i.imgur.com/YfJQV5z.png?id=3', 'cus_67890', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('eb514d71-caa2-4c0e-962a-332b07a14ed0', '8Eugene_DAmore@hotmail.com', 'Chris Lee', 'https://i.imgur.com/YfJQV5z.png?id=10', 'cus_12345', 'deleted', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('6c09591f-42a9-4a45-af80-ca27c8fdda2f', '15Jairo19@hotmail.com', 'Pat Taylor', 'https://i.imgur.com/YfJQV5z.png?id=17', 'cus_12345', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('b8f13e5f-c5e6-48ce-a39f-5ff74346822c', '22Ara_Dickens73@hotmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=24', 'cus_12345', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('92a28586-14c7-4673-b6b2-7c9eb1265d90', '29Elza90@gmail.com', 'Pat Taylor', 'https://i.imgur.com/YfJQV5z.png?id=31', 'cus_12345', 'inactive', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('677c44f4-f8ce-49da-91a0-e18713c4fdec', '36Einar_Hermann@hotmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=38', 'cus_44556', 'pending', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('decc408b-fd9e-4baa-8fd9-e0adc0cbc0ea', '43Frank_Tremblay@gmail.com', 'Alex Jones', 'https://i.imgur.com/YfJQV5z.png?id=45', 'cus_12345', 'deleted', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('73ed78d2-b63f-41c1-8314-2e5e58afbdc7', '50Kylie_Johnston@hotmail.com', 'Jane Smith', 'https://i.imgur.com/YfJQV5z.png?id=52', 'cus_44556', 'active', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "user" ("id", "email", "name", "pictureUrl", "stripeCustomerId", "status", "password") VALUES ('82626ca3-5f7b-48c8-aa2b-8b86d87c09c1', '57Lloyd.Purdy50@gmail.com', 'Pat Taylor', 'https://i.imgur.com/YfJQV5z.png?id=59', 'cus_44556', 'banned', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('3ef3d931-bd54-4bd0-a5df-be7a39c28314', 'Discover a New High Protein Recipe', 'Looking for a high protein meal Try this new recipe', 'Chef Alex', '74Jaqueline2@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=75', 'https://i.imgur.com/YfJQV5z.png?id=76', 'eb514d71-caa2-4c0e-962a-332b07a14ed0');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('1f9bbe49-6019-467c-878a-ea4c2be40193', 'Discover a New High Protein Recipe', 'Your favorite high protein recipe has been updated with new ingredients.', 'Chef Alex', '81Alden.Bednar@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=82', 'https://i.imgur.com/YfJQV5z.png?id=83', '6c09591f-42a9-4a45-af80-ca27c8fdda2f');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('320abd46-ee6c-422c-8a7f-1e31d7e8ecf0', 'New Recipe Alert High Protein Special', 'Discover a delicious new high protein recipe today', 'HealthyEats Admin', '88Kamron38@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=89', 'https://i.imgur.com/YfJQV5z.png?id=90', 'eb514d71-caa2-4c0e-962a-332b07a14ed0');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('7cc51e89-a0f4-4a38-98ff-f349dcd707d4', 'New High Protein Recipe Available', 'A new high protein recipe has been added to our app. Dont miss it', 'Chef Alex', '95Adella55@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=96', 'https://i.imgur.com/YfJQV5z.png?id=97', 'b8f13e5f-c5e6-48ce-a39f-5ff74346822c');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('d0baf321-6cc8-4ffd-a02f-2765e760faf2', 'New High Protein Recipe Available', 'A new high protein recipe has been added to our app. Dont miss it', 'Nutrition Expert', '102Lorine_Gutkowski83@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=103', 'https://i.imgur.com/YfJQV5z.png?id=104', '92a28586-14c7-4673-b6b2-7c9eb1265d90');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('80c1566e-0264-4383-843e-f51e7e8928ee', 'New High Protein Recipe Available', 'Your favorite high protein recipe has been updated with new ingredients.', 'RecipeBot', '109Kiana24@hotmail.com', 'https://i.imgur.com/YfJQV5z.png?id=110', 'https://i.imgur.com/YfJQV5z.png?id=111', '677c44f4-f8ce-49da-91a0-e18713c4fdec');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('ba1a32b2-9035-4752-8fcc-ba542c9ace10', 'Check Out This High Protein Dish', 'Weve added a new high protein recipe to our collection. Check it out now', 'RecipeBot', '116Hyman.Powlowski@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=117', 'https://i.imgur.com/YfJQV5z.png?id=118', '92a28586-14c7-4673-b6b2-7c9eb1265d90');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('23fad20b-0f38-4126-b424-6a11ae68566e', 'Discover a New High Protein Recipe', 'Your favorite high protein recipe has been updated with new ingredients.', 'ProteinPower Team', '123Queenie72@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=124', 'https://i.imgur.com/YfJQV5z.png?id=125', 'd30d53d4-de1c-488d-a56d-d5d3217c9d47');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('b6dd8dbe-1ae5-494d-a074-8e1d8f3282c2', 'Check Out This High Protein Dish', 'A new high protein recipe has been added to our app. Dont miss it', 'RecipeBot', '130Vivien18@gmail.com', 'https://i.imgur.com/YfJQV5z.png?id=131', 'https://i.imgur.com/YfJQV5z.png?id=132', 'decc408b-fd9e-4baa-8fd9-e0adc0cbc0ea');
INSERT INTO "notification" ("id", "title", "message", "senderName", "senderEmail", "senderPictureUrl", "redirectUrl", "userId") VALUES ('ed36411d-cc12-4d5b-aacf-04596938d1e3', 'Check Out This High Protein Dish', 'Your favorite high protein recipe has been updated with new ingredients.', 'ProteinPower Team', '137Arthur_Klocko@yahoo.com', 'https://i.imgur.com/YfJQV5z.png?id=138', 'https://i.imgur.com/YfJQV5z.png?id=139', '82626ca3-5f7b-48c8-aa2b-8b86d87c09c1');

INSERT INTO "recipe" ("id", "title", "description", "instructions", "cookingTime", "nutritionalInfo", "userId") VALUES ('dcad3207-0525-449c-8092-51d8072c18c4', 'Tofu Stir Fry', 'A delicious and healthy grilled chicken salad with a variety of fresh vegetables.', '1. Blend protein powder with fruits and nuts. 2. Serve immediately.', 310, 'Calories 250 Protein 15g Carbs 30g Fat 5g', 'b8f13e5f-c5e6-48ce-a39f-5ff74346822c');
INSERT INTO "recipe" ("id", "title", "description", "instructions", "cookingTime", "nutritionalInfo", "userId") VALUES ('1fbf710a-01dd-4cfb-8d9d-a6aa269a69fa', 'Tofu Stir Fry', 'A delicious and healthy grilled chicken salad with a variety of fresh vegetables.', '1. Grill the chicken. 2. Chop the vegetables. 3. Mix together and serve.', 449, 'Calories 200 Protein 20g Carbs 25g Fat 5g', 'b8f13e5f-c5e6-48ce-a39f-5ff74346822c');
INSERT INTO "recipe" ("id", "title", "description", "instructions", "cookingTime", "nutritionalInfo", "userId") VALUES ('004a2006-ee1b-4a18-8b9c-d96630fdd6b9', 'ProteinPacked Smoothie', 'A hearty bowl of quinoa and black beans perfect for a protein boost.', '1. Blend protein powder with fruits and nuts. 2. Serve immediately.', 702, 'Calories 300 Protein 20g Carbs 30g Fat 10g', 'decc408b-fd9e-4baa-8fd9-e0adc0cbc0ea');
INSERT INTO "recipe" ("id", "title", "description", "instructions", "cookingTime", "nutritionalInfo", "userId") VALUES ('9fc9fd02-6819-40dc-9b0f-ae9f32531b88', 'Greek Yogurt Parfait', 'A flavorful stir fry with tofu and mixed vegetables.', '1. Cook the quinoa. 2. Mix with black beans and vegetables. 3. Serve warm.', 474, 'Calories 400 Protein 25g Carbs 50g Fat 10g', '73ed78d2-b63f-41c1-8314-2e5e58afbdc7');
INSERT INTO "recipe" ("id", "title", "description", "instructions", "cookingTime", "nutritionalInfo", "userId") VALUES ('9c34e34a-b26b-4121-a2e3-5148dbc40afa', 'Grilled Chicken Salad', 'A smoothie loaded with protein powder fruits and nuts.', '1. Stir fry tofu until golden brown. 2. Add vegetables and sauce. 3. Serve hot.', 861, 'Calories 400 Protein 25g Carbs 50g Fat 10g', '92a28586-14c7-4673-b6b2-7c9eb1265d90');
INSERT INTO "recipe" ("id", "title", "description", "instructions", "cookingTime", "nutritionalInfo", "userId") VALUES ('83d6e8c6-c35d-4d20-b221-63c570ba0f21', 'Greek Yogurt Parfait', 'A delicious and healthy grilled chicken salad with a variety of fresh vegetables.', '1. Grill the chicken. 2. Chop the vegetables. 3. Mix together and serve.', 70, 'Calories 250 Protein 15g Carbs 30g Fat 5g', '92a28586-14c7-4673-b6b2-7c9eb1265d90');
INSERT INTO "recipe" ("id", "title", "description", "instructions", "cookingTime", "nutritionalInfo", "userId") VALUES ('ae4063f7-6426-484b-a585-4428269771dc', 'ProteinPacked Smoothie', 'A smoothie loaded with protein powder fruits and nuts.', '1. Grill the chicken. 2. Chop the vegetables. 3. Mix together and serve.', 611, 'Calories 200 Protein 20g Carbs 25g Fat 5g', 'eb514d71-caa2-4c0e-962a-332b07a14ed0');
INSERT INTO "recipe" ("id", "title", "description", "instructions", "cookingTime", "nutritionalInfo", "userId") VALUES ('89c7fe6a-a151-4503-a5e7-bf2ce67d7008', 'Quinoa and Black Bean Bowl', 'A hearty bowl of quinoa and black beans perfect for a protein boost.', '1. Blend protein powder with fruits and nuts. 2. Serve immediately.', 165, 'Calories 400 Protein 25g Carbs 50g Fat 10g', '92a28586-14c7-4673-b6b2-7c9eb1265d90');
INSERT INTO "recipe" ("id", "title", "description", "instructions", "cookingTime", "nutritionalInfo", "userId") VALUES ('a8314759-795b-4c01-9252-58b8ff4633a6', 'Greek Yogurt Parfait', 'A refreshing Greek yogurt parfait with layers of fruit and granola.', '1. Stir fry tofu until golden brown. 2. Add vegetables and sauce. 3. Serve hot.', 129, 'Calories 300 Protein 20g Carbs 30g Fat 10g', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "recipe" ("id", "title", "description", "instructions", "cookingTime", "nutritionalInfo", "userId") VALUES ('4b5adac2-994f-41e4-931a-805a51c6d631', 'Quinoa and Black Bean Bowl', 'A hearty bowl of quinoa and black beans perfect for a protein boost.', '1. Layer Greek yogurt with fruit and granola. 2. Serve chilled.', 771, 'Calories 300 Protein 20g Carbs 30g Fat 10g', 'b8f13e5f-c5e6-48ce-a39f-5ff74346822c');

INSERT INTO "ingredient" ("id", "name", "type") VALUES ('66eccefd-ebbf-43bb-bdf8-34b797c0fcbc', 'Tofu', 'Fish');
INSERT INTO "ingredient" ("id", "name", "type") VALUES ('259fc5b8-636b-4c02-abe3-cc310f8f1828', 'Chicken Breast', 'Fish');
INSERT INTO "ingredient" ("id", "name", "type") VALUES ('4d95fb28-9f05-4b13-b76f-fc513b35a9fc', 'Tofu', 'Plantbased');
INSERT INTO "ingredient" ("id", "name", "type") VALUES ('15b4d76d-caeb-4c35-b28a-0447554f238e', 'Salmon', 'Fish');
INSERT INTO "ingredient" ("id", "name", "type") VALUES ('0ec9adc3-f33e-472d-a803-9586c7c210b5', 'Lentils', 'Dairy');
INSERT INTO "ingredient" ("id", "name", "type") VALUES ('2a2d67c1-0990-4f04-846c-0b0095679550', 'Lentils', 'Fish');
INSERT INTO "ingredient" ("id", "name", "type") VALUES ('1952f5b9-d4af-4aa7-8d5d-3aad87363dcc', 'Tofu', 'Meat');
INSERT INTO "ingredient" ("id", "name", "type") VALUES ('10323449-9b31-40b2-8a53-14447b3756bb', 'Salmon', 'Legume');
INSERT INTO "ingredient" ("id", "name", "type") VALUES ('6b115462-e039-4465-b462-45a6584049e3', 'Tofu', 'Plantbased');
INSERT INTO "ingredient" ("id", "name", "type") VALUES ('cd3a1d58-8198-41aa-9f93-6239087a0f61', 'Greek Yogurt', 'Legume');

INSERT INTO "recipe_ingredient" ("id", "quantity", "unit", "recipeId", "ingredientId") VALUES ('1c75c45e-b2af-4325-9dd9-0038e391274b', 172, 'cups', 'ae4063f7-6426-484b-a585-4428269771dc', '66eccefd-ebbf-43bb-bdf8-34b797c0fcbc');
INSERT INTO "recipe_ingredient" ("id", "quantity", "unit", "recipeId", "ingredientId") VALUES ('069d2d03-0be9-479b-93f1-d8ab46064d53', 923, 'cups', '9c34e34a-b26b-4121-a2e3-5148dbc40afa', '15b4d76d-caeb-4c35-b28a-0447554f238e');
INSERT INTO "recipe_ingredient" ("id", "quantity", "unit", "recipeId", "ingredientId") VALUES ('97da2b3a-6d14-4a1a-86eb-709a9428dea7', 456, 'cups', 'ae4063f7-6426-484b-a585-4428269771dc', '10323449-9b31-40b2-8a53-14447b3756bb');
INSERT INTO "recipe_ingredient" ("id", "quantity", "unit", "recipeId", "ingredientId") VALUES ('2b53cd0d-115c-41f9-900a-316e17215c68', 752, 'ounces', 'dcad3207-0525-449c-8092-51d8072c18c4', '6b115462-e039-4465-b462-45a6584049e3');
INSERT INTO "recipe_ingredient" ("id", "quantity", "unit", "recipeId", "ingredientId") VALUES ('9e78be4d-eb76-4580-aeed-c411a1998e47', 154, 'cups', '89c7fe6a-a151-4503-a5e7-bf2ce67d7008', '6b115462-e039-4465-b462-45a6584049e3');
INSERT INTO "recipe_ingredient" ("id", "quantity", "unit", "recipeId", "ingredientId") VALUES ('f379ab90-a26c-4c29-bf46-d0a8515b9297', 493, 'tablespoons', '4b5adac2-994f-41e4-931a-805a51c6d631', '1952f5b9-d4af-4aa7-8d5d-3aad87363dcc');
INSERT INTO "recipe_ingredient" ("id", "quantity", "unit", "recipeId", "ingredientId") VALUES ('28225ba7-9e0a-4773-bad0-86c01de6dabb', 420, 'grams', '004a2006-ee1b-4a18-8b9c-d96630fdd6b9', '2a2d67c1-0990-4f04-846c-0b0095679550');
INSERT INTO "recipe_ingredient" ("id", "quantity", "unit", "recipeId", "ingredientId") VALUES ('b61be58b-7716-44e3-ad14-c71af4689f3c', 2, 'cups', 'ae4063f7-6426-484b-a585-4428269771dc', '0ec9adc3-f33e-472d-a803-9586c7c210b5');
INSERT INTO "recipe_ingredient" ("id", "quantity", "unit", "recipeId", "ingredientId") VALUES ('ffea59f9-a84b-4044-a9c5-d30cd470f5cd', 736, 'cups', '83d6e8c6-c35d-4d20-b221-63c570ba0f21', '6b115462-e039-4465-b462-45a6584049e3');
INSERT INTO "recipe_ingredient" ("id", "quantity", "unit", "recipeId", "ingredientId") VALUES ('c8216369-ebe0-4d21-83ab-a0fb6df6856e', 767, 'milliliters', 'a8314759-795b-4c01-9252-58b8ff4633a6', '66eccefd-ebbf-43bb-bdf8-34b797c0fcbc');

INSERT INTO "dietary_restriction" ("id", "name") VALUES ('4cbb1a73-a509-4485-b492-aaa8d2499dd2', 'Paleo');
INSERT INTO "dietary_restriction" ("id", "name") VALUES ('ea33a7e9-cfa4-47c7-895e-2bfdee57fe2f', 'Vegan');
INSERT INTO "dietary_restriction" ("id", "name") VALUES ('2cb79f02-d790-4dfd-bfdd-c866e423b1b7', 'GlutenFree');
INSERT INTO "dietary_restriction" ("id", "name") VALUES ('e64dbccd-a6fa-45b2-9c02-c4939f1a1014', 'GlutenFree');
INSERT INTO "dietary_restriction" ("id", "name") VALUES ('4297a4ef-db24-4726-a52d-c9a1f220004a', 'GlutenFree');
INSERT INTO "dietary_restriction" ("id", "name") VALUES ('b30f44ba-311b-45f7-840a-6594a51f1374', 'Vegan');
INSERT INTO "dietary_restriction" ("id", "name") VALUES ('07d9a9b9-8ef2-4cb2-8644-22c9d5a9c8d0', 'DairyFree');
INSERT INTO "dietary_restriction" ("id", "name") VALUES ('db680f57-8d64-4e13-81e1-eb068852ee08', 'Keto');
INSERT INTO "dietary_restriction" ("id", "name") VALUES ('df5f310d-460a-4ade-8f48-b37779c20f51', 'Vegan');
INSERT INTO "dietary_restriction" ("id", "name") VALUES ('c58e5836-ef34-45f9-9305-d49adcf7a8ee', 'Paleo');

INSERT INTO "recipe_dietary_restriction" ("id", "recipeId", "dietaryRestrictionId") VALUES ('14fd8881-8bd3-475d-949c-f8887b9deebc', 'ae4063f7-6426-484b-a585-4428269771dc', 'ea33a7e9-cfa4-47c7-895e-2bfdee57fe2f');
INSERT INTO "recipe_dietary_restriction" ("id", "recipeId", "dietaryRestrictionId") VALUES ('cf26ebc9-d31a-441b-b1db-f9adfe5a2961', '89c7fe6a-a151-4503-a5e7-bf2ce67d7008', 'c58e5836-ef34-45f9-9305-d49adcf7a8ee');
INSERT INTO "recipe_dietary_restriction" ("id", "recipeId", "dietaryRestrictionId") VALUES ('467a4c7d-f663-4b45-9ed6-1643d62761b4', '9c34e34a-b26b-4121-a2e3-5148dbc40afa', '4cbb1a73-a509-4485-b492-aaa8d2499dd2');
INSERT INTO "recipe_dietary_restriction" ("id", "recipeId", "dietaryRestrictionId") VALUES ('39673783-9d1e-4a7b-acfd-a20d041ff003', '4b5adac2-994f-41e4-931a-805a51c6d631', 'c58e5836-ef34-45f9-9305-d49adcf7a8ee');
INSERT INTO "recipe_dietary_restriction" ("id", "recipeId", "dietaryRestrictionId") VALUES ('9b2afa63-b6c9-4b1d-915b-ae6a20e88158', '83d6e8c6-c35d-4d20-b221-63c570ba0f21', 'ea33a7e9-cfa4-47c7-895e-2bfdee57fe2f');
INSERT INTO "recipe_dietary_restriction" ("id", "recipeId", "dietaryRestrictionId") VALUES ('6b393a7b-b9b2-4d82-93b8-87d36eeb111a', 'dcad3207-0525-449c-8092-51d8072c18c4', 'e64dbccd-a6fa-45b2-9c02-c4939f1a1014');
INSERT INTO "recipe_dietary_restriction" ("id", "recipeId", "dietaryRestrictionId") VALUES ('c3f47ec8-dd75-4290-b28f-b50ad3fe1334', '9c34e34a-b26b-4121-a2e3-5148dbc40afa', 'df5f310d-460a-4ade-8f48-b37779c20f51');
INSERT INTO "recipe_dietary_restriction" ("id", "recipeId", "dietaryRestrictionId") VALUES ('cedc3b17-a8ff-45d9-9f4e-439691f0aff4', '4b5adac2-994f-41e4-931a-805a51c6d631', '07d9a9b9-8ef2-4cb2-8644-22c9d5a9c8d0');
INSERT INTO "recipe_dietary_restriction" ("id", "recipeId", "dietaryRestrictionId") VALUES ('5d04cf9c-943d-498e-9332-535587f22de6', '1fbf710a-01dd-4cfb-8d9d-a6aa269a69fa', 'e64dbccd-a6fa-45b2-9c02-c4939f1a1014');
INSERT INTO "recipe_dietary_restriction" ("id", "recipeId", "dietaryRestrictionId") VALUES ('c823d2f7-9f70-48c5-8661-48f8a3b7c7f5', '004a2006-ee1b-4a18-8b9c-d96630fdd6b9', 'e64dbccd-a6fa-45b2-9c02-c4939f1a1014');

INSERT INTO "review" ("id", "rating", "comment", "userId", "recipeId") VALUES ('901248e2-29f1-42d8-a50b-d208537cac20', 336, 'The protein content is great but the taste was lacking.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'dcad3207-0525-449c-8092-51d8072c18c4');
INSERT INTO "review" ("id", "rating", "comment", "userId", "recipeId") VALUES ('38f246e3-a2f3-4854-aadb-1adedd71969a', 823, 'Not my favorite but it was easy to make.', 'decc408b-fd9e-4baa-8fd9-e0adc0cbc0ea', 'dcad3207-0525-449c-8092-51d8072c18c4');
INSERT INTO "review" ("id", "rating", "comment", "userId", "recipeId") VALUES ('55b08da8-cf1e-435c-9161-3c4e40db7a6a', 727, 'Not my favorite but it was easy to make.', 'd30d53d4-de1c-488d-a56d-d5d3217c9d47', 'ae4063f7-6426-484b-a585-4428269771dc');
INSERT INTO "review" ("id", "rating", "comment", "userId", "recipeId") VALUES ('b10eff88-838a-4d02-801d-df6a160ce2f9', 241, 'Perfect for my diet Delicious and nutritious.', 'eb514d71-caa2-4c0e-962a-332b07a14ed0', '004a2006-ee1b-4a18-8b9c-d96630fdd6b9');
INSERT INTO "review" ("id", "rating", "comment", "userId", "recipeId") VALUES ('8a9a310a-4bca-4044-bb44-27595562e72f', 850, 'The protein content is great but the taste was lacking.', 'eb514d71-caa2-4c0e-962a-332b07a14ed0', '83d6e8c6-c35d-4d20-b221-63c570ba0f21');
INSERT INTO "review" ("id", "rating", "comment", "userId", "recipeId") VALUES ('412526ab-487b-44fb-860a-6513ccc734d4', 381, 'It was okay but Ive had better.', '82626ca3-5f7b-48c8-aa2b-8b86d87c09c1', '4b5adac2-994f-41e4-931a-805a51c6d631');
INSERT INTO "review" ("id", "rating", "comment", "userId", "recipeId") VALUES ('da3c49c2-4d36-45f5-a05f-a5b5c6ea8849', 97, 'The protein content is great but the taste was lacking.', '677c44f4-f8ce-49da-91a0-e18713c4fdec', 'ae4063f7-6426-484b-a585-4428269771dc');
INSERT INTO "review" ("id", "rating", "comment", "userId", "recipeId") VALUES ('dc59635d-199d-47d1-a504-2931eeedce2e', 76, 'Perfect for my diet Delicious and nutritious.', '73ed78d2-b63f-41c1-8314-2e5e58afbdc7', '1fbf710a-01dd-4cfb-8d9d-a6aa269a69fa');
INSERT INTO "review" ("id", "rating", "comment", "userId", "recipeId") VALUES ('f3f9d9d7-3f0b-44fb-bd68-7df9cacead2a', 961, 'Perfect for my diet Delicious and nutritious.', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '89c7fe6a-a151-4503-a5e7-bf2ce67d7008');
INSERT INTO "review" ("id", "rating", "comment", "userId", "recipeId") VALUES ('c94ccd78-73cf-41cf-9fd9-32960c065a2d', 954, 'Not my favorite but it was easy to make.', 'eb514d71-caa2-4c0e-962a-332b07a14ed0', '1fbf710a-01dd-4cfb-8d9d-a6aa269a69fa');

INSERT INTO "saved_recipe" ("id", "userId", "recipeId") VALUES ('244b6989-6eff-4d8c-9636-8f16913f8486', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'a8314759-795b-4c01-9252-58b8ff4633a6');
INSERT INTO "saved_recipe" ("id", "userId", "recipeId") VALUES ('ef0fa8b5-5943-479f-b3c5-3e1ec1ea291f', '92a28586-14c7-4673-b6b2-7c9eb1265d90', 'ae4063f7-6426-484b-a585-4428269771dc');
INSERT INTO "saved_recipe" ("id", "userId", "recipeId") VALUES ('b1652a40-2989-49de-8126-e4f6092a1a0a', 'b8f13e5f-c5e6-48ce-a39f-5ff74346822c', '9fc9fd02-6819-40dc-9b0f-ae9f32531b88');
INSERT INTO "saved_recipe" ("id", "userId", "recipeId") VALUES ('6668482f-c63c-4af4-b10d-055b1eb30b1a', 'b8f13e5f-c5e6-48ce-a39f-5ff74346822c', '9c34e34a-b26b-4121-a2e3-5148dbc40afa');
INSERT INTO "saved_recipe" ("id", "userId", "recipeId") VALUES ('c79055ce-dfd8-4e34-9c82-f5d65d404d8b', '82626ca3-5f7b-48c8-aa2b-8b86d87c09c1', '004a2006-ee1b-4a18-8b9c-d96630fdd6b9');
INSERT INTO "saved_recipe" ("id", "userId", "recipeId") VALUES ('d924ef9e-92d2-4178-afc4-75946fde116d', '92a28586-14c7-4673-b6b2-7c9eb1265d90', '9fc9fd02-6819-40dc-9b0f-ae9f32531b88');
INSERT INTO "saved_recipe" ("id", "userId", "recipeId") VALUES ('7a02e1f7-70f7-4c96-9d80-413b815bbf72', 'decc408b-fd9e-4baa-8fd9-e0adc0cbc0ea', '4b5adac2-994f-41e4-931a-805a51c6d631');
INSERT INTO "saved_recipe" ("id", "userId", "recipeId") VALUES ('5bbb6d89-d62c-422c-a3aa-490faa7ac1e8', 'd30d53d4-de1c-488d-a56d-d5d3217c9d47', '9c34e34a-b26b-4121-a2e3-5148dbc40afa');
INSERT INTO "saved_recipe" ("id", "userId", "recipeId") VALUES ('fb7eba43-eaf9-4541-96d7-37bf44fb4c2e', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '004a2006-ee1b-4a18-8b9c-d96630fdd6b9');
INSERT INTO "saved_recipe" ("id", "userId", "recipeId") VALUES ('920365a8-86b6-483e-acf8-1c8c7af9432f', '82626ca3-5f7b-48c8-aa2b-8b86d87c09c1', 'dcad3207-0525-449c-8092-51d8072c18c4');

INSERT INTO "follow" ("id", "followerId", "followeeId") VALUES ('17a3cd67-30a2-4a0a-b678-f2321b720546', 'eb514d71-caa2-4c0e-962a-332b07a14ed0', 'b8f13e5f-c5e6-48ce-a39f-5ff74346822c');
INSERT INTO "follow" ("id", "followerId", "followeeId") VALUES ('087bdb15-60c2-4fd1-b8d3-292152e8c480', '6c09591f-42a9-4a45-af80-ca27c8fdda2f', '677c44f4-f8ce-49da-91a0-e18713c4fdec');
INSERT INTO "follow" ("id", "followerId", "followeeId") VALUES ('a4628458-fbad-4d86-b928-180b5f160ef7', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '82626ca3-5f7b-48c8-aa2b-8b86d87c09c1');
INSERT INTO "follow" ("id", "followerId", "followeeId") VALUES ('b78284cc-4c21-4e69-a712-57f4e0ac6852', '6c09591f-42a9-4a45-af80-ca27c8fdda2f', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "follow" ("id", "followerId", "followeeId") VALUES ('8b6bfef8-7da6-427f-ae8d-b63a08e49458', '92a28586-14c7-4673-b6b2-7c9eb1265d90', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "follow" ("id", "followerId", "followeeId") VALUES ('d2aeb926-3c52-4d88-8de1-d4b72e8b24f3', '677c44f4-f8ce-49da-91a0-e18713c4fdec', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "follow" ("id", "followerId", "followeeId") VALUES ('a6051f7a-6633-4b77-a827-588da730bcbc', 'decc408b-fd9e-4baa-8fd9-e0adc0cbc0ea', 'b8f13e5f-c5e6-48ce-a39f-5ff74346822c');
INSERT INTO "follow" ("id", "followerId", "followeeId") VALUES ('7960525f-3e4b-419e-9aae-87361c03008e', '6c09591f-42a9-4a45-af80-ca27c8fdda2f', 'eb514d71-caa2-4c0e-962a-332b07a14ed0');
INSERT INTO "follow" ("id", "followerId", "followeeId") VALUES ('f692c87c-bc23-4f9a-9a5b-daf5bee08f06', '73ed78d2-b63f-41c1-8314-2e5e58afbdc7', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "follow" ("id", "followerId", "followeeId") VALUES ('3443cff2-d251-4f0e-8c7b-a6388f208f14', '92a28586-14c7-4673-b6b2-7c9eb1265d90', 'b8f13e5f-c5e6-48ce-a39f-5ff74346822c');
    `,
      )
    } catch (error) {
      // ignore
    }
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}

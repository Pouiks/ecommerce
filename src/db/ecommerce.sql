BEGIN;

DROP TABLE IF EXISTS "size", "color", "category","size", "type", "brand","supplier", "user", "product_item","order", "order_have_product","comment" CASCADE;



CREATE TABLE "color" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "hex" TEXT NOT NULL
);

CREATE TABLE "category" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "color_id" INT REFERENCES "color"(id)
);

CREATE TABLE "size" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL
);

CREATE TABLE "type" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL
);

CREATE TABLE "brand"(
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL,
    "adress" TEXT,
    "city" TEXT,
    "email" TEXT,
    "tel" TEXT
);

CREATE TABLE "supplier" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT NOT NULL
);


CREATE TABLE "user" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "name" TEXT,
    "firstName" TEXT,
    "role" TEXT NOT NULL DEFAULT 'consumer',
    "email" TEXT NOT NULL UNIQUE,
    "adress" TEXT,
    "password" TEXT NOT NULL,
    "shippingAdress" TEXT,
    "facturationAdress" TEXT,
    "city" TEXT,
    "country" TEXT,
    "zipCode" TEXT,
    "dataConservation" BOOLEAN NOT NULL DEFAULT false,
    "validatedShippindCart" INT NOT NULL DEFAULT 0
);

CREATE TABLE "product_item" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "reference" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT,
    "type" INT REFERENCES "type"(id),
    "quantity" INT NOT NULL DEFAULT 0,
    "image" TEXT,
    "priceHT" FLOAT,
    "reduction" INT,
    "color_id" INT REFERENCES "color"(id),
    "size_id" INT REFERENCES "size"(id),
    "brand_id" INT REFERENCES "brand"(id),
    "supplier_id" INT REFERENCES "supplier"(id)
);

CREATE TABLE "order" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "reference" TEXT NOT NULL
);

CREATE TABLE "order_have_product" (
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "order_id" INT REFERENCES "order"(id),
    "product_item_id" INT REFERENCES "product_item"(id),
    "quantity" INT NOT NULL DEFAULT 1
);


CREATE TABLE "comment"(
    "id" INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    "content" TEXT NOT NULL,
    "product_id" INT REFERENCES "product_item"(id),
    "user_id" INT REFERENCES "user"(id)
);

COMMIT;
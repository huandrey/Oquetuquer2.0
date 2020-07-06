CREATE TABLE "users" (
  "id" SERIAL PRIMARY KEY,
  "name" text NOT NULL,
  "full_name" text NOT NULL,
  "email" int NOT NULL,
  "phone" text,
  "password" text NOT NULL
);

CREATE TABLE "categories" (
  "id" SERIAL PRIMARY KEY,
  "name" text NOT NULL
);

CREATE TABLE "ads" (
  "id" SERIAL PRIMARY KEY,
  "user_id" int NOT NULL,
  "category_id" int NOT NULL,
  "pagament" text,
  "state" text NOT NULL,
  "city" text NOT NULL,
  "cpf" int,
  "description" text NOT NULL,
  "status" int DEFAULT 1,
  "created_at" timestamp DEFAULT (now()),
  "updated_at" timestamp DEFAULT (now())
);

CREATE TABLE "files" (
  "id" SERIAL PRIMARY KEY,
  "name" text,
  "path" text,
  "product_id" int
);

ALTER TABLE "ads" ADD FOREIGN KEY ("category_id") REFERENCES "categories" ("id");

ALTER TABLE "ads" ADD FOREIGN KEY ("user_id") REFERENCES "users" ("id");

ALTER TABLE "files" ADD FOREIGN KEY ("product_id") REFERENCES "ads" ("product_id");

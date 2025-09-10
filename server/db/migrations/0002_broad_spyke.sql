CREATE TABLE "roles" (
	"created_at" timestamp,
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"permissions" text[] DEFAULT '{}' NOT NULL,
	"updated_at" timestamp
);
--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "role_id" text;--> statement-breakpoint
ALTER TABLE "user" ADD CONSTRAINT "user_role_id_roles_id_fk" FOREIGN KEY ("role_id") REFERENCES "public"."roles"("id") ON DELETE no action ON UPDATE no action;
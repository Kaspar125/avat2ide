import type { BaseSQLiteDatabase } from "drizzle-orm/sqlite-core";
import { sqliteTable, text } from "drizzle-orm/sqlite-core";
import { v4 as uuid } from "uuid";

const stringId = (name: string) =>
	text(name)
		.primaryKey()
		.notNull()
		.$defaultFn(() => uuid());

export const password = sqliteTable("password", {
	id: stringId("id"),
	userId: text("userId")
		.notNull()
		.references(() => user.id),
	password: text("password").notNull(),
});

export const user = sqliteTable("user", {
	id: stringId("id"),
	email: text("email").unique().notNull(),
	fullName: text("full_name").notNull(),
	displayName: text("display_name").notNull(),
});

// TODO-KASPAR täida ära ja võta kasutsusse
export const product = sqliteTable("product", {
	id: stringId("id"),
});
// TODO-KASPAR täida ära ja võta kasutsusse

export const contact = sqliteTable("contact", {
	id: stringId("id"),
});

const schema = {
	password,
	user,
	product,
	contact,
};
// TODO-KASPAR kui andmeväljad olemas jooksuta npm run generate:migration
// TODO-KASPAR uuri https://orm.drizzle.team/docs/get-started-sqlite
export default schema;

export type DB = BaseSQLiteDatabase<"async" | "sync", unknown, typeof schema>;

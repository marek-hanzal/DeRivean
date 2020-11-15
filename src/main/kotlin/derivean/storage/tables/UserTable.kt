package derivean.storage.tables

import org.jetbrains.exposed.dao.id.UUIDTable

object UserTable : UUIDTable("user") {
	val name = varchar("name", 128).uniqueIndex()
	val login = varchar("login", 128).uniqueIndex()
	val password = varchar("password", 128).nullable()
	val site = varchar("site", 128).nullable()
	val ticket = uuid("ticket").uniqueIndex().nullable()
}

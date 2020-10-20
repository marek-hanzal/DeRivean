package derivean.server.user.entities

import org.jetbrains.exposed.dao.id.UUIDTable

object UserTable : UUIDTable("user") {
	val name = varchar("name", 128).uniqueIndex()
	val login = varchar("login", 128).uniqueIndex()
	val password = varchar("password", 128).nullable()
	val token = varchar("token", 128).uniqueIndex().nullable()
	val site = varchar("site", 128).default("internal")
}

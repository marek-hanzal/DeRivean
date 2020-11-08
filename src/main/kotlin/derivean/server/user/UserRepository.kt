package derivean.server.user

import derivean.game.attribute.Attribute
import derivean.lib.container.IContainer
import derivean.lib.storage.ilike
import derivean.server.attribute.AbstractAttributeRepository
import derivean.server.user.entities.User
import derivean.server.user.entities.UserTable
import org.jetbrains.exposed.sql.or
import java.util.*

class UserRepository(container: IContainer) : AbstractAttributeRepository<User, UserTable>(User, UserTable, container) {
	override val attributeRepository by container.lazy<UserAttributeRepository>()

	fun findByLogin(login: String) = entity.find { table.login eq login }.first()

	fun findByTicket(ticket: UUID) = entity.find { table.ticket eq ticket }.first()

	fun search(search: String, limit: Int = 100) = try {
		val uuid = UUID.fromString(search)
		entity.find { table.login ilike "%${search}%" or (table.name ilike "%${search}%" or (table.id eq uuid)) }.limit(limit)
	} catch (e: IllegalArgumentException) {
		entity.find { table.login ilike "%${search}%" or (table.name ilike "%${search}%") }.limit(limit)
	}

	fun useTemplate(template: String, target: User) {
		attributes(target.id, find(template).attributes.map { Attribute(it.name, it.value) }.toTypedArray(), replace = false)
	}
}

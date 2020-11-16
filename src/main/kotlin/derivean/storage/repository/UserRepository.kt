package derivean.storage.repository

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRepository
import derivean.lib.storage.ilike
import derivean.storage.entities.User
import derivean.storage.tables.UserTable
import org.jetbrains.exposed.sql.SortOrder
import org.jetbrains.exposed.sql.or
import java.util.*

class UserRepository(container: IContainer) : AbstractRepository<User, UserTable>(User, UserTable, container) {
	private val attributeRepository: AttributeRepository by container.lazy()

	fun findByLogin(login: String) = entity.find { table.login eq login }.first()

	fun findByTicket(ticket: UUID) = entity.find { table.ticket eq ticket }.first()

	fun search(search: String, limit: Int = 100) = try {
		val uuid = UUID.fromString(search)
		entity.find { table.login ilike "%${search}%" or (table.name ilike "%${search}%" or (table.id eq uuid)) }.orderBy(table.name to SortOrder.ASC).limit(limit)
	} catch (e: IllegalArgumentException) {
		entity.find { table.login ilike "%${search}%" or (table.name ilike "%${search}%") }.orderBy(table.name to SortOrder.ASC).limit(limit)
	}

	fun useTemplate(template: String, target: User) {
		TODO("Update attribute template!")
//		attributeRepository.attributes(target.attributes, find(template).attributes.map { derivean.rest.common.Attribute(it.name, it.value) }.toTypedArray(), replace = false)
	}
}

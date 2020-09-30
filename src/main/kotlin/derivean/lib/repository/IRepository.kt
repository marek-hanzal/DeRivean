package derivean.lib.repository

import org.jetbrains.exposed.dao.UUIDEntity
import java.util.*

interface IRepository<T : UUIDEntity> {
	fun update(uuid: String, block: T.() -> T) = block(getById(uuid))

	fun getById(uuid: String) = getById(UUID.fromString(uuid))

	fun getById(uuid: UUID): T

	fun delete(uuid: String) = delete(UUID.fromString(uuid))

	fun delete(uuid: UUID)
}

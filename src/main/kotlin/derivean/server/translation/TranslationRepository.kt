package derivean.server.translation

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRepository
import derivean.lib.storage.ilike
import derivean.server.translation.entities.Translation
import derivean.server.translation.entities.TranslationTable
import org.jetbrains.exposed.sql.or
import java.util.*

class TranslationRepository(container: IContainer) : AbstractRepository<Translation, TranslationTable>(Translation, TranslationTable, container) {
	fun search(search: String, limit: Int = 100) = try {
		val uuid = UUID.fromString(search)
		entity.find { table.language ilike "%${search}%" or (table.label ilike "%${search}%") or (table.text ilike "%${search}%") or (table.id eq uuid) }.limit(limit)
	} catch (e: IllegalArgumentException) {
		entity.find { table.language ilike "%${search}%" or (table.label ilike "%${search}%") or (table.text ilike "%${search}%") }.limit(limit)
	}
}

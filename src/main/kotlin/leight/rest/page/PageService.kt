package leight.rest.page

import io.ktor.application.*
import leight.container.AbstractService
import leight.container.IContainer
import leight.mapper.IMapper
import leight.repository.EntityFilter
import leight.repository.IRelationRepository
import leight.repository.IRepository
import leight.storage.IStorage
import org.jetbrains.exposed.dao.UUIDEntity
import java.util.*
import kotlin.math.floor

class PageService(container: IContainer) : AbstractService(container), IPageService {
	private val storage: IStorage by container.lazy()

	override suspend fun <T : UUIDEntity> page(call: ApplicationCall, repository: IRepository<T>, mapper: IMapper<T, out Any>, filter: EntityFilter<T>?) = page(call, { repository.total(filter) }, mapper, { page, limit, block ->
		repository.page(page, limit, block, filter)
	})

	override suspend fun <T : UUIDEntity> page(call: ApplicationCall, relation: UUID, repository: IRelationRepository<T>, mapper: IMapper<T, out Any>, filter: EntityFilter<T>?) =
		page(call, { repository.total(relation, filter) }, mapper, { page, limit, block ->
			repository.page(relation, page, limit, block, filter)
		})

	fun <T : UUIDEntity> page(call: ApplicationCall, total: () -> Long, mapper: IMapper<T, out Any>, block: (Int, Int, (T) -> Unit) -> Unit) = storage.read {
		PageIndex.build {
			this.total = total()
			this.size = limit(call)
			try {
				val page = call.parameters["page"]?.toInt() ?: 0
				if (page < 0) {
					throw InvalidPageException("Page must be a positive number")
				}
				try {
					val limit = call.parameters["limit"]?.toInt() ?: 100
					if (limit < 5) {
						throw InvalidLimitException("Limit must be a positive number and higher than 5")
					}
					if (limit > 100) {
						throw InvalidLimitException("Limit cannot be higher than 100")
					}
					val pages = floor(this.total.toDouble() / limit.toDouble()).toInt()
					if (page > pages) {
						throw InvalidPageException("Out of range: page [$page] cannot be higher than [$pages]")
					}
					block(page, limit) { entity ->
						items.add(mapper.map(entity))
					}
				} catch (e: NumberFormatException) {
					throw InvalidLimitException("Limit must be a number.")
				} catch (e: Exception) {
					throw PageException(e.message ?: "You're making me suffering from huge pain!", e)
				}
			} catch (e: NumberFormatException) {
				throw InvalidPageException("Page must be a number")
			}
		}
	}

	override fun limit(call: ApplicationCall, default: Int) = if (call.parameters.contains("limit")) call.parameters["limit"]!!.toInt() else default
}

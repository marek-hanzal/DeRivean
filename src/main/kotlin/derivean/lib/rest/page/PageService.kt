package derivean.lib.rest.page

import derivean.lib.container.AbstractService
import derivean.lib.container.IContainer
import derivean.lib.mapper.IMapper
import derivean.lib.repository.IRepository
import derivean.lib.rest.badRequest
import derivean.lib.storage.IStorage
import io.ktor.application.*
import io.ktor.response.*
import kotlin.math.floor

class PageService(container: IContainer) : AbstractService(container), IPageService {
	private val storage: IStorage by container.lazy()

	override suspend fun page(call: ApplicationCall, repository: IRepository<*>, mapper: IMapper<Any, out Any>) {
		try {
			call.respond(storage.read {
				PageIndex.build {
					this.total = repository.total()
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
							val pages = floor(repository.total().toDouble() / limit.toDouble()).toInt()
							if (page > pages) {
								throw InvalidPageException("Out of range: page [$page] cannot be higher than [$pages]")
							}
							repository.page(page, limit) { entity ->
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
			})
		} catch (e: Exception) {
			call.badRequest(e.message ?: "You're making me suffering from huge pain!")
		}
	}

	override fun limit(call: ApplicationCall, default: Int) = if (call.parameters.contains("limit")) call.parameters["limit"]!!.toInt() else default
}

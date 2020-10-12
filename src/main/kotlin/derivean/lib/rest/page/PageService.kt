package derivean.lib.rest.page

import derivean.lib.container.AbstractService
import derivean.lib.container.IContainer
import derivean.lib.repository.IRepository
import derivean.lib.rest.Href
import derivean.lib.rest.badRequest
import derivean.lib.server.ILinkGenerator
import derivean.lib.storage.IStorage
import io.ktor.application.*
import io.ktor.response.*
import kotlin.math.ceil
import kotlin.math.floor

class PageService(container: IContainer) : AbstractService(container), IPageService {
	private val storage: IStorage by container.lazy()
	private val linkGenerator: ILinkGenerator by container.lazy()

	override suspend fun pages(call: ApplicationCall, href: String, repository: IRepository<*>) {
		if (!href.contains("{page}")) {
			throw PageException("Missing {page} in Pages href [$href].")
		}
		call.respond(storage.read {
			PagesIndex.build {
				val link = linkGenerator.link(href).toString()
				this.total = repository.total()
				this.limit = limit(call)
				repeat(ceil(this.total.toDouble() / this.limit.toDouble()).toInt()) { this.hrefs.add(Href(link.replace("{page}", "$it"))) }
			}
		})
	}

	override suspend fun page(call: ApplicationCall, href: String, repository: IRepository<*>) {
		if (!href.contains("{id}")) {
			throw PageException("Missing {id} in Page href [$href].")
		}
		try {
			call.respond(storage.read {
				PageIndex.build(linkGenerator) {
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
							repository.page(page, limit) { uuid ->
								item {
									this.id = uuid.toString()
									this.href = href.replace("{id}", this.id)
								}
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

	suspend fun page(
		call: ApplicationCall,
		orderByMap: OrderByMap,
		count: () -> Int,
		items: (limit: Int, offset: Int, orderByPair: OrderByPair) -> List<ListItem>
	) {
		try {
			val page = call.parameters["page"]?.toInt() ?: 0
			if (page < 0) {
				return call.badRequest("Page must be a positive number")
			}
			try {
				val limit = call.parameters["limit"]?.toInt() ?: 100
				if (limit < 5) {
					return call.badRequest("Limit must be a positive number and higher than 5")
				}
				if (limit > 100) {
					return call.badRequest("Limit cannot be higher than 100")
				}
				call.respond(storage.transaction {
					val total = count()
					val pages = floor(total.toDouble() / limit.toDouble()).toInt()
					if (page > pages) {
						throw Exception("Out of range: page [$page] cannot be higher than [$pages]")
					}
//					PageIndex(items(limit, page * limit, orderByMap.getOrElse(call.parameters["order-by"]) {
//						throw RestException("Unsupported order-by parameter [${call.parameters["order-by"]}].")
//					}))
				})
			} catch (e: NumberFormatException) {
				call.badRequest("Limit must be a number")
			} catch (e: Exception) {
				call.badRequest(e.message ?: "You're making me suffering from huge pain!")
			}
		} catch (e: NumberFormatException) {
			call.badRequest("Page must be a number")
		}
	}
}

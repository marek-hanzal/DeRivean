package derivean.lib.rest.page

import derivean.lib.container.AbstractService
import derivean.lib.container.IContainer
import derivean.lib.repository.IRepository
import derivean.lib.rest.Href
import derivean.lib.rest.RestException
import derivean.lib.rest.badRequest
import derivean.lib.server.ILinkGenerator
import derivean.lib.storage.IStorage
import io.ktor.application.*
import io.ktor.response.*
import org.jetbrains.exposed.dao.UUIDTable
import org.jetbrains.exposed.sql.selectAll
import kotlin.math.ceil
import kotlin.math.floor

class PageService(container: IContainer) : AbstractService(container), IPageService {
	private val storage: IStorage by container.lazy()
	private val linkGenerator: ILinkGenerator by container.lazy()

	override fun pages(href: String, limit: Int, repository: IRepository<*>) = PagesIndex.build {
		val link = linkGenerator.link(href).toString()
		this.total = repository.total()
		this.limit = limit
		repeat(ceil(this.total.toDouble() / this.limit.toDouble()).toInt()) { this.hrefs.add(Href(link.replace("{page}", "$it"))) }
	}

	override suspend fun pagesIndex(call: ApplicationCall, href: String, repository: IRepository<*>) {
		call.respond(storage.read {
			pages("/player/page/{page}", limit(call), repository)
		})
	}

	override fun limit(call: ApplicationCall, default: Int) = if (call.parameters.contains("limit")) call.parameters["limit"]!!.toInt() else default

	override suspend fun page(
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
					PageIndex(items(limit, page * limit, orderByMap.getOrElse(call.parameters["order-by"]) {
						throw RestException("Unsupported order-by parameter [${call.parameters["order-by"]}].")
					}))
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

	override suspend fun page(
		call: ApplicationCall,
		href: String,
		orderByMap: OrderByMap,
		table: UUIDTable
	) = page(call, orderByMap, { table.slice(table.id).selectAll().count() }, { limit, page, orderByPair ->
		table.slice(table.id).selectAll().orderBy(orderByPair).limit(limit, page).map { ListItem(it[table.id], linkGenerator.link(href.replace("{id}", it[table.id].toString()))) }
	})
}

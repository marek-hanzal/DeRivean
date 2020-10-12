package derivean.lib.rest.page

import derivean.lib.repository.IRepository
import io.ktor.application.*
import io.ktor.http.*
import org.jetbrains.exposed.dao.UUIDTable
import org.jetbrains.exposed.sql.Column
import org.jetbrains.exposed.sql.SortOrder

typealias OrderByPair = Pair<Column<*>, SortOrder>
typealias OrderByMap = Map<String?, OrderByPair>

/**
 * Service used for (clever) paging support over collections.
 */
interface IPageService {
	fun pages(href: String, limit: Int, repository: IRepository<*>): PagesIndex

	/**
	 * respond with page index; href should contain **{page}** placeholder being replaced by a page number
	 */
	suspend fun index(
		call: ApplicationCall,
		href: String,
		table: UUIDTable
	)

	/**
	 * respond with page index; href should contain **{page}** placeholder being replaced by a page number
	 */
	suspend fun index(
		call: ApplicationCall,
		href: Url,
		table: UUIDTable
	) = index(call, href.toString(), table)

	/**
	 * respond with the given page - return item hrefs and timestamp
	 */
	suspend fun page(
		call: ApplicationCall,
		orderByMap: OrderByMap,
		count: () -> Int,
		items: (limit: Int, offset: Int, orderByPair: OrderByPair) -> List<ListItem>
	)

	/**
	 * respond with the given page - return item hrefs and timestamp; href should contain **{id}** placeholder for
	 * proper link generation
	 */
	suspend fun page(
		call: ApplicationCall,
		href: String,
		orderByMap: OrderByMap,
		table: UUIDTable
	)
}

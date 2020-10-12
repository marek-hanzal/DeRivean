package derivean.lib.rest.page

import derivean.lib.repository.IRepository
import io.ktor.application.*
import org.jetbrains.exposed.sql.Column
import org.jetbrains.exposed.sql.SortOrder

typealias OrderByPair = Pair<Column<*>, SortOrder>
typealias OrderByMap = Map<String?, OrderByPair>

/**
 * Service used for (clever) paging support over collections.
 */
interface IPageService {
	/**
	 * Response with Pages info object.
	 */
	suspend fun pages(call: ApplicationCall, href: String, repository: IRepository<*>)

	/**
	 * Extract page limit from the application call.
	 */
	fun limit(call: ApplicationCall, default: Int = 100): Int
}

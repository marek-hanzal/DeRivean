package derivean.lib.rest.page

import derivean.lib.mapper.IMapper
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
	suspend fun page(call: ApplicationCall, repository: IRepository<*>, mapper: IMapper<Any, out Any>)

	/**
	 * Extract page limit from the application call.
	 */
	fun limit(call: ApplicationCall, default: Int = 100): Int
}

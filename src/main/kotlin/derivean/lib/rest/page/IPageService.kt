package derivean.lib.rest.page

import derivean.lib.mapper.IMapper
import derivean.lib.repository.IRelationRepository
import derivean.lib.repository.IRepository
import io.ktor.application.*
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.sql.Column
import org.jetbrains.exposed.sql.SortOrder
import java.util.*

typealias OrderByPair = Pair<Column<*>, SortOrder>
typealias OrderByMap = Map<String?, OrderByPair>

/**
 * Service used for (clever) paging support over collections.
 */
interface IPageService {
	suspend fun <T : UUIDEntity> page(call: ApplicationCall, repository: IRepository<T>, mapper: IMapper<T, out Any>)

	suspend fun <T : UUIDEntity> page(call: ApplicationCall, relation: UUID, repository: IRelationRepository<T>, mapper: IMapper<T, out Any>)

	suspend fun <T : UUIDEntity> page(call: ApplicationCall, relation: String, repository: IRelationRepository<T>, mapper: IMapper<T, out Any>) = page(call, UUID.fromString(relation), repository, mapper)

	/**
	 * Extract page limit from the application call.
	 */
	fun limit(call: ApplicationCall, default: Int = 100): Int
}

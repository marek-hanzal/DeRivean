package leight.rest.page

import io.ktor.application.*
import leight.mapper.IMapper
import leight.repository.EntityFilter
import leight.repository.IRelationRepository
import leight.repository.IRepository
import org.jetbrains.exposed.dao.UUIDEntity
import java.util.*

/**
 * Service used for (clever) paging support over collections.
 */
interface IPageService {
	suspend fun <T : UUIDEntity> page(call: ApplicationCall, repository: IRepository<T>, mapper: IMapper<T, out Any>, filter: EntityFilter<T>? = null): PageIndex<Any>

	suspend fun <T : UUIDEntity> page(call: ApplicationCall, relation: UUID, repository: IRelationRepository<T>, mapper: IMapper<T, out Any>, filter: EntityFilter<T>? = null): PageIndex<Any>

	suspend fun <T : UUIDEntity> page(call: ApplicationCall, relation: String, repository: IRelationRepository<T>, mapper: IMapper<T, out Any>, filter: EntityFilter<T>? = null) =
		page(call, UUID.fromString(relation), repository, mapper, filter)
}

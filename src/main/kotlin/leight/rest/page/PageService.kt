package leight.rest.page

import io.ktor.application.*
import io.ktor.request.*
import kotlinx.coroutines.runBlocking
import leight.container.AbstractService
import leight.container.IContainer
import leight.mapper.IMapper
import leight.repository.*
import leight.storage.IStorage
import org.jetbrains.exposed.dao.UUIDEntity
import java.util.*

class PageService(container: IContainer) : AbstractService(container), IPageService {
	private val storage: IStorage by container.lazy()

	override suspend fun <T : UUIDEntity> page(call: ApplicationCall, repository: IRepository<T>, mapper: IMapper<T, out Any>, filter: EntityFilter<T>?) = page(call, { repository.total(filter) }, mapper, { paging, block ->
		repository.page(paging, block, filter)
	})

	override suspend fun <T : UUIDEntity> page(call: ApplicationCall, relation: UUID, repository: IRelationRepository<T>, mapper: IMapper<T, out Any>, filter: EntityFilter<T>?) =
		page(call, { repository.total(relation, filter) }, mapper, { paging, block ->
			repository.page(relation, paging, block, filter)
		})

	fun <T : UUIDEntity> page(call: ApplicationCall, total: () -> Long, mapper: IMapper<T, out Any>, block: (Paging, (T) -> Unit) -> Unit) = storage.read {
		PageIndex.build {
			try {
				this.total = total()
				this.size = limit(call)
				block(runBlocking { call.receive<Paging>().validate(this@build.total) }) { entity -> items.add(mapper.map(entity)) }
			} catch (e: Exception) {
				throw PageException(e.message ?: "You're making me suffering from huge pain!", e)
			}
		}
	}

	override fun limit(call: ApplicationCall, default: Int) = if (call.parameters.contains("limit")) call.parameters["limit"]!!.toInt() else default
}

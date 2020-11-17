package derivean.rest.root.building.endpoint

import derivean.lib.container.IContainer
import derivean.lib.mapper.AbstractMapper
import derivean.lib.storage.EntityUUID
import derivean.lib.utils.asIso
import derivean.rest.common.FetchAttribute
import derivean.rest.root.AbstractFetchEndpoint
import derivean.storage.entities.AttributeEntity
import derivean.storage.entities.BuildingEntity
import derivean.storage.repository.BuildingRepository
import io.ktor.routing.*
import io.ktor.util.*
import org.jetbrains.exposed.sql.SizedCollection
import org.jetbrains.exposed.sql.SizedIterable
import org.joda.time.DateTime
import org.joda.time.Duration
import kotlin.properties.Delegates

@KtorExperimentalAPI
class FetchEndpoint(container: IContainer) : AbstractFetchEndpoint(container) {
	private val fetchMapper: FetchMapper by container.lazy()
	private val buildingRepository: BuildingRepository by container.lazy()

	override fun install(routing: Routing) = fetch(
		routing,
		"/api/root/building",
		"root.building",
		fetchMapper,
		buildingRepository,
	)
}

class FetchMapper(container: IContainer) : AbstractMapper<BuildingEntity, FetchMapper.Fetch>(container) {
	override fun map(item: BuildingEntity) = Fetch.build {
		this.id = item.id
		this.kingdom = item.kingdom.id
		this.user = item.kingdom.user.id
		this.name = item.name
		this.description = item.description
		this.built = item.built
		this.claim = item.claim
		this.attributes = item.attributes
	}

	data class Fetch(
		val id: String,
		val kingdom: String,
		val user: String,
		val name: String,
		val description: String?,
		val built: String?,
		val isBuilt: Boolean,
		val remainingBuildTime: Long?,
		val claim: String?,
		val attributes: List<FetchAttribute>,
	) {
		companion object {
			inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
		}

		class Builder {
			lateinit var id: EntityUUID
			lateinit var kingdom: EntityUUID
			lateinit var user: EntityUUID
			lateinit var name: String
			var description: String? = null
			var built: DateTime? = null
			var isBuilt by Delegates.notNull<Boolean>()
			var claim: DateTime? = null
			var attributes: SizedIterable<AttributeEntity> = SizedCollection()

			fun build() = Fetch(
				id.toString(),
				kingdom.toString(),
				user.toString(),
				name,
				description,
				built?.asIso(),
				built?.isBeforeNow ?: false,
				built?.let { Duration(DateTime.now(), it).standardSeconds },
				claim?.asIso(),
				attributes.map { FetchAttribute.build(it) },
			)
		}
	}
}

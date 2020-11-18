package derivean.rest.game.building.endpoint

import derivean.rest.common.FetchAttribute
import derivean.rest.game.AbstractFetchEndpoint
import derivean.storage.entities.AttributeEntity
import derivean.storage.entities.BuildingEntity
import derivean.storage.repository.BuildingRepository
import io.ktor.routing.*
import io.ktor.util.*
import leight.container.IContainer
import leight.mapper.AbstractMapper
import leight.storage.EntityUUID
import leight.utils.asIso
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
		"/api/game/building",
		"game.building",
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
		this.build = item.build
		this.isBuilt = item.isBuilt()
		this.claim = item.claim
		this.attributes = item.attributes
	}

	data class Fetch(
		val id: String,
		val kingdom: String,
		val user: String,
		val name: String,
		val description: String?,
		val build: String?,
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
			var build: DateTime? = null
			var isBuilt by Delegates.notNull<Boolean>()
			var claim: DateTime? = null
			var attributes: SizedIterable<AttributeEntity> = SizedCollection()

			fun build() = Fetch(
				id.toString(),
				kingdom.toString(),
				user.toString(),
				name,
				description,
				build?.asIso(),
				isBuilt,
				build?.let { Duration(DateTime.now(), it).standardSeconds },
				claim?.asIso(),
				attributes.map { FetchAttribute.build(it) },
			)
		}
	}
}

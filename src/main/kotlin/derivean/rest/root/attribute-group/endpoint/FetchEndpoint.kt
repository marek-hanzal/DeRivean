package derivean.rest.root.`attribute-group`.endpoint

import derivean.rest.root.AbstractFetchEndpoint
import derivean.storage.entities.AttributeGroupEntity
import derivean.storage.repository.AttributeGroupRepository
import io.ktor.routing.*
import io.ktor.util.*
import leight.container.IContainer
import leight.mapper.AbstractMapper
import leight.storage.EntityUUID

@KtorExperimentalAPI
class FetchEndpoint(container: IContainer) : AbstractFetchEndpoint(container) {
	private val fetchMapper: FetchMapper by container.lazy()
	private val attributeGroupRepository: AttributeGroupRepository by container.lazy()

	override fun install(routing: Routing) = fetch(
		routing,
		"/api/root/attribute-group",
		"root.attribute-group",
		fetchMapper,
		attributeGroupRepository,
	)
}

class FetchMapper(container: IContainer) : AbstractMapper<AttributeGroupEntity, FetchMapper.Fetch>(container) {
	override fun map(item: AttributeGroupEntity) = Fetch.build {
		this.id = item.id
		this.name = item.name
		this.description = item.description
	}

	data class Fetch(
		val id: String,
		val name: String,
		val description: String?,
	) {
		companion object {
			inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
		}

		class Builder {
			lateinit var id: EntityUUID
			lateinit var name: String
			var description: String? = null

			fun build() = Fetch(
				id.toString(),
				name,
				description,
			)
		}
	}
}

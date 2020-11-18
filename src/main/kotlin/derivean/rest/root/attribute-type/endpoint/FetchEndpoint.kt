package derivean.rest.root.`attribute-type`.endpoint

import derivean.rest.root.AbstractFetchEndpoint
import derivean.storage.entities.AttributeTypeEntity
import derivean.storage.repository.AttributeTypeRepository
import io.ktor.routing.*
import io.ktor.util.*
import leight.container.IContainer
import leight.mapper.AbstractMapper
import leight.storage.EntityUUID

@KtorExperimentalAPI
class FetchEndpoint(container: IContainer) : AbstractFetchEndpoint(container) {
	private val fetchMapper: FetchMapper by container.lazy()
	private val attributeTypeRepository: AttributeTypeRepository by container.lazy()

	override fun install(routing: Routing) = fetch(
		routing,
		"/api/root/attribute-type",
		"root.attribute-type",
		fetchMapper,
		attributeTypeRepository,
	)
}

class FetchMapper(container: IContainer) : AbstractMapper<AttributeTypeEntity, FetchMapper.Fetch>(container) {
	override fun map(item: AttributeTypeEntity) = Fetch.build {
		this.id = item.id
		this.group = item.group.id
		this.name = item.name
		this.description = item.description
	}

	data class Fetch(
		val id: String,
		val group: String,
		val name: String,
		val description: String?,
	) {
		companion object {
			inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
		}

		class Builder {
			lateinit var id: EntityUUID
			lateinit var group: EntityUUID
			lateinit var name: String
			var description: String? = null

			fun build() = Fetch(
				id.toString(),
				group.toString(),
				name,
				description,
			)
		}
	}
}

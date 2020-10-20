package derivean.server.entity.rest.mapper

import derivean.lib.container.IContainer
import derivean.lib.http.ILinkGenerator
import derivean.lib.mapper.AbstractMapper
import derivean.lib.storage.EntityUUID
import derivean.server.entity.entities.Entity

class EntityFetchMapper(container: IContainer) : AbstractMapper<Entity, EntityFetchMapper.Fetch>(container) {
	private val linkGenerator: ILinkGenerator by container.lazy()

	override fun map(item: Entity) = Fetch.build(linkGenerator) {
		this.id = item.id
		this.name = item.name
		this.ancestor = item.ancestor
		for (attribute in item.attributes) {
			attributes.add(Attribute(attribute.name, attribute.value))
		}
	}

	data class Fetch(
		val name: String,
		val id: String,
		val attributes: List<Attribute>,
		val ancestor: Ancestor?,
	) {
		companion object {
			inline fun build(linkGenerator: ILinkGenerator, block: Builder.() -> Unit) = Builder(linkGenerator).apply(block).build()
		}

		class Builder(private val linkGenerator: ILinkGenerator) {
			lateinit var id: EntityUUID
			lateinit var name: String
			val attributes = mutableListOf<Attribute>()
			var ancestor: Entity? = null

			fun build() = Fetch(
				name,
				id.toString(),
				attributes,
				ancestor?.let { Ancestor(ancestor!!.name, ancestor!!.id.toString(), linkGenerator.link("/entity/${ancestor!!.id}").toString()) },
			)
		}
	}

	data class Ancestor(
		val name: String,
		val id: String,
		val href: String,
	)

	data class Attribute(
		val name: String,
		val value: Double,
	)
}

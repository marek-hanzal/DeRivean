package derivean.rest.common

import derivean.storage.entities.AttributeGroupEntity
import java.util.*

data class FetchAttributeGroup(
	val id: UUID,
	val name: String,
) {
	companion object {
		fun build(attributeGroupEntity: AttributeGroupEntity) = Builder(attributeGroupEntity).build()
	}

	class Builder(val attributeGroupEntity: AttributeGroupEntity) {
		fun build() = FetchAttributeGroup(
			attributeGroupEntity.id.value,
			attributeGroupEntity.name,
		)
	}
}

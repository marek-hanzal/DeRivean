package derivean.rest.common

import derivean.storage.entities.AttributeTypeEntity
import java.util.*

data class FetchAttributeType(
	val id: UUID,
	val group: FetchAttributeGroup,
	val name: String,
) {
	companion object {
		fun build(attributeTypeEntity: AttributeTypeEntity) = Builder(attributeTypeEntity).build()
	}

	class Builder(val attributeTypeEntity: AttributeTypeEntity) {
		fun build() = FetchAttributeType(
			attributeTypeEntity.id.value,
			FetchAttributeGroup.build(attributeTypeEntity.group),
			attributeTypeEntity.name,
		)
	}
}

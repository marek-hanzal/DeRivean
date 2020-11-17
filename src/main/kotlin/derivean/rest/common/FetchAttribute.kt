package derivean.rest.common

import derivean.storage.entities.AttributeEntity

data class FetchAttribute(
	val type: FetchAttributeType,
	val value: Double,
) {
	companion object {
		fun build(attributeEntity: AttributeEntity) = Builder(attributeEntity).build()
	}

	class Builder(val attributeEntity: AttributeEntity) {
		fun build() = FetchAttribute(
			FetchAttributeType.build(attributeEntity.type),
			attributeEntity.value
		)
	}
}

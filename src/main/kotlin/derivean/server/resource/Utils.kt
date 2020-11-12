package derivean.server.resource

import derivean.server.attribute.EntityWithAttributesType

fun <T : EntityWithAttributesType> limitOf(resource: String): Pair<String, (T) -> Double?> = resource to { entity -> entity.attributes.firstOrNull { it.name == resource }?.value }

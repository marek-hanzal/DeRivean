package derivean.server.attribute

import derivean.server.attribute.entities.Attribute
import org.jetbrains.exposed.sql.SizedIterable

fun SizedIterable<Attribute>.valueOf(name: String) = this.firstOrNull { attribute -> attribute.name == name }?.value

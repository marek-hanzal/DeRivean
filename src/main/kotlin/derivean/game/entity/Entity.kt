package derivean.game.entity

import derivean.game.attribute.Attribute
import derivean.game.attribute.Attributes

/**
 * An Entity is responsible for holding Attributes and equipping items.
 */
data class Entity(val name: String, val attributes: Attributes) {
	override fun toString() = name

	companion object {
		inline fun build(name: String, block: Builder.() -> Unit) = Builder(name).apply(block).build()
		fun build(name: String) = Builder(name).build()
	}

	class Builder(val name: String) {
		private var attributes = Attributes()

		fun attributes(vararg values: Attribute) {
			attributes = Attributes(*values)
		}

		fun build() = Entity(
			name,
			attributes,
		)
	}
}

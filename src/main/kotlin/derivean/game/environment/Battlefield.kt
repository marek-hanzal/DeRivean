package derivean.game.environment

import derivean.game.entity.Relationships
import derivean.game.entity.Spirit
import derivean.game.entity.Spirits

class Battlefield(spirits: Spirits, relationships: Relationships) : Environment(spirits, relationships) {
	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder {
		var spirits = Spirits()
		var relationships = Relationships(spirits)

		fun spirit(spirit: Spirit) {
			spirits.add(spirit)
		}

		fun build() = Battlefield(
			spirits,
			relationships
		)
	}
}

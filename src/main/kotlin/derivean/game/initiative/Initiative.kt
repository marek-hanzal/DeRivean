package derivean.game.initiative

import derivean.game.attribute.common.currentInitiative
import derivean.game.entity.Entities
import derivean.game.formation.Formations

class Initiative : AbstractInitiative() {
	override fun resolve(formations: Formations) = formations.map.maxByOrNull { it.value.initiative() }?.value ?: throw NoInitiativeException("Cannot resolve initiative from Formations.")

	override fun resolve(entities: Entities) = entities.map.maxByOrNull { it.value.currentInitiative() }?.value ?: throw NoInitiativeException("Cannot resolve initiative from Formation.")

	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder {
		fun build() = Initiative()
	}
}

package derivean.game.initiative

import derivean.game.attribute.common.currentInitiative
import derivean.game.formation.Formation
import derivean.game.formation.Formations
import derivean.game.formation.Member

class Initiative : AbstractInitiative() {
	override fun resolve(formations: Formations) = formations.map.maxByOrNull { it.value.initiative() }?.value ?: throw NoInitiativeException("Cannot resolve initiative from Formations.")

	override fun resolve(formation: Formation) = formation.list.maxByOrNull { it.currentInitiative() }?.let { Member(it, formation) } ?: throw NoInitiativeException("Cannot resolve initiative from Formation.")

	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder {
		fun build() = Initiative()
	}
}

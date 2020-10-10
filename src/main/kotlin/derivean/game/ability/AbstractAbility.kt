package derivean.game.ability

import derivean.game.attribute.Attributes
import derivean.game.attribute.common.isNotAlive
import derivean.game.entity.Entity
import derivean.game.formation.Formation
import derivean.game.formation.Formations
import derivean.game.selector.Targets

typealias RankCallback = (attributes: Attributes, target: Entity, entity: Entity, formation: Formation) -> Double

abstract class AbstractAbility(override val ability: String, val attributes: Attributes) : IAbility {
	fun attributes(entity: Entity, block: (Attributes) -> Unit) = block(attributes(entity))

	fun attributes(entity: Entity) = Attributes.from(entity.attributes, attributes)

	override fun use(entity: Entity, targets: List<Entity>) {
		attributes(entity) { attributes ->
			for (target in targets) {
				useOn(attributes, entity, target)
			}
		}
	}

	open fun useOn(attributes: Attributes, entity: Entity, target: Entity) {
	}

	open fun limit(attributes: Attributes) = 1.0

	fun rank(entity: Entity, formations: Formations, rank: RankCallback) = Targets.build {
		attributes(entity) { attributes ->
			this.limit = limit(attributes)
			formations.entities { target, formation ->
				target {
					this.entity = entity
					this.target = target
					this.ability = this@AbstractAbility
					this.rank = when {
						target.isNotAlive() -> {
							0.0
						}
						formation.hasMember(entity) -> {
							0.0
						}
						else -> {
							rank(attributes, target, entity, formation)
						}
					}
				}
			}
		}
	}
}

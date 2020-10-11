package derivean.game.ability

import derivean.game.attribute.Attributes
import derivean.game.attribute.common.haste
import derivean.game.attribute.common.isAlive
import derivean.game.attribute.common.isDead
import derivean.game.entity.Entity
import derivean.game.formation.Formation
import derivean.game.formation.Formations
import derivean.game.log.ILog
import derivean.game.selector.Targets
import derivean.game.timeline.ITimeline
import kotlin.math.max

typealias RankCallback = (attributes: Attributes, target: Entity, entity: Entity, formation: Formation) -> Double

abstract class AbstractAbility(
	override val ability: String,
	val attributes: Attributes,
) : IAbility {
	override fun toString() = ability

	fun attributes(entity: Entity, block: (Attributes) -> Unit) = block(attributes(entity))

	fun attributes(entity: Entity) = Attributes.from(entity.attributes, attributes)

	override fun use(entity: Entity, target: Entity, timeline: ITimeline, log: ILog) {
		attributes(entity) { attributes ->
			timeline.entry {
				/**
				 * Take Entity's Haste and multiply it with this ability's default Haste.
				 */
				time = max(0.0, attributes.haste()) * time(attributes)
				log.record {
					log("[$entity] will use [${this@AbstractAbility}] on [$target] in [${if (time == 0.0) "now" else time}].")
				}
				resolve {
					/**
					 * Check if source entity is still alive as it could be killed before an Ability is used.
					 */
					if (entity.isAlive()) {
						resolve(attributes, entity, target, log)
					}
				}
			}
		}
	}

	open fun resolve(attributes: Attributes, entity: Entity, target: Entity, log: ILog) {
	}

	open fun limit(attributes: Attributes) = 1.0

	open fun time(attributes: Attributes) = 1.0

	fun rank(entity: Entity, formations: Formations, rank: RankCallback) = Targets.build {
		attributes(entity) { attributes ->
			this.limit = limit(attributes)
			formations.entities { target, formation ->
				target {
					this.entity = entity
					this.target = target
					this.ability = this@AbstractAbility
					this.rank = when {
						target.isDead() -> {
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

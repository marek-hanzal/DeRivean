package derivean.game.controller

import derivean.game.attribute.common.initiative
import derivean.game.entity.EntitiesMap
import derivean.game.initiative.IInitiative
import derivean.game.mutator.TargetsList

/**
 * Battle controller is responsible for evaluating all the stuff related to
 * (automated) battle of two teams.
 *
 * Use case of this controller is when a player is just looking on (live) battle.
 */
class BattleController : AbstractController() {
	override fun loop(initiative: IInitiative, entitiesMap: EntitiesMap) {
		val entity = initiative.resolve(entitiesMap)

		/**
		 * When an Entity gets a round, reset initiative to zero to give another entities a chance.
		 *
		 * After all entities are without an Initiative, new round should start (and initiative should
		 * be recomputed).
		 */
		entity.attributes.set(0.0.initiative())

		TargetsList.build {
			for (ability in entity.abilities) {
				for (entities in entitiesMap) {
					addTargets(ability.targets(entity, entities))
				}
			}
		}.getTargets()?.evaluate()
	}
}

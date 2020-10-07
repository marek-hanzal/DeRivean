package derivean.game.mutator

import derivean.game.entity.Entity

interface IMutator {
	fun mutate(entity: Entity)
}

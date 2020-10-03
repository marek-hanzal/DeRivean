package derivean.game.mutator

import derivean.game.entity.Entities

class Mutation(val mutator: Mutator, val targets: Entities, val block: Mutation.() -> Unit) {
	fun evaluate() {
		block(this)
	}

	companion object {
		inline fun build(mutator: Mutator, targets: Entities, block: Builder.() -> Unit) = Builder(mutator, targets).apply(block).build()
	}

	class Builder(private val mutator: Mutator, private val targets: Entities) {
		lateinit var mutation: Mutation.() -> Unit

		fun mutation(block: Mutation.() -> Unit) {
			mutation = block
		}

		fun build() = Mutation(
			mutator,
			targets,
			mutation,
		)
	}
}

package derivean.game.mutator

import derivean.game.formation.Formation

class Mutation(val mutator: Mutator, val formation: Formation, val block: Mutation.() -> Unit) {
	fun evaluate() {
		block(this)
	}

	companion object {
		inline fun build(mutator: Mutator, targets: Formation, block: Builder.() -> Unit) = Builder(mutator, targets).apply(block).build()
	}

	class Builder(private val mutator: Mutator, private val targets: Formation) {
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

package derivean.game.mutator

import derivean.game.entity.Entities

class Mutation(val mutator: Mutator, val entities: Entities, val block: Mutation.() -> Unit) {
	fun evaluate() {
		block(this)
	}

	companion object {
		inline fun build(mutator: Mutator, entities: Entities, block: Builder.() -> Unit) = Builder(mutator, entities).apply(block).build()
	}

	class Builder(private val mutator: Mutator, private val entities: Entities) {
		lateinit var mutation: Mutation.() -> Unit

		fun mutation(block: Mutation.() -> Unit) {
			mutation = block
		}

		fun build() = Mutation(
			mutator,
			entities,
			mutation,
		)
	}
}

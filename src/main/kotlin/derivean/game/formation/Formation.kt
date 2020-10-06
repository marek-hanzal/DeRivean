package derivean.game.formation

/**
 * Formation of a team of friendly Entities.
 */
class Formation {
	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder {
		fun build() = Formation(
		)
	}
}

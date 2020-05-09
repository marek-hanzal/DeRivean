package derivean.game.entity

import derivean.game.role.IRole

data class Spirit(val name: String, val role: IRole, val entity: Entity) {
	override fun toString(): String {
		return "Spirit(name='$name')"
	}

	operator fun plusAssign(effect: Entity) {
		entity += effect
	}

	companion object {
		inline fun build(name: String, entity: Entity, block: Builder.() -> Unit) = Builder(name, entity).apply(block).build()
	}

	class Builder(val name: String, val entity: Entity) {
		lateinit var role: IRole

		fun build() = Spirit(name, role, entity)
	}
}

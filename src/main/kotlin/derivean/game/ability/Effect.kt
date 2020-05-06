package derivean.game.ability

import derivean.game.entity.Entity
import derivean.game.entity.Spirit

data class Effect(private val spirit: Spirit, private val effect: Entity) : IEffect {
	override fun apply() {
		spirit.entity += effect
	}

	override fun getSpirit(): Spirit = spirit

	override fun getEffect(): Entity = effect
}

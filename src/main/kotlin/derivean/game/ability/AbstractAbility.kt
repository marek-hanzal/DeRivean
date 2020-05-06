package derivean.game.ability

abstract class AbstractAbility(private val id: String, private val description: String) : IAbility {
	override fun getId(): String = id

	override fun getDescription(): String = description
}

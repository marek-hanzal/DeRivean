package derivean.game.attribute

typealias Value = Pair<String, Double>

data class Attribute(val name: String, val value: Double)

fun Value.attribute() = Attribute(this.first, this.second)

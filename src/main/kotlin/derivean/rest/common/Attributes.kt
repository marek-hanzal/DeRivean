package derivean.rest.common

class Attributes : ArrayList<Attribute>() {
	fun toDistinctArray() = distinctBy { it.type }.map { it.name to it.value }.toTypedArray()
}

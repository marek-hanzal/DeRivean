package derivean.rest.common

class Attributes : ArrayList<Attribute>() {
	fun toDistinctArray() = distinctBy { it.attribute }.map { it.attribute to it.value }.toTypedArray()
}

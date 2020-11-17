package derivean.rest.common

import java.util.*

class Attributes : ArrayList<Pair<UUID, Double>>() {
	fun toDistinctArray() = distinctBy { it.first }.toTypedArray()
}

package derivean.rest.common

import derivean.storage.repository.AttributeRepository
import java.util.*

class Attributes : ArrayList<AttributeRepository.AttributeData>() {
	fun toDistinctArray() = distinctBy { it.type }.toTypedArray()
}

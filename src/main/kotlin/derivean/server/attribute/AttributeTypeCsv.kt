package derivean.server.attribute

import com.github.doyaaaaaken.kotlincsv.dsl.csvReader
import com.vhl.blackmo.grass.dsl.grass

@ExperimentalStdlibApi
object AttributeTypeCsv {
	fun load(resource: String) = grass<Item>().harvest(csvReader().readAllWithHeader(javaClass.classLoader.getResourceAsStream(resource)!!))

	data class Item(
		val group: String,
		val name: String,
		val description: String?,
	)
}

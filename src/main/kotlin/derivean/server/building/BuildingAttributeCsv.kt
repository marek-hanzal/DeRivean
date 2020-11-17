package derivean.server.building

import com.github.doyaaaaaken.kotlincsv.dsl.csvReader
import com.vhl.blackmo.grass.dsl.grass

@ExperimentalStdlibApi
object BuildingAttributeCsv {
	fun load(resource: String) = grass<Item>().harvest(csvReader().readAllWithHeader(javaClass.classLoader.getResourceAsStream(resource)!!))

	data class Item(
		val kingdom: String,
		val building: String,
		val group: String,
		val type: String,
		val value: Double,
	)
}

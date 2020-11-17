package derivean.server.kingdom

import com.github.doyaaaaaken.kotlincsv.dsl.csvReader
import com.vhl.blackmo.grass.dsl.grass

@ExperimentalStdlibApi
object KingdomAttributeCsv {
	fun load(resource: String) = grass<Item>().harvest(csvReader().readAllWithHeader(javaClass.classLoader.getResourceAsStream(resource)!!))

	data class Item(
		val kingdom: String,
		val group: String,
		val type: String,
		val value: Double,
	)
}

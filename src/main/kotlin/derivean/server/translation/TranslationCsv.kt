package derivean.server.translation

import com.github.doyaaaaaken.kotlincsv.dsl.csvReader
import com.vhl.blackmo.grass.dsl.grass

@ExperimentalStdlibApi
object TranslationCsv {
	fun translations(resource: String) = grass<Item>().harvest(csvReader().readAllWithHeader(javaClass.classLoader.getResourceAsStream(resource)!!))

	data class Item(
		val id: String,
		val language: String,
		val namespace: String,
		val label: String,
		val text: String,
	)
}

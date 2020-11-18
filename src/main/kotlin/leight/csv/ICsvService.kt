package leight.csv

import com.github.doyaaaaaken.kotlincsv.dsl.csvReader
import com.vhl.blackmo.grass.dsl.grass
import leight.config.IConfigurable

interface ICsvService : IConfigurable {
	fun import(resource: String)
}

@ExperimentalStdlibApi
inline fun <reified T> ICsvService.load(resource: String, block: (T) -> Unit) = grass<T>().harvest(csvReader().readAllWithHeader(javaClass.classLoader.getResourceAsStream(resource)!!)).forEach(block)

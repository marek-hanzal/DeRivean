package derivean.server.translation

import derivean.storage.repository.TranslationRepository
import leight.container.IContainer
import leight.csv.AbstractCsvService
import leight.csv.load

@ExperimentalStdlibApi
class TranslationCsv(container: IContainer) : AbstractCsvService(container) {
	private val translationRepository: TranslationRepository by container.lazy()

	override fun import(resource: String) = load<Item>(resource) {
		translationRepository.create {
			language = it.language
			namespace = it.namespace
			label = it.label
			text = it.text
		}
	}

	data class Item(
		val language: String,
		val namespace: String,
		val label: String,
		val text: String,
	)
}

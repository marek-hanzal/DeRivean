package derivean.server.translation

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRepository
import derivean.server.translation.entities.Translation
import derivean.server.translation.entities.TranslationTable

class TranslationRepository(container: IContainer) : AbstractRepository<Translation, TranslationTable>(Translation, TranslationTable, container)

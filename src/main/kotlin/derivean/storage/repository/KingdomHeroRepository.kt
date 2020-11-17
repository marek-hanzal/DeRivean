package derivean.storage.repository

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRelationRepository
import derivean.storage.entities.HeroEntity
import derivean.storage.tables.HeroTable

class KingdomHeroRepository(container: IContainer) : AbstractRelationRepository<HeroEntity, HeroTable>(HeroEntity, HeroTable, HeroTable.kingdom, container)

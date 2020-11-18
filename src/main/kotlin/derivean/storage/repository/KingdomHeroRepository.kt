package derivean.storage.repository

import derivean.storage.entities.HeroEntity
import derivean.storage.tables.HeroTable
import leight.container.IContainer
import leight.repository.AbstractRelationRepository

class KingdomHeroRepository(container: IContainer) : AbstractRelationRepository<HeroEntity, HeroTable>(HeroEntity, HeroTable, HeroTable.kingdom, container)

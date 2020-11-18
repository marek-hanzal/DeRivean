package derivean.server.upgrade.u2020_11_16.storage.repository

import derivean.server.upgrade.u2020_11_16.storage.entities.HeroEntity
import derivean.server.upgrade.u2020_11_16.storage.tables.HeroTable
import leight.container.IContainer
import leight.repository.AbstractRelationRepository

class KingdomHeroRepository(container: IContainer) : AbstractRelationRepository<HeroEntity, HeroTable>(HeroEntity, HeroTable, HeroTable.kingdom, container)

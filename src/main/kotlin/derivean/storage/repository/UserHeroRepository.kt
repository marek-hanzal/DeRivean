package derivean.storage.repository

import derivean.storage.entities.HeroEntity
import derivean.storage.tables.HeroTable
import leight.container.IContainer
import leight.repository.AbstractRelationRepository

class UserHeroRepository(container: IContainer) : AbstractRelationRepository<HeroEntity, HeroTable>(HeroEntity, HeroTable, HeroTable.user, container)

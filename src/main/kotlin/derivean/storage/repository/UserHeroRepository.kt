package derivean.storage.repository

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRelationRepository
import derivean.storage.entities.Hero
import derivean.storage.tables.HeroTable

class UserHeroRepository(container: IContainer) : AbstractRelationRepository<Hero, HeroTable>(Hero, HeroTable, HeroTable.user, container)

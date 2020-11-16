package derivean.storage.repository

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRelationRepository
import derivean.server.upgrade.u2020_11_16.storage.tables.HeroTable
import derivean.storage.entities.Hero

class UserHeroRepository(container: IContainer) : AbstractRelationRepository<Hero, HeroTable>(Hero, HeroTable, HeroTable.user, container)

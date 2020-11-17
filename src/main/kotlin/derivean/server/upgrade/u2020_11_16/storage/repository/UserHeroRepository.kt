package derivean.server.upgrade.u2020_11_16.storage.repository

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRelationRepository
import derivean.server.upgrade.u2020_11_16.storage.entities.HeroEntity
import derivean.server.upgrade.u2020_11_16.storage.tables.HeroTable

class UserHeroRepository(container: IContainer) : AbstractRelationRepository<HeroEntity, HeroTable>(HeroEntity, HeroTable, HeroTable.user, container)

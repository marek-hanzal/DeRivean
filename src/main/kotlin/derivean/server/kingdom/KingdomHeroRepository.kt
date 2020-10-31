package derivean.server.kingdom

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRelationRepository
import derivean.server.hero.entities.Hero
import derivean.server.hero.entities.HeroTable

class KingdomHeroRepository(container: IContainer) : AbstractRelationRepository<Hero, HeroTable>(Hero, HeroTable, HeroTable.kingdom, container)

package derivean.server.hero

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRepository
import derivean.server.hero.entities.Hero
import derivean.server.hero.entities.HeroTable

class HeroRepository(container: IContainer) : AbstractRepository<Hero, HeroTable>(Hero, HeroTable, container)

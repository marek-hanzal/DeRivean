package derivean.server.hero

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRepository
import derivean.server.hero.entities.HeroAttribute
import derivean.server.hero.entities.HeroAttributeTable

class HeroAttributeRepository(container: IContainer) : AbstractRepository<HeroAttribute, HeroAttributeTable>(HeroAttribute, HeroAttributeTable, container)

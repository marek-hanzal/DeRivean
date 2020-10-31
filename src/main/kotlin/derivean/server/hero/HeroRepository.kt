package derivean.server.hero

import derivean.lib.container.IContainer
import derivean.server.attribute.AbstractAttributeRepository
import derivean.server.hero.entities.Hero
import derivean.server.hero.entities.HeroTable

class HeroRepository(container: IContainer) : AbstractAttributeRepository<Hero, HeroTable>(Hero, HeroTable, container) {
	override val attributeRepository by container.lazy<HeroAttributeRepository>()
}

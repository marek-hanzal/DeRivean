package derivean.rest.root

import derivean.rest.root.`attribute-group`.AttributeGroupHttpModule
import derivean.rest.root.`attribute-type`.AttributeTypeHttpModule
import derivean.rest.root.building.BuildingHttpModule
import derivean.rest.root.common.CommonHttpModule
import derivean.rest.root.hero.HeroHttpModule
import derivean.rest.root.kingdom.KingdomHttpModule
import derivean.rest.root.server.ServerHttpModule
import derivean.rest.root.translation.TranslationHttpModule
import derivean.rest.root.user.UserHttpModule
import io.ktor.routing.*
import io.ktor.util.*
import leight.container.IContainer
import leight.http.AbstractHttpModule

@KtorExperimentalAPI
class RootHttpModule(container: IContainer) : AbstractHttpModule(container) {
	override fun install(routing: Routing) {
		modules(
			routing,
			CommonHttpModule::class,
			AttributeGroupHttpModule::class,
			AttributeTypeHttpModule::class,
			KingdomHttpModule::class,
			HeroHttpModule::class,
			BuildingHttpModule::class,
			UserHttpModule::class,
			ServerHttpModule::class,
			TranslationHttpModule::class,
		)
	}
}

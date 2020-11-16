package derivean.rest.root

import derivean.lib.container.IContainer
import derivean.lib.http.AbstractHttpModule
import derivean.rest.root.`attribute-group`.AttributeGroupHttpModule
import derivean.rest.root.building.BuildingHttpModule
import derivean.rest.root.common.CommonHttpModule
import derivean.rest.root.hero.HeroHttpModule
import derivean.rest.root.kingdom.KingdomHttpModule
import derivean.rest.root.server.ServerHttpModule
import derivean.rest.root.translation.TranslationHttpModule
import derivean.rest.root.user.UserHttpModule
import io.ktor.routing.*
import io.ktor.util.*

@KtorExperimentalAPI
class RootHttpModule(container: IContainer) : AbstractHttpModule(container) {
	override fun install(routing: Routing) {
		modules(
			routing,
			CommonHttpModule::class,
			AttributeGroupHttpModule::class,
			KingdomHttpModule::class,
			HeroHttpModule::class,
			BuildingHttpModule::class,
			UserHttpModule::class,
			ServerHttpModule::class,
			TranslationHttpModule::class,
		)
	}
}

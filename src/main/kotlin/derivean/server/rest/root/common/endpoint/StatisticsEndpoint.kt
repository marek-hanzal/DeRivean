package derivean.server.rest.root.common.endpoint

import derivean.lib.container.IContainer
import derivean.lib.rest.AbstractActionEndpoint
import derivean.lib.rest.resolve
import io.ktor.application.*
import io.ktor.routing.*

class StatisticsEndpoint(container: IContainer) : AbstractActionEndpoint(container) {
	private val statisticMapper: StatisticMapper by container.lazy()

	override fun install(routing: Routing) {
		"/api/root/statistics".let { url ->
			discovery {
				this.link = url
				this.name = "root.statistics"
				this.description = "Some interesting statistic data from the server."
			}
			routing.get(url) {
				call.resolve(statisticMapper.resolve(Unit))
			}
		}
	}
}

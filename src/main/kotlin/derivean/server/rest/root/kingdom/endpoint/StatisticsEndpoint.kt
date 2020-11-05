package derivean.server.rest.root.kingdom.endpoint

import derivean.lib.container.IContainer
import derivean.lib.mapper.AbstractActionMapper
import derivean.lib.rest.*
import derivean.server.kingdom.KingdomBuildingRepository
import derivean.server.kingdom.KingdomHeroRepository
import io.ktor.application.*
import io.ktor.routing.*
import java.util.*

class StatisticsEndpoint(container: IContainer) : AbstractActionEndpoint(container) {
	private val statisticMapper: StatisticsMapper by container.lazy()

	override fun install(routing: Routing) {
		"/api/root/kingdom/{kingdom}/statistics".let { url ->
			discovery {
				this.link = url
				this.name = "root.kingdom.statistics"
				this.description = "Various interesting statistics on the Kingdom"
			}
			routing.get(url) {
				call.resolve(statisticMapper.resolve(StatisticsMapper.Request(call.parameters["kingdom"]!!)))
			}
		}
	}
}

class StatisticsMapper(container: IContainer) : AbstractActionMapper<StatisticsMapper.Request, Response<out Any>>(container) {
	private val kingdomBuildingRepository: KingdomBuildingRepository by container.lazy()
	private val kingdomHeroRepository: KingdomHeroRepository by container.lazy()

	override fun resolve(item: Request) = try {
		storage.read {
			val uuid = UUID.fromString(item.user)
			ok(
				Statistics(
					kingdomBuildingRepository.total(uuid),
					kingdomHeroRepository.total(uuid),
				)
			)
		}
	} catch (e: IllegalArgumentException) {
		logger.error(e.message, e)
		badRequest("Invalid UUID supplied!")
	} catch (e: Throwable) {
		logger.error(e.message, e)
		internalServerError(ValidationResponse.build {
			message = "Some ugly internal server error happened!"
		})
	}

	data class Request(
		val user: String,
	)

	data class Statistics(
		val buildings: Long,
		val heroes: Long,
	)
}

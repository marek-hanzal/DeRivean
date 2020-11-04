package derivean.server.rest.root.user.endpoint

import derivean.lib.container.IContainer
import derivean.lib.mapper.AbstractActionMapper
import derivean.lib.rest.*
import derivean.server.user.UserKingdomRepository
import io.ktor.application.*
import io.ktor.routing.*
import java.util.*

class StatisticsEndpoint(container: IContainer) : AbstractActionEndpoint(container) {
	private val statisticMapper: StatisticsMapper by container.lazy()

	override fun install(routing: Routing) {
		"/api/root/user/{user}/statistics".let { url ->
			discovery {
				this.link = url
				this.name = "root.user.statistics"
				this.description = "Various interesting statistics on the user"
			}
			routing.get(url) {
				call.resolve(statisticMapper.resolve(StatisticsMapper.Request(call.parameters["user"]!!)))
			}
		}
	}
}

class StatisticsMapper(container: IContainer) : AbstractActionMapper<StatisticsMapper.Request, Response<out Any>>(container) {
	private val userKingdomRepository: UserKingdomRepository by container.lazy()

	override fun resolve(item: Request) = try {
		storage.read {
			ok(
				Statistics(
					userKingdomRepository.total(UUID.fromString(item.user)),
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
		val kingdoms: Long,
	)
}
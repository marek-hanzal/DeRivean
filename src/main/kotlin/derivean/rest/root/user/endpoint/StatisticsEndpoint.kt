package derivean.rest.root.user.endpoint

import derivean.storage.repository.UserBuildingRepository
import derivean.storage.repository.UserHeroRepository
import derivean.storage.repository.UserKingdomRepository
import io.ktor.application.*
import io.ktor.auth.*
import io.ktor.routing.*
import io.ktor.util.*
import leight.container.IContainer
import leight.http.withAnyRole
import leight.mapper.AbstractActionMapper
import leight.rest.AbstractActionEndpoint
import leight.rest.Response
import leight.rest.ok
import leight.rest.resolve
import java.util.*

@KtorExperimentalAPI
class StatisticsEndpoint(container: IContainer) : AbstractActionEndpoint(container) {
	private val statisticMapper: StatisticsMapper by container.lazy()

	override fun install(routing: Routing) {
		"/api/root/user/{user}/statistics".let { url ->
			discovery {
				this.link = url
				this.name = "root.user.statistics"
				this.description = "Various interesting statistics on the user"
			}
			routing.authenticate {
				withAnyRole("root") {
					get(url) {
						call.resolve(statisticMapper.resolve(StatisticsMapper.Request(call.parameters["user"]!!)))
					}
				}
			}
		}
	}
}

class StatisticsMapper(container: IContainer) : AbstractActionMapper<StatisticsMapper.Request, Response<out Any>>(container) {
	private val userKingdomRepository: UserKingdomRepository by container.lazy()
	private val userBuildingRepository: UserBuildingRepository by container.lazy()
	private val userHeroRepository: UserHeroRepository by container.lazy()

	override fun resolve(item: Request) = storage.read {
		val uuid = UUID.fromString(item.user)
		ok(
			Statistics(
				userKingdomRepository.total(uuid),
				userBuildingRepository.total(uuid),
				userHeroRepository.total(uuid),
			)
		)
	}

	data class Request(
		val user: String,
	)

	data class Statistics(
		val kingdoms: Long,
		val buildings: Long,
		val heroes: Long,
	)
}

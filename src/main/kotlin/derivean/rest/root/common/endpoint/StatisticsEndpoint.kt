package derivean.rest.root.common.endpoint

import derivean.storage.repository.*
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

@KtorExperimentalAPI
class StatisticsEndpoint(container: IContainer) : AbstractActionEndpoint(container) {
	private val statisticMapper: StatisticMapper by container.lazy()

	override fun install(routing: Routing) {
		"/api/root/statistics".let { url ->
			discovery {
				this.link = url
				this.name = "root.statistics"
				this.description = "Some interesting statistic data from the server."
			}
			routing.authenticate {
				withAnyRole("root") {
					get(url) {
						call.resolve(statisticMapper.resolve(Unit))
					}
				}
			}
		}
	}
}

class StatisticMapper(container: IContainer) : AbstractActionMapper<Unit, Response<out Any>>(container) {
	private val userRepository: UserRepository by container.lazy()
	private val kingdomRepository: KingdomRepository by container.lazy()
	private val heroRepository: HeroRepository by container.lazy()
	private val buildingRepository: BuildingRepository by container.lazy()
	private val translationRepository: TranslationRepository by container.lazy()

	override fun resolve(item: Unit) = storage.read {
		ok(
			Statistics(
				userRepository.total(),
				kingdomRepository.total(),
				heroRepository.total(),
				buildingRepository.total(),
				translationRepository.total(),
			)
		)
	}

	data class Statistics(
		val users: Long,
		val kingdoms: Long,
		val heroes: Long,
		val buildings: Long,
		val translations: Long,
	)
}

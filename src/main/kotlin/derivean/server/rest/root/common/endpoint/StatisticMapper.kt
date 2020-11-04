package derivean.server.rest.root.common.endpoint

import derivean.lib.container.IContainer
import derivean.lib.mapper.AbstractActionMapper
import derivean.lib.rest.Response
import derivean.lib.rest.ok
import derivean.server.building.BuildingRepository
import derivean.server.hero.HeroRepository
import derivean.server.kingdom.KingdomRepository
import derivean.server.translation.TranslationRepository
import derivean.server.user.UserRepository

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

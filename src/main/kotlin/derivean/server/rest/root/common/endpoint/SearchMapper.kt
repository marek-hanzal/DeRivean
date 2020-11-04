package derivean.server.rest.root.common.endpoint

import derivean.lib.container.IContainer
import derivean.lib.mapper.AbstractActionMapper
import derivean.lib.rest.Response
import derivean.lib.rest.ValidationResponse
import derivean.lib.rest.internalServerError
import derivean.lib.rest.ok
import derivean.server.building.BuildingRepository
import derivean.server.hero.HeroRepository
import derivean.server.kingdom.KingdomRepository
import derivean.server.translation.TranslationRepository
import derivean.server.user.UserRepository

class SearchMapper(container: IContainer) : AbstractActionMapper<SearchMapper.Request, Response<out Any>>(container) {
	private val userRepository: UserRepository by container.lazy()
	private val kingdomRepository: KingdomRepository by container.lazy()
	private val buildingRepository: BuildingRepository by container.lazy()
	private val heroRepository: HeroRepository by container.lazy()
	private val translationRepository: TranslationRepository by container.lazy()

	override fun resolve(item: Request) = try {
		ok(storage.read {
			val limit = 5
			Result(
				userRepository.search(item.search, limit).map { Item(it.id.toString(), "user", it.name) } +
					kingdomRepository.search(item.search, limit).map { Item(it.id.toString(), "kingdom", it.name) } +
					buildingRepository.search(item.search, limit).map { Item(it.id.toString(), "building", it.name) } +
					heroRepository.search(item.search, limit).map { Item(it.id.toString(), "hero", it.name) } +
					translationRepository.search(item.search, limit).map { Item(it.id.toString(), "translation", it.language + ": " + it.label) }
			)
		})
	} catch (e: Throwable) {
		logger.error(e.message, e)
		internalServerError(ValidationResponse.build {
			message = "Some ugly internal server error happened!"
		})
	}

	data class Request(
		val search: String,
	)

	data class Result(
		val items: List<Item>,
	)

	data class Item(
		val id: String,
		val type: String,
		val name: String,
	)
}

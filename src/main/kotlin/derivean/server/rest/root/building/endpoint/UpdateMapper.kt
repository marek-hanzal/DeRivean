package derivean.server.rest.root.building.endpoint

import derivean.lib.container.IContainer
import derivean.lib.mapper.AbstractActionMapper
import derivean.lib.rest.Response
import derivean.lib.rest.ValidationResponse
import derivean.lib.rest.internalServerError
import derivean.lib.rest.ok
import derivean.server.building.BuildingRepository

class UpdateMapper(container: IContainer) : AbstractActionMapper<UpdateMapper.Request, Response<out Any>>(container) {
	private val fetchMapper: FetchMapper by container.lazy()
	private val buildingRepository: BuildingRepository by container.lazy()

	override fun resolve(item: Request): Response<out Any> = try {
		ok(storage.write {
			fetchMapper.map(
				buildingRepository.update(item.id) {
					this.name = item.name
					buildingRepository.attributes(item.id, *item.attributes?.distinctBy { it.attribute }?.map { it.attribute to it.value }?.toTypedArray() ?: arrayOf())
				}
			)
		})
	} catch (e: Throwable) {
		logger.error(e.message, e)
		internalServerError(ValidationResponse.build {
			message = "Some ugly internal server error happened!"
		})
	}

	data class Request(val id: String, val name: String, val attributes: List<Attribute>?)
	data class Attribute(val attribute: String, val value: Double)
}

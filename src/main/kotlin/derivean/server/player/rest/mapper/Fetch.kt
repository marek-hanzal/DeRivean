package derivean.server.player.rest.mapper

import org.jetbrains.exposed.dao.EntityID
import java.util.*

data class Fetch(
	val id: String,
	val name: String,
) {
	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder {
		lateinit var id: EntityID<UUID>
		lateinit var name: String

		fun build() = Fetch(
			id.toString(),
			name,
		)
	}
}

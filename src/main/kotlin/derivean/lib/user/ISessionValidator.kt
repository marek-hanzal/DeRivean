package derivean.lib.user

import derivean.lib.config.IConfigurable
import io.ktor.auth.*

interface ISessionValidator : IConfigurable {
	fun validate(sessionTicket: SessionTicket): Principal?
}

package leight.user

import io.ktor.auth.*
import leight.config.IConfigurable

interface ISessionValidator : IConfigurable {
	fun validate(sessionTicket: SessionTicket): Principal?
}

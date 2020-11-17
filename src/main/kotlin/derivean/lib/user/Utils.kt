package derivean.lib.user

import io.ktor.application.*
import io.ktor.sessions.*
import io.ktor.util.*
import java.util.*

@KtorExperimentalAPI
fun ApplicationCall.ticket(ticket: UUID) = this.sessions.set(SessionTicket(ticket))

package derivean.server

class Engine {
	val greeting: String
		get() {
			return "Wrooom."
		}
}

fun main(args: Array<String>) {
	println(Engine().greeting)
}

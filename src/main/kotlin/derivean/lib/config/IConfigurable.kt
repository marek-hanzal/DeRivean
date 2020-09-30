package derivean.lib.config

typealias Configurator = Any?.() -> Unit

interface IConfigurable {
	/**
	 * register a lambda configurator
	 */
	fun configurator(configurators: List<Configurator>)

	/**
	 * makes object ready to setup (executes configurators)
	 */
	fun configure()

	/**
	 * make an object ready to use; this could be thought as late
	 * constructor
	 */
	fun setup()

	/**
	 * release an object; free all allocated resources (kind of destructor)
	 */
	fun release()
}

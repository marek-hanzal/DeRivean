package leight.config

abstract class AbstractConfigurable : IConfigurable {
	private var configurators: MutableList<Any.() -> Unit> = mutableListOf()
	private var state = 0

	override fun configurator(configurator: Any.() -> Unit) {
		this.state = 0
		this.configurators.add(configurator)
	}

	override fun configure() {
		if (state == 0) {
			for (configurator in configurators) {
				configurator(this)
			}
			state++
		}
	}

	override fun setup() {
		configure()
		if (state <= 1) {
			onSetup()
			state++
		}
	}

	override fun release() {
		if (state == 2) {
			onRelease()
			state--
		}
	}

	protected open fun onSetup() {
	}

	protected open fun onRelease() {
	}
}

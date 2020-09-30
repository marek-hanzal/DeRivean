@file:Suppress("UNCHECKED_CAST")

package derivean.lib.config

abstract class AbstractConfigurable : IConfigurable {
	private var configurators: MutableList<Configurator> = mutableListOf()
	private var state = 0

	override fun configurator(configurators: List<Configurator>) {
		this.state = 0
		this.configurators.addAll(configurators)
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

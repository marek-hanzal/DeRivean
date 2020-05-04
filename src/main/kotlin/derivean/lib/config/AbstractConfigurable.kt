@file:Suppress("UNCHECKED_CAST")

package derivean.lib.config

import derivean.lib.api.config.Configurator
import derivean.lib.api.config.IConfigurable

abstract class AbstractConfigurable<T> : IConfigurable<T> {
	private var configurator: Configurator<T> = {}
	private var state = 0

	override fun configurator(configurator: Configurator<T>) {
		this.state = 0
		this.configurator = configurator
	}

	override fun configure() {
		if (state == 0) {
			configurator(this as T)
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

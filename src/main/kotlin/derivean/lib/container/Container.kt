@file:Suppress("UNCHECKED_CAST")

package derivean.lib.container

import kotlin.reflect.KClass

class Container : IContainer {
	private var register: HashMap<String, (container: IContainer) -> Any> = hashMapOf()
	private var services: HashMap<String, (container: IContainer) -> Any> = hashMapOf()
	private var instances: HashMap<String, Any> = hashMapOf()
	private var configurators: HashMap<String, MutableList<Any.() -> Unit>> = hashMapOf()

	override fun <T : Any> register(name: KClass<T>, callback: IContainer.() -> T) {
		register[name.qualifiedName.toString()] = callback
	}

	override fun <T : Any, U : T> service(name: KClass<T>, callback: IContainer.() -> U) {
		services[name.qualifiedName.toString()] = callback
	}

	override fun <T : Any> configurator(name: KClass<T>, configurator: T.() -> Unit) {
		name.qualifiedName.toString().also { fqn ->
			if (!services.containsKey(fqn)) {
				throw ContainerException("Cannot register configurator for an unknown service [${fqn}].")
			}
			if (!configurators.containsKey(fqn)) {
				configurators[fqn] = mutableListOf()
			}
			configurators[fqn]?.add(configurator as Any.() -> Unit)
		}
	}

	override fun <T : Any> create(name: String): T {
		if (instances.containsKey(name)) {
			return instances[name] as T
		}
		if (services.containsKey(name)) {
			return (services[name]?.invoke(this) as T).also {
				instances[name] = it
				for (configurator in configurators[name] ?: listOf()) {
					configurator(it)
				}
				(it as AbstractService).setup()
			}
		}
		if (register.containsKey(name)) {
			return (register[name]?.invoke(this) as T).also {
				instances[name] = it
			}
		}
		throw ContainerException("Cannot create unknown service [${name}].")
	}
}

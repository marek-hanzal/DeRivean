package derivean.lib.container

import derivean.lib.config.Configurator
import derivean.lib.config.IConfigurable
import kotlin.reflect.KClass

class Container : IContainer {
	private var factories: HashMap<String, IFactory<*>> = hashMapOf()
	private var configurators: HashMap<String, MutableList<Configurator>> = hashMapOf()

	override fun <T : Any> register(impl: KClass<T>) = register(SingletonFactory(impl))

	override fun <T : Any, U : T> register(iface: KClass<T>, callback: IContainer.() -> U) = register(ContainerCallbackFactory(iface, callback, iface))

	override fun <T> register(factory: IFactory<T>) {
		factories[factory.getName()] = factory
	}

	override fun <T : Any> configurator(iface: KClass<T>, configurator: Configurator) {
		iface.qualifiedName.toString().also { name ->
			if (!configurators.containsKey(name)) {
				configurators[name] = mutableListOf()
			}
			configurators[name]?.add(configurator)
		}
	}

	override fun <T : Any> configure(instance: T, configurator: String?) {
		(configurator ?: instance::class.qualifiedName).also {
			if (instance is IConfigurable && configurators.containsKey(it)) {
				(instance as IConfigurable).apply {
					configurator(configurators[it]?.toList()!!)
					configure()
				}
			}
		}
	}

	override fun <T : Any> create(iface: String, params: Array<*>?): T {
		if (!factories.containsKey(iface)) {
			register(Class.forName(iface).kotlin)
		}
		return (factories[iface] as IFactory<T>).create(this, params).also { configure(it, iface) }
	}
}

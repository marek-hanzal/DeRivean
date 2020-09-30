package derivean.lib.container

import derivean.lib.config.Configurator
import kotlin.reflect.KClass

interface IContainer {
	/**
	 * register a factory to the container
	 */
	fun <T> register(factory: IFactory<T>)

	/**
	 * register a singleton class (service)
	 */
	fun <T : Any> register(impl: KClass<T>)

	fun <T : Any, U : T> register(iface: KClass<T>, callback: IContainer.() -> U)

	/**
	 * register config callback
	 */
	fun <T : Any> configurator(iface: KClass<T>, configurator: Configurator)

	/**
	 * configure the given instance if there is any configurator for it
	 */
	fun <T : Any> configure(instance: T, configurator: String? = null)

	/**
	 * actually creates (returns) an instance; instance type
	 * is based on rules defined in instance's factory
	 */
	fun <T : Any> create(iface: String, params: Array<*>? = null): T

	/**
	 * creates an instance by class name
	 */
	fun <T : Any> create(iface: KClass<T>, params: Array<*>? = null): T = create(iface.qualifiedName ?: throw ContainerException("Cannot create an instance of unknown class (without qualified name)."))

	fun <T : Any> lazy(): LazyDelegate<T> = LazyDelegate(this)
}

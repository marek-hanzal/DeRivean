@file:Suppress("UNCHECKED_CAST")

package derivean.lib.api.container

import derivean.lib.api.config.IConfigurable
import kotlin.reflect.KClass
import kotlin.reflect.KProperty

class LazyDelegate<T : Any>(val container: IContainer) {
	operator fun getValue(thisRef: Any?, property: KProperty<*>): T {
		val instance = container.create(property.returnType.classifier as KClass<T>)
		if (instance is IConfigurable<*>) {
			instance.setup()
		}
		return instance
	}
}

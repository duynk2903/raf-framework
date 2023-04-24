export type IBuilder<T> = {
  [k in keyof T]-?: ((arg: T[k]) => IBuilder<T>) & (() => T[k])
} & {
  build(): T
}

type Clazz<T> = new (...args: unknown[]) => T

/**
 * Create a Builder for a class. Returned objects will be of the class type.
 *
 * e.g. let obj: MyClass = Builder(MyClass).setA(5).setB("str").build();
 *
 * @param type the name of the class to instantiate.
 * @param template optional class partial which the builder will derive initial params from.
 */
export function Builder<T>(type: Clazz<T>, template?: Partial<T>): IBuilder<T>

/**
 * Create a Builder for an interface. Returned objects will be untyped.
 *
 * e.g. let obj: Interface = Builder<Interface>().setA(5).setB("str").build();
 *
 * @param template optional partial object which the builder will derive initial params from.
 */
export function Builder<T>(template?: Partial<T>): IBuilder<T>

export function Builder<T>(typeOrTemplate?: Clazz<T> | Partial<T>, template?: Partial<T>): IBuilder<T> {
  let type: Clazz<T> | undefined
  if (typeOrTemplate instanceof Function) {
    type = typeOrTemplate
  } else {
    // eslint-disable-next-line no-param-reassign
    template = typeOrTemplate
  }

  const built: Record<string, unknown> = template ? { ...template } : {}

  const builder = new Proxy(
    {},
    {
      get(target, prop) {
        if (prop === 'build') {
          if (type) {
            // A class name (identified by the constructor) was passed. Instantiate it with props.
            // eslint-disable-next-line new-cap
            const obj: T = new type()
            return () => Object.assign(obj as T & Record<string, unknown>, { ...built })
          }
          // No type information - just return the object.
          return () => built
        }

        return (...args: unknown[]): unknown => {
          // If no arguments passed return current value.
          if (args.length === 0) {
            return built[prop.toString()]
          }

          // eslint-disable-next-line prefer-destructuring
          built[prop.toString()] = args[0]
          return builder
        }
      }
    }
  )

  return builder as IBuilder<T>
}

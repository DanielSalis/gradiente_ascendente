export function has<P extends PropertyKey>(target: object, property: P): target is { [K in P]: unknown } {
  return !!target && property in target
}

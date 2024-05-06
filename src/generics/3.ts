function merge<T extends object, B extends object>(objA: T, objB: B): object {
  return Object.assign(objA, objB);
}

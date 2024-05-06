function merge<T extends object, B extends object>(objA: T, objB: B) {
  return Object.assign(objA, objB);
}

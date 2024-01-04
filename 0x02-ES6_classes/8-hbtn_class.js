export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // Getter to cast the class into a Number (size)
  valueOf() {
    return this._size;
  }

  // Getter to cast the class into a String (location)
  toString() {
    return this._location;
  }
}

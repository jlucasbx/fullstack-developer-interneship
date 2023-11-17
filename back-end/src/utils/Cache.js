
function createTimestamp(expiration) {
  if (expiration === -1) return null;
  const currentDate = new Date();
  const futureDate = new Date(currentDate.getTime() + expiration);

  return futureDate;
}

// to avoid memory leaks I control how many elements can be stored in the cache
// and also update the data after a certain period of time

export default class Cache extends Map {
  constructor(expiration = 1000, cacheSize = 10) {
    super();
    this.expiration = expiration;
    this.cacheSize = cacheSize;
  }

  set(key, value) {
    if (super.size === this.cacheSize) super.clear();
    const timestamp = createTimestamp(this.expiration);
    super.set(key, { timestamp, value });
  }

  get(key) {
    const item = super.get(key);
    if (!item) return null;
    const { value, timestamp } = item;
    const now = new Date();

    if (timestamp !== null && now > timestamp) {
      super.delete(key);
      return null;
    }
    return value;
  }
}

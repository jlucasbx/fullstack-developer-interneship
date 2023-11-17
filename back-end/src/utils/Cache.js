// para evitar vazamentos de mémoria fasso o controle de quantos elementos podem ficar armazendos no cache
// e também atualização dos dados após um certo periodo de tempo

function createTimestamp(expiration) {
  if (expiration === -1) return null;
  const currentDate = new Date();
  const futureDate = new Date(currentDate.getTime() + expiration);

  return futureDate;
}

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

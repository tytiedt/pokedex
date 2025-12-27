import { get } from "node:http";

type CacheEntry<T> = {
  createdAt: number;
  val: T;
}

class Cache {
  #cache = new Map<string, CacheEntry<any>>();
  #reapIntervalId: NodeJS.Timeout | undefined = undefined;
  #interval: number;

  constructor(reapIntervalMs: number = 60000) {
    this.#interval = reapIntervalMs;
    this.#startReapLoop();
  }

  add = <T>(key: string, val: T) => {
    const entry: CacheEntry<T> = {
      createdAt: Date.now(),
      val,
    };
    console.log(`Cache add: ${key}`);
    this.#cache.set(key, entry);
  }

  get = <T>(key: string
  ): T | undefined => {
    const entry = this.#cache.get(key);
    if (!entry) return undefined;
    console.log(`Cache hit: ${key}`);
    return entry?.val as T;
  }

  #reap = () => {
    const now = Date.now();
    for (const [key, entry] of this.#cache.entries()) {
      if (entry.createdAt < now - this.#interval) {
        this.#cache.delete(key);
      }
    }
  }

  #startReapLoop = () => {
    this.#reapIntervalId = setInterval(() => {
      this.#reap();
    }, this.#interval);
  }

  stopReapLoop = () => {
    clearInterval(this.#reapIntervalId);
    this.#reapIntervalId = undefined;
  };
}
export { Cache };
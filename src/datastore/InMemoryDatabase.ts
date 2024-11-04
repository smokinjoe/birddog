export type BaseRecord = {
  id: number;
};

interface Database<TData extends BaseRecord> {
  set(newValue: TData): void;
  get(id: string): TData | undefined;
}

export function createDatabase<TData extends BaseRecord>() {
  class InMemoryDatabase implements Database<TData> {
    private db: Record<string, TData> = {};

    static instance: InMemoryDatabase = new InMemoryDatabase();

    set(newValue: TData): void {
      this.db[newValue.id] = newValue;
    }

    get(id: string): TData | undefined {
      return this.db[id];
    }
  }

  return InMemoryDatabase;
}

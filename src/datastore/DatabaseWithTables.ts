import { v4 as randomUUID } from "uuid";

export type BaseRecord = {
  id: string;
};

interface DBTable<T extends BaseRecord> {
  set(newValue: Omit<T, "id">): string;
  get(id: string): T | undefined;
  getBy(key: keyof T, value: any): T[];
  update: (id: string, newValue: Partial<T>) => T | undefined;
}

export function createTable<T extends BaseRecord>() {
  class InMemoryDBTable implements DBTable<T> {
    private table: Record<string, T> = {};
    private keys: (keyof T)[];

    constructor() {
      // This is to infer the valid keys of the table to validate against
      this.keys = Object.keys({} as T) as (keyof T)[];
    }

    private isOfTypeT = <T extends BaseRecord>(
      obj: any,
      keys: (keyof T)[]
    ): obj is T => {
      return (
        keys.every((key) => key in obj) &&
        Object.keys(obj).every((key) => keys.includes(key as keyof T))
      );
    };

    private isInvalidEntry = (entry: Partial<T>) => {
      return this.keys.length > 0 && !this.isOfTypeT(entry, this.keys);
    };

    set(newValue: Omit<T, "id">): string {
      const id = randomUUID();

      const objectToInsert: T = {
        id,
        ...newValue,
      } as T;

      if (this.isInvalidEntry(objectToInsert)) {
        throw new Error(
          "Could not insert object into database due to type mismatch"
        );
      }

      this.table[id] = objectToInsert;
      return id;
    }

    get(id: string): T | undefined {
      return this.table[id];
    }

    getBy(key: keyof T, value: any): T[] {
      return Object.values(this.table).filter(
        (record) => record[key] === value
      );
    }

    update(id: string, newValue: Partial<T>): T | undefined {
      const record = this.table[id];

      if (!record) {
        return undefined;
      }

      const updatedRecord: T = {
        ...record,
        ...newValue,
      };

      if (this.isInvalidEntry(updatedRecord)) {
        throw new Error(
          "Could not update object in database due to type mismatch"
        );
      }

      this.table[id] = updatedRecord;
      return updatedRecord;
    }
  }

  return new InMemoryDBTable();
}

export function createDatabase() {
  class InMemoryDatabase {
    private tables: Record<string, DBTable<any>> = {};

    createTable<T extends BaseRecord>(name: string) {
      this.tables[name] = createTable<T>();
    }

    getTable(name: string) {
      return this.tables[name];
    }
  }

  return new InMemoryDatabase();
}

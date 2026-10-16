
export class Repository<T extends { id: number }> {
  private items: T[] = [];
  private nextId = 1;

  add(data: Omit<T, "id">): T {
    const item = {
      ...data,
      id: this.nextId
    } as T;

    this.nextId++;
    this.items.push(item);

    return item;
  }

  getById(id: number): T | undefined {
    for (const item of this.items) {
      if (item.id === id) {
        return item;
      }
    }

    return undefined;
  }

  update( id: number, changes: Partial<Omit<T, "id">>): T | undefined {
    const item = this.getById(id);

    if (item === undefined) {
      return undefined;
    }

    Object.assign(item, changes);
    return item;
  }

  remove(id: number): boolean {
    const index = this.items.findIndex((item) => item.id === id);

    if (index === -1) {
      return false;
    }

    this.items.splice(index, 1);
    return true;
  }

  filter(predicate: (item: T) => boolean): T[] {
    return this.items.filter(predicate);
  }
}

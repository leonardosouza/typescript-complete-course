class MySolutionMap<T> {
  private map: { [key: string]: T} = {};

  public setItem(key: string, item: T) {
    this.map[key] = item;
  }

  public getItem(key: string) {
    return this.map[key];
  }

  public clear() {
    this.map = {};
  }

  public printMap() {
    let key;
    for (key in this.map) {
      if (Object.getOwnPropertyNames(this.map)) {
        console.log(key, this.map[key]);
      }
    }
  }
}

const numberSolutionMap = new MySolutionMap<number>();
numberSolutionMap.setItem("apples", 5);
numberSolutionMap.setItem("bananas", 10);
// numberSolutionMap.clear();
numberSolutionMap.printMap();

const stringSolutionMap = new MySolutionMap<string>();
stringSolutionMap.setItem("name", "Max");
stringSolutionMap.setItem("age", "27");
stringSolutionMap.printMap();

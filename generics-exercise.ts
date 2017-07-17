class MyMap<T> {
  public _itens: object[] = [];

  public setItem(key: string, item: T) {
    this._itens.push();
    this._itens.push({ [key]: item });
  }

  public printMap() {
    console.log(this._itens);
  }
}

const numberMap = new MyMap<number>();
numberMap.setItem("apples", 5);
numberMap.setItem("bananas", 10);
numberMap.printMap();

const stringMap = new MyMap<string>();
stringMap.setItem("name", "Max");
stringMap.setItem("age", "27");
stringMap.printMap();

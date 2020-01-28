import IExpression from './IExpression';

interface ItemEnvironement {
  name: string;
  expr: IExpression;
  corec: Array<string> | null;
}

interface IEnvironment {
  id: number;
  items: Array<ItemEnvironement>;
}


export {IEnvironment, ItemEnvironement};

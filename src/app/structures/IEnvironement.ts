import IExpression from './IExpression';

interface ItemEnvironement {
  name: string;
  expr: IExpression;
}

interface IEnvironment {
  id: number;
  items: Array<ItemEnvironement>;
}

export {IEnvironment, ItemEnvironement};

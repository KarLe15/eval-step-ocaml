import IExpression from './IExpression';
import IRange from './IRange';

interface ItemEnvironement {
  name: string;
  expr: IExpression;
  corec: Array<string> | null;
  range: IRange | null;
}

interface IEnvironment {
  id: number;
  items: Array<ItemEnvironement>;
}


export {IEnvironment, ItemEnvironement};

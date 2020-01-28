import {IEnvironment} from './IEnvironement';

export default interface IExpression {
  toString: string;
  environements: Array<IEnvironment> | null;
}

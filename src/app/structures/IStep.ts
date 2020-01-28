import IExpression from './IExpression';

interface StringStep {
  name: string;
  step: IStep;
}
export default interface IStep {
  currentExpression: IExpression;
  nexts: Array<StringStep> | null;
  previous: IStep | null;
}

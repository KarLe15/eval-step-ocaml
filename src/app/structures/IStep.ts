import IExpression from './IExpression';

interface StringStep {
  name: string;
  step: IStep;
  subst: string | null;
}
export default interface IStep {
  currentExpression: IExpression;
  nexts: Array<StringStep> | null;
  previous: IStep | null;
}

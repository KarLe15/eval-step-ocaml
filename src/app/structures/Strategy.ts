interface DescriptionFile {
  steps: Array<string>;
}

class SubStrategyEntry {
  name: string;
}

class SubStrategy {
  wait: Array<SubStrategyEntry>;
  skip: Array<SubStrategyEntry>;
  mustNameWait: boolean;
}

class Strategy {
  private contexts: Array<string>;
  private strategies: Map<string, SubStrategy>;

  constructor(contexts: Array<string>, strategies: Map<string, SubStrategy>) {
    this.contexts = contexts;
    this.strategies = strategies;
  }
}

const StrategyFactory = (json: DescriptionFile): Strategy => {
  const cons: Array<string> = json.steps;
  const strategies: Map<string, SubStrategy> = new Map<string, SubStrategy>();
  for (const context of cons) {
    const subStrategy: SubStrategy = json[context];
    strategies.set(context, subStrategy);
  }
  return new Strategy(cons, strategies);
};




export {Strategy, StrategyFactory};

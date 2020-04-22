interface DescriptionFile {
  steps: Array<string>;
}

class SubStrategyEntry {
  name: string;
}

class SubStrategy {
  private _wait: Array<SubStrategyEntry> | null;
  private _skip: Array<SubStrategyEntry> | null;
  private _mustNameWait: boolean;

  public hasToWait(): boolean {
    return this._wait !== null;
  }

  public hasToSkip(): boolean {
    return this._skip !== null;
  }


  get wait(): Array<SubStrategyEntry> | null {
    return this._wait;
  }

  get skip(): Array<SubStrategyEntry> | null {
    return this._skip;
  }

  get mustNameWait(): boolean {
    return this._mustNameWait;
  }
}

class Strategy {
  private _contexts: Array<string>;
  private _strategies: Map<string, SubStrategy>;

  constructor(contexts: Array<string>, strategies: Map<string, SubStrategy>) {
    this._contexts = contexts;
    this._strategies = strategies;
  }

  get contexts(): Array<string> {
    return this._contexts;
  }

  get strategies(): Map<string, SubStrategy> {
    return this._strategies;
  }
  getSubStrategy(cont: string): SubStrategy {
    return this._strategies.get(cont);
  }
  getContext(i: number): string {
    return this._contexts[i];
  }
  getNextContext(cont: string): string {
    const i = this._contexts.indexOf(cont);
    return this._contexts[i + 1];
  }
  hasNextContext(cont: string): boolean {
    const i = this._contexts.indexOf(cont);
    return (i + 1) < this._contexts.length;
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




export {Strategy, SubStrategy, StrategyFactory};

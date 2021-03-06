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
  private _waitUntil: boolean;

  public hasToWait = () => this._wait !== null;

  public hasToSkip = () => this._skip !== null;


  public waitUntil(): boolean {
    return this._waitUntil;
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
  public name: string;

  constructor(contexts: Array<string>, strategies: Map<string, SubStrategy>, name: string) {
    this._contexts = contexts;
    this._strategies = strategies;
    this.name = name;
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

const StrategyFactory = (json: DescriptionFile, path: string): Strategy => {
  const cons: Array<string> = json.steps;
  const strategies: Map<string, SubStrategy> = new Map<string, SubStrategy>();
  for (const context of cons) {
    const subStrategy: SubStrategy = json[context];
    strategies.set(context, subStrategy);
  }
  return new Strategy(cons, strategies, path.slice(0, -5));
};




export {Strategy, SubStrategy, StrategyFactory};

import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {EvalService} from '../../services/eval.service';
import IEvaluation from '../../structures/IEvaluation';
import {ReplaySubject, Subject} from 'rxjs';
import IOption from '../../structures/IOption';
import {OptionsService} from '../../services/options.service';
import {GetAssetsFilesService} from '../../services/get-assets-files.service';
import {NavigationExtras, Router} from '@angular/router';
import {FileElement} from '../../file-manager/model/element';
import {Strategy, StrategyFactory} from '../../structures/Strategy';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  navigationExtras: NavigationExtras;

  private defFun = 'Exemple';
  private defMain: string;
  evaluate = false;
  private eventSubject: Subject<IEvaluation> = new Subject<IEvaluation>();
  private strategiesSubject = new ReplaySubject<Array<Strategy>>();
  private expressions: IEvaluation;
  private filtredExpressions: IEvaluation;

  private options: Map<string, IOption>;
  private listeOptionsAffichage = ['liste', 'arbre'];
  optionChoisi = this.listeOptionsAffichage[0];
  private strategyChoosen: Strategy;

  constructor(
    private evaluator: EvalService,
    private OptService: OptionsService,
    private filesService: GetAssetsFilesService,
    private router: Router
  ) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation != null && navigation.extras.state != null  ) {
      const state = navigation.extras.state as {
        data: string
      };
      this.defFun = state.data;
    }
  }
  ngOnInit() {
    this.options = this.OptService.getOptions();
    this.getAllStrategiesDefined();
    this.strategiesSubject.subscribe(strategies => {
      this.strategyChoosen = strategies[0];
    });
  }

  onClick_evaluate() {
    const expression = this.defFun + '\n\nlet _ = ' + this.defMain;
    this.expressions = this.evaluator.getDataStructure(expression, this.defMain);
    this.filtredExpressions = this.evaluator.getEvaluationsWithFilter(this.expressions, this.strategyChoosen);
    this.emitEventToChild(this.filtredExpressions);
    this.evaluate = true;
  }

  onChangeFun(eventArgs) {
    this.defFun = eventArgs;
  }

  onChangeMain(eventArgs) {
    this.defMain = eventArgs;
  }

  recuperateOption(eventArgs) {
    this.options = eventArgs;
  }

  emitEventToChild(express: IEvaluation) {
    this.eventSubject.next(express);
  }

  /* ---------- Changment de l'option d'affichage ------------------*/
  onChoisi(item) {
    this.optionChoisi = item;
  }

  private getAllStrategiesDefined() {
    this.filesService.getFile('assets/strategies/contents.json').then(result => {
      const strategies: Array<Strategy> = [];
      const content: Array<{name: string, path: string}> = JSON.parse(result);
      for (const file of content) {
        this.filesService.getFile('assets/strategies/' + file.path).then(contentF => {
          const jsonContent = JSON.parse(contentF);
          const strategy: Strategy = StrategyFactory(jsonContent);
          strategies.push(strategy);
          if (strategies.length === content.length) {
            this.strategiesSubject.next(strategies);
          }
        }).catch(err => {
          console.error('error while loading file', file.path, err);
        });
      }
    }).catch(err => {
      console.error('error while loading contents file strategies', err);
    });
  }
}

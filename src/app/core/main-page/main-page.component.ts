import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {EvalService} from '../../services/eval.service';
import IEvaluation from '../../structures/IEvaluation';
import {Subject} from 'rxjs';
import IOption from '../../structures/IOption';
import {OptionsService} from '../../services/options.service';



@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  private defFun: string;
  private defMain: string;
  evaluate = false;
  private eventSubject: Subject<IEvaluation> = new Subject<IEvaluation>();
  private expressions: IEvaluation;
  private filtredExpressions: IEvaluation;

  private options: Map<string, IOption>;
  private listeOptionsAffichage = ['liste', 'arbre'];
  optionChoisi = this.listeOptionsAffichage[0];

  constructor(private evaluator: EvalService, private OptService: OptionsService) { }
  ngOnInit() {
    this.options = this.OptService.getOptions();
  }

  onClick_evaluate() {
    const expression = this.defFun + '\n\nlet _ = ' + this.defMain;
    this.expressions = this.evaluator.getDataStructure(expression, this.defMain);
    const options = [];
    this.filtredExpressions = this.evaluator.getEvaluationsWithFilter(this.expressions, options);
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
}

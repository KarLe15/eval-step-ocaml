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
  evaluate = false;
  private defMain: string;
  private data: string;
  private eventSubject: Subject<void> = new Subject<void>();
  private expressions: IEvaluation;

  private options: Map<string, IOption>;

  constructor(private evaluator: EvalService, private OptService: OptionsService) { }
  ngOnInit() {
    this.options = this.OptService.getOptions();
  }

  onClick() {
    this.evaluate = true;
    this.expressions = this.evaluator.getDataStructure();
    this.emitEventToChild();
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

  emitEventToChild() {
    this.eventSubject.next();
  }
}

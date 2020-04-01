import { Component, Input, OnInit } from '@angular/core';
import IEvaluation from '../../structures/IEvaluation';
import { Observable, Subscription } from 'rxjs';
import IStep from '../../structures/IStep';
import { EvalService } from '../../services/eval.service';
import IOption from '../../structures/IOption';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  @Input('events') events: Observable<IEvaluation>;
  @Input('typeAffichage') type: string;

  private shouldDisplay: boolean;
  private expressions: IEvaluation;
  private eventsSubscription: Subscription;
  private currentStep: IStep;
  etape = 0;
  listeEtape = [];


  constructor(private evalService: EvalService) { }


  ngOnInit() {
    this.shouldDisplay = false;
    this.eventsSubscription = this.events.subscribe((expressions) => this.initStep(expressions));
  }

  private initStep(expressions: IEvaluation) {
    this.shouldDisplay = true;
    this.expressions = expressions;
    this.currentStep = this.evalService.getFirstStep(this.expressions);
    this.listeEtape.push(this.currentStep);
  }

  onPrevious() {
    this.currentStep = this.evalService.getPreviousStep(this.currentStep);
    this.etape--;
  }

  onNext() {
    const expr = this.currentStep;
    // while (this.options.get(expr.nexts[0].name).valueDefault !== true){
    //   if (expr.nexts !== null) {
    //     expr = expr.nexts[0].step;
    //   }
    // }
    this.currentStep = this.evalService.getNextStep(expr);
    this.listeEtape.push(this.currentStep);
    this.etape++;
    console.log(this.currentStep);
  }


}

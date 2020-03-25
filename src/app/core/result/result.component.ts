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
  @Input('expressions') expressions: IEvaluation;
  @Input('events') events: Observable<void>;
  @Input('options') options: Map<string, IOption>;
  @Input('typeAffichage') type: string;

  private eventsSubscription: Subscription;
  private currentStep: IStep;
  etape = 0;
  listeEtape = [];


  constructor(private evalService: EvalService) { }


  ngOnInit() {
    // console.log(this.options);
    this.eventsSubscription = this.events.subscribe(() => this.initStep());
  }

  private initStep() {
    this.currentStep = this.evalService.getFirstStep(this.expressions);
    // console.log('init_step', this.currentStep);
    this.listeEtape.push(this.currentStep);
    console.log('init', this.currentStep );
  }

  onPrevious() {
    this.currentStep = this.evalService.getPreviousStep(this.currentStep);
    this.etape--;
  }

  onNext() {
    let expr = this.currentStep;
    while (this.options.get(expr.nexts[0].name).valueDefault !== true){
      if (expr.nexts !== null) {
        expr = expr.nexts[0].step;
      }
    }
    this.currentStep = this.evalService.getNextStep(expr);
    this.listeEtape.push(this.currentStep);
    this.etape++;
  }


}

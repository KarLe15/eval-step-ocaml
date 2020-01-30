import {Component, Input, OnInit} from '@angular/core';
import IEvaluation from '../../structures/IEvaluation';
import {Observable, Subscription} from 'rxjs';
import IStep from '../../structures/IStep';
import {EvalService} from '../../services/eval.service';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  // tslint:disable-next-line:no-input-rename
  @Input('expressions') expressions: IEvaluation;
  // tslint:disable-next-line:no-input-rename
  @Input('events') events: Observable<void>;
  private eventsSubscription: Subscription;
  private currentStep: IStep;
  constructor(private evalService: EvalService) { }

  ngOnInit() {
    this.eventsSubscription = this.events.subscribe(() => this.initStep());
  }

  private initStep() {
    this.currentStep = this.evalService.getFirstStep(this.expressions);
    console.log('init', this.currentStep );
  }

  onPrevious() {
    this.currentStep = this.evalService.getPreviousStep(this.currentStep);
  }

  onNext() {
    this.currentStep = this.evalService.getNextStep(this.currentStep);
  }
}

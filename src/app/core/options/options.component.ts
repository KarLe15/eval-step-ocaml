import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import IOption from '../../structures/IOption';
import {Observable} from 'rxjs';
import {Strategy} from '../../structures/Strategy';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {
  @Input('strategiesObservable') strategiesObservable: Observable<Array<Strategy>>;
  @Input('options') options: Map<string, IOption>;
  @Output('changeOptions') changeOptions = new EventEmitter();
  private strategies: Strategy[];
  MoveDownSubst: true;
  private currentStrategy = 0;
  constructor() {}

  ngOnInit() {
    this.strategiesObservable.subscribe(strategies => {
      console.log('options has received strategies', strategies);
      this.strategies = strategies;
    });
  }


  /* changement de l'option */
  onValueChange(value: boolean, key: string ) {
    this.options.get(key).valueDefault = value;
  }

  onChangeOption() {
    this.changeOptions.emit(this.options);
  }

  onChangeStrategy($event: boolean, currentStrategy: number) {
    if ($event) {
      this.currentStrategy = currentStrategy;
      this.changeOptions.emit(this.strategies[this.currentStrategy]);
    }
  }
}

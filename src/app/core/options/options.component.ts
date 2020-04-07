import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OptionsService} from '../../services/options.service';
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
  MoveDownSubst: true;
  private  modeBasique = true;
  constructor() {}

  ngOnInit() {
    this.strategiesObservable.subscribe(strategies => {
      console.log('options has received strategies', strategies);
    });
  }


  /* changement de l'option */
  onValueChange(value: boolean, key: string ) {
    this.options.get(key).valueDefault = value;
  }

  onChangeOption() {
    this.changeOptions.emit(this.options);
  }
}

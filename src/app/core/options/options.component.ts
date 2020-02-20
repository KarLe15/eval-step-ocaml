import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {OptionsService} from '../../services/options.service';
import IOption from '../../structures/IOption';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.scss']
})
export class OptionsComponent implements OnInit {
  @Input('options') options: Map<string, IOption>;
  @Output('changeOptions') changeOptions = new EventEmitter();
  MoveDownSubst: true;

  constructor() {}

  ngOnInit() {
  }


  /* changement de l'option */
  onValueChange(value: boolean, key: string ) {
    this.options.get(key).valueDefault = value;
  }

  onChangeOption() {
    this.changeOptions.emit(this.options);
  }
}

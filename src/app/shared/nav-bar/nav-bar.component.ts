import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';

interface ISampleFile {
  filepath: string;
  content: string;
}

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @Input('filesObservable') filesObservable: Observable<Array<ISampleFile>>;

  constructor() { }

  ngOnInit() {
    this.filesObservable.subscribe(files => {
      console.log('nav-bar has recieved all files', files);
    });
  }

}

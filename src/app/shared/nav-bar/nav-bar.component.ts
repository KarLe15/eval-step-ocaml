import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {FileElement} from '../../file-manager/model/element';
import {NavigationExtras, Router} from '@angular/router';


@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @Input('filesObservable') filesObservable: Observable<Array<FileElement>>;
  navigationExtras: NavigationExtras;
  constructor(public router: Router) { }

  ngOnInit() {
    this.filesObservable.subscribe(files => {
      console.log('nav-bar has recieved all files', files);
      this.navigationExtras = {
        state: {
          data: files
        }
      };
    });
  }


  navigate() {
    this.router.navigate(['/exemples'], this.navigationExtras);
  }
}

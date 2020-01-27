import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'evalStep';

  myStyle: object = {};
  myParams: object = {};
  width = 100;
  height = 100;

  ngOnInit() {
    this.myStyle = {
      position: 'fixed',
      width: '100%',
      height: '100%',
      'z-index': -1,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    };

    this.myParams = {
      particles: {
        number: {
          value: 200,
        },
        size: {
          value: 7
        },
        color: {
          value: '#392df5'
        },
        shape: {
          polygon: {
            nb_sides: 9
          },
          type: 'circle',
        },
        line_linked: {
          distance: 200
        }
      }
    };
  }
}

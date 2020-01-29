import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {
  env = `
    "env0": {
          "fact": {
            "corec": [],
            "expr": {
              "expr":
                "fun n ->\\n  let rec loop n rep = match n with | 0 -> rep | _ -> loop (n - 1) (n * rep) in\\n  loop n 1"
            }
          }
        }
  `;
  expr = `
    ((fact 5)[@env0 ])
  `
  constructor() { }

  ngOnInit() {
  }

  onPrevious() {
    console.log('previous');
  }

  onNext() {
    console.log('next');
  }
}

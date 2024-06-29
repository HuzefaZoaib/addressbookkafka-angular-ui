import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrl: './progress-bar.component.css'
})
export class ProgressBarComponent implements OnInit {

  @Input()
  expectedTimeSec:number = 100; 

  @Input()
  callback!:any; 

  step: number = 100;   // default

  percent: number = 0;

  ngOnInit() {
    if(this.expectedTimeSec === -1) {
      this.percent = 100;
      return;
    }

    this.calcStep();
    this.timedProgressBar();
  }

  interval:any;

  timedProgressBar() {
    this.interval = setInterval(() => {
      this.percent = this.percent + this.step;
      if(Math.round(this.percent) === 100) {
        this.completeProgressBar();
      }
    }, 1000);
  }
  
  completeProgressBar() {
    this.percent = 100;
    clearInterval(this.interval);
    this.callback();
  }

  calcStep() {
    this.step = 100/this.expectedTimeSec;   // 100/50 - 100 is the percentage and 50 is the seconds
  }
}

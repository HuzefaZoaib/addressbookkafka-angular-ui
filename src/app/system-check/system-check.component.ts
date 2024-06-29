import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { environment } from '../../environments/environment';
import { SystemCheckState } from './system-check-state';

@Component({
  selector: 'app-system-check',
  templateUrl: './system-check.component.html',
  styleUrl: './system-check.component.css'
})
export class SystemCheckComponent implements OnInit {

  readonly START_KAFKA_INSTANCE_URL:string = environment.START_KAFKA_INSTANCE_URL;
  readonly CHECK_HEALTH_KAFKA_INSTANCE_URL:string = environment.CHECK_HEALTH_KAFKA_INSTANCE_URL;
  readonly TRIGGER_DATA_INTO_KAFKA_INSTANCE_URL:string = environment.TRIGGER_DATA_INTO_KAFKA_INSTANCE_URL;
  readonly KAFKA_INSTANCE_MONITORING_URL:string = environment.KAFKA_INSTANCE_MONITORING_URL;

  constructor(private router:Router,
    public state:SystemCheckState
  ){}

  ngOnInit() {
    // Check System Status, If system is up then mark state to true
    // and system is down them mark state to false

    fetch(this.CHECK_HEALTH_KAFKA_INSTANCE_URL, {signal: AbortSignal.timeout(2000)})
      .then(data => {
        console.log("SystemCheckComponent.ngOnInit.fetch.then with data:"+data);
        this.state.setSystemUp();
      }).catch(error => {
        console.log("SystemCheckComponent.ngOnInit.fetch.catch with error:"+error);
        this.state.setSystemDown();
      });
  }

  startKafkaInstance() {
    this.state.isKafkaInstanceTriggered = true;
    fetch(this.START_KAFKA_INSTANCE_URL).then(data => {
      console.log("SystemCheckComponent.startKafkaInstance.fetch.then with data: "+data);
      //this.state.isKafkaInstanceStarted = true;
    });
  }

  startKafkaInstanceCompleted = () => {
    this.state.isKafkaInstanceStarted = true;
    this.state.expectedTimeForSystemUpSec = -1;
    this.checkHealthKafkaInstance();
  }

  checkHealthKafkaInstance() {
    fetch(this.CHECK_HEALTH_KAFKA_INSTANCE_URL).then(data => {
      this.state.isKafkaInstanceHealthy = true;
    });

    this.state.isKafkaInstanceHealthChecked = true;
  }

  triggerDataIntoKafka() {
    fetch(this.TRIGGER_DATA_INTO_KAFKA_INSTANCE_URL).then(data => {
      this.state.isDataTriggeredToKafkaInstance = true;
    });
  }

  triggerDataIntoKafkaComplted = () => {
    this.state.isDataTriggeredToKafkaCompleted = true;
    this.state.expectedTimeForDataLoadToKakfaSec = -1;
  }

  navigateToList() {
    this.router.navigate(['list']);
  }
}

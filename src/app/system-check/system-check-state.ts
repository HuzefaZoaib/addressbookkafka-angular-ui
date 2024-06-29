import { Injectable } from "@angular/core";

@Injectable({
    providedIn: "root"
})
export class SystemCheckState {

  isKafkaInstanceTriggered:boolean = false;
  isKafkaInstanceStarted:boolean = false;
  isKafkaInstanceHealthChecked:boolean = false;
  isKafkaInstanceHealthy:boolean = false;
  isDataTriggeredToKafkaInstance:boolean = false;
  isDataTriggeredToKafkaCompleted:boolean = false;
  
  expectedTimeForSystemUpSec:number = 60;
  expectedTimeForDataLoadToKakfaSec:number = 60;

  setSystemUp() {
    this.isKafkaInstanceTriggered = true;
    this.isKafkaInstanceStarted = true;
    this.isKafkaInstanceHealthChecked = true;
    this.isKafkaInstanceHealthy = true;
    this.isDataTriggeredToKafkaInstance = true;
    this.isDataTriggeredToKafkaCompleted = true;
    
    this.expectedTimeForSystemUpSec = -1;
    this.expectedTimeForDataLoadToKakfaSec = -1;  
  }

  setSystemDown() {
    this.isKafkaInstanceTriggered = false;
    this.isKafkaInstanceStarted = false;
    this.isKafkaInstanceHealthChecked = false;
    this.isKafkaInstanceHealthy = false;
    this.isDataTriggeredToKafkaInstance = false;
    this.isDataTriggeredToKafkaCompleted = false;
    
    this.expectedTimeForSystemUpSec = 60;
    this.expectedTimeForDataLoadToKakfaSec = 60;  
  }
}
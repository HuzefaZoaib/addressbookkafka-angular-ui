import { Component, OnInit } from '@angular/core';
import { FetchService } from '../fetch.service';
import { AddressBookKafka } from '../address-book-kafka';
import { FetchedAddressBooks } from './fetched-addressbooks';

@Component({
  selector: 'app-fetch-periodic-list',
  templateUrl: './fetch-periodic-list.component.html',
  styleUrl: './fetch-periodic-list.component.css'
})
export class FetchPeriodicListComponent implements OnInit {

  constructor(private service:FetchService, 
              public fetchedAddressBooks:FetchedAddressBooks) {}

  ngOnInit() {
    this.timedFetch();
    //this.fetch();
  }

  fetch = () => {
    console.log("fetch Invoked.");

    this.service.fetchFromConsumer().subscribe( (_addressBooks:AddressBookKafka[]) => {
      if(_addressBooks.length == 0) {
        this.pauseFetch();
      } else {
        _addressBooks.forEach(addressBook => this.fetchedAddressBooks.addAtZeroIndex(addressBook));
      }
    });
  }

  interval:any;

  timedFetch() {
    this.interval = setInterval(this.fetch, 5000);
  }
  
  pauseFetch() {
    clearInterval(this.interval);
  }
}

import { Injectable } from "@angular/core";
import { AddressBookKafka } from "../address-book-kafka";

@Injectable({
    providedIn: "root"
})
export class FetchedAddressBooks {

    addressBooks:AddressBookKafka[] = [];

    addAtZeroIndex(addressBook:AddressBookKafka) {
        this.addressBooks.unshift(addressBook);
    }
}
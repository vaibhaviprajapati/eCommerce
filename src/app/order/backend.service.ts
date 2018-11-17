/**
 * @author Vaibhavi Prajapati
 */
import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';

@Injectable()
export class BackendService implements InMemoryDbService {

  /**Create database of order management
   * it is fack data for this I am using in-memory-web-api
   */
  createDb() {
    const orders = [
      {
        id: 11,
        name: 'vaibhavi',
        quantity: 2,
        size: 'xl',
        price: 200,
        email: 'pvaibhavi.104@gmail.com',
        phone: 8401953389,
        address: 'Bili Anavil Street',
        city: 'Bilimora',
        state: 'Gujrat',
      },
      {
        id: 12,
        name: 'Mahima',
        quantity: 2,
        size: 'xxl',
        price: 500,
        email: 'patelmahima@gmail.com',
        phone: 8845123695,
        address: 'Segvi',
        city: 'Valsad',
        state: 'Gujrat',
      },
      {
        id: 13,
        name: 'pallavi',
        quantity: 1,
        size: 'm',
        price: 400,
        email: 'patelpallavi.104@gmail.com',
        phone: 9956234152,
        address: 'Gunjan',
        city: 'vapi',
        state: 'Gujrat',
      }
    ];
    return {orders};
  }



}

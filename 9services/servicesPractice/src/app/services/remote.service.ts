import { EventEmitter } from '@angular/core';


export class RemoteService {
  names: string[] = [
    'Mobile',
    'wallet',
    'RPI',
    'BPI',
    'Android',
    'laptop'
  ];

  em: EventEmitter<string>;
  constructor() {

    this.em = new EventEmitter<string>();
   }

   getNames() {
     return this.names;
   }

   addName(nm: string) {
     this.names.push(nm);
   }


   publish( nm: string) {
     this.em.emit(nm);
   }

   subscribe(callBack: any) {
     this.em.subscribe(callBack);
   }
}


export class RemoteService {
  names: string[] = [
    'Mobile',
    'wallet',
    'RPI',
    'BPI',
    'Android',
    'laptop'
  ];
  constructor() { }

   getNames() {
     return this.names;
   }

   addName(nm: string) {
     this.names.push(nm);
   }
}

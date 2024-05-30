// import { Component } from '@angular/core';
// import { FormGroup } from '@angular/forms';

// @Component({
//   selector: 'app-page1',
//   templateUrl: './page1.component.html',
//   styleUrl: './page1.component.scss'
// })
// export class Page1Component {
// actors: any;
// save() {
// throw new Error('Method not implemented.');
// }
//   parentInputData = '';
//   childInputData: any;
// objForm: FormGroup<any> | undefined;

//   setData(){
//     this.parentInputData = 'Parent button clicked!';
//   }

//   receiveChildData(data: string){
//     this.childInputData = data;
//   }
// }


import { Component } from '@angular/core';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component  {
  actors = [
    { name: 'Tanja Grandits' },
    { name: 'Jamie Oliver' },
    { name: 'Jamie Oliver' },
    { name: 'Jamie Oliver' },
  ];

  constructor() { }

  
}

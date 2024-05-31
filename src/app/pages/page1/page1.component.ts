
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component  {
actor: any;
navigateToPage2() {
throw new Error('Method not implemented.');
}
  actors = [
    { name: 'Tanja Grandits' },
    { name: 'Jamie Oliver' },
    { name: 'Jamie Oliver' },
    { name: 'Jamie Oliver' },
  ];
}

  export class ToolbarComponent {
    constructor(private router: Router) {}
  
    navigateToPage2() {
      this.router.navigate(['/page2']);
  
}
  }
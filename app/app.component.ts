import { Component,} from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'root',
  template: `<h1>Parent-Level Routing</h1>
  <nav>
    <a routerLink="/routeA" >RouteA View</a>
    <a routerLink="/routeB">RouteB View</a>
  </nav>
  <br>
  <router-outlet></router-outlet>`,
  styleUrls: ['app.component.css']
})
export class AppComponent {
  

}  

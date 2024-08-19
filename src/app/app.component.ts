import { Component } from '@angular/core';
import { LoaderService } from './services/loading.service';

@Component({
  selector: 'kuntur-mf-cards',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kuntur-mf-cards';
  constructor(public loaderService: LoaderService){

  }
}

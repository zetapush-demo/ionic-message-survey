import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html'
})
export class TabsPage {
  constructor(private route: ActivatedRoute) {
    route.data.subscribe((data) => console.log('TabsPage', data));
  }
}

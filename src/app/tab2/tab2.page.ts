import { Component } from '@angular/core';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  category
  constructor() {
    this.category = 'viagens'
  }

  segmentChanged(ev: any) {
    const valorSegment = ev.detail.value
    this.category = valorSegment
    console.log('Segment changed', this.category);
  }

}

import { Component, VERSION, OnChanges } from '@angular/core';

@Component({
  selector: 'sample-main',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css'],
})
export class SampleComponent  {
  name = 'Sample';

  ngOnchanges(chnges SimpleChnages)
  {
    console.log(chnges);

  }
}

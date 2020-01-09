import { Component, Input } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'state',
  templateUrl: './state.component.html'
})
export class StateComponent  {

  name: string;

  constructor(private readonly activatedRoute: ActivatedRoute ){
    this.activatedRoute.paramMap
    .subscribe((map: ParamMap) => {
      this.name = map.get('name');
    })
  }
}

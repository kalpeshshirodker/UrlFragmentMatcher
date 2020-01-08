import { Component, Input } from '@angular/core';
import { ActivatedRoute , Router} from '@angular/router';

@Component({
  selector: 'states',
  templateUrl: 'states.component.html'
})
export class StatesComponent  {
  states = ['Maharashtra', 'Goa', 'Karanataka'];

constructor(private readonly activatedRoute: ActivatedRoute,
private readonly router: Router  ){

}
  onEditState(state) {
    this.router.navigateByUrl(state);
  }
}

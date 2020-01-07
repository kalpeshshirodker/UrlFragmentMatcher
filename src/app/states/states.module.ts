import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { StateComponent } from "./state.component";
import { StatesComponent } from "./states.component";

import { urlFragmentMatcher, RouteMatchService } from "../../service/route-match.service";

const routes: Routes = [
  {
    component: StateComponent,
    matcher: urlFragmentMatcher,
    data : {
      matcherconfig : {
        fragment: 'new'
      }
    }
  },
  {
    path: "",
    component: StatesComponent
  },
  // {
  //   path: "newstate",
  //   component: StateComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  declarations: [ StateComponent, StatesComponent],
  providers: [RouteMatchService],
  exports: [RouterModule]
})
export class StatesModule {
  constructor(private routeMatchService: RouteMatchService) {}
}
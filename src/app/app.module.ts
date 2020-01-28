import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";

import { AppComponent } from "./app.component";

import { StatesModule } from "./states/states.module";

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path: "",
        redirectTo: 'states',
        pathMatch: 'full'
      }
    ]),
    StatesModule
  ],
  declarations: [AppComponent],
  bootstrap: [AppComponent],
  exports: [RouterModule]
})
export class AppModule {}

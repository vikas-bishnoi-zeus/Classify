import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { ActionHeaderComponent } from './components/action-header/action-header.component';
import { QuestionControlPanelComponentComponent } from './components/question-control-panel-component/question-control-panel-component.component';
import { QuestionProgressComponent } from './components/question-progress/question-progress.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ActionHeaderComponent,
    QuestionControlPanelComponentComponent,
    QuestionProgressComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  exports: [],  // Export NavbarComponent
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

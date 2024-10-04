import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './pages/home/home.component';
import { ActionHeaderComponent } from './components/action-header/action-header.component';
import { QuestionControlPanelComponentComponent } from './components/question-control-panel-component/question-control-panel-component.component';
import { QuestionProgressComponent } from './components/question-progress/question-progress.component';
import { MainComponent } from './components/main/main.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ActionHeaderComponent,
    QuestionControlPanelComponentComponent,
    QuestionProgressComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [],  // Export NavbarComponent
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

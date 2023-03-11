import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { MainPageComponent } from './main-page/main-page.component';
import { WeddingFlowComponent } from './wedding-flow/wedding-flow.component';
import { MapInfoComponent } from './map-info/map-info.component';
import { NoticeComponent } from './notice/notice.component';
import { MealComponent } from './meal/meal.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    WeddingFlowComponent,
    MapInfoComponent,
    NoticeComponent,
    MealComponent
  ],
  imports: [
    BrowserModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

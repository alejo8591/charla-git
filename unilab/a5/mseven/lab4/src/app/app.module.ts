import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {MovileListPage} from "../pages/movile-list/movile-list";
import {MovileDetailPage} from "../pages/movile-detail/movile-detail";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MovileListPage,
    MovileDetailPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MovileListPage,
    MovileDetailPage
  ],
  providers: []
})
export class AppModule {}

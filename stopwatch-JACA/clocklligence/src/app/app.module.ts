import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { StopwatchComponent } from './stopwatch/stopwatch.component';
import { CountdownComponent } from './countdown/countdown.component';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzMessageModule } from 'ng-zorro-antd/message';
import {
  ArrowLeftOutline,
  PauseOutline,
  CaretRightOutline,
  ReloadOutline,
  StopOutline,
  UpOutline,
  DownOutline,
  StepForwardOutline,
} from '@ant-design/icons-angular/icons';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StopwatchComponent,
    CountdownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    NzButtonModule,
    NzIconModule,
    NzMessageModule,
    NzIconModule.forRoot(
      [
        ArrowLeftOutline,
        PauseOutline,
        CaretRightOutline,
        ReloadOutline,
        StopOutline,
        UpOutline,
        DownOutline,
        StepForwardOutline,
      ]
    ),
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent]
})
export class AppModule { }

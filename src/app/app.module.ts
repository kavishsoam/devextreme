import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DxFormModule,
          DxSelectBoxModule,
          DxButtonModule,
          DxValidatorModule,
          DxDateBoxModule,
          DxPopupModule,
          DxDataGridModule,
          DxChartModule,
        DxValidationSummaryModule,
        } from 'devextreme-angular';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServicesService } from './services.service';
import { LoginPageComponent } from './Pages/login-page/login-page.component';
import { ChartsComponent } from './Pages/charts/charts.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    DxFormModule,
    FormsModule,
    DxButtonModule,
    AppRoutingModule,
    DxValidatorModule,
    DxSelectBoxModule,
    DxDateBoxModule,
    DxPopupModule,
    DxDataGridModule,
    DxChartModule,
    DxValidationSummaryModule,
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }

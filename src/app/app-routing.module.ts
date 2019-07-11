import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginPageComponent } from './Pages/login-page/login-page.component'
import { ChartsComponent } from './Pages/charts/charts.component';

const routes: Routes = [
  {path: '', redirectTo:'/loginPage' ,pathMatch : 'full'},
  {path : 'charts', component : ChartsComponent},
  {path : 'loginPage', component : LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

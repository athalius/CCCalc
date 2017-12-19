import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CalculatorComponent } from 'app/calculator/calculator.component'

const routes: Routes = [
  { path: '', redirectTo: '/calculator', pathMatch: 'full' },
  { path: 'calculator', component: CalculatorComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModuleModule { }

import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './home/home.component';
import { AngularPipesComponent } from './angular-pipes/angular-pipes.component';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';
import { CalculateAreaCirclePipe } from './custom-pipes.pipe';

const routes: Routes = [{
  path: '',
  component: HomeComponent,
  children: [{
    path: '',
    redirectTo: 'angular-pipes',
    pathMatch: 'full'
  }, {
    path: 'angular-pipes',
    component: AngularPipesComponent
  },{
    path: 'custom-pipes',
    component: CustomPipesComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: []
})
export class PipesRoutingModule { }

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';

import { PipesRoutingModule } from './pipes-routing.module';
import { HomeComponent } from './home/home.component';
import { AngularPipesComponent } from './angular-pipes/angular-pipes.component';
import { CustomPipesComponent } from './custom-pipes/custom-pipes.component';
import { CalculateAreaCirclePipe } from './custom-pipes.pipe';
import { CalculateAreaRectanglePipe } from './custom-pipes.pipe';
import { ReverseStringPipe } from './custom-pipes.pipe';

@NgModule({
  imports: [
    CommonModule,
    PipesRoutingModule,
    SharedModule
  ],
  declarations: [HomeComponent,AngularPipesComponent,CustomPipesComponent,CalculateAreaCirclePipe,CalculateAreaRectanglePipe,ReverseStringPipe]
})
export class PipesModule { }

import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';

const modules = [
  MatToolbarModule,
  MatInputModule,
  MatButtonModule
]

@NgModule({
    imports: modules,
    exports: modules 
})
export class MaterialModule {}
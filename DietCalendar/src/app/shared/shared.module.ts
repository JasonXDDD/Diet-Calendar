import { NgModule } from '@angular/core';

import { SharedRoutingModule } from './shared-routing.module';
import { TinyEditorComponent } from './tiny-editor/tiny-editor.component';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [TinyEditorComponent],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [TinyEditorComponent]

})
export class SharedModule { }

import { NgModule } from '@angular/core';

import { SharedRoutingModule } from './shared-routing.module';
import { TinyEditorComponent } from './tiny-editor/tiny-editor.component';
import { CommonModule } from '@angular/common';
import { HtmlPipe } from './pipe/html.pipe';
import { LimitPipe } from './pipe/limit.pipe';


@NgModule({
  declarations: [TinyEditorComponent, LimitPipe, HtmlPipe],
  imports: [
    CommonModule,
    SharedRoutingModule
  ],
  exports: [TinyEditorComponent, HtmlPipe]

})
export class SharedModule { }

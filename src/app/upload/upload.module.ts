import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadRoutingModule } from './upload-routing.module';
import { ImageComponent } from './image/image.component';
import { FileComponent } from './file/file.component';


@NgModule({
    declarations: [ImageComponent, FileComponent],
  exports: [
    FileComponent,
    ImageComponent
  ],
    imports: [
        CommonModule,
        UploadRoutingModule
    ]
})
export class UploadModule { }

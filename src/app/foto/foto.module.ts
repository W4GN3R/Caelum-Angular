import { NgModule } from '@angular/core';
import { FotoComponent } from './foto.component';
import { FilterTitlePipe } from './foto.pipes'

@NgModule({
    declarations: [
        FotoComponent,
        FilterTitlePipe
    ],

    exports: [
        FotoComponent,
        FilterTitlePipe
    ]
})

export class FotoModule {
    
}
import { NgModule } from '@angular/core';
import { FotoComponent } from './foto.component';
import { FotoService } from './foto.service';
import { FilterTitlePipe } from './foto.pipes';

@NgModule({
    declarations: [
        FotoComponent,
        FilterTitlePipe
    ],

    exports: [
        FotoComponent,
        FilterTitlePipe
    ],
    
    providers: [
        FotoService
    ]
})

export class FotoModule {
    
}
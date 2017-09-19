import { Pipe, PipeTransform } from '@angular/core';
import { FotoComponent } from './foto.component';

@Pipe({ name: 'FilterTitlePipe' })
export class FilterTitlePipe implements PipeTransform {
    transform(fotos: FotoComponent[], args: string) {
        return fotos.filter( foto => {
            return foto.titulo.toLowerCase().includes(args.toLowerCase()) 
        });
    }
}

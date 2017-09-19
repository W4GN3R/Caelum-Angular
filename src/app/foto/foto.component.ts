import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-foto',
    templateUrl: './foto.component.html',
    styleUrls: ['./foto.component.css']
})

export class FotoComponent {
    @Input() titulo;
    @Input() url;
    @Input() descricao;
}
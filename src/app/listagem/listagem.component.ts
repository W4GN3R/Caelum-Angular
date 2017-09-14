import 'rxjs/add/operator/map';
import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

    title: String = 'Caelum Pic';
    fotos: Object[];
  
    constructor(http: Http) {
      http.get('http://localhost:3000/v1/fotos')
        .map( foto => foto.json() )
        .subscribe(
          fotos => this.fotos = fotos,
          error => console.log(error)
        )
    }

  ngOnInit() {
    
  }
}

import { Http, Headers } from '@angular/http';
import { Component } from '@angular/core';
import { FotoComponent } from './../foto/foto.component';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  foto: FotoComponent = new FotoComponent;
  http: Http;

  constructor(http: Http) {
    this.http = http;
  }

  cadastrar(event) {
    event.preventDefault();

    const headers = new Headers;
    headers.append('Content-type', 'application/json')

    this.http.post('http://localhost:3000/v1/fotos', JSON.stringify(this.foto), {headers})
      .subscribe(
        res => console.log(res),
        error => console.log(error)
      )
  }
}

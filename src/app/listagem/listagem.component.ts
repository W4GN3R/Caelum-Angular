import { FotoComponent } from './../foto/foto.component';
import 'rxjs/add/operator/map';
import { Component, OnInit } from '@angular/core';
import { FotoService } from './../foto/foto.service';

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {
  service: FotoService;
  title: String = 'Caelum Pic';
  fotos: Object[] = [];
  menssagem: string = '';
  
  constructor(service: FotoService) {
    this.service = service;

    this.service
      .lista()
      .subscribe(
        fotos => this.fotos = fotos,
        error => console.log(error)
      )
  }

  remove(foto: FotoComponent) {
    this.service.remove(foto)
      .subscribe(
        (fotos) => {
          let novasFotos = this.fotos.slice(0);
          let indice = novasFotos.indexOf(foto);
          novasFotos.splice(indice, 1);
          this.fotos = novasFotos;
          this.menssagem = 'Imagem removida com sucesso';
          console.log('removida com sucesso');

          window.setTimeout( () => this.menssagem = '', 3000);
        },
        erro => {
          console.log(erro);
          this.menssagem = 'Erro ao remover imagem';
        }
      )
  }
  
  ngOnInit() {
    
  }
}

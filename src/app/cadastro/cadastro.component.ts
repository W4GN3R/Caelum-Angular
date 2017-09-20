import { Component } from '@angular/core';
import { FotoComponent } from './../foto/foto.component';
import { FotoService } from './../foto/foto.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent {
  foto: FotoComponent = new FotoComponent;
  meuForm: FormGroup;
  fb: FormBuilder;
  service: FotoService;
  mensagem: string = '';

  constructor(service: FotoService, fb: FormBuilder, route: ActivatedRoute) {
    this.service = service;

    this.meuForm = fb.group({
      titulo: ['', Validators.compose(
        [Validators.required, Validators.minLength(4)]
      )],
      url: ['', Validators.required],
      descricao: ['']
    });

    route.params.subscribe(params => {
      let id = params['id'];
      if( id ) {
        this.service.buscaPorId(id)
          .subscribe(
            foto => this.foto = foto,
            erro => console.log(erro)
          )
      }
    });
  }

  cadastrar(event) {
    event.preventDefault();

    this.service.cadastra(this.foto)
      .subscribe(
        res => {
          this.foto = new FotoComponent;
          this.mensagem = 'Foto armazenada com sucesso';
          window.setTimeout( () => this.mensagem = '', 3000 )
        },
        error => {
          console.log(error);
          this.mensagem = 'Foto não pode ser armazenada';
        }
      )
  }
}

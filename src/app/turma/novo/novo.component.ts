import { Component, OnInit } from '@angular/core';
import { TurmaService } from '../turma.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators} from '@angular/forms';
import { Escola } from '../../escola/escola';
import { EscolaService } from '../../escola/escola.service';

@Component({
  selector: 'app-novo',
  templateUrl: './novo.component.html',
  styleUrls: ['./novo.component.css']
})
export class NovoComponent implements OnInit {

  form: FormGroup;
  escolaSelecionada = '';
  escolas: Escola[] = [];

  constructor(
    public turmaService: TurmaService,
    private router: Router,
    public escolaService: EscolaService
  ) { }

  ngOnInit(): void {
    this.escolaService.listarTodos().subscribe((data: Escola[])=>{
      this.escolas = data;
      this.escolaSelecionada = data[0].id;
    })

    this.form = new FormGroup({
      escolaId: new FormControl(''),
      ano: new FormControl('', Validators.required),
      curso: new FormControl('', Validators.required),
      serie: new FormControl('', Validators.required),
      nome: new FormControl('', Validators.required)
    });
  }
   
  get f(){
    return this.form.controls;
  }

  onEscolaSelecionada(event){  
    const value = event.target.value;
   this.escolaSelecionada = value;
}
    
  salvar(){
    console.log(this.form.value);
    this.turmaService.inserir({...this.form.value, escolaId:this.escolaSelecionada}).subscribe(res => {
         this.router.navigateByUrl('turma/index');
    })
  }
}

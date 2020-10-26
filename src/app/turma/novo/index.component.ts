import { Component, OnInit } from '@angular/core';
import { Escola } from '../../escola/escola';
import { EscolaService } from '../../escola/escola.service';
import { TurmaService } from '../turma.service';
import { Turma } from '../turma';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})

export class IndexComponent implements OnInit {
  escolaSelecionada = '';
  escolas: Escola[] = [];
  turmas: Turma[] = [];
  constructor(public escolaService: EscolaService, public turmaService: TurmaService) { }

  ngOnInit(): void {
    this.escolaService.listarTodos().subscribe((data: Escola[])=>{
      this.escolas = data;
      this.escolaSelecionada = this.escolas[0].id;
    })
  }

  listarTurmasDaEscola(){
    this.turmaService.listarTurmasDaEscola(this.escolaSelecionada).subscribe((data: Turma[])=>{
      this.turmas = data;
    })
  }

  excluirTurma(id){
    this.escolaService.excluir(id).subscribe(res => {
         this.turmas = this.turmas.filter(item => item.id !== id);
    })
  }

  onEscolaSelecionada(event){  
    const value = event.target.value;
   this.escolaSelecionada = value;
}

}

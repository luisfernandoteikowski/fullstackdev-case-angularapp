import { Component, OnInit } from '@angular/core';
import { EscolaService } from '../escola.service';
import { Escola } from '../escola';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  escolas: Escola[]=[];

  constructor(public escolaService: EscolaService) { }

  ngOnInit(): void {
    this.escolaService.listarTodos().subscribe((data: Escola[])=>{
      this.escolas = data;
      console.log(this.escolas);
    })
  }

  excluirEscola(id){
    this.escolaService.excluir(id).subscribe(res => {
         this.escolas = this.escolas.filter(item => item.id !== id);
         console.log('Escola excluida com sucesso!');
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { TurmaService } from '../turma.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Turma } from '../turma';
import { Escola } from '../../escola/escola';
import { EscolaService } from '../../escola/escola.service';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
})
export class EditarComponent implements OnInit {
  id: string;
  form: FormGroup;
  escolaSelecionada = '';
  escolas: Escola[] = [];
  turma: Turma;

  constructor(
    public turmaService: TurmaService,
    private route: ActivatedRoute,
    private router: Router,
    public escolaService: EscolaService
  ) {}

  ngOnInit(): void {
    this.escolaSelecionada = this.route.snapshot.params['escolaId'];
    this.id = this.route.snapshot.params['turmaId'];
    this.escolaService.listarTodos().subscribe((data: Escola[]) => {
      this.escolas = data;
    });

    this.turmaService
      .buscar(this.escolaSelecionada, this.id)
      .subscribe((data: Turma) => {
        this.turma = data;
      });

    this.form = new FormGroup({
      escolaId: new FormControl(''),
      ano: new FormControl('', Validators.required),
      curso: new FormControl('', Validators.required),
      serie: new FormControl('', Validators.required),
      nome: new FormControl('', Validators.required),
    });
  }

  get f() {
    return this.form.controls;
  }

  salvar() {
    this.turmaService
      .atualizar(this.escolaSelecionada, this.id, {
        ...this.form.value,
        escolaId: this.escolaSelecionada,
      })
      .subscribe((res) => {
        this.router.navigateByUrl('turma/index');
      });
  }
}

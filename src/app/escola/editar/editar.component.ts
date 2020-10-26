import { Component, OnInit } from '@angular/core';
import { EscolaService } from '../escola.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Escola } from '../escola';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css'],
})
export class EditarComponent implements OnInit {
  id: string;
  escola: Escola;
  form: FormGroup;

  constructor(
    public escolaService: EscolaService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['escolaId'];
    this.escolaService.buscar(this.id).subscribe((data: Escola) => {
      this.escola = data;
    });

    this.form = new FormGroup({
      nome: new FormControl('', [Validators.required]),
      numeroInep: new FormControl('', Validators.required),
    });
  }

  get f() {
    return this.form.controls;
  }

  salvar() {
    console.log(this.form.value);
    this.escolaService.atualizar(this.id, this.form.value).subscribe((res) => {
      this.router.navigateByUrl('escola/index');
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { EscolaService } from '../escola.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-novo',
  templateUrl: './novo.component.html',
  styleUrls: ['./novo.component.css'],
})
export class NovoComponent implements OnInit {
  form: FormGroup;

  constructor(public escolaService: EscolaService, private router: Router) {}

  ngOnInit(): void {
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
    this.escolaService.inserir(this.form.value).subscribe((res) => {
      this.router.navigateByUrl('escola/index');
    });
  }
}

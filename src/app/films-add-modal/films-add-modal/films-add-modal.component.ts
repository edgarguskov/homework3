import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { FilmsDetailsService } from '../../../common/services/films-details.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-films-add-modal',
  templateUrl: './films-add-modal.component.html',
  styleUrls: ['./films-add-modal.component.scss'],
})

export class FilmsAddModalComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private filmsDetailsService: FilmsDetailsService,
              private dialog: MatDialog) {
    this.form = this.fb.group({
      name: ['', [Validators.required]],
      year: ['', [Validators.required]],
      grosses: ['', [Validators.required]],
      actors: this.fb.array([]),
      image: ['', [Validators.required]],
    });
  }

  onSave(): void {
    this.filmsDetailsService.addFilm({ ...this.form.value, id: Date.now(), onSite: Date.now() });
    this.dialog.closeAll();
  }

  addActor() {
    this.actorsGetter.push(new FormControl(''));
  }

  isValidForm(): boolean {
    return this.form.invalid || this.form.pristine;
  }

  get actorsGetter(): FormArray {
    return this.form.controls['actors'] as FormArray;
  }
}

import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CatsService } from '../services/cats.service';

@Component({
  selector: 'app-cat-form',
  templateUrl: './cat-form.component.html',
  styleUrls: ['./cat-form.component.scss']
})
export class CatFormComponent implements OnInit {

  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private service: CatsService,
    private snackBar: MatSnackBar,
    private location: Location
  ) {
    this.form = this.formBuilder.group({
      name: [null],
      personality: [null]
    });
  }

  ngOnInit(): void {
  }

  onSubmit(){
    this.service.save(this.form.value)
      .subscribe(
        data => {
          this.onSuccess();
          console.log(data);
        },
        error => {
          this.onError();
          console.log(error);
        }
      );
  }

  onCancel() {
    this.location.back();
  }

  private onSuccess() {
    this.snackBar.open('Cat registered successfuly :)', '', {
      duration: 5000
    });
    this.onCancel();
  }

  private onError() {
    this.snackBar.open('There was an error when saving', '', {
      duration: 5000
    });
  }

}

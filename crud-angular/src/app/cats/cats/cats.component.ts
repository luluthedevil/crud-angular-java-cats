import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

import { Cat } from '../model/cat';
import { CatsService } from '../services/cats.service';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss']
})
export class CatsComponent implements OnInit {

  cats$: Observable <Cat[]>;
  displayedColumns = ['name', 'personality', 'actions'];

  constructor(
    private catsService: CatsService,
    public dialog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.cats$ = this.catsService.list().pipe(
      catchError( error => {
        this.onError("Couldn't get data");
        console.log(error);
        return of([]);
      }
      )
    );
  }

  onError(errorMsg: string) {
    const dialogRef = this.dialog.open(ErrorDialogComponent, {
      data: errorMsg
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
  }

  onAdd() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}

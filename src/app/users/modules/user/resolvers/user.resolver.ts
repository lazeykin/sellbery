import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserDataService } from '../../../services/user-data.service';
import { User } from '../../../models/user.model';

const notFound = '404';

@Injectable()
export class UserResolver implements Resolve<User> {
  constructor(
    private userDataService: UserDataService,
    private router: Router
  ) {}

  public resolve(route: ActivatedRouteSnapshot): Observable<User> {
    const id = +route.params.id;

    return this.userDataService.getUser(id).pipe(
      catchError((err) => {
        this.router.navigate(['/']);
        alert(err);

        return EMPTY;
      })
    );
  }
}

import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../../../models/user.model';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserComponent implements OnInit {
  public user$: Observable<User>;

  constructor(private route: ActivatedRoute) {}

  public ngOnInit(): void {
    this.user$ = this.route.data.pipe(map((data) => data.user));
  }
}

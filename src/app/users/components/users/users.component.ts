import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { UserDataService } from '../../services/user-data.service';
import { Observable } from 'rxjs';
import { User } from '../../models/user.model';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersComponent implements OnInit {
  public users$: Observable<User[]>;

  constructor(private userDataService: UserDataService) {}

  public ngOnInit(): void {
    this.users$ = this.userDataService.getUsers();
  }

  public onFilterChange(query: string): void {
    this.users$ = this.userDataService.filterUser(query);
  }
}

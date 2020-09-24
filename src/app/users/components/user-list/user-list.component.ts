import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { User } from '../../models/user.model';
import { trackById } from '../../../utils/track-bu-id';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserListComponent {
  @Input() users: User[];

  public trackBy = trackById;
}

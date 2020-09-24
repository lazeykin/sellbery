import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './components/users/users.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserDataService } from './services/user-data.service';
import { FilterComponent } from './components/filter/filter.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UsersComponent, UserListComponent, FilterComponent],
  imports: [CommonModule, UsersRoutingModule, ReactiveFormsModule],
  providers: [UserDataService],
})
export class UsersModule {}

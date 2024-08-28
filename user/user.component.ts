import { Component } from '@angular/core';
import { DUMMY_USERS } from './dummy-user';
const randromIndex = Math.floor(Math.random() *  DUMMY_USERS.length)

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
   selectedUser = DUMMY_USERS[randromIndex];
   get imagePath(){
    return 'assets/users/'+ this.selectedUser.avatar;
   }
   onSelectorUser(){
    const randromIndex = Math.floor(Math.random() *  DUMMY_USERS.length)
    this.selectedUser = DUMMY_USERS[randromIndex];
   }
}

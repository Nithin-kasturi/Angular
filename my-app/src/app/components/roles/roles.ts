import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  imports: [FormsModule],
  templateUrl: './roles.html',
  styleUrl: './roles.css',
})
export class Roles {

  firstName:string="Kasturi";
  lastName:string="Nithin"
  greetingMessage(){
    alert(this.firstName+" "+this.lastName);
  }
}

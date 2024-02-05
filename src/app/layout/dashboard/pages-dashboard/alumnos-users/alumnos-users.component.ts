import { Component, EventEmitter, Output } from '@angular/core';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: string;

}


@Component({
  selector: 'app-alumnos-users',
  templateUrl: './alumnos-users.component.html',
  styleUrl: './alumnos-users.component.scss'
})
export class AlumnosUsersComponent {
  displayedColumns: string[] = ["id", "firstName", "lastName", "email", "role", "acciones"];
  dataSource: User[] =[
    {
    id: 1,
    firstName: "Claudia",
    lastName: "Sosa",
    email: "claudiasosa123@gmail.com",
    password:"sfddf",
    role: "ADM",
  },
  {
    id: 4578,
    firstName: "Romina",
    lastName: "Gomez",
    email: "RomiG@gmail.com",
    password:"sfddf",
    role: "ADM",
  }
  
  ];



  
  onUserSubmitted(ev: User): void {
     this.dataSource = [...this.dataSource, {...ev, id:new Date ().getTime() }] //creando el nuevo array que cxontendra lo ya escreito en la tabla+ lo q entre del form
  }

  eliminarUsuario(index: number): void {
    console.log(index); 
    this.dataSource = this.dataSource.filter((user, i) => i !== index);
  }
  @Output()
  editUser = new EventEmitter<User>();
  


  }


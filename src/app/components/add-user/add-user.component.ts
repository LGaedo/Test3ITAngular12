import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {



  user: User = {
    mail: '',
    tipoMusica: '',
    comentario: ''
  };
  submitted = false;
  seccion: number = 3;
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  saveUser(): void {
    const data = {
      mail: this.user.mail,
      tipoMusica: this.user.tipoMusica
    };

    if(this.user.tipoMusica === ''){
      this.submitted = false;
      this.seccion = 4;
      this.user = {
      mail: '',
      tipoMusica: '',
      comentario: ''
      }
    }else{

    this.userService.create(data)
      .subscribe(
        response => {
          var res:boolean;
          console.log(response);
        if(response.comentario == 'existe'){
          res= false;
          this.seccion=2;
        }else{
          this.seccion=1;
          res = true;
          }
          this.submitted =res;
        },
        error => {
          console.log(error);
        });
      }
  }

  newUser(): void {
    this.submitted = false;
    this.seccion = 3;
    this.user = {
      mail: '',
      tipoMusica: '',
      comentario: ''
    };
  }

}

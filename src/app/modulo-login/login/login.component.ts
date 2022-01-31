import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router
  ) {
  }

  username = '';
  password = '';

  ngOnInit() {
  }

  logar() {
    localStorage.setItem('USERNAME', this.username);
    localStorage.setItem("PASSWORD", this.password);
    this.router.navigate(['/loja'])
    /* 
    const users = [
      { login: 'thiago', password: '123' },
      { login: 'a', password: 'b' },
      { login: 'c', password: 'd' },
      { login: 'e', password: 'f' },
    ];

    const find = users.find(e => e.login == this.username && e.password == this.password);

    if (find) {
      localStorage.setItem('USER', this.username);
      this.router.navigate(['/loja']);
    } else {
      alert('Usuário não cadastrado!'); */
    }
  

}

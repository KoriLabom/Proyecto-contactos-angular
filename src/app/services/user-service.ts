import { inject, Injectable } from '@angular/core';
import { User } from '../interfaces/user';
import { Router } from '@angular/router';
import { LoginData } from '../interfaces/auth';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  
  user:User[]=[
    {
      firstName:"",
      lastName:"",
      password:"",
      email:""
    }
  ]
  }

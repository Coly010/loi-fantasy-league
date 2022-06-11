import { Injectable } from '@angular/core';
import {
  Auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from '@angular/fire/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: Auth) {}

  register({
    emailAddress,
    password,
  }: {
    emailAddress: string;
    password: string;
  }) {
    return createUserWithEmailAndPassword(this.auth, emailAddress, password);
  }

  login({
    emailAddress,
    password,
  }: {
    emailAddress: string;
    password: string;
  }) {
    return signInWithEmailAndPassword(this.auth, emailAddress, password);
  }
}

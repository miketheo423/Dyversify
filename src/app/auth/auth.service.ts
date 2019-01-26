import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  BASE_URL = 'http://localhost:2017'
    private currentSessionSubject: BehaviorSubject<any>;
    public currenSession: Observable<any>;

    constructor(private http: HttpClient) {
        this.currentSessionSubject = new BehaviorSubject<any>(JSON.parse(localStorage.getItem('currenSession')));
        this.currenSession = this.currentSessionSubject.asObservable();
    }

    public get currentUserValue() {
        return this.currentSessionSubject.value;
    }

    login(username: string, password: string) {
        return this.http.post<any>(`${this.BASE_URL}/public/login`, { username, password })
            .pipe(map(session => {
              console.log(session);
                // login successful if there's a jwt token in the session
                if (session.user && session.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentSession', JSON.stringify(session));
                    this.currentSessionSubject.next(session);
                }

                return session;
            }));
    }

    register(user) {
      return this.http.post<any>(`${this.BASE_URL}/public/login`, user)
                .pipe(map(session => {
                  console.log(session);
                    // login successful if there's a jwt token in the response
                    if (session && session.token) {
                        // store user details and jwt token in local storage to keep user logged in between page refreshes
                        localStorage.setItem('currenSession', JSON.stringify(session));
                        this.currentSessionSubject.next(session);
                    }

                    return session;
                }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currenSession');
        this.currentSessionSubject.next(null);
    }
}
import { Injectable } from "@angular/core";
import { Http } from "@angular/http";

@Injectable()
export class AuthService{
    constructor(private http: Http){}
    signUp(user: any){
        return this.http.post('http://127.0.0.1:8000/api/user/create',user);
    }
    isEmailUnique(email: string){
        return this.http.get('http://127.0.0.1:8000/api/user/unique_email');
    }
    signIn(email: string, password: string){
        return this.http.post('http://127.0.0.1:8000/api/user/login',{
            email: email,
            password: password
        });
    }
}
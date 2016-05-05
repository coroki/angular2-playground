import {Injectable} from 'angular2/core'

@Injectable()
export class SignupService {

  submit(username:string, password:string):Promise<boolean> {
    return new Promise<boolean>((resolve, reject) => {
      setTimeout(() => resolve(username == "demo" && password == "password"), 2000);
    })
  }

}

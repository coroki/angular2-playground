import {Component} from 'angular2/core'
import {Control, ControlGroup, FormBuilder, Validators} from 'angular2/common'
import {SignupValidators} from './signup.validators'
import {ValidationErrorPipe} from './validation-error.pipe';
import {SignupService} from './signup.service';

@Component({
  selector: 'signup',
  pipes: [ValidationErrorPipe],
  providers: [SignupService],
  template: `
    <h2>Please sign up</h2>
    <form [ngFormModel]="form" (ngSubmit)="submit()">
      <span *ngIf="form.errors">{{form.errors | validation}}</span>
      <input #username="ngForm" ngControl="username" type="text" placeholder="username" />
      <span *ngIf="username.errors">{{username.errors | validation}}</span>
      <input #password="ngForm" ngControl="password" type="password" placeholder="password" />
      <span *ngIf="password.errors">{{password.errors | validation}}</span>
      <input #passwordConfirm="ngForm" ngControl="passwordConfirm" type="password" placeholder="confirm password" />
      <span *ngIf="passwordConfirm.errors">{{passwordConfirm.errors | validation}}</span>
      <button [disabled]="!form.valid">Submit</button>
    </form>
  `,
  styles: [`
    form {
      width: 400px;
    }
    input {
      width: 400px;
      margin-top: 20px;
    }
    span {
      color: red;
      float: left;
    }
    button {
      margin-top: 20px;
      float: left;
      clear: left;
    }
  `]
})
export class SignupComponent {

  form:ControlGroup;

  constructor(private fb:FormBuilder, private auth:SignupService) {
    this.form = fb.group({
      username:        ['', Validators.compose([...SignupValidators.username])],
      password:        ['', Validators.compose([...SignupValidators.password])],
      passwordConfirm: ['', Validators.compose([...SignupValidators.passwordConfirm])]
    },
    {
      validator: SignupValidators.form
    })
  }

  submit() {
    var { username } = this.form.value;
    var { password } = this.form.value;
    this.auth.submit(username, password)
      .then(success => this.form.setErrors({ incorrectCredentials: !success}));
  }

}

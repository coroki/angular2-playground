import {Pipe, PipeTransform} from 'angular2/core'

@Pipe({
    name: 'validation'
})
export class ValidationErrorPipe implements PipeTransform {

    transform(value: any, args: any[]) {
        if (value) {
            if (value.required) {
                return "Required.";
            }
            if (value.minlength) {
                return "Must be greater than " + value.minlength.requiredLength + " characters.";
            }
            if (value.maxlength) {
                return "Must be less than " + value.maxlength.requiredLength + " characters.";
            }
            if (value.passwordsDoNotMatch) {
                return "Passwords do not match.";
            }
            if (value.incorrectCredentials) {
                return "Incorrect username and/or password.";
            }
        }
        return null;
    }

}

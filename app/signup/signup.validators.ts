import {Control, ControlGroup, Validators} from 'angular2/common'

export const SignupValidators = {
    username: [Validators.required],
    password: [Validators.required, Validators.minLength(3), Validators.maxLength(10)],
    passwordConfirm: [Validators.required, Validators.minLength(3), Validators.maxLength(10)],
    form: (group: ControlGroup) => {
        var password = group.find('password');
        var passwordConfirm = group.find('passwordConfirm');

        if (password.value.length > 0 && passwordConfirm.value.length > 0 && password.value != passwordConfirm.value) {
            passwordConfirm.setErrors({ passwordsDoNotMatch: true });
        } else if (passwordConfirm.hasError('passwordsDoNotMatch')) {
            passwordConfirm.setErrors({ passwordsDoNotMatch: false });
        }

        group.setErrors({});

        return null;
    }
}

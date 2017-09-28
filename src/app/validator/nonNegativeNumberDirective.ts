import {Directive} from '@angular/core';
import {Validator, NG_VALIDATORS, FormControl} from '@angular/forms';
import {validateNonNegativeNumber} from './nonNegativeNumberValidator';

@Directive({
	selector: '[nonNegativeNumber]',
	providers: [{provide: NG_VALIDATORS, useExisting: NonNegativeValidatorDirective, multi: true}]
})
export class NonNegativeValidatorDirective implements Validator {

	validate(control: FormControl) {
		return control.value ? validateNonNegativeNumber(control) : null;
	}
}

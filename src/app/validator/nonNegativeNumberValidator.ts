import {FormControl} from '@angular/forms';

export function validateNonNegativeNumber(control: FormControl) {
	return (control.value >= 0) ? null : {
		validateNonNegativeNumber: {
			valid: false
		}
	};
}

import {Component, OnInit} from '@angular/core';
import {UserRestService} from "./restService/user/user.rest.service";
import {ActivatedRoute, Router} from "@angular/router";
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  validateForm!: UntypedFormGroup;
  showContactUser: boolean = true;

  constructor(private userRestService: UserRestService,
              private router: Router,
              private fb: UntypedFormBuilder,
              public activatedRoute: ActivatedRoute,) {
  }

  ngOnInit(): void {
    this.initForm();
    this.activatedRoute.paramMap.subscribe((params) => {
      console.log(params.get('core'));
      console.log(params)
    });
  }

  direct(path: string) {
    this.router.navigate(['/', path]);
  }

  initForm() {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      name: [null, [Validators.required]],
      phone: [null, [Validators.required, Validators.pattern('^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$')]],
      message: [null, []]
    });
  }

  submitForm() {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
      this.resetForm();
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({onlySelf: true});
        }
      });
    }
  }

  resetForm() {
    this.validateForm.reset();
  }
}

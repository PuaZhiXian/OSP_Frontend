import {Component, OnInit} from '@angular/core';
import {UserRestService} from "../../../../restService/user/user.rest.service";
import {IUser} from "../../../../interface/user/i-user";
import {finalize} from "rxjs";
import {Router} from "@angular/router";
import {UntypedFormBuilder, UntypedFormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {
  validateForm!: UntypedFormGroup;

  constructor(private userRestService: UserRestService,
              private router: Router,
              private fb: UntypedFormBuilder) {
  }

  loadingUser: boolean = true;
  users!: IUser[];


  ngOnInit(): void {
    this.initForm();
    this.initUser();
  }

  initForm() {
    this.validateForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      name: [null, [Validators.required]],
      phone: [null, [Validators.required, Validators.pattern('^[\\+]?[(]?[0-9]{3}[)]?[-\\s\\.]?[0-9]{3}[-\\s\\.]?[0-9]{4,6}$')]],
      message: [null, []]
    });
  }

  initUser() {
    this.userRestService.getUser()
      .pipe(finalize(() => {
        this.loadingUser = false;
      }))
      .subscribe((resp) => {
        this.users = resp;
        console.log(this.users);
      })
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

  direct(path: string) {
    this.router.navigate(['/', path]);
  }
}

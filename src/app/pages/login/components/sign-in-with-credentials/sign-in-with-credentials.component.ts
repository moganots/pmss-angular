import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { first } from 'rxjs';
import { CommonComponent } from '../../../../@shared/components/common/common.component';
import { AlertService } from '../../../../@shared/services/alert-service/alert.service';
import { AuthenticationService } from '../../../../@shared/services/authentication-service/authentication.service';

@Component({
  selector: 'app-sign-in-with-credentials',
  templateUrl: './sign-in-with-credentials.component.html',
  styleUrls: ['./sign-in-with-credentials.component.scss']
})
export class SignInWithCredentialsComponent extends CommonComponent implements OnInit {
  formLogin: FormGroup;
  loading = false;
  submitted = false;
  authError = false;
  returnUrl: string;

  constructor(
    public authenticationService: AuthenticationService,
    public alertService: AlertService,
    public router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {
    super(authenticationService, alertService, router);
    // redirect to home if already logged in
    if (this.authenticationService.currentUser) {
      this.router.navigate(['/dashboard']);
    }
  }

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.formLogin.controls; }

  onSubmit() {
    this.submitted = true;
    this.authError = false;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.formLogin.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService.login(this.f.username.value, this.f.password.value)
      .then((result) => {
        this.router.navigate([result.navigateTo]);
        this.alertService.success(result.message);
      }, (error) => {
        this.alertService.error(error.message);
        this.authError = true;
      }).catch((error) => {
        this.alertService.error(error.message || error);
      });
    this.loading = false;
    this.sleep(5000);
  }

  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

}

import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "src/app/authentication/authentication.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  ngOnInit() {}

  onSubmit() {
    console.log('onsubmit clicked')
    this.authService.loginGithub().subscribe(val => {
      if (val) {
        if (this.authService.redirectUrl) {
          this.router.navigateByUrl(this.authService.redirectUrl);
          this.authService.redirectUrl = undefined;
        } else {
          this.router.navigate(["/home"]);
        }
      } else {
        console.log(`Could not login`);
      }
    });
  }
}

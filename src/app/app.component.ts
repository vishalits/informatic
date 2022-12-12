import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormGroupDirective } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { StudentsService } from './students.service';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  registrationForm = new FormGroup({

    firstName: new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(100),
      Validators.pattern('^[a-zA-Z ]*$'),
    ]),
    lastName: new FormControl(null, [
      Validators.required,
      Validators.minLength(5),
      Validators.maxLength(100),
      Validators.pattern('^[a-zA-Z ]*$'),
    ]),
    // birthdayDate: new FormControl(null, [
    //   Validators.required,
    // ]),
    email: new FormControl(null, [
      Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$"),
    ]),
    phoneNumber: new FormControl(null, [
      Validators.required,
      Validators.pattern("[0-9]{10}"),
    ]),
    // inlineRadioOptions: new FormControl(null, [
    //   Validators.required,
    // ]),
    choose: new FormControl(null, [
      Validators.required,
    ]),



  })

  //  apiuserdata: any;
  getcall: any;
  submittedForm = false;
  data: any;
  alert: boolean = false;
  Users: any;
  datas: any;
  dates: any;
  token: string | undefined;
  file: File | undefined;
  isNextDisabled = true
  faCoffee = faCoffee;
  faBell = faBell;
  //////////captcha ///////
  captchaStatus: any = null;
  captchaConfig: any = {
    length: 6,
    cssClass: 'custom',
    back: {
      stroke: "#2F9688",
      solid: "#f2efd2"
    },
    font: {
      color: "#000000",
      size: "35px"
    }
  };


  //////////////////////


  get firstName() {
    return this.registrationForm.get('firstName') as FormControl;
  }
  get lastName() {
    return this.registrationForm.get('lastName') as FormControl;
  }
  // get birthdayDate() {
  //   return this.registrationForm.get('birthdayDate') as FormControl;
  // }
  get email() {
    return this.registrationForm.get('email') as FormControl;
  }
  get phoneNumber() {
    return this.registrationForm.get('phoneNumber') as FormControl;
  }
  // get inlineRadioOptions() {
  //   return this.registrationForm.get('inlineRadioOptions') as FormControl;
  // }
  get choose() {
    return this.registrationForm.get('choose') as FormControl;
  }



  constructor(private user: StudentsService, private formBuilder: FormBuilder) {
    this.user.getcall().subscribe((data) => {
      this.getcall = data;

    });

    this.user.Users().subscribe(Date => {
      this.dates = Date;
      console.log(Date)

    })

    this.token = undefined;

  }

  //   showToasterSuccess(){
  //     this.user.showSuccess("Data shown successfully !!", "ItSolutionStuff.com")
  // }


  ////////////captcha ////////////


  ///////////////spinner ///////
  loader = true;

  ngOnInit(): void { 
      //Loader variable set false after page load
      setTimeout(()=>{                           
        this.loader = false;
    }, 2000);
  }
//////////////////////////
  /////////////////////////////////////////////////


  submitForm(data: any) {

    if (this.registrationForm.invalid)
      window.alert("Data is Invalid!!");

    else {

      this.data = {
        firstName: this.registrationForm.controls['firstName'].value,
        lastName: this.registrationForm.controls['lastName'].value,
        // birthdayDate: this.registrationForm.controls['birthdayDate'].value,
        email: this.registrationForm.controls['email'].value,
        // inlineRadioOptions: this.registrationForm.controls['inlineRadioOptions'].value,
        phoneNumber: this.registrationForm.controls['phoneNumber'].value,
        choose: this.registrationForm.controls['choose'].value,
        // fileUpload: this.registrationForm.controls['fileUpload'].value,


      }

      this.user.adduser(data).subscribe((result) => {
        console.log(result);
      })

    }


  }

  onSubmit() {

    this.submittedForm = true;
    // alert('Click Ok to proceed !!');


    
  }

 
}

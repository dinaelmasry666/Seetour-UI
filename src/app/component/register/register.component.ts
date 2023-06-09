import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiPaths } from 'src/app/Enums/api-paths';
import { RegisterService } from 'src/app/Services/register.service';
import { environment } from 'src/environments/environment';
import { UploadImageComponent } from '../upload-image/upload-image.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {

  constructor(private service: RegisterService, private router: Router, private route: ActivatedRoute, private http: HttpClient) { }

  Photo:any;
  PhotoID: any;
  user: any;
  newReg: any;

  // Fun(event : any){
  //   this.PhotoID = event;
  //   //console.log(this.PhotoID);
  // }
  // Fun2(event : any){
  //   this.Photo = event;
  //   console.log(this.Photo);
  // }
  // Fun1(event : any){
  //   this.PhotoID = event;
  //   console.log(this.PhotoID);
  // }

  Register(username : any ,name : any, email : any, phone : any, password :any, snn : any, bankAccount:any , address:any, AccountNumber:any, SwiftCode:any, Tax :any) {
    if (username && name && email && phone && password && snn && bankAccount && address && AccountNumber && SwiftCode && Tax ) { // Check if all required fields have data
      this.newReg = {username ,  name , email , phone , password , snn , bankAccount , address , AccountNumber , SwiftCode , Tax};
      //console.log('Registration...');
      const registrationDto = {
        userName: this.newReg.username.replace(/\s+/g, ''),
        password: this.newReg.password,
        profilepic: this.Photo,
        ssn: this.newReg.snn,
        fullName: this.newReg.name,
        recipientBankNameAndAddress: this.newReg.bankAccount,
        recipientAccountNumberOrIBAN: this.newReg.AccountNumber,
        recipientBankSwiftCode: this.newReg.SwiftCode,
        recipientNameAndAddress: this.newReg.address,
        taxRegistrationNumber :this.newReg.Tax,
        idCardPhoto: this.PhotoID,
        phoneNumber: this.newReg.phone,
        email: this.newReg.email
      };
      //console.log(registrationDto);
      this.http.post(environment.baseUrl + ApiPaths.user+ApiPaths.tgReg, registrationDto).subscribe(
        (response) => {
          //console.log('Registration successful!');
          //console.log(response);
          // Navigate to login component after adding the new Register
          this.router.navigate(['/login']);
        },
        (error) => {
          //console.log('Error occurred during registration.');
          console.error(error);
          //console.log(error.status);
          //console.log(error.statusText);
          //console.log(error.error);
        }
      );

    }
  }

  ngOnInit(): void {
    // ...
  }
}

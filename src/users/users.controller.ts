import { Controller, Get, Header, HttpCode, HttpStatus, Redirect, Request, Res } from '@nestjs/common';
import { of } from 'rxjs';

@Controller('/users')   //  Controller at user route path.
export class UsersController {
    @Get('/profile')  //sending the get request response as a json  with requset object.

    @Redirect('/users/account', 300)// redirect to other path using @redirect decorator
    @HttpCode(300)  // we can change the default status code using HttpCode decorator.
    @HttpCode(HttpStatus.OK) // we can change the default status code using HttpStatus decorator numerations 

    // setting headers using @Heaser decorator.

    @Header('Content-Type', 'application/json') // Set the content type header



    getProfile(@Request() req: Request
        //using passthrough then it will send response itself.
    ) {
        //nest js doesn't send response itself we want to send response manually  

        //  console.log(req)

        const student = {
            "id": 1,
            "firstName": "John",
            "lastName": "Doe",
            "age": 20,
            "grade": "A",
            "courses": ["Mathematics", "English", "Science"],
            "address": {
                "street": "123 Main Street",
                "city": "Anytown",
                "state": "CA",
                "zipCode": "12345"
            },
            "contact": {
                "email": "john.doe@example.com",
                "phone": "+1 (555) 123-4567"
            }
        };
        //return json object using rxjs opertor
        return of({
            student
        });
    }


  @Get('/account')
  redirectRoute(){
    return" Working Account "
  }




}

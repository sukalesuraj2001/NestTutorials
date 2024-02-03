import { Controller, Get ,Request } from '@nestjs/common';
import { of } from 'rxjs';

@Controller('/users')   //  Controller at user route path.
export class UsersController {
@Get('/profile')  //sending the get request response as a json  with requset object.
getProfile(@Request() req:Request) {


    
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
    return  of({
        student
    }) ;
}



}

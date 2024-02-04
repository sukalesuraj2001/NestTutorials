import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { student } from './interface';

@Controller('user-submission')
export class UserSubmissionController {
    Users: student[] = []




    @Post('addUser')

    addUser(@Body() reqData: student) {
        this.Users.push(reqData);
        return "Successfully Added User"


    }


    @Get("allUsers")
    allUsers() {
        return this.Users
    }


    @Put(':id')

    updateUsers(@Param('id') id:number, @Body() user:student) {
        const userIdx=this.Users.findIndex(user => +user.id === +id)
        if (!userIdx) {
            return
            
        }
        this.Users[userIdx] = user


    }


    @Delete(':id')
    deleteUsers(@Param("id") id: number) {
        this.Users = this.Users.filter(user => +user.id !== +id);
        return "User Deleted Successfully!";
    }

}

import { Body, Controller, Post } from '@nestjs/common';
import { videoDTO } from './interface';

@Controller('data-submission')
export class DataSubmissionController {


    @Post('/data')

    postData(@Body() reqData:videoDTO ){
//access data body using @Body decorator.
        console.log("the data is"+JSON.stringify(reqData.name));  console.log("the data is"+JSON.stringify(reqData.tag));
        
        return {success:true}

    }




}

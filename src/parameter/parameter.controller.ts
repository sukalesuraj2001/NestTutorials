import { Controller, Get, Param, Query, Headers } from '@nestjs/common';
import { Videos } from './interface';


@Controller('parameter')
export class ParameterController {


    @Get('/videos/:id/:name')
    //accessing id parameter form route

    getVideos(@Param()

    param: Videos)
    // accesing id parameter form route using @Param decorator.
    {

        console.log("the params is " + JSON.stringify(param.id))
        console.log("the params is " + JSON.stringify(param.name))
        return "Sucessfully!";
    }




    @Get('/demos')


    getDemos(@Query() query: Videos) {
        //to get  data from the url as a query parameter using @query decorator.

        console.log("the Query paramater is present data" + JSON.stringify(query));


        return "Sucessfully  Get The Data!";


    }



    @Get('/about')


    getAbout(@Headers() headers: any) {
        //to get  headers from the request headers using @Headers decorator.

        console.log("the headers paramater is present data" + JSON.stringify(headers));


        return "Sucessfully  Get The Data!";


    }
}

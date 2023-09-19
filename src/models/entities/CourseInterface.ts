import {Document} from "mongoose";

export interface CourseInterface extends Document{
    courseName: string;
    thematicArea: string;
    courseImage: {
        url: string, 
        key: string
    };
    courseBanner: {
        url: string, 
        key: string
    };
    courseTrailer?: {
        url: string, 
        key: string
    };
    createAt: Date;
}
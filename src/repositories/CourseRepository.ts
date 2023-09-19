import {Document} from "mongoose";
import CourseDao from "../models/daos/CourseDao";

export default interface CourseRepository {
    createCurso (courseDao: CourseDao): Promise<Document>;
}
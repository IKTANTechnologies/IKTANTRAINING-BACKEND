import CourseDao from "../../models/daos/CourseDao";
import CourseRepository from "../CourseRepository";
import CourseEntity from '../../models/entities/courseEntity';
import {Document} from "mongoose";

export class CourseRepositoryImplements implements CourseRepository {
     createCurso(courseDao: CourseDao): Promise<Document> {
      
        const courseEntity = new CourseEntity({
          courseName: courseDao.getCourseName(),
          thematicArea: courseDao.getThematicArea(),
          courseImage: courseDao.getCourseImage(),
          courseBanner: courseDao.getCourseBanner(),
          createAt: courseDao.getCreateAt(),
        });
  
        return courseEntity.save();
    }
  }
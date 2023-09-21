// Importa la clase CourseDao desde una ubicación específica en el proyecto.
import CourseDao from "../../models/daos/CourseDao";

// Importa la interfaz CourseRepository desde una ubicación específica en el proyecto.
import CourseRepository from "../CourseRepository";

// Importa la clase CourseEntity desde una ubicación específica en el proyecto.
import CourseEntity from '../../models/entities/courseEntity';

// Importa la clase Document del módulo "mongoose".
import { Document } from "mongoose";

// Define una clase llamada CourseRepositoryImplements que implementa la interfaz CourseRepository.
export class CourseRepositoryImplements implements CourseRepository {
    // Define el método "createCurso" que toma un objeto de tipo "CourseDao" como argumento y devuelve una promesa que se resolverá en un objeto de tipo "Document".
    createCurso(courseDao: CourseDao): Promise<Document> {
        // Crea una instancia de la clase CourseEntity, inicializando sus propiedades con los valores del objeto "courseDao".
        const courseEntity = new CourseEntity({
            courseName: courseDao.getCourseName(),
            thematicArea: courseDao.getThematicArea(),
            courseImage: courseDao.getCourseImage(),
            courseBanner: courseDao.getCourseBanner(),
            createAt: courseDao.getCreateAt(),
        });
  
        // Guarda la instancia de CourseEntity en la base de datos y devuelve la promesa resultante.
        return courseEntity.save();
    }
}

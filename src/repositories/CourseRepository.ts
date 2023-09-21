// Importa la clase Document del módulo "mongoose".
import { Document } from "mongoose";

// Importa la clase CourseDao desde la ubicación especificada en el proyecto.
import CourseDao from "../models/daos/CourseDao";

// Declara una interfaz TypeScript llamada CourseRepository.
export default interface CourseRepository {
    // Define un método llamado "createCurso" que toma un objeto de tipo "CourseDao"
    // como argumento y devuelve una promesa que se resolverá en un objeto de tipo "Document".
    createCurso(courseDao: CourseDao): Promise<Document>;
}

import mongoose, {Document, Model, Schema, Types} from "mongoose";
import { CourseInterface } from "./CourseInterface";

const courseSchema = new Schema<CourseInterface>({
    courseName: {
        type: String,
        required: [true, "Nombre requerido."],
        unique: true,
        trim: true,
        minlength: [5, "Longitud minima: 5 caracteres."],
        maxlength: [250, "Longittud maxima: 250 caracteres"]
    },
    thematicArea: {
        type: String,
        required: [true, "Area temarica requerida."],
        unique: true,
        trim: true,
        minlength: [5, "Longitud minima: 5 caracteres."],
        maxlength: [250, "Longittud maxima: 250 caracteres"]
    },
    courseImage: {
        url: {
            type: String,
            required: [true, "Url requerida"],
            unique: true,
            trim: true,
            minlength: [5, "Longitud minima: 5 caracteres."],
            maxlength: [250, "Longittud maxima: 250 caracteres"]
        },
        key: {
            type: String,
            default: null,
        }
    },
    courseBanner: {
        url: {
            type: String,
            required: [true, "Url requerida"],
            unique: true,
            trim: true,
            minlength: [5, "Longitud minima: 5 caracteres."],
            maxlength: [250, "Longittud maxima: 250 caracteres"]
        },
        key: {
            type: String,
            default: null
        }
    },
    courseTrailer: {
        url: {
            type: String,
            required: [true, "Url requerida"],
            unique: true,
            trim: true,
            minlength: [5, "Longitud minima: 5 caracteres."],
            maxlength: [250, "Longittud maxima: 250 caracteres"]
        },
        key: {
            type: String,
            default: null
        }
    },
    createAt: {
        type: Date,
        default: new Date()
        
    }
});

const CourseEntity = mongoose.model<CourseInterface>('Course', courseSchema);

export default CourseEntity;
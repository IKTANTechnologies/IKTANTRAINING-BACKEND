"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importStar(require("mongoose"));
const courseSchema = new mongoose_1.Schema({
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
const CourseEntity = mongoose_1.default.model('Course', courseSchema);
exports.default = CourseEntity;

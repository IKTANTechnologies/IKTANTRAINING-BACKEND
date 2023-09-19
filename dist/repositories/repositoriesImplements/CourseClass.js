"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const courseEntity_1 = __importDefault(require("../../models/entities/courseEntity"));
class CourseClass extends mongoose_1.Model {
    constructor() {
        super();
    }
    ;
    // Métodos de nuestra clase
    static createCourse(courseData) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const course = new courseEntity_1.default(courseData);
                return yield course.save();
            }
            catch (error) {
                throw error;
            }
        });
    }
    static getCourseById(courseId) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield courseEntity_1.default.findById(courseId).exec();
            }
            catch (error) {
                throw error;
            }
        });
    }
}
exports.default = CourseClass;

"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseRepositoryImplements = void 0;
const courseEntity_1 = __importDefault(require("../../models/entities/courseEntity"));
class CourseRepositoryImplements {
    createCurso(courseDao) {
        const courseEntity = new courseEntity_1.default({
            courseName: courseDao.getCourseName(),
            thematicArea: courseDao.getThematicArea(),
            courseImage: courseDao.getCourseImage(),
            courseBanner: courseDao.getCourseBanner(),
            createAt: courseDao.getCreateAt(),
        });
        return courseEntity.save();
    }
}
exports.CourseRepositoryImplements = CourseRepositoryImplements;

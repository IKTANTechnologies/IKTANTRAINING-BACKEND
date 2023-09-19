"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CourseDao {
    constructor(courseName, thematicArea, courseImage, courseBanner, createAt, courseTrailer) {
        this.courseName = courseName;
        this.thematicArea = thematicArea;
        this.courseImage = courseImage;
        this.courseBanner = courseBanner;
        this.createAt = createAt;
        this.courseTrailer = courseTrailer;
    }
    // Getter y Setter para courseName
    getCourseName() {
        return this.courseName;
    }
    setCourseName(courseName) {
        this.courseName = courseName;
    }
    // Getter y Setter para thematicArea
    getThematicArea() {
        return this.thematicArea;
    }
    setThematicArea(thematicArea) {
        this.thematicArea = thematicArea;
    }
    // Getter y Setter para courseImage
    getCourseImage() {
        return this.courseImage;
    }
    setCourseImage(courseImage) {
        this.courseImage = courseImage;
    }
    // Getter y Setter para courseBanner
    getCourseBanner() {
        return this.courseBanner;
    }
    setCourseBanner(courseBanner) {
        this.courseBanner = courseBanner;
    }
    // Getter y Setter para courseTrailer
    getCourseTrailer() {
        return this.courseTrailer;
    }
    setCourseTrailer(courseTrailer) {
        this.courseTrailer = courseTrailer;
    }
    // Getter y Setter para createAt
    getCreateAt() {
        return this.createAt;
    }
    setCreateAt(createAt) {
        this.createAt = createAt;
    }
}
exports.default = CourseDao;

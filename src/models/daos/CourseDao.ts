class CourseDao {
    private courseName: string;
    private thematicArea: string;
    private courseImage: {
      url: string;
      key?: string;
    };
    private courseBanner: {
      url: string;
      key?: string;
    };
    private courseTrailer?: {
      url: string;
      key?: string;
    };
    private createAt: Date;
  
    constructor(
      courseName: string,
      thematicArea: string,
      courseImage: { url: string; key?: string },
      courseBanner: { url: string; key?: string },
      createAt: Date,
      courseTrailer?: { url: string; key?: string }
    ) {
      this.courseName = courseName;
      this.thematicArea = thematicArea;
      this.courseImage = courseImage;
      this.courseBanner = courseBanner;
      this.createAt = createAt;
      this.courseTrailer = courseTrailer;
    }
  
    // Getter y Setter para courseName
    getCourseName(): string {
      return this.courseName;
    }
  
    setCourseName(courseName: string): void {
      this.courseName = courseName;
    }
  
    // Getter y Setter para thematicArea
    getThematicArea(): string {
      return this.thematicArea;
    }
  
    setThematicArea(thematicArea: string): void {
      this.thematicArea = thematicArea;
    }
  
    // Getter y Setter para courseImage
    getCourseImage(): { url: string; key?: string } {
      return this.courseImage;
    }
  
    setCourseImage(courseImage: { url: string; key?: string }): void {
      this.courseImage = courseImage;
    }
  
    // Getter y Setter para courseBanner
    getCourseBanner(): { url: string; key?: string } {
      return this.courseBanner;
    }
  
    setCourseBanner(courseBanner: { url: string; key?: string }): void {
      this.courseBanner = courseBanner;
    }

    // Getter y Setter para courseTrailer
    getCourseTrailer(): { url: string; key?: string } | undefined {
      return this.courseTrailer;
    }
  
    setCourseTrailer(courseTrailer?: { url: string; key?: string }): void {
      this.courseTrailer = courseTrailer;
    }
  
    // Getter y Setter para createAt
    getCreateAt(): Date {
      return this.createAt;
    }
  
    setCreateAt(createAt: Date): void {
      this.createAt = createAt;
    }
  }
  
  export default CourseDao;
  
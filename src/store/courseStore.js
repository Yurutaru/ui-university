class CourseStore {
  courses = [];

  constructor() {
    makeAutoObservable(this);
  }

  addCourse(course) {
    this.courses.push(course);
  }

  setCourses(courses) {
    this.courses = courses;
  }
}

export const courseStore = new CourseStore();

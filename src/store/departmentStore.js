class DepartmentStore {
  departments = [];

  constructor() {
    makeAutoObservable(this);
  }

  addDepartment(department) {
    this.departments.push(department);
  }

  setDepartments(departments) {
    this.departments = departments;
  }
}

export const departmentStore = new DepartmentStore();

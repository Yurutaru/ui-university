class SpecializationStore {
  specializations = [];

  constructor() {
    makeAutoObservable(this);
  }

  addDepartment(specialization) {
    this.specializations.push(specialization);
  }

  setDepartments(specializations) {
    this.specializations = specializations;
  }
}

export const specializationStore = new SpecializationStore();

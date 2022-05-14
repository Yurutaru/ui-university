import { makeAutoObservable } from 'mobx';

// TODO: add student and teacher with person abstract model

// const Ticket = types
//   .model({
//     id: types.optional(types.number, 0),
//     subject: types.optional(types.string, ''),
//     body: types.optional(types.string),
//     status: types.optional(types.string),
//   })
//   .actions((self, newStatus) => ({
//     setTicket() {},
//   }));

// const Department = types.model({
//   id: types.optional(types.number, 0),
//   name: types.optional(types.string, ''),
// });

// const Specialization = types.model({
//   id: types.optional(types.number, 0),
//   name: types.optional(types.string, ''),
// });
class FacultyStore {
  faculties = [];

  constructor() {
    makeAutoObservable(this);
  }

  addFaculty(faculty) {
    this.faculties.push(faculty);
  }

  setFaculties(faculties) {
    this.faculties = faculties;
  }
}

export const facultyStore = new FacultyStore();
// const Course = types.model({
//   id: types.optional(types.number, 0),
//   name: types.optional(types.string, ''),
// });

// const Group = types.model({
//   id: types.optional(types.number, 0),
//   name: types.optional(types.string, ''),
// });

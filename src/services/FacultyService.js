import requests from '../axios/requests';
import { facultyStore } from '../store/facultyStore';

export const facultyService = {
  getFaculties: async () => {
    const response = await requests.getFaculties();
    const items = response.data;
    facultyStore.setFaculties(items);
    return items;
  },
  addFaculty: async (body) => {
    const response = await requests.addFaculty(body);
    const faculty = response.data;
    facultyStore.addFaculty(faculty);
  },
};

import api from './api';

const requests = {
  getFaculties: () => api.get('faculties'),
  addFaculty: (body) => api.post('faculties', body),
};

export default requests;

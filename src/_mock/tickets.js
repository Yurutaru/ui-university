import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const tickets = [...Array(24)].map((_, index) => ({
  id: faker.datatype.uuid(),
  name: sample(['Diploma project', 'Course project', 'Help']),
  isVerified: faker.datatype.boolean(),
  status: sample(['active', 'banned']),
  created: sample(['2020-02-10']),
  expires: sample(['2020-02-10']),
  teacher: {
    link: 'https://localhost:3000/dashboard/teachers/1'
  },
  role: sample([
    'Leader',
    'Hr Manager',
    'UI Designer',
    'UX Designer',
    'UI/UX Designer',
    'Project Manager',
    'Backend Developer',
    'Full Stack Designer',
    'Front End Developer',
    'Full Stack Developer',
  ]),
}));

export default tickets;

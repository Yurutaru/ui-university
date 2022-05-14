import { faker } from '@faker-js/faker';
import { sample } from 'lodash';

// ----------------------------------------------------------------------

const FACULTY_NAME = [
    'Faculty of Electronic Information Systems',
    'Faculty of Engineering Systems and Ecology',
    'Faculty of Mechanical Engineering',
    'Faculty of Civil Engineering',
    'Faculty of Economics',
    'Faculty of Dark Souls',
];

const COUNT_OF_STUDENTS_IN_FACULTY = [
    1000,
    2500,
    1333,
    4000,
    5000,
    2,
];

const COUNT_OF_GROUPS_IN_FACULTY = [
    100,
    250,
    133,
    400,
    500,
    1,
];

const FACULTY_COLOR = ['#00AB55', '#000000', '#FFFFFF', '#FFC0CB', '#FF4842', '#1890FF', '#94D82D', '#FFC107'];

// ----------------------------------------------------------------------

const faculties = [...Array(6)].map((_, index) => {
    const setIndex = index + 1;

    return {
        id: faker.datatype.uuid(),
        cover: `/static/mock-images/products/product_${setIndex}.jpg`,
        name: FACULTY_NAME[index],
        priceSale: setIndex % 3 ? null : faker.datatype.number({ min: 19, max: 29, precision: 0.01 }),
        colors:
            (setIndex === 1 && FACULTY_COLOR.slice(0, 2)) ||
            (setIndex === 2 && FACULTY_COLOR.slice(1, 3)) ||
            (setIndex === 3 && FACULTY_COLOR.slice(2, 4)) ||
            (setIndex === 4 && FACULTY_COLOR.slice(3, 6)) ||
            FACULTY_COLOR,
        studentsCount: COUNT_OF_STUDENTS_IN_FACULTY[index],
        groupsCount: COUNT_OF_GROUPS_IN_FACULTY[index]
    };
});

export default faculties;

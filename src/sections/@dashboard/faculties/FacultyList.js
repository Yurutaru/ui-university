import PropTypes from 'prop-types';
// material
import { Grid } from '@mui/material';
import FacultyCard from './FacultyCard';

// ----------------------------------------------------------------------

FacultyList.propTypes = {
    faculties: PropTypes.array.isRequired
};

export default function FacultyList({ faculties, ...other }) {
    return (
        <Grid container spacing={3} {...other}>
            {faculties.map((faculty) => (
                <Grid key={faculty.id} item xs={12} sm={6} md={3}>
                    <FacultyCard faculty={faculty} />
                </Grid>
            ))}
        </Grid>
    );
}

import { useEffect } from 'react';
// material
import { Stack, Container, Typography } from '@mui/material';
// components
import { observer } from 'mobx-react-lite';
import { facultyService } from '../services/FacultyService';
import { facultyStore } from '../store/facultyStore';
import Page from '../components/Page';
import { FacultyList, CreateFacultyModal } from '../sections/@dashboard/faculties';
// ----------------------------------------------------------------------

const Faculties = observer(() => {
  useEffect(() => {
    facultyService.getFaculties();
  }, [facultyStore.faculties]);

  return (
    <Page title="Faculties">
      <Container>
        <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
          <Typography variant="h4" gutterBottom>
            Faculties
          </Typography>
          <Stack direction="row" alignItems="center" justifyContent="space-between" columnGap={2}>
            <CreateFacultyModal />
          </Stack>
        </Stack>
        <FacultyList faculties={facultyStore.faculties} />
      </Container>
    </Page>
  );
});

export default Faculties;

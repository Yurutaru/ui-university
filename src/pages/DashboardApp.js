import { faker } from '@faker-js/faker';
// @mui
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Stack, Typography } from '@mui/material';
// components
import Page from '../components/Page';
// sections
import {
  AppNewsUpdate,
  AppWidgetSummary,
  StudentInformation,
  TeacherInformation
} from '../sections/@dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardApp() {
  const theme = useTheme();

  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Home
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Created" total={1000} icon={'pepicons:monitor'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Accepted" total={1} color="success" icon={'uis:check-circle'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Blocked" total={1} color="warning" icon={'uis:exclamation-triangle'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Closed" total={1} color="error" icon={'uis:exclamation-circle'} />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <StudentInformation title={'Your personal information'} />
            {/* <TeacherInformation title={'Your personal information'} /> */}
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate
              title="News Update"
              list={[...Array(5)].map((_, index) => ({
                id: faker.datatype.uuid(),
                title: faker.name.jobTitle(),
                description: faker.name.jobTitle(),
                image: `/static/mock-images/covers/cover_${index + 1}.jpg`,
                postedAt: faker.date.recent(),
              }))}
            />
          </Grid>


        </Grid>
      </Container>
    </Page>
  );
}

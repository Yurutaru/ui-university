import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// material
import { Box, Card, Link, Typography, Stack, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';
// components
import Label from '../../../components/Label';

// ----------------------------------------------------------------------

const FacultyImgStyle = styled('img')({
  top: 0,
  width: '100%',
  height: '100%',
  objectFit: 'cover',
  position: 'absolute',
});

// ----------------------------------------------------------------------

FacultyCard.propTypes = {
  faculty: PropTypes.object,
};

export default function FacultyCard({ faculty }) {
  const { name, id } = faculty;

  return (
    <Card>
      <Box sx={{ pt: '100%', position: 'relative' }}>
        <FacultyImgStyle alt={name} src={'/static/mock-images/products/product_1.jpg'} />
      </Box>

      <Stack spacing={2} sx={{ p: 3 }}>
        <Link to={`/dashboard/faculties/${id}`} color="inherit" underline="hover" component={RouterLink}>
          <Typography variant="subtitle2" noWrap>
            {name}
          </Typography>
        </Link>

        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Grid direction="row" alignItems="center" justifyContent="space-between">
            <Typography variant="subtitle1" textAlign={'center'}>
              &nbsp;
              {fShortenNumber(0)}
            </Typography>
            <Typography variant="subtitle2" textAlign={'center'}>
              &nbsp; Groups
            </Typography>
          </Grid>

          <Grid direction="row" alignItems="center">
            <Box>
              <Typography variant="subtitle1" textAlign={'center'}>
                &nbsp;
                {fShortenNumber(0)}
              </Typography>
              <Typography variant="subtitle2" textAlign={'center'}>
                &nbsp; Students
              </Typography>
            </Box>
          </Grid>
        </Stack>
      </Stack>
    </Card>
  );
}

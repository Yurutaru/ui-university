// @mui
import PropTypes from 'prop-types';
import { Box, Stack, Card, Button, Link, Typography, Divider, CardHeader } from '@mui/material';
// components
import Iconify from '../../../../../components/Iconify';
import Scrollbar from '../../../../../components/Scrollbar';

// ----------------------------------------------------------------------

StudentInformation.propTypes = {
  title: PropTypes.string,
  subheader: PropTypes.string,
  list: PropTypes.array.isRequired,
};

export default function StudentInformation({ title, subheader, list, ...other }) {
  return (
    <Card {...other}>
      <CardHeader title={title} />
      <Scrollbar>
        <Stack spacing={3} sx={{ p: 3, pr: 0 }}>
          <StudentInformationItem title='Matsiulka Yury Mikhailovich' subheader='Full name' icon='gridicons:nametag' />
          <StudentInformationItem title='Faculty of Electronic Information Systems' subheader='Faculty' icon='ri:organization-chart' />
          <StudentInformationItem title='Information technology software' subheader='Specialization' icon='ri:medal-2-line' />
          <StudentInformationItem title='PO-3' subheader='Group' icon='ri:group-2-line' />
          <StudentInformationItem title='1' subheader='Course' icon='ri:briefcase-4-line' />
        </Stack>
      </Scrollbar>
    </Card >
  );
}

StudentInformationItem.propTypes = {
  icon: PropTypes.string,
  title: PropTypes.string,
  subheader: PropTypes.string,
};

export function StudentInformationItem({ icon, title, subheader }) {
  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Iconify icon={icon} width={22} height={22} />
      <Box sx={{ minWidth: 240, flexGrow: 1 }}>
        <Link color="inherit" variant="subtitle2" noWrap underline='none' >
          {title}
        </Link>

        <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
          {subheader}
        </Typography>
      </Box>
    </Stack>
  );
}
// ----------------------------------------------------------------------


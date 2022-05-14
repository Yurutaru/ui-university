// @mui
import PropTypes from 'prop-types';
import { Box, Stack, Card, Button, Link, Typography, Divider, CardHeader } from '@mui/material';
// components
import Iconify from '../../../../../components/Iconify';
import Scrollbar from '../../../../../components/Scrollbar';

// ----------------------------------------------------------------------

TeacherInformation.propTypes = {
    title: PropTypes.string,
    subheader: PropTypes.string,
    list: PropTypes.array.isRequired,
};

export default function TeacherInformation({ title, subheader, list, ...other }) {
    return (
        <Card {...other}>
            <CardHeader title={title} />
            <Scrollbar>
                <Stack spacing={3} sx={{ p: 3, pr: 0 }}>
                    <TeacherInformationItem title='Kochurko Pavel Anatolievich' subheader='Full name' icon='gridicons:nametag' />
                    <TeacherInformationItem title='Faculty of Electronic Information Systems' subheader='Faculty' icon='ri:organization-chart' />
                    <TeacherInformationItem title='Department of Intellectual and Information Technologies' subheader='Department' icon='ion:finger-print' />
                    <TeacherInformationItem title='Information technology software' subheader='Specialization' icon='ri:medal-2-line' />
                </Stack>
            </Scrollbar>
        </Card >
    );
}

TeacherInformationItem.propTypes = {
    icon: PropTypes.string,
    title: PropTypes.string,
    subheader: PropTypes.string,
};

export function TeacherInformationItem({ icon, title, subheader }) {
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


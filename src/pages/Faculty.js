import { Avatar, Container, Grid, Stack, Typography, Link } from '@mui/material';
import { FacultyMoreMenu } from '../sections/@dashboard/faculty';

export default function Faculty() {
  const data = [
    { name: 'Yura' },
    { name: 'Kirill' },
    { name: 'Valya' },
    { name: 'Vanya' },
    { name: 'Nastya' },
    { name: 'Lera' },
  ];

  const rows = data.reduce((prev, el, i) => {
    const subIdx = Math.floor(i / 3);
    prev[subIdx] = [...(prev[subIdx] || []), el];
    return prev;
  }, []);

  return (
    <Container>
      <Stack direction="row" flexWrap="wrap" gap={10}>
        <Stack direction="column" spacing={3} width={200}>
          <Stack direction="row" gap={1} alignItems="center">
            <Typography variant="subtitle2">Students</Typography>
            <Link variant="subtitle2" underline="none">
              6
            </Link>
          </Stack>
          <Stack direction="column">
            {rows.map((row, i) => (
              <Stack direction="row" gap={2} alignItems="center">
                {row.map((item, k) => (
                  <Stack direction="column" width={65} alignItems="center" marginBottom={1.5}>
                    <Avatar>A</Avatar>
                    <Typography alignSelf={'center'}>{item.name}</Typography>
                  </Stack>
                ))}
              </Stack>
            ))}
          </Stack>
        </Stack>
        <Stack direction="column" spacing={3} width={200}>
          <Stack direction="row" gap={1} alignItems="center">
            <Typography variant="subtitle2">Teachers</Typography>
            <Link variant="subtitle2" underline="none">
              6
            </Link>
          </Stack>
          <Stack direction="column">
            {rows.map((row, i) => (
              <Stack direction="row" gap={2} alignItems="center" marginBottom={1.5}>
                {row.map((item, k) => (
                  <Stack direction="column" width={65} alignItems="center">
                    <Avatar>A</Avatar>
                    <Typography alignSelf={'center'}>{item.name}</Typography>
                  </Stack>
                ))}
              </Stack>
            ))}
          </Stack>
        </Stack>
        <Stack direction="column" spacing={3} width={200}>
          <Stack direction="row" gap={1} alignItems="center">
            <Typography variant="subtitle2">Groups</Typography>
            <Link variant="subtitle2" underline="none">
              6
            </Link>
          </Stack>
          <Stack direction="column">
            {rows.map((row, i) => (
              <Stack direction="row" gap={2} alignItems="center" marginBottom={1.5}>
                {row.map((item, k) => (
                  <Stack direction="column" width={65} alignItems="center">
                    <Avatar>A</Avatar>
                    <Typography alignSelf={'center'}>{item.name}</Typography>
                  </Stack>
                ))}
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Stack>
      <Stack direction="row" flexWrap="wrap" gap={10}>
        {/* list departments */}
        {/* list of courses */}
        {/* number of groups */}
        {/* number of groups */}
        <Stack direction="column" spacing={3} width={200}>
          <Stack direction="row" gap={1} alignItems="center">
            <Typography variant="subtitle2">Students</Typography>
            <Link variant="subtitle2" underline="none">
              6
            </Link>
          </Stack>
          <Stack direction="column">
            {rows.map((row, i) => (
              <Stack direction="row" gap={2} alignItems="center">
                {row.map((item, k) => (
                  <Stack direction="column" width={65} alignItems="center" marginBottom={1.5}>
                    <Avatar>A</Avatar>
                    <Typography alignSelf={'center'}>{item.name}</Typography>
                  </Stack>
                ))}
              </Stack>
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Container>
  );
}

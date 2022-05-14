import { useRef, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { capitalize } from 'lodash';
// material
import { Menu, MenuItem, IconButton, Button, Box, ListItemIcon, ListItemText } from '@mui/material';
// component
import Iconify from '../../../components/Iconify';

// ----------------------------------------------------------------------

export default function FacultyMoreMenu() {
  const ref = useRef(null);
  //   const modal = useModal();
  const [isOpen, setIsOpen] = useState(false);

  const [isOpenDepartmentMenuItem, setIsOpenDepartmentMenuItem] = useState(false);
  const [isOpenCourseMenuItem, setIsOpenCourseMenuItem] = useState(false);
  const [isOpenStudentMenuItem, setIsOpenStudentMenuItem] = useState(false);

  const handleCloseDepartmentMenuItem = () => {
    setIsOpen(false);
  };

  const handleCloseCourseMenuItem = () => {
    setIsOpen(false);
  };

  const handleCloseStudentMenuItem = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Box ref={ref} component="span" sx={{ p: 2 }}>
        <Button onClick={() => setIsOpen(true)}>{capitalize('actions')}</Button>
      </Box>
      <Menu
        open={isOpen}
        anchorEl={ref.current}
        onClose={() => setIsOpen(false)}
        PaperProps={{
          sx: { width: 200, maxWidth: '100%' },
        }}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <MenuItem onClick={handleCloseDepartmentMenuItem} sx={{ color: 'text.secondary' }}>
          <ListItemText primary="Add Department" primaryTypographyProps={{ variant: 'body2' }} />
        </MenuItem>

        <MenuItem onClick={handleCloseCourseMenuItem} sx={{ color: 'text.secondary' }}>
          <ListItemText primary="Add Course" primaryTypographyProps={{ variant: 'body2' }} />
        </MenuItem>

        <MenuItem onClick={handleCloseStudentMenuItem} sx={{ color: 'text.secondary' }}>
          <ListItemText primary="Add Student" primaryTypographyProps={{ variant: 'body2' }} />
        </MenuItem>
      </Menu>
    </>
  );
}

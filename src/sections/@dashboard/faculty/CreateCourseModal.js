import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as yup from 'yup';
import { useFormik } from 'formik';
import Iconify from '../../../components/Iconify';

import { facultyService } from '../../../services/FacultyService';

const validationSchema = yup.object({
  name: yup
    .string('Enter your faculty')
    .min(3, 'Faculty should be of maximum 3 characters length')
    .required('Faculty is required'),
});

const defaultValues = {
  name: '',
};

export default function CreateFacultyModal() {
  const [open, setOpen] = React.useState(false);
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState('sm');

  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleSubmit = async (values) => {
    await facultyService.addFaculty(values);
    handleClose();
  };

  const formik = useFormik({
    initialValues: defaultValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div>
      <Button variant="contained" onClick={handleOpen} gutterBottom startIcon={<Iconify icon="eva:plus-fill" />}>
        Add Faculty
      </Button>
      <Dialog fullWidth={fullWidth} maxWidth={maxWidth} open={open} onClose={handleClose}>
        <form onSubmit={formik.handleSubmit}>
          <DialogTitle>Create a new faculty</DialogTitle>
          <DialogContent>
            <DialogContentText>To create a faculty, please enter faculty name.</DialogContentText>
            <TextField
              id="name"
              name="name"
              type="text"
              label="Faculty name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name}
              variant="standard"
              margin="dense"
              fullWidth
              autoFocus
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button type="submit">Create</Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}

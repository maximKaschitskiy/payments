import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, {
    AlertProps
} from '@mui/material/Alert';

const Alert = React.forwardRef(
    function Alert(props, ref) {
      return <MuiAlert elevation = {6}
        ref = {ref}
        variant = "filled"
        {...props}/>;
    }
);

const CustomSnackbar = ({
    handleClose, isOpen, status
}) => {

    return (
        <Stack spacing = {2}
          sx = {{width: '100%'}}>
          <Snackbar open = {isOpen}
            autoHideDuration = {6000}
            onClose = {(event, reason)=>handleClose(event, reason)}>
            <Alert onClose = {(event, reason)=>handleClose(event, reason)}
              severity = {status ? (status.ok ? "success" : "error") : ""}
              sx = {{width: '100%'}}>
              {status ? (`${status.status} : ${status.statusText}`) : ""}
            </Alert>
          </Snackbar>
        </Stack>
    );
}

export default CustomSnackbar;
// import { useState } from 'react';
import { Modal, Typography, Box, IconButton, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import CustomButton from './CustomButton';
import ButtonFunctional from './buttonComponent';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import { useTranslation } from 'react-i18next';

interface ModalProps {
  open: boolean;
  onClose: () => void;
  heading: string;
  SubHeading?: string;
  children?: React.ReactNode;
  btnText: string;
}

const ModalComponent: React.FC<ModalProps> = ({
  open,
  onClose,
  heading,
  SubHeading,
  children,
  btnText
}) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: '1rem'
  };
  const { t } = useTranslation();

  return (
    // <Modal open={open} onClose={onClose}>
    //   <Box sx={style}>
    //     <Box display={'flex'} justifyContent={'space-between'}>
    //       <Typography variant="h4" m={0} fontSize={'16px'} fontWeight={'500'}>
    //         {heading}
    //       </Typography>
    //       <CloseSharpIcon onClick={onClose} aria-label="Close" />
    //     </Box>

    //     <Box>
    //       <Typography variant="h6">{SubHeading}</Typography>

    //       <Box>{children}</Box>
    //     </Box>
    //     <ButtonFunctional buttonName={t('COMMON.APPLY')} />
    //   </Box>
    // </Modal>
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          width: '90%', // Adjust width as needed
          maxWidth: 600, // Maximum width for responsiveness
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'white',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',

          // Responsive styles
          '@media (max-width: 768px)': {
            width: '95%', // Adjust width for smaller screens
            padding: '15px' // Adjust padding for smaller screens
          }
        }}
      >
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h4" fontSize="16px" fontWeight="500" m={0}>
            {heading}
          </Typography>
          <CloseSharpIcon onClick={onClose} aria-label="Close" />
        </Box>
        <Typography variant="h6">{SubHeading}</Typography>
        <Box mt={2}>{children}</Box>
        <Box mt={2} display="flex" justifyContent="flex-end">
          <ButtonFunctional buttonName={t('COMMON.APPLY')} /> {/* You may use t('COMMON.APPLY') */}
        </Box>
      </Box>
    </Modal>
  );
};

export default ModalComponent;

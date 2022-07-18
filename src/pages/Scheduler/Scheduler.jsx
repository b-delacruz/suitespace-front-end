import { useState } from 'react';
import ScheduleItem from './ScheduleItem';
import { Modal, Button, Box, Typography  } from '@mui/material';
import './Scheduler.css'

const Scheduler = ({ value }) => {
  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    p: 4,
    color: 'white',
  };
  
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='scheduler | flex flex-col gap-6'>
      <div className='scheduler-header | flex gap-6 items-center'>
        <h1 className='scheduler-date-display | text-lg'>
          {value.format('MMMM DD YYYY')}
        </h1>
        <button onClick={handleOpen} className='scheduler-add-event-button | flex justify-center items-center text-base rounded px-5'>
          Add Event
        </button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
              Add Event
            </Typography>
            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
              
            </Typography>
          </Box>
        </Modal>
      </div>
    {/* Map over this for how ever many schedule items exist in state */}
      <div className=' schedule-items-container | overflow-y-scroll flex flex-col gap-4'>
        <ScheduleItem value={value} />
        <ScheduleItem value={value} />
      </div>
      
    </div>
  )
}

export default Scheduler

import { useState } from 'react';
import ScheduleItem from './ScheduleItem';
import AddScheduleItem from './AddScheduleItem'
import { Modal, Button, Box, Typography, Backdrop, Fade } from '@mui/material';
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
  const handleClose = () => {
    
    setOpen(false)
  }

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
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
          timeout: 1000,
        }}
        >
          <Fade in={open}>
            <Box sx={style}>
              <Typography id="transition-modal-title" variant="h6" component="h2">
                <span className='form-header'>
                  <span className='soft-yellow'>               
                    Add Event on: <br />
                  </span> 
                  {value.format('MMMM DD YYYY')}               
                </span>
              </Typography>
              <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                <AddScheduleItem />
              </Typography>
            </Box>
          </Fade>
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

import Calendar from '../../pages/Calendar/Calendar'
import './SideBar.css'

const SideBar = () => {
  return ( 
    <>
      <div className='sidebar-container | h-screen flex justify-start flex-col items-center gap-14'>
        <div className='widget-header | text-3xl flex w-full justify-between'>
          <h1>Calendar</h1>
          <div>2022</div>
        </div>
        <Calendar />
      </div>
    </>
  );
}

export default SideBar;
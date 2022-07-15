export const daysOfWeek = [
  {title: 'S'},
  {title: 'M'},
  {title: 'T'},
  {title: 'W'},
  {title: 'T'},
  {title: 'F'},
  {title: 'S'},
]

export const monthsInYear = [
  {title: 'January', index: 0},
  {title: 'Febuary', index: 1},
  {title: 'March', index: 2},
  {title: 'April', index: 3},
  {title: 'May', index: 4},
  {title: 'June', index: 5},
  {title: 'July', index: 6},
  {title: 'August', index: 7},
  {title: 'September', index: 8},
  {title: 'October', index: 9},
  {title: 'November', index: 10},
  {title: 'December', index: 11},
]

export const monthArray = []

export const date = new Date()

/* ***************** GET DAYS IN CURRENT MONTH ***************** */ 
export function getDaysInCurrentMonth() {
  return new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
    ).getDate()
  }
export const result = getDaysInCurrentMonth() // => 31

/* ******************* GET CURRENT DATE *********************** */ 
export const currentDay = date.getDate() // => 15

/* ************************************************************ */ 

export const currentMonth = date.getMonth()
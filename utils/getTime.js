export const getTime = (timestamp) => {
  const d = new Date(timestamp);

  let month = d.getMonth()+1;
  if(month===1) month='Jan'
  else if(month===2) month='Feb'
  else if(month===3) month='Mar'
  else if(month===4) month='Apr'
  else if(month===5) month='May'
  else if(month===6) month='Jun'
  else if(month===7) month='Jul'
  else if(month===8) month='Aug'
  else if(month===9) month='Sep'
  else if(month===10) month='Oct'
  else if(month===11) month='Nov'
  else if(month===12) month='Dec'
  return d.getDate() + ' ' + month + ' ' + d.getFullYear()
}
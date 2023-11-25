document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const from = document.getElementById('from').value;
    const to = document.getElementById('to').value;
    const date = document.getElementById('date').value;
  
    const reservationDetails = `${from}|${to}|${date}|confirmed`;
    
    let reservations = localStorage.getItem('reservations') || '';
    reservations += `${reservationDetails},`;
    
    localStorage.setItem('reservations', reservations);
  
    const confirmationMessage = `Your bus from ${from} to ${to} on ${date} has been booked successfully!`;
    document.getElementById('reservationDetails').innerText = confirmationMessage;
    window.location.href = "./listbus.html";
  });
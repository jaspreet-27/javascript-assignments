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
    // window.location.href = "istbus.html";
  });
  
  function searchbuses() {
    const from = document.getElementById('from').value
    const to = document.getElementById('to').value
  
    const busData = getBusData(from, to)
  
    displayBusList(busData)
  }
  
  function getBusData(from, to) {
    const buses = [
      {from: 'Chandigarh', to: 'Delhi', time: '10;00 AM', price: '250'},
      {from: 'Delhi', to: 'Himachal Pradesh', time: '10;00 pM', price: '300'},
      {from: 'Chandigarh', to: 'Shimla', time: '12;00 pM', price: '300'},
      {from: 'Himachal Pradesh', to: 'Delhi', time: '02;00 AM', price: '300'},
      {from: 'Chandigarh', to: 'Amritsar', time: '09;00 pM', price: '250'},
      {from: 'Himachal Pradesh', to: 'Delhi', time: '08;00 AM', price: '250'},
      {from: 'Delhi', to: 'Amritsar', time: '04;00 pM', price: '400'},
      {from: 'Chandigarh', to: 'Shimla', time: '06;00 AM', price: '250'},
      {from: 'Himachal Pradesh', to: 'Shimla', time: '01;00 pM', price: '340'},
      {from: 'Shimla', to: 'Himachal Pradesh', time: '12;00 AM', price: '250'},
      {from: 'Chandigarh', to: 'Amritsar', time: '11;00 pM', price: '400'},
      {from: 'Amritsar', to: 'Delhi', time: '01;00 pM', price: '300'}
    ]
  
    const filteredBuses = buses.filter((bus) => bus.from == from && bus.to == to)
  
    return filteredBuses
  }
  
  function displayBusList(busData) {
    const busListDiv = document.getElementById('buslist')
    busListDiv.innerHTML = '' 
  
    if (busData.length === 0) {
      busListDiv.innerHTML = 'No buses available for the selected route and date.'
      return
    }
  
    const ul = document.createElement('ul')
    busData.forEach((bus) => {
      const li = document.createElement('li')
      const input = document.createElement('input')
      input.setAttribute("id", "booknow");
      input.setAttribute("type", "button");
      input.setAttribute("onclick", "booknow()");
      input.value = 'Book Now'
      li.textContent = `From: ${bus.from}, To: ${bus.to}, Time: ${bus.time}, price: ${bus.price}`;
      ul.appendChild(li)
      
      li.appendChild(input)
    })
            
    busListDiv.appendChild(ul)
  }
  function booknow(){
    window.location.href = "./booking.html"
  }
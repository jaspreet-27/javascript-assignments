document.addEventListener('DOMContentLoaded', function () {
    const mySeat= document.querySelectorAll('.seat');
    const seatRange = 5;

    mySeat.forEach(seat => {
        seat.addEventListener('click', () => {
            seat.classList.toggle('selected');
            validateSelection();
        });
    });

    document.querySelector('button').addEventListener('click', () => {
        const selectedSeats = document.querySelectorAll('.seat.selected');
        alert(`You have selected ${selectedSeats.length} mySeat.`);
    });

    function validateSelection() {
        const selectedSeats = document.querySelectorAll('.seat.selected');

        if (selectedSeats.length > seatRange) {
            alert('You can only select up to 5 mySeat.');
            selectedSeats.forEach(seat => {
                seat.classList.remove('selected');
            });
        }

    }
});

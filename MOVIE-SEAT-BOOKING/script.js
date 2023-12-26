const movie_hall = document.querySelector('.movie-hall');
const available_seats = document.querySelectorAll('.row .seat:not(.occupied)')
const selected_seat_count = document.getElementById('seat-count')
let total_price = document.getElementById('total-price')
let ticket_price = document.getElementById('movie').value;


function updateTicketPrice(){
    const selected_seats = document.querySelectorAll('.row .seat.selected')
    selected_seat_count.innerHTML = selected_seats.length
    total_price.innerHTML = ticket_price*selected_seats.length
}

movie_hall.addEventListener('click', (e)=>{
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected')
        updateTicketPrice()
    }
})

movie.addEventListener('change', (e)=>{
    ticket_price = +e.target.value
    updateTicketPrice()
})

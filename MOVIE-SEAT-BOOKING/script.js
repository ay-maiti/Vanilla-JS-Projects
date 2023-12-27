const movie_hall = document.querySelector('.movie-hall');
const all_seats = document.querySelectorAll('.row .seat')
const selected_seat_count = document.getElementById('seat-count')
let total_price = document.getElementById('total-price')
const movie = document.getElementById('movie')
let ticket_price = 0
console.log('ticket price before initialise- '+ticket_price)
initializeMovieHall()

function initializeMovieHall(){
    const lsSeatsIndex = JSON.parse(localStorage.getItem('selectedSeats'));
    if(lsSeatsIndex!==null){
        lsSeatsIndex.forEach(element => {
            if(element>0 && element<all_seats.length){
                all_seats[element].classList.add('selected')
            }
        });
    }
    const lsMovie = JSON.parse(localStorage.getItem('selectedMovie'));
    if(lsMovie!==null){
        movie.selectedIndex = lsMovie;
    }
    updateTicketPrice()
}

function updateTicketPrice(){
    const selected_seats = document.querySelectorAll('.row .seat.selected')
    selected_seat_count.innerHTML = selected_seats.length

    ticket_price = movie.value;
    total_price.innerHTML = ticket_price*selected_seats.length    

    const selectedSeatsIndex = [...selected_seats].map(seat=>[...all_seats].indexOf(seat))
    localStorage.setItem('selectedSeats', JSON.stringify(selectedSeatsIndex))    
}

movie_hall.addEventListener('click', (e)=>{
    if(e.target.classList.contains('seat') && !e.target.classList.contains('occupied')){
        e.target.classList.toggle('selected')
        updateTicketPrice()
    }
})

movie.addEventListener('change', (e)=>{
    localStorage.setItem('selectedMovie', e.target.selectedIndex)
    updateTicketPrice()
})
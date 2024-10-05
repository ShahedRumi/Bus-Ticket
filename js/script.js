let seats = [];
let seatCostInitial = 550;
document.getElementById('seats').addEventListener('click',(event)=>{
    if(event.target.classList.contains('bg-gray-100')){
        if(!seats.includes(event.target.innerText) && seats.length<4){
            seats.push(event.target.innerText);
            event.target.style.backgroundColor = '#1DD100';
            console.log(seats);
            document.getElementById('seat-counter').innerText = seats.length;
            document.getElementById('seat-left').innerText = Number(document.getElementById('seat-left').innerText)-1;
            seatCost = seatCostInitial * seats.length;

            document.getElementById('default-text').classList.add('hidden');
            let div = document.createElement('div');
            div.classList.add('grid','grid-cols-3');
            div.innerHTML = `
                <p class="flex justify-center items-center text-lg">${event.target.innerText}</p>
                <p class="flex justify-center items-center text-lg">Business</p>
                <p class="flex justify-center items-center text-lg">${seatCostInitial}</p>
            `
            document.getElementById('selected-seats').appendChild(div);

            document.getElementById('total-price').innerText = seatCost;
        }
        else if(seats.includes(event.target.innerText)){
            seats.splice(seats.indexOf(event.target.innerText),1);
            console.log(seats);
            event.target.style.backgroundColor = '';
            document.getElementById('seat-counter').innerText = seats.length;
            document.getElementById('seat-left').innerText = Number(document.getElementById('seat-left').innerText)+1;
        }
        else{
            alert("You cannot pick more than 4 seats");
        }
    }
})

// let c = ara.findIndex()

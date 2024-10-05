<div id="selected-seats">
                  <div class="grid grid-cols-3">
                    <p class="flex justify-center items-center font-bold text-xl">Seat <span id="seat-counter" class="bg-primary rounded-full text-xs w-5 h-5 flex justify-center items-center">0</span></p>
                    <p class="flex justify-center items-center font-bold text-xl">Class</p>
                    <p class="flex justify-center items-center font-bold text-xl">Price</p>
                  </div>
                </div>



let div = document.createElement('div');
        div.classList.add('grid','grid-cols-3');
        for(let i of ara){
            div.innerHTML = `
                <p class="flex justify-center items-center text-lg">${i.seat}</p>
                <p class="flex justify-center items-center text-lg">${i.class}</p>
                <p class="flex justify-center items-center text-lg">${i.price}</p>
            `
        }
        document.getElementById('selected-seats').appendChild(div);
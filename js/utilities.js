let ara = [];

document.getElementById('seats').addEventListener('click',(event)=>{
    if(event.target.classList.contains('bg-gray-100')){
       if(!ara.find((data)=>data.seat===event.target.innerText) && ara.length<4){
        const obj = {
            seat: event.target.innerText,
            class: 'business',
            price: 550
        }
        ara.push(obj);
        console.log(ara);

        event.target.style.backgroundColor = '#1DD100';
        document.getElementById('seat-counter').innerText = ara.length;
        document.getElementById('seat-left').innerText = Number(document.getElementById('seat-left').innerText)-1;
        seatCost = ara.reduce((a,n)=>a+n.price,0);
        document.getElementById('total-price').innerText = seatCost;
        document.getElementById('grand-total').innerText = seatCost;

        document.getElementById('default-text').classList.add('hidden');
        document.getElementById('selected-seats').innerHTML='';
        let cards = ara.map((value)=>`
            <div class="grid grid-cols-3">
                <p class="flex justify-center items-center text-lg">${value.seat}</p>
                <p class="flex justify-center items-center text-lg">${value.class}</p>
                <p class="flex justify-center items-center text-lg">${value.price}</p>
            </div>
            `
        ).join('');
        document.getElementById('selected-seats').innerHTML=cards;

        if(ara.length===4){
            applyCoupon();
        }
       }


       else if(ara.find((data)=>data.seat===event.target.innerText)){
            const seatIndex = ara.findIndex((data)=>data.seat===event.target.innerText);
            ara.splice(seatIndex,1);
            
            event.target.style.backgroundColor = '';
            document.getElementById('seat-counter').innerText = ara.length;
            document.getElementById('seat-left').innerText = Number(document.getElementById('seat-left').innerText)+1;
            seatCost = ara.reduce((a,n)=>a+n.price,0);
            document.getElementById('total-price').innerText = seatCost;
            document.getElementById('grand-total').innerText = seatCost;

            document.getElementById('selected-seats').innerHTML='';
            let cards = ara.map((value)=>`
                <div class="grid grid-cols-3">
                    <p class="flex justify-center items-center text-lg">${value.seat}</p>
                    <p class="flex justify-center items-center text-lg">${value.class}</p>
                    <p class="flex justify-center items-center text-lg">${value.price}</p>
                </div>
                `
            ).join('');
            document.getElementById('selected-seats').innerHTML=cards;

            if(ara.length===0){
                document.getElementById('default-text').classList.remove('hidden');
            }
       }

       else{
        alert("You Cannot Pick More Than 4 Seats");
       }
        
    }
});

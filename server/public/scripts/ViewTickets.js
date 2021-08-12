const getTickets = async ()=>{
try{
    const res = await fetch('/api/tickets',{
       method:'GET',
    });
    const data = await res.json();
    return data
    }catch(err){
    console.log(err)
}
}


export const Tickets = window.addEventListener('load', (e) => {
   const TicketList = await getTickets();
    exports.TicketList = TicketList   
    });

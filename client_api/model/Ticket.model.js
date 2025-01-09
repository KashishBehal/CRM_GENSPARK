
const {TicketSchema} =require("./Ticket.schema");
const InsertTicket=(ticketObj)=>{
    return new Promise((resolve , reject)=>{
        try{
            TicketSchema(ticketObj)
            .save()
            .then((data)=>resolve(data))
            .catch((error)=>reject(error));
            } catch(error){
                reject(error);
            }
        
    });
};
module.exports={
    InsertTicket,
}
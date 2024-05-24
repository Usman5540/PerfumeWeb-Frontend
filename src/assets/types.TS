export type OrderItemType={
photo:string,
name:string,
price:number,
quantity:number,
_id:string,
}



export type OrderType = {

            name:string,
            address:string,
            state:string ,
            country:string,
            pinCode:number,
            subtotal:number,
            ship_charges:number,
            tax:number,
            discount:number,
            total:number,
            status:"shipped" | "delivered " | "processing",


}
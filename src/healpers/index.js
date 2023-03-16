export const formatterMoney = (value) =>{
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });
    return formatter.format(value)
}

export const totalToPay = (quantity, term)=>{
    let total;

    // while the higher the amount, the lower the interest
    if( quantity < 5000 ){
        total = quantity * 1.5
    }else if( quantity >= 5000 && quantity < 10000){
        total = quantity * 1.4
    }else if( quantity >= 10000 && quantity < 15000){
        total = quantity * 1.3
    }else {
        total = quantity * 1.25
    }


    // while the high term, the higher the interest

    if( term === 6){
        total *= 1.1
    }else if( term === 12){
        total *= 1.3
    }else{
        total *= 1.5
    }
    return total;

}
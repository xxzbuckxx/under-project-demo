//Annualized ROI
function roi(){
    //Get these from user input
    let initial = 5000;
    let timeyrs = 1;
    const rate = 6;
    let contribution = 100;
    let totalCont = 0;
    let final = 0;
    let choice = "month"; //monthly
    let totalCalcs = 0;
    
    switch(true){
        case choice === "month":
            totalCalcs = timeyrs * 12;
            for(let i = 0; i < totalCalcs; i++){
            final = monthlyCalc(rate, initial);
            initial = final + contribution;
            totalCont = totalCont + contribution;
            }
            break;
            case choice === "quarter":
            totalCalcs = timeyrs * 4;
            for(let i = 0; i < totalCalcs; i++){
            final = quarterlyCalc(rate, initial);
            initial = final + contribution;
            totalCont = totalCont + contribution;
            }
            break;
            case choice === "year":
            totalCalcs = timeyrs * 1;
            for(let i = 0; i < totalCalcs; i++){
            final = yearlyCalc(rate, initial);
            initial = final + contribution;
            totalCont = totalCont + contribution;
            }
            break;

    }
    
    //rate = Math.pow(final/(initial+contribution),(1/(1/12)))-1;
}
//Monthly Contriubution and Monthly Return
function monthlyCalc(rate : number, initial : number){
    let mFinal = 0;
    mFinal = Math.pow((rate/100)+1,(1/12))*initial;
    return mFinal;
}
function quarterlyCalc(rate : number, initial : number){
    let mFinal = 0;
    mFinal = Math.pow((rate/100)+1,(1/4))*initial;
    return mFinal;
}
function yearlyCalc(rate : number, initial : number){
    let mFinal = 0;
    mFinal = ((rate/100)+1)*initial;
    return mFinal;
}
export default roi;

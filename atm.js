console.log("WELCOME TO SBI");
const readlineSync = require("readline-sync");
var atmcard=readlineSync.question("insert the card ");
if (atmcard=="debit"){
    console.log("card inserted")
    language=readlineSync.question("enter your language english or hindi: ")
    if (language == "english" ){
        var pin=readlineSync.questionInt("enter the pin")
        if (pin==(1234)){
            var transaction=readlineSync.questionInt("Select your transaction 1.withdraw money ,2.balance enquire: ");
            if (transaction === 1){
                var accounttype=readlineSync.questionInt("enter the type of account 1.saving ,2.current")
                if (accounttype==1){
                    var withdrawl=readlineSync.questionInt("enter the amount ")
                    if (withdrawl<=20000){
                        console.log("amount is available")
                        console.log("take your money")
                        var balance=readlineSync.question("want to check balance ")
                        if (balance==("yes")){
                            var receipt=readlineSync.question("want receipt ")
                            if (receipt==("yes")){
                                console.log("take your receipt")
                            }else{
                                console.log("thank you")
                            }
                        }else{
                            console.log("take your amount")
                        }
                    }else{
                        console.log("insufficient balance")
                    }
                }else if (accountType==2){
                    console.log("equal")
                } 
            }else if(transion==2){
                console.log("50,000 rupees available in your account")   
        }else{
            console.log("enter correct pin")
        }      
    }else if(language == "hindi"){
        var pin=readlineSync.questionInt("apna pincode dale")
        if (pin==(1234)){
            var transaction=readlineSync.questionInt("Select your transaction 1.paisa nikale ,2.khatadharak");
            if (transacion==1){
                var accounttype=readlineSync.questionInt("apna khata chune 1.bachat kahata,2. chalu khata")
                if (accounttype==1){
                    var withdrawl=readlineSync.questionInt("kripya apna amount dale ")
                    if (withdrawl<=20000){
                        console.log("amount hai")
                        console.log("kripya apna paisa lijiye")
                        var balance=readlineSync.question("apna paisa dekhe")
                        if (balance==("yes")){
                            var receipt=readlineSync.question("apni raseed dekhe ")
                            if (receipt==("yes")){
                                console.log("apni raseed le")
                            }else{
                                console.log("dhanyavaad")
                            }
                        }else{
                            console.log("apna paisa lijiye")
                        }
                    }else{
                        console.log("aprayapt")
                    }
                }else if (accountType==2){
                    console.log("saman pratikriya")
                } 
            }else if(transion==2){
                console.log("apke khate mai 50,000 rupie hai")
            }  
        }else{
            console.log("apna sahi pin dale")
        }            
    }else{
        console.log("hindi ya english chune")
    }
// }else{
    // console.log("card dale")
}
}
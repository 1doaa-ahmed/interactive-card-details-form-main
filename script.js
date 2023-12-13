let form = document.querySelector("form");

let nameInput = document.querySelector("#name");
let updatedName = document.querySelector(".name");

let cardNum = document.querySelector("#phone");
let updatedNum = document.querySelector(".number");

let month = document.querySelector(".month");
let year = document.querySelector(".year");
let updatedDate = document.querySelector('.date');

let cvc = document.querySelector(".cvc");
let updatedCvc = document.querySelector("#cvc");

let errorName = document.querySelector(".errorName");
let errorCard = document.querySelector(".errorCard");
let errorDate = document.querySelector(".errorDate");

var numberRegex = /^[0-9\s]*$/ ;
function change() {
    if (nameInput.value == ""){
        errorName.innerText = "Can't be blank";
        error(errorName , nameInput)
    }else{
        removeError(errorName , nameInput);
        if(cardNum.value == ""){
            errorCard.innerText = "Can't be blank";
            error(errorCard , cardNum);
            }else if (!cardNum.value.match(numberRegex)){
                errorCard.innerText = "Wrong format, numbers only";
                error(errorCard , cardNum);
            }else {
                removeError(errorCard , cardNum);
            if (month.value == ""){
                errorDate.innerText = "Can't be blank";
                error(errorDate , month);
            }else if(year.value == ""){
                removeError(errorDate , month);
                errorDate.innerText = "Can't be blank";
                error(errorDate , year);
            }else{
                removeError(errorDate , year);
                if(cvc.value == ""){
                    errorDate.innerText = "Can't be blank" ;
                    error(errorDate , cvc);
                }else if(!cvc.value.match(numberRegex)){
                    errorDate.innerText = "Wrong format, numbers only" ;
                    error(errorDate , cvc);
                }else{
                    removeError(errorDate , cvc)
                    updatedName.innerText = nameInput.value;
                    updatedNum.innerText = cardNum.value ; 
                    updatedDate.innerText = `${month.value} / ${year.value}`;
                    updatedCvc.innerText = cvc.value ;
                    form.innerHTML = "<div class='submitting'><div class='right'><img src='./images/icon-complete.svg'><h4>THANK YOU!</h4><p>We've added your card details</p></div><button type='submit'>Continue</button></div>";
                }
            }
        }
    }
}
function error(e , i){
    e.style.color ="red";
    e.style.fontSize ="13px";
    e.style.marginTop ="-20px";
    e.style.marginBottom ="8px";
    i.style.borderColor = "red";
}
function removeError (e ,i ) {
    e.innerText ="";
    i.style.borderColor = "var(--Very-dark-violet)";
}

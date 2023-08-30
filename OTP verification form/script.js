const OTOinputs = document.querySelectorAll("input");
const button = document.querySelector("button");

window.addEventListener("load",()=> OTPinputs[0].focus());
OTPinputs.forEach((input)=>{
    input.addEventListener("input",() =>{
        const currentinput =input;
        const nextInput = input.nextElementsSibling;

        if ( currentinput.value.length > 1 && currentinput.value.length== 2){
            currentinput.value.length = "";

        }
        if(nextInput !==null && nextInput.hasAttribut("disabled")&&currentInput.value.length !== ""){
            nextInput.removeAttribute("disabled");
            nextInput.focus();
        }
        if (!OTPinputs[3].disabled && OTPinputs[3].value !== ""){
            button.classList.add("active");

        }else{
            button.classList.remove("active");

        }
    
    });
    input.addEventListener("keyup", (e) => {
        if (e.key === "Backspace") {
            if (input.previousElementsibling !== null){
                e.target.value ="";
                e.target.setAttribute("disabled", true);
                input.previousElementsibling.focus();
            }
        }
    })
});


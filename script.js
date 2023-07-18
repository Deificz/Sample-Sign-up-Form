let confPass = document.getElementById(`conf-password`);
let submit = document.getElementById(`submit`);

confPass.addEventListener(`input`, () =>{
    let confPassLbl = document.getElementById(`conf-label`)
    let passwordVal = document.getElementById(`password`).value;
    let confPassVal = document.getElementById(`conf-password`).value;

    if(passwordVal.length != 0){
        if(passwordVal === confPassVal){
            confPass.style.cssText = `border-style: solid;
                                      border-color: green;
                                      border-width: 1px;
                                      background-color: rgb(214, 255, 214);
                                      color: black;`
            confPassLbl.style.cssText = `color: green;`
            confPassLbl.setAttribute("tooltip", " ");
        }

        else if (passwordVal !== confPassVal){

            confPass.style.cssText = `border-style: solid;
                                      border-color: rgb(241, 46, 32);
                                      border-width: 1px;
                                      background-color: rgb(255, 206, 206);
                                      color: black;`
            confPassLbl.style.cssText = `color: white;`  
            confPassLbl.setAttribute("tooltip", "Passwords don't match");
        }

        else{
            confPass.style.cssText = `
                                  background-color: transparent;
                                  border-style: solid;
                                  border-color: rgb(117, 117, 117);
                                  border-width: 1px;
                                  color: white;`
            
            confPassLbl.style.cssText = `color: white;`
        }
        
        
    }
    else{
        confPass.style.cssText = `
        background-color: transparent;
        border-style: solid;
        border-color: rgb(117, 117, 117);
        border-width: 1px;
        color: white;`

        confPassLbl.style.cssText = `color: white;`
    }
        
})

submit.addEventListener(`click`, () =>{
    let passwordVal = document.getElementById(`password`).value;
    let confPassVal = document.getElementById(`conf-password`).value;

        if(passwordVal !== confPassVal)
            alert("Password don't match");
})
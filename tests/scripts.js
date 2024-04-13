const Button = document.querySelector(".input-form")

// let Email_IDs = ['sample-id@gmail.com'];
// let Passwords = ['1234'];

let credentials = [];

Button.addEventListener("submit",(e) =>{
    e.preventDefault();
    const fd = new FormData(Button);
    const obj = Object.fromEntries(fd);
    // console.log(obj);
    credentials.push(obj);
})

const VButton = document.querySelector(".Validation-form")


VButton.addEventListener("submit",(e) =>{
    e.preventDefault();
    const fd = new FormData(VButton);
    const obj = Object.fromEntries(fd);
    // console.log(obj["email-id"])
    let found = false;
    credentials.forEach(function(value,index){
        // console.log(value);
        found = (value["email-id"] === obj["email-id"] && value["pass"] === obj["pass"]);

        // console.log(found);
    })

    const txt = document.querySelector(".To-Enter");

    if (found) {
        txt.innerHTML = '<h2 style="text-align: center; color: blue;font-size: xx-large;">Correct</h2>';
    }else{
        txt.innerHTML = '<h2 style="text-align: center; color: red;font-size: xx-large;">Wrong</h2>';
    }
})
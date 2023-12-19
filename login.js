let account = {email: 'test@luxpmsoft.com', password: 'test1234!'};

let emailinput = document.getElementById('email');
let passwordinput = document.getElementById('password');


emailinput.addEventListener("keydown", (e) => {

    setTimeout(() => {
        
        if(e.keyCode === 13) {
            handleLogin();
        }

    }, 10)
});

passwordinput.addEventListener("keydown", (e) => {

    setTimeout(() => {

        if(e.keyCode === 13) {
            handleLogin();
        }

        let idealPasswordCombo = /((?=.*[a-z])|(?=.*[A-Z]))(?=.*[0-9])(?=.*[^A-Za-z0-9])/;
    
        if(idealPasswordCombo.test(passwordinput.value) || passwordinput.value == '') {
            document.getElementById('pwalert').style.visibility="hidden";
        }
        else {
            document.getElementById('pwalert').style.visibility="visible";
        }

    }, 10)

});

function handleLogin() {

    if (emailinput.value === account.email && passwordinput.value === account.password) {
        location.href = "Html/blankpage.html";
    }

    if(passwordinput.value != account.password) {

        handleWrongPasswordInput();
    }
}

function handleWrongPasswordInput() {

    let loginfunctionality = document.getElementById('loginfunctionality');
        const alert = document.createElement('div');
        const okButton = document.createElement('button');

        okButton.innerText = 'OK';
        alert.appendChild(okButton);
        alert.classList.add('alert');

        alert.setAttribute('style', `
            position:absolute;
            padding:20px;
            border-radius:10px;
            box-shadow: 0 10px 5px #00000022;
            display:flex;
            flex-direction:column;
            background-color:white;
            color:black;`
            );

        okButton.setAttribute('style', `
            border: 1px solid #333;
            background-color:grey;
            border-radius:5px;
            width:50%;
            margin-left:25%;
            margin-top:5%;
            padding:5px;`
            );

        alert.innerHTML = `<span style="padding:10px">The provided password is wrong.</span>`;
        alert.appendChild(okButton);
        okButton.addEventListener('click', (e) => {
            alert.remove();
        });
        loginfunctionality.appendChild(alert);

}
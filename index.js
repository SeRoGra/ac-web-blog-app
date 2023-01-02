$(document).ready(function(){
    if(window.localStorage.getItem('id') != null) {
        window.location.href = "src/components/profile/profile.html";
    }
})

$("#btnLogin").click(function () {

    var email = $("#email").val();
    var pass = $("#password").val();

    var response;

    fetch(URL + '/user/login', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "email": email, "password": pass })
    })
        .then(response => response.json())
        .then(response => {

            if (!response['ok']) {

                //Pintar los errores;
                modalError(response['message'] + "</br></br>" + (response['body'] != null ? response['body'].toString().replace(",", "</br>") : ""));

            } else {

                window.localStorage.clear();
                window.localStorage.setItem('id', response.body.id);
                window.localStorage.setItem('name', response.body.name);
                window.localStorage.setItem('username', response.body.username);
                window.localStorage.setItem('email', response.body.email);
                window.localStorage.setItem('phone', response.body.phone);
                window.localStorage.setItem('website', response.body.website);
                window.localStorage.setItem('companyName', response.body.company.name);
                window.localStorage.setItem('companyCatchPhrase', response.body.company.catchPhrase);
                window.localStorage.setItem('companyBs', response.body.company.bs);

                console.log("OK: " + response['ok'])
                console.log("BODY: " + JSON.stringify(response.body.username));

                toastAlert(true, "Logueado correctamente");
                setTimeout(function(){ window.location.href = "src/components/profile/profile.html"; }, 3000);

            }
        }).catch((error) => {
            window.localStorage.clear();
            modalError("Se presento el siguiente inconveniente </br>" + error.toString());
        })

});
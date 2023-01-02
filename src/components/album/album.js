$(document).ready(function () {
    if (window.localStorage.getItem('id') == null) {
        window.localStorage.clear();
        window.location.href = "/ac-web-blog-app/index.html";
    }

    getAlbumsByUser(window.localStorage.getItem('id'));

})

function getAlbumsByUser(userId) {

    fetch(URL + '/user/' + userId + '/albums', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(response => {

            console.log(response);
            if (!response['ok']) {

                //Pintar los errores;
                modalError(response['message'] + "</br></br>" + (response['body'] != null ? response['body'].toString().replace(",", "</br>") : ""));

            } else {

                let cards = "";

                console.log("Response: " + response.body.length);

                if (response.body.length > 0) {


                    for (var i = 0; i < response.body.length; i++) {

                        cards += "<div class='col'><div class='card'>";
                        cards += "<img src='/ac-web-blog-app/src/assets/img/album/camera.png' class='card-img-top'>";
                        cards += "<div class='card-body'>";
                        cards += "<button class='btn btn-warning' data-toggle='tooltip' data-bs-placement='top' ";
                        cards += "title='Compartir Album' data-bs-toggle='modal' data-bs-target='#claimsAlbumModal' ";
                        cards += "onclick='getClaimsUsersToAlbum("+ response.body[i].id +","+response.body[i].albumApiId+")'><i class='fa-solid fa-share-nodes'></i></button>";
                        cards += "<h5 class='card-title'><b>Album:</b> <p>" + response.body[i].title + "</p></h5>";
                        cards += "<p class='card-text'></p></div></div></div>";

                    }

                    $("#album-cards").html(cards);

                }


            }

        }).catch((error) => {
            window.localStorage.clear();
            modalError("Se presento el siguiente inconveniente </br>" + error.toString());
        })

}

$("#btnSaveAlbum").click(() => {

    var title = $("#formAlbumTitle").val();

    fetch(URL + '/album', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ "title": title, "userId":  window.localStorage.getItem('id')})
    })
        .then(response => response.json())
        .then(response => {

            if (!response['ok']) {

                //Pintar los errores;
                modalError(response['message'] + "</br></br>" + (response['body'] != null ? response['body'].toString().replace(",", "</br>") : ""));

            } else {

                toastAlert(true, "Album creado exitosamente!");
                $("#title").val("");
                $("#btnCloseAlbumModal").click();
                getAlbumsByUser(window.localStorage.getItem('id'));
            }

        }).catch((error) => {
            window.localStorage.clear();
            modalError("Se presento el siguiente inconveniente </br>" + error.toString());
        })

})

//TableClaimsToAlbums

function getClaimsUsersToAlbum(albumId, albumApiId) {

    console.log("{albumId: " + albumId + ", albumApiId: " + albumApiId + "}");

}
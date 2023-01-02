const route = (event) => {
    event = event || window.event;
    event.preventDefault();
    //window.history.pushState({}, "", event.target.href);
    console.log("Event: " + event.target.href);
    handleLocation(event.target.href);
}

const handleLocation = async (n) => {
    //const path = n;

    if (n === undefined) {

    } else {


        const html = await fetch(n).then((data) => data.text());
        $("#main-page").html(html);

    }


};

window.onpopstate = handleLocation;
window.route = route;

handleLocation();
$(document).ready(function(){
    if(window.localStorage.getItem('id') == null) {
        window.localStorage.clear();
        window.location.href = "/ac-web-blog-app/index.html";
    }

    $(".ls-name").html(window.localStorage.getItem("name"));
    $(".ls-email").html(window.localStorage.getItem("email"));
    $(".ls-companyName").html(window.localStorage.getItem("companyName"));
    $(".ls-companyCatchPhrase").html(window.localStorage.getItem("companyCatchPhrase"));
    $(".ls-website").html(window.localStorage.getItem("website"));
    
})
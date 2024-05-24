document.body.onload = function() {
    
    let params = new URLSearchParams(window.location.search);
    
    document.getElementById("email").innerHTML = params.get("data");
}
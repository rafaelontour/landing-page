document.getElementById("emailForm").addEventListener("submit", function(event) {
    event.preventDefault();

    let emailInput = document.getElementById("iemail");
    let email = emailInput.value;

    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.com$/;

    if (!email.match(emailRegex)) {
        let span = document.getElementById("verificar");
        span.style.display = "block";
        span.innerHTML = "Valid email required";
        emailInput.style.backgroundColor = "hsla(4, 100%, 67%, 0.649)";
        emailInput.style.borderColor = "var(--tomato)";
        emailInput.focus();
    } else {
        document.getElementById("verificar").innerHTML = "";
        document.getElementById("emailForm").submit();

        window.location.href = "success.htm?data=" + encodeURIComponent(email);
    }
});
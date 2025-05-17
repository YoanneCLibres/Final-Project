document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Clear all previous errors
    const errorElements = document.querySelectorAll(".error");
    errorElements.forEach(el => el.textContent = "");

    let valid = true;

    const firstName = document.getElementById("firstName").value.trim();
    const lastName = document.getElementById("lastName").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const contact = document.getElementById("contact").value.trim();
    const reason = document.getElementById("reason").value.trim();
    const sexInput = document.querySelector("input[name='sex']:checked");

    if (!firstName) {
        document.getElementById("firstName").nextElementSibling.textContent = "Required";
        valid = false;
    }

    if (!lastName) {
        document.getElementById("lastName").nextElementSibling.textContent = "Required";
        valid = false;
    }

    if (!sexInput) {
        document.querySelector("input[name='sex']").parentElement.querySelector(".error").textContent = "Required";
        valid = false;
    }

    if (!email) {
        document.getElementById("email").nextElementSibling.textContent = "Required";
        valid = false;
    }

    if (!password) {
        document.getElementById("password").nextElementSibling.textContent = "Required";
        valid = false;
    }

    if (!reason) {
        document.getElementById("reason").nextElementSibling.textContent = "Required";
        valid = false;
    }

    if (valid) {
        localStorage.setItem("firstName", firstName);
        localStorage.setItem("lastName", lastName);
        localStorage.setItem("email", email);
        localStorage.setItem("sex", sexInput.value);
        localStorage.setItem("reason", reason);
        window.location.href = "proj_profile_yourlastname.html";
    }
});

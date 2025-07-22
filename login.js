document.getElementById("loginBtn").addEventListener("click", function () {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();
  const errorDiv = document.getElementById("error");
  const loading = document.getElementById("loading");

  errorDiv.textContent = "";
  loading.style.display = "block";

  fetch("data.json")
    .then(response => response.json())
    .then(users => {
      const user = users.find(u => u.username === username && u.password === password);
      loading.style.display = "none";

      if (user) {
        window.location.href = "https://ambtehran-esteri-fa.github.io/-/";
      } else {
        errorDiv.textContent = "Invalid username or password.";
      }
    })
    .catch(err => {
      loading.style.display = "none";
      errorDiv.textContent = "An error occurred. Please try again later.";
    });
});

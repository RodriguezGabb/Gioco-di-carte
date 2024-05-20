document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault();

    let formData = new FormData(this);

    fetch('signup.php', {
        method: 'POST',
        body: formData
    })
        .then(response => response.text())
        .then(data => {
            document.getElementById('response').innerText = data;
        })
        .catch((error) => {
            console.error('Error:', error);
        });
});
console.log('spojeno');

document.getElementById('subscriptionForm').addEventListener('submit', function(event) {
    var email = document.getElementById('email').value;
    var username = document.getElementById('nickname').value;

    var atIndex = email.indexOf('@');
        var dotIndex = email.lastIndexOf('.');

        if (atIndex < 0 || dotIndex < 0 || dotIndex < atIndex) {
            alert('Please enter a valid email address');
            event.preventDefault();
        }

        if (username === '') {
            alert('Please enter a username');
            event.preventDefault();
        }
});
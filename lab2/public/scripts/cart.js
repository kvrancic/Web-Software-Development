function updateCart(event, name, count, form) {
    event.preventDefault();

    // Send a POST request to the server
    fetch(form.action, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({name: name, count: count}),
    })
    .then(response => response.json())
    .then(data => {
        // Update the cart amount displayed on the page
        document.getElementById('cart-amount').innerHTML = data.cartAmount;
    })
    .catch((error) => {
        console.error('Error:', error);
    });

    return false;
}

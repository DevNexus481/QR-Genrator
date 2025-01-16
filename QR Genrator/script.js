document.getElementById('generate').addEventListener('click', function() {
    const text = document.getElementById('text').value.trim();
    
    if (text === "") {
        alert("Please enter some text or URL");
        return;
    }

    const qrcodeContainer = document.getElementById('qrcode');
    qrcodeContainer.innerHTML = ""; // Clear previous QR code

    const apiUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(text)}&size=256x256`;

    // Create an image element to display the QR code
    const img = document.createElement('img');
    img.src = apiUrl;
    img.alt = 'QR Code';
    
    // Append the image to the QR code container
    qrcodeContainer.appendChild(img);
});
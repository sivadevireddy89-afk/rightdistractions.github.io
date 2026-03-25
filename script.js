// This is the restored complete original script

const imageUrl = 'https://example.com/image.jpg'; // fixed the image URL

function loadImage() {
    const img = new Image();
    img.src = imageUrl;
    document.body.appendChild(img);
}

loadImage();
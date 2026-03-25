// JavaScript code to update gallery items and remove `?fit=crop` parameter

const galleryItems = document.querySelectorAll('.gallery-item img');

galleryItems.forEach((item, index) => {
    // Replace image source while removing the ?fit=crop parameter
    item.src = item.src.replace(/\?fit=crop/, '');

    // Dictionary of image URLs pointing to the uploaded images in the Images folder
    const imageUrls = [
        'Images/image1.jpg',
        'Images/image2.jpg',
        'Images/image3.jpg',
        'Images/image4.jpg',
        'Images/image5.jpg',
        'Images/image6.jpg',
        'Images/image7.jpg',
        'Images/image8.jpg',
        'Images/image9.jpg'
    ];
    
    // Update the image source to the new URL
    item.src = imageUrls[index];
});
// Gallery Script

const galleryData = [
    {
        title: 'Image 1',
        url: 'https://example.com/image1.jpg'
    },
    {
        title: 'Image 2',
        url: 'https://example.com/image2.jpg'
    },
    {
        title: 'Image 3',
        url: 'https://example.com/image3.jpg'
    },
    {
        title: 'Image 4',
        url: 'https://example.com/image4.jpg'
    },
    {
        title: 'Image 5',
        url: 'https://example.com/image5.jpg'
    },
    {
        title: 'Image 6',
        url: 'https://example.com/image6.jpg'
    },
    {
        title: 'Image 7',
        url: 'https://example.com/image7.jpg'
    },
    {
        title: 'Image 8',
        url: 'https://example.com/image8.jpg'
    },
    {
        title: 'Image 9',
        url: 'https://example.com/image9.jpg'
    },
    {
        title: 'Image 10',
        url: 'https://example.com/image10.jpg'
    },
    {
        title: 'Image 11',
        url: 'https://example.com/image11.jpg'
    },
    {
        title: 'Image 12',
        url: 'https://example.com/image12.jpg'
    },
];

function initGallery() {
    renderGallery();
    setupEventListeners();
}

function renderGallery() {
    const galleryContainer = document.querySelector('.gallery');
    galleryData.forEach(item => {
        const galleryItem = createGalleryItem(item);
        galleryContainer.appendChild(galleryItem);
    });
}

function createGalleryItem(item) {
    const itemElement = document.createElement('div');
    itemElement.classList.add('gallery-item');
    const imgElement = document.createElement('img');
    imgElement.src = item.url.replace('?fit=crop', '');
    imgElement.alt = item.title;
    itemElement.appendChild(imgElement);
    return itemElement;
}

function setupEventListeners() {
    document.querySelectorAll('.gallery-item').forEach(item => {
        item.addEventListener('click', openModal);
    });
}

function openModal(event) {
    const modal = document.querySelector('.modal');
    modal.classList.add('open');
    const img = modal.querySelector('img');
    img.src = event.currentTarget.querySelector('img').src;
}

function closeModalFunc() {
    const modal = document.querySelector('.modal');
    modal.classList.remove('open');
}

function handleFormSubmit(event) {
    event.preventDefault();
    showNotification('Form submitted successfully!');
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.classList.add('notification');
    notification.innerText = message;
    document.body.appendChild(notification);
    setTimeout(() => notification.remove(), 3000);
}

function setupIntersectionObserver() {
    // Setup code here
}

document.addEventListener('DOMContentLoaded', initGallery);
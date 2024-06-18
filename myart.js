const images = [
    { src: 'believer.jpg', title: 'Book Poems', description: 'loremdkvnkdsnvsdf' },
    { src: 'https://via.placeholder.com/150', title: 'Consoladores', description: 'Descripción' },
    { src: 'https://via.placeholder.com/150', title: 'Community', description: 'Descripción' },
    { src: 'https://via.placeholder.com/150', title: 'Book Poems', description: 'Descripcion' },
    { src: 'https://via.placeholder.com/150', title: 'Consoladores', description: 'Descripción' },
    { src: 'https://via.placeholder.com/150', title: 'Community', description: 'Descripción' },
    { src: 'https://via.placeholder.com/150', title: 'Book Poems', description: 'Descripcion' },
    { src: 'https://via.placeholder.com/150', title: 'Consoladores', description: 'Descripción' },
    { src: 'https://via.placeholder.com/150', title: 'Community', description: 'Descripción' }
];

const modal = document.getElementById('modal');
const modalImage = document.getElementById('modalImage');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const closeBtn = document.getElementsByClassName('close')[0];

document.querySelectorAll('.image-container img').forEach((img, index) => {
    img.addEventListener('click', () => {
        modal.style.display = 'block';
        modalImage.src = images[index].src;
        modalTitle.textContent = images[index].title;
        modalDescription.textContent = images[index].description;
    });
});

closeBtn.addEventListener('click', () => {
    modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const galleryItems = document.querySelectorAll('.gallery-item img');

    galleryItems.forEach(item => {
        item.addEventListener('click', function () {
            const src = this.getAttribute('src');
            openLightbox(src);
        });
    });

    function openLightbox(src) {
        const lightbox = document.createElement('div');
        lightbox.classList.add('lightbox');
        lightbox.innerHTML = `
            <div class="lightbox-content">
                <img src="${src}" alt="Lightbox Image">
                <span class="lightbox-close">&times;</span>
            </div>
        `;
        document.body.appendChild(lightbox);

        const closeButton = lightbox.querySelector('.lightbox-close');
        closeButton.addEventListener('click', function () {
            document.body.removeChild(lightbox);
        });
    }
});

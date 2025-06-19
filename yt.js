document.addEventListener('DOMContentLoaded', () => {
    const menuIcon = document.getElementById('menuIcon');
    const sidebar = document.querySelector('.sidebar');
    const mainBody = document.querySelector('.mainBody');
    const videoCards = document.querySelectorAll('.video__card');

    // Toggle sidebar
    menuIcon.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
        // You might want to adjust the main content width when sidebar collapses
        // mainBody.classList.toggle('sidebar-collapsed');
    });

    // Handle sidebar active state
    const sidebarButtons = document.querySelectorAll('.sidebar__button');
    sidebarButtons.forEach(button => {
        button.addEventListener('click', () => {
            sidebarButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
        });
    });

    // Basic video player simulation (for demonstration purposes)
    videoCards.forEach(card => {
        card.addEventListener('click', () => {
            const videoTitle = card.querySelector('.video__title h3').textContent;
            const videoThumbnail = card.querySelector('.video__thumbnail').src;

            // In a real application, you would navigate to a video playback page
            // or dynamically load a video player here.
            alert(`Playing video: "${videoTitle}"\n(This is a placeholder. In a real clone, it would load a video player.)`);

            // You could also, for example, create a simple modal with an embedded YouTube video:
            // const videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ"; // Example YouTube embed URL
            // const videoModal = document.createElement('div');
            // videoModal.className = 'video-modal';
            // videoModal.innerHTML = `
            //     <div class="video-modal-content">
            //         <span class="close-button">&times;</span>
            //         <iframe width="560" height="315" src="${videoUrl}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            //         <h2>${videoTitle}</h2>
            //     </div>
            // `;
            // document.body.appendChild(videoModal);

            // const closeButton = videoModal.querySelector('.close-button');
            // closeButton.addEventListener('click', () => {
            //     videoModal.remove();
            // });
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    // Dynamically adding service items
    const services = [
        { name: "Web Design", description: "High-quality web design services." },
        { name: "SEO", description: "Improve your site's visibility." },
        { name: "Marketing", description: "Effective marketing strategies." }
        // Add more services as needed
    ];

    const servicesGrid = document.querySelector('.service-grid');
    services.forEach(service => {
        let div = document.createElement('div');
        div.className = 'service-item';
        div.innerHTML = `<h3>${service.name}</h3><p>${service.description}</p>`;
        servicesGrid.appendChild(div);
    });

    // Dynamically generating a portfolio gallery
    const portfolioItems = [
        { image: 'portfolio1.jpg', title: 'Project 1' },
        { image: 'portfolio2.jpg', title: 'Project 2' }
        // ...more items...
    ];

    const gallery = document.getElementById('portfolio-gallery');
    portfolioItems.forEach(item => {
        let div = document.createElement('div');
        div.className = 'gallery-item';
        div.style.backgroundImage = `url(${item.image})`;
        div.innerHTML = `<h3>${item.title}</h3>`;
        gallery.appendChild(div);
    });

    // Additional interactive or dynamic features can be added here
});

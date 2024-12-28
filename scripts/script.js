document.addEventListener('DOMContentLoaded', () => {
    const appList = document.getElementById('app-list');
    const categoryList = document.getElementById('category-list');
    const categoryAppList = document.getElementById('category-app-list');
    const categoryName = document.getElementById('category-name');
    const appDetails = document.getElementById('app-details');
    const appName = document.getElementById('app-name');
    const newAppList = document.getElementById('new-app-list');
    const searchBar = document.getElementById('search');

    // Función para mostrar las aplicaciones
    function displayApps(apps, container) {
        if (container) {
            container.innerHTML = '';
            apps.forEach(app => {
                const appCard = document.createElement('div');
                appCard.className = 'app-card';

                const appIcon = document.createElement('img');
                appIcon.src = app.icon;
                appIcon.alt = app.name;

                const appName = document.createElement('h2');
                appName.textContent = app.name;

                const appCategory = document.createElement('p');
                appCategory.textContent = app.category;

                appCard.appendChild(appIcon);
                appCard.appendChild(appName);
                appCard.appendChild(appCategory);

                appCard.addEventListener('click', () => {
                    window.location.href = app-details.html?id=${app.id};
                });

                container.appendChild(appCard);
            });
        }
    }

    // Función para mostrar las categorías
    function displayCategories(apps) {
        if (categoryList) {
            categoryList.innerHTML = '';
            const categories = [...new Set(apps.map(app => app.category))];
            categories.forEach(category => {
                const categoryCard = document.createElement('div');
                categoryCard.className = 'category-card';

                const categoryLink = document.createElement('a');
                categoryLink.href = category-apps.html?category=${category};
                categoryLink.textContent = category;

                categoryCard.appendChild(categoryLink);
                categoryList.appendChild(categoryCard);
            });
        }
    }

    // Función para mostrar las aplicaciones de una categoría
    function displayCategoryApps(apps, category) {
        if (categoryAppList) {
            categoryAppList.innerHTML = '';
            const filteredApps = apps.filter(app => app.category === category);
            displayApps(filteredApps, categoryAppList);
        }
    }

    // Función para mostrar los detalles de una aplicación
    function displayAppDetails(app) {
        if (appDetails) {
            appName.textContent = app.name;
            appDetails.innerHTML = 
                <img class="app-icon" src="${app.icon}" alt="${app.name}">
                <p>${app.description}</p>
                <p>Versión: ${app.version}</p>
                <p>Fecha de subida: ${app.uploadDate}</p>
                <div class="screenshots">
                    ${app.images.map(image => <img src="${image}" alt="${app.name} screenshot">).join('')}
                </div>
                <div class="download-links">
                    ${app.downloadLinks.map(link => 
                        <a href="${link.url}" class="download-link" data-warning="${link.warning || ''}">${link.label}</a>
                    ).join('')}
                </div>
            ;

            // Añadir eventos para mostrar advertencias
            document.querySelectorAll('.download-link').forEach(link => {
                link.addEventListener('click', (event) => {
                    const warning = link.getAttribute('data-warning');
                    if (warning) {
                        event.preventDefault();
                        showModal(warning, link.href);
                    }
                });
            });
        }
    }

    // Función para mostrar el modal de advertencia
    function showModal(message, url) {
        const modal = document.createElement('div');
        modal.className = 'modal';

        const modalContent = document.createElement('div');
        modalContent.className = 'modal-content';

        const closeButton = document.createElement('span');
        closeButton.className = 'close';
        closeButton.textContent = '×';
        closeButton.addEventListener('click', () => {
            document.body.removeChild(modal);
        });

        const title = document.createElement('h2');
        title.textContent = 'Advertencia';

        const paragraph = document.createElement('p');
        paragraph.textContent = message;

        const continueButton = document.createElement('button');
        continueButton.className = 'btn';
        continueButton.textContent = 'Continuar';
        continueButton.addEventListener('click', () => {
            window.location.href = url;
        });

        modalContent.appendChild(closeButton);
        modalContent.appendChild(title);
        modalContent.appendChild(paragraph);
        modalContent.appendChild(continueButton);

        modal.appendChild(modalContent);
        document.body.appendChild(modal);

        // Mostrar el modal
        modal.style.display = 'flex';
    }

    // Función para filtrar aplicaciones por búsqueda
    function filterApps(apps, query) {
        return apps.filter(app => app.name.toLowerCase().includes(query.toLowerCase()));
    }

    // Mostrar las aplicaciones en la página principal
    if (appList) {
        displayApps(apps, appList);
    }

    // Mostrar las categorías en la página de categorías
    if (categoryList) {
        displayCategories(apps);
    }

    // Mostrar las aplicaciones de una categoría en la página de categorías
    if (categoryAppList) {
        const urlParams = new URLSearchParams(window.location.search);
        const category = urlParams.get('category');
        if (category) {
            categoryName.textContent = category;
            displayCategoryApps(apps, category);
        }
    }

    // Mostrar los detalles de una aplicación en la página de detalles
    if (appDetails) {
        const urlParams = new URLSearchParams(window.location.search);
        const appId = urlParams.get('id');
        const app = apps.find(app => app.id == appId);
        if (app) {
            displayAppDetails(app);
        }
    }

    // Mostrar las aplicaciones nuevas en la página de nuevas
    if (newAppList) {
        const newApps = apps.filter(app => {
            const uploadDate = new Date(app.uploadDate);
            const currentDate = new Date();
            const diffTime = Math.abs(currentDate - uploadDate);
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
            return diffDays <= 30; // Aplicaciones subidas en los últimos 30 días
        });
        displayApps(newApps, newAppList);
    }

    // Añadir funcionalidad de búsqueda
    if (searchBar) {
        searchBar.addEventListener('input', (event) => {
            const query = event.target.value;
            const filteredApps = filterApps(apps, query);
            displayApps(filteredApps, appList);
        });
    }
});

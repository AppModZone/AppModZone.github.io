const apps = [
    {
        id: 1,
        name: 'App 1',
        description: 'Cada aplicación ahora puede tener múltiples enlaces de descarga (downloadLinks), cada uno con una url, label y opcionalmente un warning.La función displayApps se ha actualizado para mostrar las aplicaciones en tarjetas con el icono, nombre y categoría.La función displayAppDetails se ha actualizado para manejar múltiples enlaces de descarga y mostrar un modal de advertencia cuando sea necesario.La función filterApps filtra las aplicaciones según la consulta de búsqueda.La función displayApps se ha actualizado para mostrar las aplicaciones filtradas según la consulta de búsqueda.',
        version: '1.0.0',
        images: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
        icon: 'https://via.placeholder.com/50',
        downloadLinks: [
            { url: 'https://example.com/download/app1', label: 'Descarga 1' },
            { url: 'https://example.com/download/app1-mod', label: 'Descarga 2', warning: 'Aviso: Usar este mod puede resultar en un baneo.' }
        ],
        category: 'Juegos',
        uploadDate: '2023-10-01'
    },
    {
        id: 2,
        name: 'App 2',
        description: 'Description 2',
        version: '1.1.0',
        images: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
        icon: 'https://via.placeholder.com/50',
        downloadLinks: [
            { url: 'https://example.com/download/app2', label: 'Descarga 1' }
        ],
        category: 'Productividad',
        uploadDate: '2023-10-05'
    },
    {
        id: 3,
        name: 'App 3',
        description: 'Description 3',
        version: '1.2.0',
        images: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
        icon: 'https://via.placeholder.com/50',
        downloadLinks: [
            { url: 'https://example.com/download/app3', label: 'Descarga 1' }
        ],
        category: 'Accion',
        uploadDate: '2023-10-10'
    },
    {
        id: 4,
        name: 'App 4',
        description: 'Description 4',
        version: '1.3.0',
        images: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
        icon: 'https://via.placeholder.com/50',
        downloadLinks: [
            { url: 'https://example.com/download/app4', label: 'Descarga 1' }
        ],
        category: 'Juegos',
        uploadDate: '2023-09-01'
    },
    {
        id: 5,
        name: 'App 5',
        description: 'Description 5',
        version: '1.4.0',
        images: ['https://via.placeholder.com/150', 'https://via.placeholder.com/150'],
        icon: 'https://via.placeholder.com/50',
        downloadLinks: [
            { url: 'https://example.com/download/app5', label: 'Descarga 1' }
        ],
        category: 'Productividad',
        uploadDate: '2024-12-20'
    }
];

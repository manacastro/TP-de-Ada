import uuid from 'uuid/v4';

const columns = [
    {
        id: uuid(),
        title: 'Para hacer',
        cards: [
            {
                id: uuid(),
                title: 'Practicar HTML',
                text: 'lalala',
                tags: [
                    {
                        id: uuid(),
                        name: 'Maquetado',
                        color: 'green'
                    },
                    {
                        id: uuid(),
                        name: 'Desarrollo',
                        color: 'orange'
                    }
                ]
            },
            {
                id: uuid(),
                title: 'Hacer componentes map',
                text: 'lelele',
                tags: [
                    {
                        id: uuid(),
                        name: 'Maquetado',
                        color: 'green'
                    },
                    {
                        id: uuid(),
                        name: 'Desarrollo',
                        color: 'orange'
                    }
                ]
            }
        ]
    },
    {
        id: uuid(),
        title: 'En proceso',
        cards: [
            {
                id: uuid(),
                title: 'Practicar React',
                text: 'lilili',
                tags: [
                    {
                        id: uuid(),
                        name: 'Maquetado',
                        color: 'green'
                    },
                    {
                        id: uuid(),
                        name: 'Desarrollo',
                        color: 'orange'
                    }
                ]
            },
            {
                id: uuid(),
                title: 'Hacer componentes map',
                text: 'lololo',
                tags: [
                    {
                        id: uuid(),
                        name: 'Maquetado',
                        color: 'green'
                    },
                    {
                        id: uuid(),
                        name: 'Desarrollo',
                        color: 'orange'
                    }
                ]
            }
        ]
    },
    {
        id: uuid(),
        title: 'Listos',
        cards: [
            {
                id: uuid(),
                title: 'Practicar js',
                text: 'lululu',
                tags: [
                    {
                        id: uuid(),
                        name: 'Maquetado',
                        color: 'green'
                    },
                    {
                        id: uuid(),
                        name: 'Desarrollo',
                        color: 'orange'
                    }
                ]
            },
            {
                id: uuid(),
                title: 'Hacer componentes map',
                text: 'blabla',
                tags: [
                    {
                        id: uuid(),
                        name: 'Maquetado',
                        color: 'green'
                    },
                    {
                        id: uuid(),
                        name: 'Desarrollo',
                        color: 'orange'
                    }
                ]
            }
        ]
    }
]      
export default columns;


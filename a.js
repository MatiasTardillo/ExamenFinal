const apartments = [
    {
        image: '1.jpeg',
        builder: 'TALE CONSTRUCTORA SAC',
        price: '$ 78,850',
        area: '57.40 m²'
    },
    {
        image: '2.jpeg',
        builder: 'CONSTRUCTORA ABC',
        price: '$ 120,000',
        area: '85.00 m²'
    },
    // Agrega más departamentos según sea necesario
    {
        image: '3.jpeg',
        builder: 'CONSTRUCTORA XYZ',
        price: '$ 95,000',
        area: '65.00 m²'
    },
    {
        image: '4.jpeg',
        builder: 'CONSTRUCTORA LMN',
        price: '$ 150,000',
        area: '100.00 m²'
    },
    {
        image: '5.jpeg',
        builder: 'CONSTRUCTORA DEF',
        price: '$ 200,000',
        area: '120.00 m²'
    },
    {
        image: '6.jpeg',
        builder: 'CONSTRUCTORA GHI',
        price: '$ 110,000',
        area: '75.00 m²'
    },
    {
        image: '7.jpeg',
        builder: 'CONSTRUCTORA JKL',
        price: '$ 140,000',
        area: '90.00 m²'
    },
    {
        image: '8.jpeg',
        builder: 'CONSTRUCTORA MNO',
        price: '$ 130,000',
        area: '80.00 m²'
    },
    {
        image: '9.jpeg',
        builder: 'CONSTRUCTORA PQR',
        price: '$ 115,000',
        area: '70.00 m²'
    },
    {
        image: '10.jpeg',
        builder: 'CONSTRUCTORA STU',
        price: '$ 160,000',
        area: '105.00 m²'
    }
];

let currentIndex = 0;

const imageElement = document.getElementById('apartment-image');
const builderElement = document.getElementById('apartment-builder');
const priceElement = document.getElementById('apartment-price');
const areaElement = document.getElementById('apartment-area');
const messageElement = document.getElementById('message');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');

function updateApartment() {
    imageElement.src = apartments[currentIndex].image;
    builderElement.textContent = apartments[currentIndex].builder;
    priceElement.textContent = apartments[currentIndex].price;
    areaElement.textContent = apartments[currentIndex].area;
    messageElement.textContent = '';

    if (currentIndex === 0) {
        messageElement.textContent = 'Estás en el primer departamento.';
    } else if (currentIndex === apartments.length - 1) {
        messageElement.textContent = 'Estás en el último departamento.';
    }
}

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
        updateApartment();
    }
});

nextButton.addEventListener('click', () => {
    if (currentIndex < apartments.length - 1) {
        currentIndex++;
        updateApartment();
    }
});

// Inicializar la primera imagen
updateApartment();

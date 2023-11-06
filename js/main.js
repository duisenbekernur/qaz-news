const postsContainer = document.getElementById('posts-container')
const popularNews = document.getElementById('popular-news')

const postContents = [{
    id: 1,
    title: 'Коронавирусқа қарсы "Спутник V" вакцинасын әзірлеуге қатысқан қазақ',
    imgUrl: './img/virus.webp',
    info: 'Бірнеше ел өз азаматтарына салып жатқан коронавирусқа қарсы "Спутник V" вакцинасын вирусологтор тобы әзірлеген. Құрастырушылар қатарында Ілияс Есмағамбетов те бар...'
}, {
    id: 2,
    title: 'Қазақстанда Наурыз мейрамын неше күн бойы тойлатпақ',
    imgUrl: './img/nauryz.jpg',
    info: 'Талқылауға арналған құжатты Қазақстанның Мәдениет және спорт министрлігі ағымдағы жылдың 9 ақпанында жария етті. Талқылаудың аяқталу күні - 16 ақпан...'
}, {
    id: 3,
    title: 'Ауа райы бұзылады: Синоптиктер елімізде дауылды ескерту жариялады',
    imgUrl: './img/weather.jpg',
    info: '15 ақпанда Ақмола облысының кей жерлерінде тұман, көктайғақ, жаяу бұрқасын күтіледі. Оңтүстік-батыстан, оңтүстіктен жел соғады, күші кей жерлерде...'
}, {
    id: 4,
    title: 'Күніне неше шыныаяқ кофе ішу керек: Маман кеңес берді',
    imgUrl: './img/sorpa.webp',
    info: 'Нурия Дианова мөлшерден көп ішу салдарынан тәуелділік пайда болуы мүмкін екенін айтты. Сондай-ақ жүйке жүйесі біртіндеп жұқарады. Маман кофені тек тамақтан соң ішуге кеңес береді...'
},]

postContents.forEach(content => {
    const favoriteIds = JSON.parse(localStorage.getItem('favoriteIds')) || [];

    const isFavorite = favoriteIds.findIndex(i => i === content.id) !== -1;

    const newPost = `<div id="post-${content.id}" class="post">
          <div class="post-img">
            <img src="${content.imgUrl}" alt="" />
          </div>
          <div class="p-1 shadow mb-5 bg-white rounded">
            <div class="post-title">
            ${content.title}
            </div>
            <div class="post-info">
            ${content.info}
            </div>
            <button id="add-to-favorites-${content.id}" class="add-to-favorites">Add to Favorites</button>
          </div>
        </div>`;

    postsContainer.innerHTML = postsContainer.innerHTML + newPost;
    popularNews.innerHTML = popularNews.innerHTML + newPost;

});

postContents.forEach(content => {
    document.getElementById(`add-to-favorites-${content.id}`).addEventListener('click', () => {
        console.log('here')
        const favoriteIds = JSON.parse(localStorage.getItem('favoriteIds')) || [];
        if(favoriteIds.includes(content.id)) {
            const i = favoriteIds.findIndex(l => l === content.id)
            console.log(i)
            favoriteIds.splice(i, 1)
        } else {
            favoriteIds.push(content.id)
        }
        localStorage.setItem('favoriteIds', JSON.stringify(favoriteIds))
    })
})
// Get all the "Add to Favorites" buttons
// const addToFavoritesButtons = document.querySelectorAll('.add-to-favorites');

// // Function to add a post to favorites
// function addToFavorites(title) {
//     const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
//     if (!favorites.includes(title)) {
//         favorites.push(title);
//         localStorage.setItem('favorites', JSON.stringify(favorites));
//     }
// }

// // Add a click event listener to each "Add to Favorites" button
// addToFavoritesButtons.forEach(button => {
//     button.addEventListener('click', function () {
//         const postTitle = this.getAttribute('data-title');
//         addToFavorites(postTitle);
//         alert(`${postTitle} has been added to your favorites!`);
//     });
// });


// const greet = () => {
//     const username = prompt('Привет! Как можно вам обращаться?', 'Джеки Чан');

//     alert(`${username}, добро пожаловать в наш новостной сайт! Здесь вы найдете все последние новости.`)
// }

// setTimeout(() => {
//     greet()
// }, 500)


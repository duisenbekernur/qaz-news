const postsContainer = document.getElementById('posts-container')
const popularNews = document.getElementById('popular-news')

const postContents = [{
    title: 'Коронавирусқа қарсы "Спутник V" вакцинасын әзірлеуге қатысқан қазақ',
    imgUrl: './img/virus.webp',
    info: 'Бірнеше ел өз азаматтарына салып жатқан коронавирусқа қарсы "Спутник V" вакцинасын вирусологтор тобы әзірлеген. Құрастырушылар қатарында Ілияс Есмағамбетов те бар...'
}, {
    title: 'Қазақстанда Наурыз мейрамын неше күн бойы тойлатпақ',
    imgUrl: './img/nauryz.jpg',
    info: 'Талқылауға арналған құжатты Қазақстанның Мәдениет және спорт министрлігі ағымдағы жылдың 9 ақпанында жария етті. Талқылаудың аяқталу күні - 16 ақпан...'
}, {
    title: 'Ауа райы бұзылады: Синоптиктер елімізде дауылды ескерту жариялады',
    imgUrl: './img/weather.jpg',
    info: '15 ақпанда Ақмола облысының кей жерлерінде тұман, көктайғақ, жаяу бұрқасын күтіледі. Оңтүстік-батыстан, оңтүстіктен жел соғады, күші кей жерлерде...'
}, {
    title: 'Күніне неше шыныаяқ кофе ішу керек: Маман кеңес берді',
    imgUrl: './img/sorpa.webp',
    info: 'Нурия Дианова мөлшерден көп ішу салдарынан тәуелділік пайда болуы мүмкін екенін айтты. Сондай-ақ жүйке жүйесі біртіндеп жұқарады. Маман кофені тек тамақтан соң ішуге кеңес береді...'
},]

postContents.forEach(content => {
    const newPost = `<div class="post">
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
          </div>
        </div>`
    postsContainer.innerHTML = postsContainer.innerHTML + newPost
    popularNews.innerHTML = popularNews.innerHTML + newPost
})


const greet = () => {
    const username = prompt('Привет! Как можно вам обращаться?', 'Джеки Чан');

    alert(`${username}, добро пожаловать в наш новостной сайт! Здесь вы найдете все последние новости.`)
}

setTimeout(() => {
    greet()
}, 500)
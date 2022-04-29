const form = document.getElementById('searchForm')
const imags = document.getElementsByTagName('img')


form.addEventListener('submit', async function (e) {
    e.preventDefault()
    const searchTerm = form.elements.query.value
    // const config = { params: { q: searchTerm } }
    const res = await axios.get(`https://pixabay.com/api/?key=27080113-4ac74101915034aa4a357ed42&q=${searchTerm}`)
    const hits = res.data.hits
    creatImage(hits)
    form.elements.query.value = '';
})



const creatImage = (imgs) => {
    const resultImagesDiv = document.getElementById('resultImages')
    resultImagesDiv.innerHTML = ''
    for (let i = 0; i < imgs.length; i++) {
        const img = document.createElement("IMG")
        img.src = imgs[i].largeImageURL
        resultImagesDiv.append(img)
        img.addEventListener('mouseover', function () {
            img.style.transition = '.5s ease-in-out'
            img.style.transform = 'scale(1.6)'
        })
        img.addEventListener('mouseout', function () {
            img.style.transition = '.5s ease-in-out';
            img.style.transform = '';
        })
    }
}





// createByMap(hits)
// const createByMap = (imgs) => {
//     const resultImagesDiv = document.getElementById('resultImages')
//     resultImagesDiv.innerHTML = ''
//     imgs.map((img) => {
//         const im = document.createElement("IMG")
//         console.log(img)
//         im.src = img['largeImageURL'];
//         resultImagesDiv.append(im)
//     })
// }
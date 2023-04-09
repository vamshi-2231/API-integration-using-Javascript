
const cont = document.querySelector('.container')

// const nam = 'Atul'
// const sample = `${nam} is here`

function fetchApiData() {
    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false'
    fetch(url)
        .then(response => {
            return response.json();
        }).then(data => {
            console.log(data.data);
            createCards(data)
        })
}

fetchApiData();

function createCards(data){

    data.forEach((coin)=>{
       const div = document.createElement('div') 

       div.classList.add('card')

       const img = document.createElement('img')
       img.src= coin.image

       const heading = document.createElement('h1')
       heading.innerHTML = coin.name

       const para = document.createElement('p')
       para.innerHTML = coin.current_price;

       div.appendChild(img)
       div.appendChild(heading)
       div.appendChild(para)

       cont.appendChild(div)
    })
}
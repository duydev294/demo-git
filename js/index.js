const APP_ID='a95a566b7421739eb3c932906c190dc6';

const searchInput = document.querySelector('#search-input');

searchInput.addEventListener('change',(e)=>{
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${e.target.value}&appid=${APP_ID}&unit=metric&lang=vi`)
        .then(async res =>{
            const data = await res.json();
            console.log('[Search Input]', data);
        })
});
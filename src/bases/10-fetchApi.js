const apiKey =  'PgXVeBOh0F4ZyIoEyMluEjDnOp1VDG9W';
//const apiUrl = 'api.giphy.com/v1/gifs/random?api_key=';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
peticion
    .then(res => res.json())
    .then(({data}) => {
        //console.log(data.images.original.url); 
        const {url} = data.images.original;
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img)
    })
    .catch(console.warn);



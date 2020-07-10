
const getImg = async() =>{     
    try {
        const apiKey =  'PgXVeBOh0F4ZyIoEyMluEjDnOp1VDG9W';
        const res = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
        const {data} = await res.json()
        
        const {url} = data.images.original;
        
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img)
    } catch (error) {
        //manejo de error
        console.error(console.error);
    }
}
getImg();





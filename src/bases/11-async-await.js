// const apikey = 'gpEprzlADvBqQ81cqmeMozfYUTpKXF02';

// peticion
//     .then( resp => resp.json())
//     .then(( { data } ) => {        
//         const { url } = data.images.original;
//         console.log('url', url);
//         const img = document.createElement('img');
//         img.src = url;
//         document.body.append(img);
//     })
//     .catch(console.warn)


const getImagen = async() => {
    try {
        const apikey = 'gpEprzlADvBqQ81cqmeMozfYUTpKXF02';  
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apikey}`);
        const { data } = await resp.json();
        console.log(data);
        const { url } = data.images.original;
        console.log('url', url);
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    } catch (error) {
        // Manejo del Error
        console.log(error);
    }
}

getImagen();

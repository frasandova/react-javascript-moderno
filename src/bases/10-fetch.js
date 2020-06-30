const apikey = 'gpEprzlADvBqQ81cqmeMozfYUTpKXF02';

const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${apikey}`)

peticion
    .then( resp => resp.json())
    .then(( { data } ) => {        
        const { url } = data.images.original;
        console.log('url', url);
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
    })
    .catch(console.warn)
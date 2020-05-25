// Iniciando el Proyecto - 61

// Variables
    const listaTweets = document.querySelector('#lista-tweets');


// Event Listeners
    eventListeners()

    function eventListeners() {
        // Cuándo se envia el formulario
        document.querySelector('#formulario').addEventListener('submit', agregarTweet);

        // Borrar tweets
        listaTweets.addEventListener('click', borrarTweet);

        // Contenido cargado en Local Storage
        document.addEventListener('DOMContentLoaded', localStorageListo);
    }



// Funciones

    // Añadir tweet del formulario
    function agregarTweet(e) {
        e.preventDefault(); //Previene el actions por defecto del form
        //console.log('Formulario enviado');

        // Leer el valor del textarea
        const tweet = document.querySelector('#tweet').value;
        // Crear boton de elimina
        const botonBorrar = document.createElement('a');
        botonBorrar.classList = 'borrar-tweet'; // agregar una clases
        botonBorrar.innerText = 'X'; 

        // Crear elemento y añadirle el contenido a la lista
        const li = document.createElement('li');
        li.innerText = tweet;
        // añade el botón de borrar el tweet
        li.appendChild(botonBorrar);
        // añade el tweet a la lista
        listaTweets.appendChild(li);

        console.log(tweet);

        // Añadir a local Storage
        agregarTweetLocalStorage(tweet);
    }
    
    // Borrar tweet del DOM
    function borrarTweet(e) {
        e.preventDefault();
        if(e.target.className === 'borrar-tweet') {
            //console.log(e.target.parentElement.innerText);
            e.target.parentElement.remove();
            borrarTweetLocalStorage(e.target.parentElement.innerText);
        }
    }

    // Mostrar datos de localStorage en la lista de tweets
    function localStorageListo() {
        let tweets;

        tweets = obtenerTweetsLocalStorage();

        console.log(tweets); // muestra en consola los tweets cargados en local storage
        tweets.forEach(function(tweet) {
            // Crear boton de elimina
            const botonBorrar = document.createElement('a');
            botonBorrar.classList = 'borrar-tweet'; // agregar una clases
            botonBorrar.innerText = 'X'; 

            // Crear elemento y añadirle el contenido a la lista
            const li = document.createElement('li');
            li.innerText = tweet;
            // añade el botón de borrar el tweet
            li.appendChild(botonBorrar);
            // añade el tweet a la lista
            listaTweets.appendChild(li);
        });
    }

    // Agrega tweet a local storage
    function agregarTweetLocalStorage(tweet) {
        let tweets;
        tweets = obtenerTweetsLocalStorage(); // para obtener los ya guardados
        // Añadir el nuevo tweet
        tweets.push(tweet); //lo añade en la ultima posicíon del arreglo
        // Convertir de string a arreglo para local storage
        localStorage.setItem('tweets', JSON.stringify(tweets));
    }

    // Comprobar que haya elementos en Local Storage, retorna en un arreglo
    function obtenerTweetsLocalStorage() {
        let tweets;
        // Revisamos los valores de local storage
        if(localStorage.getItem('tweets') === null ) {
            tweets = [];
        } else {
            tweets = JSON.parse(localStorage.getItem('tweets'));
        }
        return tweets;
    }

    // Eliminar tweet de local Storage

    function borrarTweetLocalStorage(tweet) {

        let tweets, tweetBorrar;
        // Elimina la X del tweet
        tweetBorrar = tweet.substring(0, tweet.length - 1);

        tweets = obtenerTweetsLocalStorage();
        tweets.forEach(function(tweet, index) {
            if(tweetBorrar === tweet) {
                tweets.splice(index, 1);
            }
        });
        localStorage.setItem('tweets', JSON.stringify(tweets));
    }
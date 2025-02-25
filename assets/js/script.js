// Implementación del Patrón Módulo mediante IIFE
const MultimediaModule = (() => {
    // Función privada para cambiar la URL del iframe
    const changeUrl = (url, id) => {
        document.getElementById(id).setAttribute("src", url);
    };

    // Retornando la función pública
    return {
        setVideo: (url, id) => changeUrl(url, id)
    };
})();

class Multimedia {
    constructor(url) {
        // Usamos un closure para proteger la URL
        let _url = url;

        this.getUrl = () => _url;
    }

    setInicio() {
        return "Este método es para realizar un cambio en la URL del video";
    }
}

// Clase Hija Reproductor
class Reproductor extends Multimedia {
    constructor(url, id) {
        super(url);
        this.id = id;
    }

    // Método para reproducir el video usando la función del módulo
    playMultimedia() {
        MultimediaModule.setVideo(this.getUrl(), this.id);
    }

    // Método para cambiar el tiempo de inicio del video
    setInicio(tiempo) {
        let nuevaUrl = `${this.getUrl()}?start=${tiempo}`;
        MultimediaModule.setVideo(nuevaUrl, this.id);
    }
}

// Ajuste de URLs a formato embed para cada categoría
const musica = new Reproductor("https://www.youtube.com/embed/BAgPCaQ7lTU", "musica"); // URL embebida correcta
const pelicula = new Reproductor("https://www.youtube.com/embed/5PSNL1qE6VY", "peliculas"); // URL embebida correcta
const serie = new Reproductor("https://www.youtube.com/embed/KHucKOK-Vik", "series"); // URL embebida correcta

// Reproduciendo los videos en cada categoría
musica.playMultimedia();
pelicula.playMultimedia();
serie.playMultimedia();

// Ejemplo de uso del método setInicio para cambiar el tiempo de inicio del video
musica.setInicio(30); // Empieza el video de música a los 30 segundos

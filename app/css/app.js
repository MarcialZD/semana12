var app = new Vue({
    el: '#app',
    data: {
        titulo: 'Discotecas en Lima',
        see: false,
        discotecas: [
            { 
                nombre: 'Barranco Bar',
                imagen: 'img/barranco.PNG', 
                descripcion: 'Un lugar popular en Barranco con excelente música y ambiente.',
                ubicacion: 'Barranco, Lima'
            },
            { 
                nombre: 'Teatro Leguía',
                imagen: 'img/teatro-leguia.PNG',
                descripcion: 'Discoteca con una gran pista de baile y eventos temáticos.',
                ubicacion: 'Lince, Lima'
            },
            { 
                nombre: 'Bizarro',
                imagen: 'img/bizarro.PNG',
                descripcion: 'Un espacio innovador con un ambiente único y DJs reconocidos.',
                ubicacion: 'Miraflores, Lima'
            },
            { 
                nombre: 'Sargento Pimienta',
                imagen: 'img/sargento.PNG',
                descripcion: 'Famosa por sus conciertos en vivo y excelente vibra rockera.',
                ubicacion: 'Barranco, Lima'
            }
        ]
    }
});

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
        ],
        valor1: "valor por defecto",
        venta: 0,
        envio: 0,
        subtotal: 0,
        impuestos: 0,
        total: 0,
        precios: {
            cerveza: 6.5,
            espumante: 12.5,
            vino: 15
        },
        cerveza: 0,
        espumante: 0,
        vino: 0,
        costos: {
            cerveza: 0,
            espumante: 0,
            vino: 0
        },
        tragos: {
            cantidad: 0,
            subtotal: 0,
            impuestos: 0,
            total: 0
        },
        cursos: [
            { nombre: '', nota: '' },
            { nombre: '', nota: '' },
            { nombre: '', nota: '' },
            { nombre: '', nota: '' }
        ]
    },
    methods: {
        showMessage: function () {
            this.see = true;
            const alerta = "Este es el titulo: " + this.titulo;
            alert(alerta);
        },
        calcularMonto: function() {
            this.subtotal = Number(this.venta) + Number(this.envio);
            this.impuestos = Number(this.subtotal) * 0.18;
            this.total = Number(this.subtotal) + Number(this.impuestos);
        },
        calculaTotalesTragos: function() {
            this.tragos.cantidad = Number(this.cerveza) + Number(this.espumante) + Number(this.vino);
            this.tragos.subtotal = Number(this.costos.cerveza) + Number(this.costos.espumante) + Number(this.costos.vino);
            this.tragos.impuestos = Number(this.tragos.subtotal) * 0.18;
            this.tragos.total = Number(this.tragos.subtotal) + Number(this.tragos.impuestos);
        },
        calcularCerveza: function() {            
            const precio = this.precios.cerveza * Number(this.cerveza);
            this.costos.cerveza = precio;
            this.calculaTotalesTragos();
        },
        calcularEspumante: function() {
            const precio = this.precios.espumante * Number(this.espumante);
            this.costos.espumante = precio;
            this.calculaTotalesTragos();
        },
        calcularVino: function() {
            const precio = this.precios.vino * Number(this.vino);
            this.costos.vino = precio;
            this.calculaTotalesTragos();
        },
        calcularPromedio: function() {
            var sumaNotas = 0;
            var cantidadCursos = 0;
            this.cursos.forEach(curso => {
                if (curso.nota !== '' && !isNaN(curso.nota)) {
                    sumaNotas += parseFloat(curso.nota);
                    cantidadCursos++;
                }
            });
            return cantidadCursos === 0 ? 0 : sumaNotas / cantidadCursos;
        }
    }
});

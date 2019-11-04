import lodash from 'lodash'
export const state = () => ({
    counter: 0,
    peliculas: [],
    etiquetas: [],
    decadas: [],
    coloresGraficos: ['#7E57C2', '#D03737', '#4CD7D0', '#e1b940', '#0a898d', '#FC754D'],
})

export const mutations = {
    increment(state) {
        state.counter++
    },
    datosFilmes(state, datos) {
        for (const peli of datos) {


            peli.temas = []
            peli.agente = peli.nombreagente.substring(2)
            peli.agentetipo = peli.nombreagente.substring(0, 1)
            if (peli.agentetipo === 'I') {
                peli.agentetipo = 'Instituciones'
            } else if (peli.agentetipo === 'P') {
                peli.agentetipo = 'Productores'
            } else if (peli.agentetipo === 'F') {
                peli.agentetipo = 'Festivales'
            } else if (peli.agentetipo === 'D') {
                peli.agentetipo = 'Distribuidoras de cine'
            } else if (peli.agentetipo === 'T') {
                peli.agentetipo = 'Escuelas de cine'
            } else if (peli.agentetipo === 'E') {
                peli.agentetipo = 'Estrategias de difusión'
            } else if (peli.agentetipo === 'S') {
                peli.agentetipo = 'Fundaciones'
            } else if (peli.agentetipo === 'C') {
                peli.agentetipo = 'Cinematecas'
            } else {
                peli.agentetipo = 'Agente desconocido'
            }

            if (peli.year < 1930) {
                peli.decada = 1920
            } else if (peli.year >= 1930 && peli.year < 1940) {
                peli.decada = 1930
            } else if (peli.year >= 1940 && peli.year < 1950) {
                peli.decada = 1940
            } else if (peli.year >= 1950 && peli.year < 1960) {
                peli.decada = 1950
            } else if (peli.year >= 1960 && peli.year < 1970) {
                peli.decada = 1960
            } else if (peli.year >= 1970 && peli.year < 1980) {
                peli.decada = 1970
            } else if (peli.year >= 1980 && peli.year < 1990) {
                peli.decada = 1980
            } else if (peli.year >= 1990 && peli.year < 2000) {
                peli.decada = 1990
            } else if (peli.year >= 2000 && peli.year < 2010) {
                peli.decada = 2000
            } else if (peli.year >= 2010) {
                peli.decada = 2010
            }

            var keys = Object.keys(peli);

            for (const label of keys) {
                if (label.startsWith('etiqueta')) {
                    peli.temas.push(peli[label])
                    delete peli[label]
                }
            }
            delete peli.nombreagente
            delete peli.abr
        }
        state.peliculas = datos
    },
    datosEtiquetas(state, datos) {
        for (const dato of datos) {
            var keys = Object.keys(dato);

            for (const label of keys) {
                const campos = ['termino', 'descripcion', 'fuente', 'megacategoria']
                if (campos.includes(label)) {
                } else {
                    delete dato[label]
                }
            }

        }

        state.etiquetas = datos
    }
}

export const actions = {
    async nuxtServerInit(vuexContext, context) {
        const peliculas = await context.app.$axios.$get(
            'https://api.sheety.co/291173c6-5cab-4576-87d7-ff38984c1911'
        )
        const datos = await context.app.$axios.$get(
            'https://api.sheety.co/3c5eeb5c-7cb3-47ad-868a-20d51eaa217f'
        )


        return Promise.all([
            peliculas,
            datos
        ]).then(function (values) {
            vuexContext.commit('datosFilmes', values[0])
            vuexContext.commit('datosEtiquetas', values[1])

        })
    },

}
export const getters = {
    filtropelis: state => (tema, pais) => {

        let peliculas = lodash.cloneDeep(state.peliculas)
        console.log(`El tema es ${tema}, y el país es ${pais}`)
        if (pais !== 'Todos los países') {
            peliculas = lodash.filter(peliculas, { pais: pais });
        }
        peliculas = lodash.filter(peliculas, function (film) {

            return film.temas.includes(tema)

        });
        return lodash.orderBy(peliculas, ['titulo'], ['asc'])

    },

    listaetiquetasPAIS: state => pais => {
        let etiquetas = lodash.cloneDeep(state.etiquetas)
        let peliculas = lodash.cloneDeep(state.peliculas)
        console.log(`el pais es ${pais}`)
        if (pais !== 'Todos los países') {
            peliculas = lodash.filter(peliculas, { pais: pais });
        }

        for (const tema of etiquetas) {
            tema.contador = 0;
            tema.visitas = 0;
            for (const peli of peliculas) {
                if ((peli.temas).includes(tema.termino)) {
                    tema.contador++;
                    tema.visitas += peli.visitas
                }
            }
            tema.promedio = (tema.visitas / tema.contador)
        }
        etiquetas = lodash.filter(etiquetas, function (etiq) {
            return etiq.contador > 0
        })
        etiquetas = lodash.orderBy(etiquetas, ['contador'], ['desc'])
        return etiquetas
    },
    listaetiquetas(state) {
        let etiquetas = lodash.cloneDeep(state.etiquetas)
        let peliculas = state.peliculas
        for (const tema of etiquetas) {
            tema.contador = 0;
            tema.visitas = 0;
            for (const peli of peliculas) {
                if ((peli.temas).includes(tema.termino)) {
                    tema.contador++;
                    tema.visitas += peli.visitas
                }
            }
            tema.promedio = (tema.visitas / tema.contador)

        }
        etiquetas = lodash.orderBy(etiquetas, ['contador'], ['desc'])
        return etiquetas

    },
    //listaetiquetasPAIS: state => pais => {
    //someMethod: (state) => (id) => {

    megacategorias: (state, getters) => (pais) => {
        let mega = lodash.uniq(lodash.map(state.etiquetas, 'megacategoria'))
        let salida = new Array
        var cuantos = mega.length;
        let basePaises = getters.listaetiquetasPAIS(pais);
        for (var i = 0; i < cuantos; i++) {
            salida[i] = { nombre: mega[i], contador: 0, temas: [], datos: [] };
            //salida.contador = 0
            //salida.nombre = mega
            for (const etiq of basePaises) {

                if (etiq.megacategoria === mega[i]) {
                    salida[i].contador++
                    salida[i].temas.push(etiq.termino)
                    salida[i].datos.push({ termino: etiq.termino, veces: etiq.contador })
                }
            }
            salida[i].datos = lodash.orderBy(salida[i].datos, ['veces'], ['desc'])
            salida[i].temas.sort()
        }
        salida = lodash.filter(salida, function (etiq) {
            return etiq.contador > 0
        })
        salida = lodash.orderBy(salida, ['contador'], ['desc'])
        return salida
    },
    unknown(state) {
        let datos = lodash.cloneDeep(state.peliculas)
        return lodash.filter(datos, { agentetipo: 'Agente desconocido' });

    },
    dekadas(state) {
        let datos = lodash.cloneDeep(state.peliculas)
        return lodash.countBy(datos, 'decada')

    },
    agentes(state) {
        let datos = lodash.cloneDeep(state.peliculas)
        return lodash.countBy(datos, 'agente')

    },
    DUREX(state) {
        let datos = lodash.cloneDeep(state.peliculas)
        return lodash.countBy(datos, 'duracion')

    },
    agentestipo(state) {
        let datos = lodash.cloneDeep(state.peliculas)
        return lodash.countBy(datos, 'agentetipo')

    },
    licencias(state) {
        let datos = lodash.cloneDeep(state.peliculas)
        return lodash.countBy(datos, 'licencia')

    },

    datosbasicos(state) {
        let salida = {}
        let datos = lodash.cloneDeep(state.peliculas)
        let datoyears = lodash.uniq(lodash.map(datos, 'year'))
        let datopaises = lodash.uniq(lodash.map(datos, 'pais'))
        let visualizaciones = lodash.sumBy(datos, 'visitas')
        //console.log(lodash.chunk(datopaises))

        /* salida.years = lodash.chunk(datoyears.sort())
        salida.paises = lodash.chunk(datopaises.sort()) */
        salida.years = (datoyears.sort())
        salida.paises = (datopaises.sort())
        salida.visualizaciones = (visualizaciones);


        return salida;

    },
    lospaises(state, getters) {
        if (getters.datosbasicos.paises) {
            let base = lodash.cloneDeep(getters.datosbasicos.paises)
            var datos = new Array();
            var cuantos = base.length;

            let peliculas = state.peliculas
            for (var i = 0; i < cuantos; i++) {
                datos[i] = { pais: base[i], visitas: 0, peliculas: 0, documental: 0, ficcion: 0, largo: 0, corto: 0, promediopeli: 0 };
                for (const peli of peliculas) {
                    if ((peli.pais === datos[i].pais)) {

                        datos[i].visitas += peli.visitas
                        datos[i].peliculas++
                        if ((peli.formato === 'cortos')) {
                            datos[i].corto++
                        } else {
                            datos[i].largo++
                        }
                        if ((peli.genero === 'Ficción')) {
                            datos[i].ficcion++
                        } else {
                            datos[i].documental++
                        }
                    }


                }
                datos[i].promediopeli = (datos[i].visitas / datos[i].peliculas)
            }
            return lodash.orderBy(datos, ['peliculas'], ['desc']);

        } else {
            return 'error lospaises'
        }
    },
    losyears(state, getters) {
        if (getters.datosbasicos.years) {
            let base = lodash.cloneDeep(getters.datosbasicos.years)
            var datos = new Array();
            var cuantos = base.length;

            let peliculas = state.peliculas
            for (var i = 0; i < cuantos; i++) {
                datos[i] = { year: base[i], visitas: 0, peliculas: 0, promediopeli: 0 };
                for (const peli of peliculas) {
                    if ((peli.year === datos[i].year)) {

                        datos[i].visitas += peli.visitas
                        datos[i].peliculas++
                    }
                }
                datos[i].promediopeli = (datos[i].visitas / datos[i].peliculas)

            }

            return lodash.orderBy(datos, ['peliculas'], ['desc']);

        } else {
            return 'error lospaises'
        }
    },
    bubbledata(state, getters) {
        if (getters.datosbasicos.years) {
            let base = lodash.cloneDeep(getters.datosbasicos.years)
            var datos = new Array();
            var cuantos = base.length;

            let peliculas = state.peliculas
            for (var i = 0; i < cuantos; i++) {
                datos[i] = { year: base[i], visitas: 0, peliculas: 0, data: [], name: '' };
                for (const peli of peliculas) {
                    if ((peli.year === datos[i].year)) {
                        datos[i].visitas += peli.visitas
                        datos[i].peliculas++
                        datos[i].name = base[i]
                    }
                }
                datos[i].data[0] = [base[i], datos[i].peliculas, datos[i].visitas]
                delete datos[i].peliculas
                delete datos[i].visitas
                delete datos[i].year
            }
            return lodash.orderBy(datos, ['peliculas'], ['desc']);
        } else {
            return 'error lospaises'
        }
    },
    loscolores(state) {
        return state.coloresGraficos;
    },
    bubblepaises(state, getters) {
        if (getters.datosbasicos.paises) {
            let base = lodash.cloneDeep(getters.datosbasicos.paises)
            var datos = new Array();
            var cuantos = base.length;

            let peliculas = state.peliculas
            for (var i = 0; i < cuantos; i++) {
                datos[i] = { pais: base[i], visitas: 0, peliculas: 0, data: [], name: '' };
                for (const peli of peliculas) {
                    if ((peli.pais === datos[i].pais)) {
                        datos[i].visitas += peli.visitas
                        datos[i].peliculas++
                        datos[i].name = base[i]
                    }
                }
                let promedio = (datos[i].visitas / datos[i].peliculas)
                datos[i].data[0] = [datos[i].peliculas, datos[i].visitas, promedio]
                /* delete datos[i].peliculas
                delete datos[i].visitas
                delete datos[i].pais */
            }
            return lodash.orderBy(datos, ['peliculas'], ['desc']);
        } else {
            return 'error lospaises'
        }
    }
}
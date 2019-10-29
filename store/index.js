import lodash from 'lodash'
export const state = () => ({
    counter: 0,
    peliculas: [],
    etiquetas: [],
})

export const mutations = {
    increment(state) {
        state.counter++
    },
    datosFilmes(state, datos) {
        for (const peli of datos) {
            peli.temas = []

            var keys = Object.keys(peli);

            for (const label of keys) {
                if (label.startsWith('etiqueta')) {
                    peli.temas.push(peli[label])
                    delete peli[label]
                }
            }
        }
        state.peliculas = datos
    },
    datosEtiquetas(state, datos) {
        for (const dato of datos) {
            var keys = Object.keys(dato);

            for (const label of keys) {
                const campos = ['termino', 'descripcion', 'fuente']
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

        }
        etiquetas = lodash.orderBy(etiquetas, ['contador'], ['desc'])
        return etiquetas

    },
    datosbasicos(state) {
        let salida = {}
        let datos = lodash.cloneDeep(state.peliculas)
        let datoyears = lodash.uniq(lodash.map(datos, 'year'))
        let datopaises = lodash.uniq(lodash.map(datos, 'pais'))
        //console.log(lodash.chunk(datopaises))

        /* salida.years = lodash.chunk(datoyears.sort())
        salida.paises = lodash.chunk(datopaises.sort()) */
        salida.years = (datoyears.sort())
        salida.paises = (datopaises.sort())


        return salida;

    },
    lospaises(state, getters) {
        if (getters.datosbasicos.paises) {
            let base = lodash.cloneDeep(getters.datosbasicos.paises)
            var datos = new Array();
            var cuantos = base.length;
            console.log('Puto size es = ' + base.length)
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
            console.log('Puto size es = ' + base.length)
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
            console.log('Puto size es = ' + base.length)
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
    bubblepaises(state, getters) {
        if (getters.datosbasicos.paises) {
            let base = lodash.cloneDeep(getters.datosbasicos.paises)
            var datos = new Array();
            var cuantos = base.length;
            console.log('Puto size es = ' + base.length)
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
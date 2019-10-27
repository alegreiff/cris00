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

    }
}
import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';

//Componentes
import Inicio from '../Inicio/Inicio';
import Moda from '../Moda/Moda'
import Contenido from '../Contenido/Contenido'
import Detalles from '../Detalles/Detalles';

export default class Rutas extends Component {
    render() {
        return (
            <section>
                <Switch>
                  <Route exact path="/" component={Inicio}/>
                  <Route exact path="/articulos/:query" component={Contenido}/>
                  <Route extact path="/novedades" component={Moda}/>
                  <Route exact path="/resumen" component={Detalles}/>
                </Switch>
            </section>
        )
    }
}

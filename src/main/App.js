import React from 'react'
import './App.css'

import Intervalo from '../components/Intervalo/Intervalo'
import Media from '../components/Media/Media'
import Soma from '../components/Soma/Soma'
import Sorteio from '../components/Sorteio/Sorteio'

export default props => {
    return (
        <div className="App">
            <h1>Exercício React-Redux (Simples)</h1>
            <div className="linha">
                <Intervalo ></Intervalo>
            </div>
            <div className="linha">
                <Media ></Media>
                <Soma ></Soma>
                <Sorteio ></Sorteio>
            </div>
        </div>
    )
}
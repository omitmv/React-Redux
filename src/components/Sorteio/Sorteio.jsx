import React from 'react'
import { connect } from 'react-redux'

import Card from '../Card/Card'

function Sorteio(props) {
    const min = props.min
    const max = props.max
    const aleatorio = parseInt(Math.random() * (min + max)) + min

    return (
        <Card title="Sorteio de um Número" Purple>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{aleatorio}</strong>
                </span>
            </div>
        </Card>
    )
}

function mapStateToProps(state){
    return {
        min: state.numeros.min,
        max: state.numeros.max,
    }
}

export default connect(mapStateToProps)(Sorteio)
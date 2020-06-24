import React from 'react'
import { connect } from 'react-redux'

import Card from '../Card/Card'

function Soma(props) {
    const min = props.min
    const max = props.max

    return (
        <Card title="Soma de Números" Blue>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{(min + max)}</strong>
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

export default connect(mapStateToProps)(Soma)
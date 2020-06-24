import React from 'react'
import { connect } from 'react-redux'

import Card from '../Card/Card'

function Media(props) {
    const min = props.min
    const max = props.max
    
    return (
        <Card title="Média de Números" Green>
            <div>
                <span>
                    <span>Resultado: </span>
                    <strong>{(min + max)/2}</strong>
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

export default connect(mapStateToProps)(Media)
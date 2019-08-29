import React from 'react';
import './DashBoard.scss';
import Column from 'components/Column/Column';
import uuid from 'uuid/v4';
import AddColumn from 'components/AddColumn/AddColumn';


class DashBoard extends React.Component {
    state = {
        visible: false,        
        column:[]
    }
    cambiarNombreColumna = evento => {
        this.setState({columnName:evento.target.value})
    }
    agregarColumna = nombreColumna => {
        const columna = {
            id: uuid(),
            title: nombreColumna,
            cards:[]
        }
        const nuevoArray = this.state.column.slice()
        nuevoArray.push(columna)
        this.setState({columnName:'', column:nuevoArray})
    }
    toggle = () => {
        this.setState({ visible: !this.state.visible })
    }
    render() {
        const {title} = this.props
        return (
            <div className='dashBoard'>
                {
                    this.state.column.map(column =>
                        <Column
                            key={column.id}
                            title={column.title}
                            cards={column.cards}
                        />)
                }
                <AddColumn onAgregarColumna={this.agregarColumna}/>                
            </div>
        )
    }
}

export default DashBoard;

import React, { Component } from 'react'
import axios from "axios"
import { backend } from '../App'
let hola = {};
export default class pregunta1 extends Component {
    render() {
        return (
            <div className='row'>
                <div class="mx-3">
                    <div className="col-md-4">
                        <table class="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Electrodomesticos</th>
                                    <th scope="col">Resultados</th>
                                </tr>
                            </thead>
                            <tbody>
                                
                                <tr>
                                    <th scope="row">1</th>
                                    <td>use1</td>
                                    <td>{hola.use1}</td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>Gen</td>
                                    <td>{hola.gen}</td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>House Overall</td>
                                    <td>{hola.Houseoverall}</td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>Dishwacher</td>
                                    <td>{hola.Dishwasher}</td>
                                </tr>
                                <tr>
                                    <th scope="row">5</th>
                                    <td>Furnace 1</td>
                                    <td>{hola.Furnace1}</td>
                                </tr>
                                <tr>
                                    <th scope="row">6</th>
                                    <td>Furnace 2</td>
                                    <td>{hola.Furnace2}</td>
                                </tr>
                                <tr>
                                    <th scope="row">7</th>
                                    <td>Home Office</td>
                                    <td>{hola.Homeoffice}</td>
                                </tr>
                                <tr>
                                    <th scope="row">8</th>
                                    <td>Fridge</td>
                                    <td>{hola.Fridge}</td>
                                </tr>
                                <tr>
                                    <th scope="row">9</th>
                                    <td>Winecellar</td>
                                    <td>{hola.Winecellar}</td>
                                </tr>
                                <tr>
                                    <th scope="row">10</th>
                                    <td>Garage Door</td>
                                    <td>{hola.Garagedoor}</td>
                                </tr>
                                <tr>
                                    <th scope="row">11</th>
                                    <td>Kitchen 12</td>
                                    <td>{hola.Kitchen12}</td>
                                </tr>
                                <tr>
                                    <th scope="row">12</th>
                                    <td>Kitchen 14</td>
                                    <td>{hola.Kitchen14}</td>
                                </tr>
                                <tr>
                                    <th scope="row">13</th>
                                    <td>Kitchen 38</td>
                                    <td>{hola.Kitchen38}</td>
                                </tr>
                                <tr>
                                    <th scope="row">14</th>
                                    <td>Microwave</td>
                                    <td>{hola.Microwave}</td>
                                </tr>
                                <tr>
                                    <th scope="row">15</th>
                                    <td>Livingroom</td>
                                    <td>{hola.Livingroom}</td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }
    
    state = {
        datos: []
    }
    async getTotal() {
        const res = await axios.get(backend.host + ':' + backend.port + '/pregunta1');
        this.setState({ datos: res.data });
    }
    async componentDidMount() {
        await this.getTotal();
        hola = this.state.datos[0];
        console.log(Object.values(hola));
    }
}

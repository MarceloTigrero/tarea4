import React, { Component } from 'react'
import axios from "axios"
import { backend } from '../App'
import {Bar} from 'react-chartjs-2';
var data = [12, 19, 3, 5, 2, 3];
let hola = {};
var val =[];
var val1 =[];
var val2 =[];
export default class pregunta3 extends Component {
    render() {
		return (

			<div>
				<Bar data={this.state}></Bar>
			</div>
		)
	}
	state = {
		labels: ['Kitchen12', 'Kitchen14', 'Kitchen38'],
			datasets: [{
				label: 'Kitchen12',
				data: val,
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)'
				],
				borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)'
				],
				borderWidth: 1
			},{
                label: 'Kitchen14',
                data: val1,
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)'
				],
				borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)'
				],
				borderWidth: 1 
            },{
                label: 'Kitchen38',
                data: val2,
				backgroundColor: [
					'rgba(255, 99, 132, 0.2)',
					'rgba(54, 162, 235, 0.2)',
					'rgba(255, 206, 86, 0.2)',
					'rgba(75, 192, 192, 0.2)',
					'rgba(153, 102, 255, 0.2)',
					'rgba(255, 159, 64, 0.2)'
				],
				borderColor: [
					'rgba(255, 99, 132, 1)',
					'rgba(54, 162, 235, 1)',
					'rgba(255, 206, 86, 1)',
					'rgba(75, 192, 192, 1)',
					'rgba(153, 102, 255, 1)',
					'rgba(255, 159, 64, 1)'
				],
				borderWidth: 1 
            }]
		};
		
		
	
    

	async getKitchen() {
		const res = await axios.get(backend.host + ':' + backend.port + '/pregunta3');
		this.setState({ datos: res.data });
        console.log(res.data);
	}

	async componentDidMount() {
		await this.getKitchen();
		hola = this.state.datos;///creencia
		console.log(Object.values(hola));
		for (let index = 0; index < hola.length; index++) {
			val[index]=parseFloat( Object.values(hola[index])[0]);
			val1[index]=parseFloat( Object.values(hola[index])[1]);
			val2[index]=parseFloat( Object.values(hola[index])[2]);
			
		}
		console.log((Object.values(val)));
        console.log((Object.values(val1)));
        console.log((Object.values(val2)));
	}
}
import React, { Component } from 'react'
import axios from "axios"
import { backend } from '../App'
import {Bar} from 'react-chartjs-2';
var data = [12, 19, 3, 5, 2, 3];
let hola = {};
var val =[]
var j = ["Fridge","Fridge","Fridge","Fridge","Fridge","Fridge","Fridge","Fridge","Fridge","Fridge","Fridge","Fridge","Fridge","Fridge","Fridge","Fridge","Fridge","Fridge","Fridge","Fridge","Fridge","Fridge","Fridge"];

export default class pregunta2 extends Component {
	render() {
		return (

			<div>
				<Bar data={this.state}></Bar>
			</div>


		)
	}
	state = {
		labels: j,
			datasets: [{
				label: 'Fridge',
				data: val ,
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
		
		
	
	

	async getMayorRefri() {
		const res = await axios.get(backend.host + ':' + backend.port + '/pregunta2');
		this.setState({ datos: res.data });
	}

	async componentDidMount() {
		await this.getMayorRefri();
		hola = this.state.datos;///creencia
		for (let index = 0; index < hola.length; index++) {
			val[index]=parseFloat( Object.values(hola[index])[0]);
			
		}
		console.log((Object.values(val)));

	}

	/*
	var a = ['1','2','3']
	var result = a.map(function (x) { 
	  return parseInt(x, 10); 
	});

	console.log(result);
	

	
	var myVar = { typeA: '501', typeB: '502' };

	for (var key in myVar) {
  
  	console.log(key);
  	console.log(myVar[key]);
	}
	
	
	*/

}
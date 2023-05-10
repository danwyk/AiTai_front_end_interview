import React, {useState} from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { Line } from '@ant-design/charts';



function App() {

	const [filteredProducts, setFilteredProducts] = useState([]);
	const quarters = [...new Set(products.map(product => product.quarter))];


	const [chartTitle, setChartTitle] = useState([
		"2019Q2",
		"2019Q3",
		"2019Q4",
		"2020Q1",
		"2020Q2E",
		"2020Q3E",
		"2020Q4E",
		"2021Q1E"
	]);

	const products = useSelector(state => state.products);
	const locations = useSelector(state => state.locations);

	const product_a1 = products.filter(item => item.name === "A1");
	const product_a2 = products.filter(item => item.name === "A2");
	const product_3 = products.filter(item => item.name === "3");
	
	const shanghai = locations.filter(item => item.name === "shanghai");
	const beijing = locations.filter(item => item.name === "beijing");
	const guangzhou = locations.filter(item => item.name === "guangzhou");


	const barPlot = new Bar(document.getElementById('barplot'), {
		title: {
			visible: true,
			text: '百分比堆叠条形图',
		},
		product_a1,
		xField: 'value',
		yField: 'status',
		stackField: 'name',
		color: ['#2582a1', '#f88c24', '#c52125', '#87f4d0'],
		label: {
			visible: true,
			formatter: (v) => {
			return v.toFixed(2);
			},
		},
	});


	function handleQuarterChange(value) {
		const filteredProducts = products.filter(product => product.quarter === value);
		setFilteredProducts(filteredProducts);
	}


	return (
		<div className="App">
		
			{/* <div>
				<Select defaultValue={quarters[0]} onChange={handleQuarterChange}>
					{quarters.map(quarter => (
						<Option key={quarter} value={quarter}>{quarter}</Option>
					))}
				</Select>
				<Chart
					height={400}
					data={filteredProducts}
					scale={{ value: { min: 0 } }}
					padding={[40, 40, 40, 80]}
					autoFit
				>
					<Line position="quarter*value" color="name" />
					<Point position="quarter*value" color="name" />
				</Chart>
			</div> */}


			<div id="barplot">

			</div>

			<body>
				<h3>产品</h3>
				<div className="Title">
					投资主体

					{chartTitle.map(column => (
						<div> {column} </div>
					))}
					
				</div>

				<div className='Products'>
					产品线A1 
					{product_a1.map(product => (
						<div id="product">
							{ product.value }
						</div>	
					))}
				</div>

				<div className='Products'>
					产品线A2 
					{product_a2.map(product => (
						<div id="product">
							{ product.value }
						</div>	
					))}
				</div>

				<div className='Products'>
					产品线3 
					{product_3.map(product => (
						<div>
							{ product.value }
						</div>	
					))}
				</div>

				
				<h3>地区</h3>
				<div className="Title">
					投资主体

					{chartTitle.map(column => (
						<div> {column} </div>
					))}
					
				</div>

				<div className='Locations'>
					上海
					{shanghai.map(item => (
						<div>
							{ item.value }
						</div>	
					))}
				</div>

				<div className='Locations'>
					北京 
					{beijing.map(item => (
						<div>
							{ item.value }
						</div>	
					))}
				</div>

				<div className='Locations'>
					广州 
					{guangzhou.map(item => (
						<div>
							{ item.value }
						</div>	
					))}
				</div>

			</body>
		
		</div>
	);

}

export default App;

import React, { useState } from 'react';
import './App.css';
import { useSelector } from 'react-redux';
import { Line } from '@ant-design/charts';
import { Bar } from '@ant-design/charts';

function App() {
    const products = useSelector(state => state.products);
    const locations = useSelector(state => state.locations);
    // const product_actual = products.filter(item => !item.quarter.includes('E'));

    const [selectedProduct, setSelectedProduct] = useState('');
    const [selectedLocation, setSelectedLocation] = useState('');
    const [selectedData, setSelectedData] = useState('products');

    const quarters = Array.from(new Set(products.map(product => product.quarter)));

	const product_a1 = products.filter(item => item.name === "A1");
	const product_a2 = products.filter(item => item.name === "A2");
	const product_3 = products.filter(item => item.name === "3");
	
	const shanghai = locations.filter(item => item.name === "shanghai");
	const beijing = locations.filter(item => item.name === "beijing");
	const guangzhou = locations.filter(item => item.name === "guangzhou");

    const filteredProduct = products.filter(item => item.name === selectedProduct);
    const filteredLocation = products.filter(item => item.name === selectedLocation);
    // const filteredProductActual = filteredProduct.filter(item => !item.quarter.includes('E'));



    const handleProductChange = event => {
        setSelectedProduct(event.target.value);
    };

    const handleLocationChange = event => {
        setSelectedLocation(event.target.value);
    };

    const handleProductClick = () => {
        setSelectedData('products');
    };

    const handleLocationClick = () => {
        setSelectedData('locations');
    };



    const product_lineConfig = {
        data: products,
        title: {
        visible: true,
        text: '带数据点的折线图',
        },
        xField: 'quarter',
        yField: 'value',
        yAxis: { label: { formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`) } },
        point: {
        visible: true,
        size: 5,
        shape: 'diamond',
        style: {
            fill: 'white',
            stroke: '#2593fc',
            lineWidth: 2,
        },
        },
        seriesField: 'name',
        legend: {
        visible: true,
        position: 'top',
        offsetY: 10,
        },
        color: ['#1979C9', '#D62A0D', '#FAA219'],
    };

    const product_barConfig = {
        data: filteredProduct,
        title: {
        visible: true,
        text: selectedProduct,
        },
        forceFit: true,
        xField: 'value',
        yField: 'quarter',
    };

    const productOptions = [
        { value: 'A1', label: '产品线A1' },
        { value: 'A2', label: '产品线A2' },
        { value: '3', label: '产品线3' },
    ];

    // ============= Location =============
    const location_lineConfig = {
        data: locations,
        title: {
        visible: true,
        text: '带数据点的折线图',
        },
        xField: 'quarter',
        yField: 'value',
        yAxis: { label: { formatter: (v) => `${v}`.replace(/\d{1,3}(?=(\d{3})+$)/g, (s) => `${s},`) } },
        point: {
        visible: true,
        size: 5,
        shape: 'diamond',
        style: {
            fill: 'white',
            stroke: '#2593fc',
            lineWidth: 2,
        },
        },
        seriesField: 'name',
        legend: {
        visible: true,
        position: 'top',
        offsetY: 10,
        },
        color: ['#1979C9', '#D62A0D', '#FAA219'],
    };

    const location_barConfig = {
        data: locations,
        title: {
            visible: true,
            text: selectedLocation,
        },
        forceFit: true,
        xField: 'value',
        yField: 'quarter',
    };

    const locationOptions = [
        { value: 'shanghai', label: '上海' },
        { value: 'beijing', label: '北京' },
        { value: 'guangzhou', label: '广州' },
    ];

   

    return (
        <div>
            <div class="container">
                {/* =========== Graph =========== */}

                {selectedData === 'products' ? (
                    <div>
                        <h3>趋势</h3>
                        <div class="chart-container">
                            <Line {...product_lineConfig} />
                        </div>
                        <h3>构成</h3>
                        <select value={selectedProduct} onChange={handleProductChange}>
                            <option value="">请选择</option>
                            
                            {productOptions.map(option => (
                                <option key={option.value} value={option.value}>
                                {option.label}
                                </option>
                            ))}
                        </select>
                        
                        {selectedProduct && (
                            <div>
                                <h4>产品线{selectedProduct}构成</h4>
                                <div class="chart-container">
                                    <Bar {...product_barConfig} />
                                </div>
                            </div>
                        )}
                    </div>

                    ) : (
                    
                    <div>
                        <h3>趋势</h3>
                        <div class="chart-container">
                            <Line {...location_lineConfig} />
                        </div>
                        <h3>构成</h3>
                        <select value={selectedLocation} onChange={handleLocationChange}>
                            <option value="">请选择</option>
                            
                            {locationOptions.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.label}
                                </option>
                            ))}
                        </select>
                        
                        {selectedLocation && (
                            <div>
                                <h4>{selectedLocation}构成</h4>
                                <div class="chart-container">
                                    <Bar {...location_barConfig} />
                                </div>
                            </div>
                        )}
                    </div>
                )}
            </div>

            {/* =========== Data =========== */}

            <body>
                <h3>
                    <button onClick={handleProductClick}>产品</button>
                </h3>
				<div className="Title">
					投资主体

					{quarters.map(column => (
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

				
				<h3>
                    <button onClick={handleLocationClick}>地区</button>
                </h3>
				<div className="Title">
					投资主体

					{quarters.map(column => (
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

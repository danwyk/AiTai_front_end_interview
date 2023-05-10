import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducer';


const initialState = {
	products:
	[
		{
			name: "A1",
			status: "实际",
			quarter: "2019Q2",
			value: "28.9%"
		},	
		{
			name: "A1",
			status: "实际",
			quarter: "2019Q3",
			value: "35.4%"
		},	
		{
			name: "A1",
			status: "实际",
			quarter:  "2019Q4",
			value: "23.5%"
		},	
		{
			name: "A1",
			status: "实际",
			quarter:  "2020Q1",
			value: "26.9%"
		},	
		{
			name: "A1",
			status: "预测",
			quarter:  "2020Q2E",
			value: "29.6%"
		},	
		{
			name: "A1",
			status: "预测",
			quarter:  "2020Q3E",
			value: "29.6%"
		},	
		{
			name: "A1",
			status: "预测",
			quarter:  "2020Q4E",
			value: "29.6%"
		},	
		{
			name: "A1",
			status: "预测",
			quarter:  "2021Q1E",
			value: "29.6%"
		},

		{
			name: "A2",
			status: "实际",
			quarter: "2019Q2",
			value: "28.9%"
		},	
		{
			name: "A2",
			status: "实际",
			quarter: "2019Q3",
			value: "35.4%"
		},	
		{
			name: "A2",
			status: "实际",
			quarter:  "2019Q4",
			value: "23.5%"
		},	
		{
			name: "A2",
			status: "实际",
			quarter:  "2020Q1",
			value: "26.9%"
		},	
		{
			name: "A2",
			status: "预测",
			quarter:  "2020Q2E",
			value: "29.6%"
		},	
		{
			name: "A2",
			status: "预测",
			quarter:  "2020Q3E",
			value: "29.6%"
		},	
		{
			name: "A2",
			status: "预测",
			quarter:  "2020Q4E",
			value: "29.6%"
		},	
		{
			name: "A2",
			status: "预测",
			quarter:  "2021Q1E",
			value: "29.6%"
		},

		{
			name: "3",
			status: "实际",
			quarter: "2019Q2",
			value: "28.9%"
		},	
		{
			name: "3",
			status: "实际",
			quarter: "2019Q3",
			value: "35.4%"
		},	
		{
			name: "3",
			status: "实际",
			quarter:  "2019Q4",
			value: "23.5%"
		},	
		{
			name: "3",
			status: "实际",
			quarter:  "2020Q1",
			value: "26.9%"
		},	
		{
			name: "3",
			status: "预测",
			quarter:  "2020Q2E",
			value: "29.6%"
		},	
		{
			name: "3",
			status: "预测",
			quarter:  "2020Q3E",
			value: "29.6%"
		},	
		{
			name: "3",
			status: "预测",
			quarter:  "2020Q4E",
			value: "29.6%"
		},	
		{
			name: "3",
			status: "预测",
			quarter:  "2021Q1E",
			value: "29.6%"
		}
	],

	locations:
	[
		{
			name: "shanghai",
			status: "实际",
			quarter: "2019Q2",
			value: "28.9%"
		},	
		{
			name: "shanghai",
			status: "实际",
			quarter: "2019Q3",
			value: "35.4%"
		},	
		{
			name: "shanghai",
			status: "实际",
			quarter:  "2019Q4",
			value: "23.5%"
		},	
		{
			name: "shanghai",
			status: "实际",
			quarter:  "2020Q1",
			value: "26.9%"
		},	
		{
			name: "shanghai",
			status: "预测",
			quarter:  "2020Q2E",
			value: "29.6%"
		},	
		{
			name: "shanghai",
			status: "预测",
			quarter:  "2020Q3E",
			value: "29.6%"
		},	
		{
			name: "shanghai",
			status: "预测",
			quarter:  "2020Q4E",
			value: "29.6%"
		},	
		{
			name: "shanghai",
			status: "预测",
			quarter:  "2021Q1E",
			value: "29.6%"
		},
		
		{
			name: "beijing",
			status: "实际",
			quarter: "2019Q2",
			value: "28.9%"
		},	
		{
			name: "beijing",
			status: "实际",
			quarter: "2019Q3",
			value: "35.4%"
		},	
		{
			name: "beijing",
			status: "实际",
			quarter:  "2019Q4",
			value: "23.5%"
		},	
		{
			name: "beijing",
			status: "实际",
			quarter:  "2020Q1",
			value: "26.9%"
		},	
		{
			name: "beijing",
			status: "预测",
			quarter:  "2020Q2E",
			value: "29.6%"
		},	
		{
			name: "beijing",
			status: "预测",
			quarter:  "2020Q3E",
			value: "29.6%"
		},	
		{
			name: "beijing",
			status: "预测",
			quarter:  "2020Q4E",
			value: "29.6%"
		},	
		{
			name: "beijing",
			status: "预测",
			quarter:  "2021Q1E",
			value: "29.6%"
		},
		
		{
			name: "guangzhou",
			status: "实际",
			quarter: "2019Q2",
			value: "28.9%"
		},	
		{
			name: "guangzhou",
			status: "实际",
			quarter: "2019Q3",
			value: "35.4%"
		},	
		{
			name: "guangzhou",
			status: "实际",
			quarter:  "2019Q4",
			value: "23.5%"
		},	
		{
			name: "guangzhou",
			status: "实际",
			quarter:  "2020Q1",
			value: "26.9%"
		},	
		{
			name: "guangzhou",
			status: "预测",
			quarter:  "2020Q2E",
			value: "29.6%"
		},	
		{
			name: "guangzhou",
			status: "预测",
			quarter:  "2020Q3E",
			value: "29.6%"
		},	
		{
			name: "guangzhou",
			status: "预测",
			quarter:  "2020Q4E",
			value: "29.6%"
		},	
		{
			name: "guangzhou",
			status: "预测",
			quarter:  "2021Q1E",
			value: "29.6%"
		},
	]
};

const mystore = createStore(rootReducer, initialState);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

	<Provider store={mystore}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</Provider>

);

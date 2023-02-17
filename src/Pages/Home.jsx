import React from 'react'



import css from "./graph.module.css";

import { useState } from 'react';
import Chart from "react-apexcharts";

import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getData } from '../Redux/action';
// import axios from 'axios';
import {Heading} from "@chakra-ui/react"
import { getRealData } from '../redux2/action';




const Home = () => {
  return (
    <div>

    

    </div>
  )
}

export default Home









export const Graph = () => {

    let Data = useSelector((store)=> store.reducer.data)


    let realData = useSelector((store)=>store.reducerdata)
    const [temp, setTemp] = useState("");
    
    const [date, setDate] = useState([]);

    //Using Redux Architecture 
    const [temp2, setTemp2] = useState("");
    const [date2, setDate2] = useState([]);

    // TO get City Name for specific historoic data(optional)
    const [city, setCity] = useState("");

    
    // console.log(realData)
    const dispatch = useDispatch();

    const handleChange=(e)=>{
        setCity(e.target.value);
    }


    useEffect(()=>{
        let data;
        const displayData =async()=>{
            // const url = `https://api.openweathermap.org/data/2.5/weather?q=puri&appid=a12a0cc115d3dfcb6b620f1e61ad29a1`
            const url = "http://localhost:8081/temp/"
            
            try{
                let res = await fetch(url)
                data = await res.json();
                // console.log(res)
                
                dispatch(getData())
                dispatch(getRealData())
                
            }catch(err){
                console.log(err)
            }
        }
        displayData()
        return ()=>{
                setTemp(data?.map((item) => item.average_temp));
                setDate(data?.map((item) => item.date));
                setTemp2(Data?.map((item) => item.average_temp));
                setDate2(Data?.map((item) => item.date));
        }
    }, [dispatch, Data]);
    console.log("Data:", realData)
    // console.log("DAta of GraphJSX: ",Data)
    // useEffect(()=>{
          
        
    // },[])
    
    const handleSubmit =()=>{
        console.log(temp)
        // displayData()

    }  
    
    //Simple Bar chart and Line Chart
    const options ={
        
            chart:{id: 'bar-chart'},
            xaxis: {
                categories: date
            }

    }
    const series=[{

            name: "Temperature in Celsius",
            data: temp
    }]

    //Redux Architecture Barchart & Line Chart
    const options1 ={
        
        chart:{id: 'bar-chart'},
        xaxis: {
            categories: date2
        }

}
const series1=[{

        name: "Temperature in Celsius",
        data: temp2
}]

  return (
    <div>
        <div>
            <div>

            </div>
            <Heading>Simple Chart using fetch</Heading>
            <Chart 
                options={options}
                series={series}
                type="line"
                width="450"
            />
             <Chart
                options={options}
                series={series}
                type='bar'
                width="400"
            />
        </div>
       
        <div>
            <div>
                <Heading>Redux Architecture Chart using Axios</Heading>
            </div>
            <Chart
            options={options1}
            series={series1}
            type='line'
            width="400"
            />
            <Chart
                options={options1}
                series={series1}
                type='bar'
                width="400"
            />
        </div>
         <div>
            <input placeholder='Input City Name' className={css.inputData} type="text" onChange={handleChange} />
            <button onClick={handleSubmit} className={css.Btn}>GetData</button>
         </div>
       
    </div>
   
  )
}

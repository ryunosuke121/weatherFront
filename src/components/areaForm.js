import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import WeatherResult from './weatherResult';
import {prefecture_list} from './areaDefinition';

const AreaForm = (props) =>  {
    const [currentWeather,setCurrentWeather]=useState({
        "date": "", 
        "telop": "天気を調べてみよう",
    },);
    const [selectedPrefectureId, setSelectedPrefectureId] = useState(prefecture_list[0].prefecture_id);

    const [citiesOption, setCitiesOption] = useState(
        prefecture_list
        .filter((p)=> {return p['prefecture_id'] == selectedPrefectureId})[0].city_list
    );

    const [selectedCityId, setSelectedCityId] = useState(
        citiesOption[0]['city_id']
    );

    const handleChangePrefecture = (e) => {
        const newValue = e.target.value;
        setSelectedPrefectureId(newValue);
        const newOption = prefecture_list.filter((p) => {return p.prefecture_id == newValue})[0]['city_list'];
        setCitiesOption(newOption);
        setSelectedCityId(newOption[0]['city_id']);
    }

    const handleChangeCity = (e) => {
        setSelectedCityId(e.target.value);
    }

    const varidateId = (prefectureId, cityId) => {
        const varidprefectureId = ('0' + String(prefectureId)).slice(-2);
        const varidcityId = ('00' + String(cityId)).slice(-4);
        return varidprefectureId + varidcityId;
    }

    const sendToBackend = (e) => {
        e.preventDefault();
        const areaId = varidateId(selectedPrefectureId, selectedCityId);
        axios.get(`http://localhost/weather/${areaId}`)
        .then(response => setCurrentWeather(response['data'][0]))
        .catch(error => console.log(error));
    }

    return (
        <>
            <WeatherResult weather={{
                telop:currentWeather['telop'],
                date:currentWeather['date'],
                prefectureId:selectedPrefectureId,
                cityId:selectedCityId,
            }}/>
            <div className="w-full max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <form>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                    地域を選択してください
                    </label>
                    
                    <select value={selectedPrefectureId} onChange = {handleChangePrefecture}>
                        { prefecture_list.map((eachprefecture)=>(
                            <option key = {eachprefecture['prefecture_id']} value={eachprefecture['prefecture_id']}>
                                {eachprefecture['prefecture_name']}
                            </option>
                        ))
                        }
                    </select>
                    <select value={selectedCityId} onChange = {handleChangeCity}>
                        {citiesOption.map((eachcity)=>(
                            <option key={eachcity['city_id']} value={eachcity['city_id']}>
                                {eachcity['city_name']}
                            </option>
                        ))}
                    </select>
                    
                </div>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline inline-box mx-auto" 
                onClick = {sendToBackend}>
                    調べる
                </button>
                </form>
            </div>
        </>
    )
}

export default AreaForm;

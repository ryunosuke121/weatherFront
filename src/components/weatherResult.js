import React from 'react'
//import img from '../../public/tenki_pictures/tenki_hare.jpg';
const WeatherResult = (props) => {

    const weatherImg={
        '晴れ':'tenki_hare.png',
        '曇り':'tenki_kumori.png',
        '雨':'tenki_ame.png',
        '曇のち晴':'tenki_hare_kumori.png',
        '晴のち曇':'tenki_hare_kumori.png',
        '曇のち時々晴':'tenki_hare_kumori.png',
        '晴時々曇':'tenki_hare_kumori.png',
        '天気を調べてみよう':'job_otenki_oneesan.png'
    }

    return (
        <div className='w-full max-w-md mx-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 content-center'>
            <p>
                {props.weather['date']}
            </p>
        
            <p className='text-2xl'>{props.weather['telop']}</p>
            <img src={`${process.env.PUBLIC_URL}/tenki_pictures/${weatherImg[props.weather.telop]}`} className='mx-auto'/>
        </div>
    )
}
export default WeatherResult;


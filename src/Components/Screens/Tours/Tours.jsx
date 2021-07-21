import React from 'react'
import './Tours.css'
// import logo from '../../../../public/assets/images/mapa.png'
import image from '../../../images/mapa.png'
import { CardTour } from '../../CardTour/CardTour'
import { InputSearch } from '../../InputSearch/InputSearch'
export const Tours = () => {
    return (
        <div className="container__tours">
            <h2>Tours</h2>
            <InputSearch/>
            <div className="content__tours">
                <img src={image} alt="map" />
                <div className="content_cards">
                    <CardTour/>
                    <CardTour/>
                    <CardTour/>
                    <CardTour/>
                    <CardTour/>
                    <CardTour/>
                    <CardTour/>
                </div>
            </div>
        </div>
    )
}

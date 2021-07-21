import React from 'react'
import { CardGeneral } from '../../CardGeneral/CardGeneral'
import { CardPopular } from '../../CardPopular/CardPopular'
import { HeaderMovil } from '../../HeaderMovil/HeaderMovil'
import '../Home/Home.css'

export const Home = () => {
    return (
        <div className="container__home">
            {/* Componente busqueda solo version movil */}
            <HeaderMovil />
            <div className="content__header">
                <h2>Discover <br /> a new world</h2>
                {/* search with button */}
                <div className="content__input__search">
                    <input type="text" id="search" placeholder="Location, country..." />
                    <label htmlFor="search">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#333" d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm0,18a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z" /></svg>
                    </label>
                </div>
            </div>
            <div className="content__popular">
                <h2>Popular</h2>
                <div className="card__content">
                    <CardPopular/>
                    <CardPopular/>
                    <CardPopular/>
                    <CardPopular/>
                    <CardPopular/>
                    <CardPopular/>
                    <CardPopular/>
                </div>
            </div>
            <div className="content__upcoming">
                <h2>Upcoming</h2>
                <div className="card__content__general">
                    <CardGeneral/>
                    <CardGeneral/>
                    <CardGeneral/>
                    <CardGeneral/>
                    <CardGeneral/>
                    <CardGeneral/>
                </div>
            </div>
            <div className="content__recent">
                <h2>Recent</h2>
                <div className="card__content__general">
                <CardGeneral/>
                <CardGeneral/>
                <CardGeneral/>
                <CardGeneral/>
                <CardGeneral/>
                <CardGeneral/>
                </div>
            </div>
        </div>
    )
}

import React from 'react';
import { CardSearch } from '../../CardSearch/CardSearch';
import './Saves.css';

export const Saves = () => {
    return (
        <div className="container__save">
            <h2>Saves</h2>
            <div className="content__cards">
                <CardSearch/>
                <CardSearch/>
                <CardSearch/>
                <CardSearch/>
                <CardSearch/>
                <CardSearch/>
                <CardSearch/>
            </div>
        </div>
    )
}

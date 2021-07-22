import React from 'react'
import './Experience.css'

export const Experience = () => {
    return (
        <div className="container__exprience">
            <h2>Cuentame tu experiencia</h2>
            <div className="content__experience">
                <div className="fotos">
                    <img src="http://atrilco.com/wp-content/uploads/2017/11/ef3-placeholder-image.jpg" alt="images" />
                </div>
                <input type="file" name="" id="" />
                <label htmlFor=""><h4>¿Qué lugar visitaste?</h4></label>
                <input type="text"  placeholder="Cancun, Copa Cavana"/>
                <label htmlFor=""><h4>¿Cuentanos cómo fue tú experiencia?</h4></label>
                <textarea placeholder="Me la pase genial en sus playas y en su resort, sus residentes son muy amistosos"/>
                <label htmlFor=""><h4>¿Cuando fue?</h4></label>
                <input type="date"/>
            </div>
        </div>
    )
}

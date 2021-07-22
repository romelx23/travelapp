import React from 'react'
import { CardSearch } from '../../CardSearch/CardSearch'
import { InputSearch } from '../../InputSearch/InputSearch'
import '../Search/Search.css'

export const Search = () => {
    return (
        <div className="container__search">
            <h2>Search</h2>
            <InputSearch/>
            <div className="content__cards_search">
                <CardSearch/>
                <CardSearch/>
                <CardSearch/>
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

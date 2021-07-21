import React from 'react'
import { CardSearch } from '../../CardSearch/CardSearch'
import '../Search/Search.css'

export const Search = () => {
    return (
        <div>
            <h2>Search</h2>
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

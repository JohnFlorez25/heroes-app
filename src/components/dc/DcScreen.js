import React from 'react'
import { HeroList } from '../heroes/HeroList'

export const DcScreen = () => {
    return (
        <div>
            <h1>DCScreen</h1>
            <hr />

            <HeroList publisher="DC Comics" />
        </div>
    )
}

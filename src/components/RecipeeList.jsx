import React, { useContext } from 'react'
import {RecipeeContext} from '../context/RecipeeContext'

import Recipee from './Recipee'

const RecipeeList = () => {
    const {recipees} = useContext(RecipeeContext)

    return (
        <div className="row mt-5">
            {recipees.map(recipee => (
                <Recipee 
                    recipee={recipee} 
                    key={recipee.idDrink}    
                />
            ))}
        </div>
    )
}

export default RecipeeList
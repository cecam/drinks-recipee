import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

export const RecipeeContext = createContext()

const RecipeeProvider = (props) => {
    const [searchRecipee, setSearchRecipee] = useState({
        name: '',
        category: ''
    })
    const [recipees, setRecipees] = useState([])
    const [searching, setSearching] = useState(false)

    const {name, category} = searchRecipee

    useEffect(() => {
        if (searching) {
            const getRecipees = async () => {
                const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}&c=${category}`
                
                const { data } = await axios.get(url)
                setRecipees(data.drinks);
            }
    
            getRecipees()
        }
    }, [searchRecipee])

    return(
        <RecipeeContext.Provider
            value={{
                recipees,
                setSearchRecipee,
                setSearching
            }}
        >
            {props.children}
        </RecipeeContext.Provider>
    )
} 

export default RecipeeProvider
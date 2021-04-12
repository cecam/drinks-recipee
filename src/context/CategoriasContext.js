import React, { createContext, useState, useEffect } from 'react'
import axios from 'axios'

//crear context
export const CategoryContext = createContext()

//provider, donde se encuentran funcines y state
const CategoryProvider = (props) => {
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const getCategories = async () => {
            const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'

            const  { data } = await axios.get(url)
            setCategories(data.drinks)
        }

        getCategories()
    }, [])

    return (
        <CategoryContext.Provider
            value={{
                categories
            }}
        >
            {props.children}
        </CategoryContext.Provider>
    )
}

export default CategoryProvider
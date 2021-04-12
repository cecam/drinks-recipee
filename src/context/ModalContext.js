import React, {createContext, useEffect, useState} from 'react'
import axios from 'axios'

export const ModalContext = createContext()

const ModalProvider = (props) => {
    const [idRecipee, setIdRecipee] = useState(null)
    const [recipeeInfo, setRecipee] = useState({})

    //llamada de receta individual a la api
    useEffect(() => {
        const getRecipee = async () => {
            if (!idRecipee) return
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idRecipee}`

            const {data} = await axios.get(url)
            setRecipee(data.drinks[0])
        }
        getRecipee()
    },[idRecipee])

    return (
        <ModalContext.Provider
            value={{
                recipeeInfo,
                setIdRecipee,
                setRecipee
            }}
        >
            {props.children}
        </ModalContext.Provider>
    )
}

export default ModalProvider

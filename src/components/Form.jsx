import React, { useContext, useState } from 'react'
import {CategoryContext} from '../context/CategoriasContext'
import {RecipeeContext} from '../context/RecipeeContext'

const Form = () => {
    const {categories} = useContext(CategoryContext)
    const {setSearchRecipee, setSearching} = useContext(RecipeeContext)
    const [search, setSearch] = useState({
        name: '',
        category: ''
    })

    const getRecipee = e => {
        setSearch({
            ...search,
            [e.target.name] : e.target.value
        })
    }

    return (
        <form
            className="col-12"
            onSubmit={e => {
                e.preventDefault()
                setSearchRecipee(search)
                setSearching(true)
            }}
        >
            <fieldset className="text-center">
                <legend>Search drinks by category or ingredient</legend>
            </fieldset>
            <div className="row mt-4">
                <div className="col-md-4">
                    <input 
                        type="text" 
                        className="form-control"
                        name="name"
                        placeholder="Search by ingredient"
                        onChange={getRecipee}
                    />
                </div>
                <div className="col-md-4">
                    <select
                        className="form-control"
                        name="category"
                        onChange={getRecipee}
                    >
                        <option value="">-- Choose a category --</option>
                        {categories.map(element => (
                            <option 
                                value={element.strCategory}
                                key={element.strCategory}    
                            >
                            {element.strCategory}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <input 
                        type="submit" 
                        className="btn btn-block btn-primary"
                        value="Search recipees"
                    />
                </div>
            </div>
        </form>
    )
}

export default Form
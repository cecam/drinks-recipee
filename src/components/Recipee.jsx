import React, {useContext, useState} from 'react'
import {ModalContext} from '../context/ModalContext'

import Modal from '@material-ui/core/Modal'
import { makeStyles } from '@material-ui/core/styles';

function getModalStyle() {
    const top = 50 ;
    const left = 50;
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles(theme => ({
    paper: {
      position: 'absolute',
      width: 600,
      height: 650,
      backgroundColor: theme.palette.background.paper,
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      overflowY: 'scroll'
    },
}));

const Recipee = ({recipee}) => {
    const {setIdRecipee, recipeeInfo, setRecipee} = useContext(ModalContext)

    const [modalStyle] = useState(getModalStyle)
    const [open,setOpen] = useState(false)

    const classes = useStyles()
    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const showInfo = info => {
        let ingredients = []
        for(let i = 1; i < 16; i++){
            if( info[`strIngredient${i}`] != null){
                ingredients.push(
                    <li>{info[`strIngredient${i}`]} {info[`strMeasure${i}`]}</li>
                )
            }
        }
        
        return ingredients
    }

    return(
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">{recipee.strDrink}</h2>

                <img 
                    src={recipee.strDrinkThumb} 
                    alt={recipee.strDrink} 
                    className="card-img-top"
                />
                <div className="card-body">
                    <button 
                        className="btn btn-block btn-danger"
                        type="button"
                        onClick={() => {
                            setIdRecipee(recipee.idDrink)
                            handleOpen()
                        }}
                    >
                        See more...
                    </button>
                    <Modal 
                        open={open}
                        onClose={() => {
                            handleClose()
                            setIdRecipee(null)
                            setRecipee({})
                        }}
                    >
                        <div className={classes.scroll}> 
                            <div style={modalStyle} className={classes.paper}>
                                <h2>{recipeeInfo.strDrink}</h2>
                                <h3 className="mt-4">Instrucciones</h3>
                                <p>
                                    {recipeeInfo.strInstructions}
                                </p>
                                <img src={recipeeInfo.strDrinkThumb} alt="Bebida" className="img-fluid"/>
                                <h3>Ingredientes y Cantidades</h3>
                                <ul>
                                    { showInfo(recipeeInfo) }
                                </ul>
                            </div>
                        </div>
                    </Modal>
                </div>
            </div>
        </div>
    )
}

export default  Recipee
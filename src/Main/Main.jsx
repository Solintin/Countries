import React from 'react'
import './Main.css'
import { Button, Grid, Card } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import {withRouter} from 'react-router-dom' 



function Main( props ) {
    const {Country, history} = props
    const useStyles = makeStyles({
        root: {
          minWidth: 175,
        }
    })
    const classes = useStyles();

    const [more, setMore] = React.useState(30)
    const handleMore = () => {
        setMore(more + 30)
    }
    const handleClick = (data) => {
        history.push(`/Country/${data}`)
    }
    const showCard = Country.map((Data, idx) => {
        while (idx < more) {
            return (

                <Grid item xs={12} sm={6} md={4} lg={3} key={Data.name} >
               
                    <Card style={{height : 350}} className={classes.root} onClick={() => handleClick(Data.alpha3Code)}>
                        <img src={Data.flag} width='100%' height='150' alt={Data.name} />
                        <div style={{ padding: 20 }}>
                            <h3>{Data.name}</h3>
                            <div> <b>Population :</b>  {Data.population.toLocaleString()} </div>
                            <div> <b> Region :</b> {Data.region}</div>
                            <div> <b>Capital :</b> {Data.capital}</div>
                        </div>
                    </Card>
             
                </Grid>
            )
        } return null
    }

    )
    return (
       
            <div>
                <Grid container style={{ margin: 10 }}>

                    <Grid item container justify='center' xs={10} sm={12} spacing={2}>

                        {showCard}

                    </Grid>

                </Grid>

                {more < showCard.length ?
                    <center><Button
                    variant='contained'
                    color='primary'
                    size='large'
                    onClick={handleMore}
                    style={{margin : 20}} >Show More...</Button></center>
                    : null}
            </div>
       
    )
}

export default withRouter(Main)


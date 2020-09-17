import { Button, Grid } from '@material-ui/core';
import React from 'react'
import NavigateBeforeIcon from '@material-ui/icons/NavigateBefore';


function CountryInfo(props) {
    const { match, Country, history } = props
    const { params } = match;
    const { cc } = params;
    const info = Country.filter(res => res.alpha3Code === cc);




    return (
        <div style={{ margin: 15 }}>

            <div style={{ margin: 30 }}>
                <Button variant='contained' color='primary' onClick={() => { history.push('/') }} > <NavigateBeforeIcon />  Back </Button>
            </div>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} >
                    <img style={{ width: '100%' }}
                        src={info[0].flag} alt={info[0].alpha3Code} />
                </Grid>
                <Grid container item xs={12} sm={6} spacing={3}>
                    <Grid item xs={12}  >
                        <div><h1>{info[0].name}</h1>  </div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <div><b>Native Name</b> : {info[0].nativeName}</div>
                        <div> <b>Population</b> : {info[0].population.toLocaleString()}</div>
                        <div> <b>region</b> : {info[0].region}</div>
                        <div><b>Sub Region</b> : {info[0].subregion}</div>
                        <div> <b>Capital</b> : {info[0].capital}</div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <div> <b>Top Level Domain</b> : {info[0].topLevelDomain}</div>
                        <div><b>Currency</b> : {info[0].currencies[0].name}</div>
                        <div><b>Language</b> : {info[0].languages.map(res => res.name)}</div>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default CountryInfo

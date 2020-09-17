import React from 'react'
import Main from '../Main/Main'
import { Grid, } from '@material-ui/core';
import './Search.css'
import { SearchRounded } from '@material-ui/icons';

function Search({ Country }) {

    const [search, setSearch] = React.useState('')
    const [selectValue] = React.useState('')
    const [central, setCentral] = React.useState(Country)

    const handleChange = (event) => {
        const Value = event.target.value
        setSearch(Value)
    }
    const handleSelect = (event) => {
        const Value = event.target.value
        // setSelectValue(Value)
        const regionFilter = Country.filter(result => result.region === Value)
        setCentral(regionFilter)
    }





    const searchCountry = central.filter(result => result.name.toLowerCase().includes(search.toLowerCase()))



    return (
        
            <div className ='searchContainer' > 
                <Grid container >
                <Grid item xs={1} sm={1}></Grid>
                <Grid container item xs={10} sm={10}>
                  
                   <Grid item xs={12} sm={6}>
                       <div className ='inputSearch'>
                        <input
                           
                            placeholder='Search For Country'
                            type="text"
                            name='search'
                            value={search}
                            onChange={handleChange}
                        />
                         <span><SearchRounded fontSize='large'/></span>
                        </div>
                    </Grid>
                   

                    <Grid item xs={12} sm={6} >
                        <select
                            name="filter"
                            value={selectValue}
                            className='select'
                            style={{ float :"right"}}
                            onChange={handleSelect}>
                            <option>Filter By Region</option>
                            <option value="Africa">Africa </option>
                            <option value="Americas">Americas </option>
                            <option value="Asia">Asia </option>
                            <option value="Europe"> Europe</option>
                            <option value="Oceania"> Oceania</option>
                        </select>
                    </Grid>

                </Grid>
                <Grid item xs={1} sm={1}></Grid>
                </Grid>
                <Main Country={searchCountry} />
            </div>
        
    )
}

export default Search

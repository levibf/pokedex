import { Grid, Box } from '@mui/material/';
import ImgMediaCard from '../Card';
import axios from 'axios'
import React, { useState, useEffect } from 'react';

export default function GridContainer() {

    const [pokemon, setPokemon] = useState([]);

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=100')
            .then((res) => setPokemon(res.data.results))
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    return (
        <Box sx={{ flexGrow: 0 }}>
            <Grid container spacing={2}>
                {pokemon.map((poke, index) => (
                    <Grid item xs={2}>
                        <ImgMediaCard name={poke.name} key={index} image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}
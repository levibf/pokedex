import { Grid, Box, Pagination } from '@mui/material/';
import ImgMediaCard from '../Card';
import axios from 'axios'
import React, { useState, useEffect } from 'react';

export default function GridContainer() {

    const [pokemon, setPokemon] = useState([]);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const resultsPerPage = 24;

    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=10000')
            .then((res) => {
                setPokemon(res.data.results)
                setTotalPages(Math.ceil(res.data.results.length / resultsPerPage));
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []);

    const handlePageChange = (event, value) => {
        setPage(value);
    };

    const paginatedPokemon = pokemon.slice((page - 1) * resultsPerPage, page * resultsPerPage);

    return (
        <>
            <Box sx={{ flexGrow: 1, p: 2 }}>
                <Grid container spacing={2}>
                    {paginatedPokemon.map((poke, index) => (
                        <Grid item xs={2} key={index}>
                            <ImgMediaCard
                                name={poke.name}
                                image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${(page - 1) * resultsPerPage + index + 1}.png`}
                            />
                        </Grid>
                    ))}
                </Grid>
                <Box display="flex" justifyContent="center" mt={4}>
                    <Pagination
                        count={totalPages}
                        page={page}
                        onChange={handlePageChange}
                        color="primary"
                        sx={{ position: 'fixed', bottom: 0, right: -589, width: '100%', p: 2 }}
                    />
                </Box>
            </Box>
        </>
    )
}
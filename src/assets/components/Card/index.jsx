import React, { useState, useEffect } from 'react';
import { Card, CardMedia } from '@mui/material';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function ImgMediaCard({ name, index, image }) {
    return (
        <>
            <Card key={index} sx={{ maxWidth: 345 }}>
                <CardMedia
                    component="img"
                    alt={name}
                    height="200"
                    image={image}
                    style={{ objectFit: "contain" }}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {name.toUpperCase()}
                    </Typography>
                </CardContent>
            </Card>
        </>
    );
}

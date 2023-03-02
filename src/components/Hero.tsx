import React from 'react';
import {Container, Grid, styled, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import Bounded from "@/components/Bounded";
import {useColorScheme} from "@/styles/colors";

const Description = styled(Grid)(({theme}) => ({
    [theme.breakpoints.down("md")]: {
        marginTop: 0,
    },
    [theme.breakpoints.up("md")]: {
        marginTop: theme.spacing(2),
    },
}));

type HeroProps = {
    title: string
    description: string
}

export default function Hero({title, description}: HeroProps) {
    return (
        <Bounded as="section" sx={useColorScheme("grey")}>
            <Container>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h2">{title}</Typography>
                    </Grid>
                    <Description item xs={12} md={6}>
                        <Box pb={2}>
                            {description}
                        </Box>
                    </Description>
                </Grid>
            </Container>
        </Bounded>
    );
}

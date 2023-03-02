import React from 'react';
import Head from 'next/head'
import Box from '@mui/material/Box'
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import WaveDivider from "@/components/WaveDivider";

export default function Home() {
    return (
        <>
            <Head>
                <title>Scribit Pro Next.js App</title>
                <meta name="description" content="Generated by create next app"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <link rel="icon" href="/public/favicon.ico"/>
            </Head>
            <Box>
                <Header/>
                <Box component="main" id="main-rs-block">
                    <Hero title="Read cases from our users and experts" description="some description goes here"/>
                    <WaveDivider topColor="grey" bottomColor="grey"/>

                    todo: Your component(s) for building the cases page go here!
                
                </Box>
                <Footer/>
            </Box>
        </>
    )
}
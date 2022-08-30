import { Fragment } from 'react';
import type { NextPage } from 'next';

import Head from 'next/head';
import Image from 'next/image';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import Grid from '@mui/material/Grid';

import GitHubIcon from '@mui/icons-material/GitHub';
import CookieIcon from '@mui/icons-material/Cookie';
import CardStats from '../components/stats/card';

const Home: NextPage = () => {
	return (
		<Fragment>
			<Head>
				<title>biscuit.js | Discord Bot Framework</title>
				<meta name="description" content="Generated by create next app" />
			</Head>

			<Container
				maxWidth="lg"
				sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}
			>
				<Box textAlign={'center'} marginBottom={'20px'}>
					<Image
						src={'https://raw.githubusercontent.com/oasisjs/biscuit/main/assets/icon.svg'}
						width="200"
						height="200"
						alt="biscuit.js Icon"
					></Image>

					<Typography variant="h2" gutterBottom fontStyle={'bold'}>
						biscuit.js
					</Typography>

					<Typography variant="h5" gutterBottom>
						A brand new bleeding edge non bloated Discord library
					</Typography>
				</Box>

				<Stack spacing={2} direction="row">
					<Button variant="outlined" size="large" startIcon={<GitHubIcon></GitHubIcon>}>
						Github
					</Button>
					<Button variant="contained" size="large" startIcon={<CookieIcon></CookieIcon>}>
						Install
					</Button>
				</Stack>

				<Grid container direction="row" justifyContent="center" alignItems="center" spacing={8}>
					<Grid item>
						<CardStats></CardStats>
					</Grid>
					<Grid item>
						<CardStats></CardStats>
					</Grid>
				</Grid>
			</Container>
		</Fragment>
	);
};

export default Home;

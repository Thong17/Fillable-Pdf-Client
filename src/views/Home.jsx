import React from 'react'
import { CardActions, Button, Box, IconButton, Toolbar, Card, CardContent, CardMedia, Container, Grid, CssBaseline, AppBar, Typography } from '@mui/material'
import { Favorite } from '@mui/icons-material'
import { createTheme, ThemeProvider } from '@mui/material/styles'

const Home = () => {
    const theme = createTheme()

    const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    return (
        <ThemeProvider theme={theme}>
            <Container>
                <CssBaseline />
                <AppBar>
                    <Toolbar variant="dense">
                        <IconButton>
                            <Favorite />
                        </IconButton>
                        <Typography variant="h6">Fillable Pdf</Typography>
                    </Toolbar>
                </AppBar>
                <Box sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                }}
                >
                    <Typography variant="h3" align="center">Head</Typography>
                    <Typography variant="h5" align="center">this is body</Typography>
                    <Grid container>
                        <Grid item>
                            <Button variant="contained">View</Button>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined">Contact</Button>
                        </Grid>
                    </Grid>
                </Box>
                <Container sx={{ py: 8 }} maxWidth="md">
                    <Grid container spacing={4}>
                        {cards.map((card) => {
                            return (
                                <Grid item key={card} xs={12} sm={6} md={4}>
                                    <Card
                                        sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                                    >
                                        <CardMedia
                                            component="img"
                                            sx={{
                                                // 16:9
                                                pt: '56.25%',
                                            }}
                                            image="https://source.unsplash.com/random"
                                            alt="random"
                                        />
                                        <CardContent sx={{ flexGrow: 1 }}>
                                            <Typography gutterBottom variant="h5" component="h2">
                                                Heading
                                            </Typography>
                                            <Typography>
                                                This is a media card. You can use this section to describe the
                                                content.
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small">View</Button>
                                            <Button size="small">Edit</Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            )
                        })}
                    </Grid>
                </Container>
            </Container>
        </ThemeProvider>
    )
}

export default Home

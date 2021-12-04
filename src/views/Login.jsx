import React from 'react'
import { TextField, Button, Box, Typography, FormGroup, FormControlLabel, Checkbox, Container, CssBaseline } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const username = formData.get('username')
        const password = formData.get('password')
        
        axios({
            url: 'http://localhost:3001/auth/login',
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            data: { username: username, password: password }
        }).then((resp) => {
            resp.data.result === 'success' ? navigate('/') : alert(resp.data.message)
        })
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box component="form" sx={{
                    marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                }} noValidate onSubmit={handleSubmit}
            >
                <Typography variant="h1">Hello</Typography>
                <TextField type="text" name="username" variant="outlined" size="small" label="Username" autoComplete="new-password" />
                <TextField type="password" name="password" variant="outlined" size="small" label="Password" autoComplete="new-password" />
                <FormGroup>
                    <FormControlLabel control={<Checkbox />} label="Remember me" size="small" />
                </FormGroup>
                <Button variant="contained" type="submit">Login</Button>
            </Box>
        </Container>
    )
}

export default Login

import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import axios from 'axios'

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import useStyles from './classes'
import { Link } from '@material-ui/core'

const Login = () => {
    const classes = useStyles();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const submitLogin=()=>{
        axios.post('/',{
            username:username,
            password:password
        });
    }

    return (
        <div>
            <Card className={classes.loginCard}>
                <Typography variant="h5" component="h2" color="textSecondary" className={classes.title}>
                    Manager Login
                </Typography>
                <TextField
                    id="filled-username-input"
                    label="Username"
                    type="username"
                    autoComplete="current-password"
                    variant="filled"
                    className={classes.input}
                    onChange={(event)=>{
                        setUsername(event.target.value)
                    }}
                />
                <TextField
                    id="filled-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="filled"
                    className={classes.input}
                    onChange={(event)=>{
                        setPassword(event.target.value)
                    }}
                />

                <Button variant="contained" color="primary" className={classes.bt} onClick={submitLogin}>
                    Login
                </Button>

                <Link href="/register" variant="body2" className={classes.link}>
                    Create a account
                </Link>
            </Card>

        </div>
    )
}

export default Login;
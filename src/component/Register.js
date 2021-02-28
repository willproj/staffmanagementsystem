import React from 'react'
import TextField from '@material-ui/core/TextField';

import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import useStyles from './classes'
import { Link } from '@material-ui/core'

const Login = () => {
    const classes = useStyles();

    return (
        <div>
            <Card className={classes.regCard}>
                <Typography variant="h5" component="h2" color="textSecondary" className={classes.title}>
                    Manager SignUp
                </Typography>
                <TextField
                    id="filled-username-input"
                    label="Username"
                    type="username"
                    autoComplete="current-password"
                    variant="filled"
                    className={classes.input}
                />
                <TextField
                    id="filled-password-input"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    variant="filled"
                    className={classes.input}
                />

                <TextField
                    id="filled-password-input"
                    label="Password-again"
                    type="password-again"
                    autoComplete="current-password"
                    variant="filled"
                    className={classes.input}
                />

                <Button variant="contained" color="primary" className={classes.bt} href="/">
                    Sign Up
                </Button>

                <Link href="/" variant="body2" className={classes.link}>
                    Login
                </Link>
            </Card>

        </div>
    )
}

export default Login;
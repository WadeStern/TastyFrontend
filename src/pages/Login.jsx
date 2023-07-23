import React from 'react'
import TextField from '@mui/material/TextField';
import { Button, Card, Grid, Typography, CardContent } from '@mui/material';
import RestAPI from '../RestAPI';
import BannerImage from "../assets/morefood.png";
import { useNavigate } from 'react-router';
import jwt from 'jwt-decode'
import { Link } from 'react-router-dom';

const Login = () => {

    const [userName, setUserName] = React.useState("");
    const [pass, setPass] = React.useState("");
    const [userNameError, setUserNameError] = React.useState(false);
    const [passError, setPassError] = React.useState(false);
    const handleClick = (e) => {

        if (userName || pass !== "") {
            RestAPI.getToken(userName, pass).then((res) => {
                const token = res.data['access_token']
                window.sessionStorage.setItem("token", token)
                const user = jwt(sessionStorage.getItem("token"));
                window.sessionStorage.setItem("user", JSON.stringify(user));
                window.location.assign("/home");
            }).catch(err => {
                setPassError(true);
                setUserNameError(true);
                alert("Error Wrong Credentials")
            })


        } else {
            setPassError(true);
            setUserNameError(true);
        }

        setPass("");
        setUserName("");
    }
    const handleUsrNameChange = (e) => {
        setUserName(e.target.value);
    }
    const handlePassChange = (e) => {
        setPass(e.target.value);
    }
    return (
        <div style={{ backgroundImage: `url(${BannerImage})` }}>
            <Grid style={{ marginTop: "20px", marginBottom: "20px" }}>
                <Card variant='outlined' style={{ maxWidth: 450, padding: "20px 5px ", margin: "0 auto" }}>
                    <CardContent>
                        <Typography gutterBottom variant="h3" align="center" sx={{ fontWeight: 'bold', color: '#7A562E' }} >
                            Login
                        </Typography>
                        <form>
                            <Grid container >
                                <Grid item xs={12}>
                                    <TextField
                                        id="user-name"
                                        label="User Name"
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth
                                        required
                                        value={userName}
                                        onChange={handleUsrNameChange}
                                        error={userNameError}
                                        helperText={userNameError ? "Enter a username" : ""}
                                        onBlur={() => (userName === "" || userName === null ? setUserNameError(true) : null)}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="password"
                                        label="Password"
                                        variant="outlined"
                                        margin="normal"
                                        type="password"
                                        fullWidth
                                        required
                                        value={pass}
                                        onChange={handlePassChange}
                                        error={passError}
                                        helperText={passError ? "Enter a password" : ""}
                                        onBlur={() => (userName === "" || userName === null ? setPassError(true) : null)}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <Button variant="contained" fullWidth onClick={handleClick} style={{ padding: "0px,0px,5px,0px", backgroundColor: "#7A562E", marginTop: "10px", marginBottom: "20px" }}>Login</Button>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography align="center"> Dont't have an account?</Typography>

                                    <Link to="/signup" underline="none">
                                        <Typography align=" center"> Sign Up</Typography>
                                    </Link>
                                </Grid>

                            </Grid>
                        </form>
                    </CardContent>

                </Card>
            </Grid>
        </div >
    )
}

export default Login

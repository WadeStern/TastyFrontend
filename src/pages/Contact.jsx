import React from 'react'
import TextField from '@mui/material/TextField';
import { Button, Card, Grid, Typography, CardContent } from '@mui/material';
import BannerImage from "../assets/morefood.png";

function Contact() {
    return (
        <div style={{ backgroundImage: `url(${BannerImage})` }}>
            <Grid style={{ marginTop: "20px", marginBottom: "20px" }}>
                <Card variant='outlined' style={{ maxWidth: 450, padding: "20px 5px ", margin: "0 auto" }}>
                    <CardContent>
                        <Typography gutterBottom variant="h3" align="center" sx={{ fontWeight: 'bold', color: '#7A562E' }} >
                            Contact Us
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" gutterBottom sx={{ textAlign: 'center' }}>
                            Phone: +1 (704)123-4567
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p" gutterBottom sx={{ textAlign: 'center' }}>
                            Have a question, comment, or suggestion? We'd love to hear from you! Please fill out the form below and we'll get back to you as soon as possible.
                        </Typography>
                        <form>
                            <Grid container >
                                <Grid item xs={12}>
                                    <TextField
                                        id="fullname"
                                        label="Name"
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth
                                        require
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="email"
                                        label="Email"
                                        variant="outlined"
                                        margin="normal"
                                        fullWidth
                                        require
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        id="message"
                                        label="Message"
                                        variant="outlined"
                                        margin="normal"
                                        multiline
                                        require
                                        fullWidth
                                        rows={4}
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <Button variant="contained" fullWidth style={{ padding: "0px,0px,5px,0px", backgroundColor: "#7A562E", marginTop: "10px", marginBottom: "20px" }}>Submit</Button>
                                </Grid>

                            </Grid>
                        </form>
                    </CardContent>

                </Card>
            </Grid>
        </div>

    )
}

export default Contact

import React from 'react'
import TextField from '@mui/material/TextField';
import { Button, Card, Grid, Typography, CardContent } from '@mui/material';
import BannerImage from "../assets/morefood.png";


export default function PrivacyPolicy() {
    return (
        <div>
            <div style={{ backgroundImage: `url(${BannerImage})` }}>
                <Grid >
                    <Card variant='outlined' style={{ maxWidth: 800, padding: "20px 5px ", margin: "0 auto" }}>
                        <CardContent>
                            <Typography gutterBottom variant="h3" align="center" sx={{ fontWeight: 'bold', color: '#7A562E' }} >
                                Privacy Policy
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" gutterBottom sx={{ textAlign: 'center' }}>
                                This Privacy Policy explains how we collect, use, and protect the personal information of our users on our meal planning website. We are committed to ensuring that your privacy is protected, and we take the responsibility of safeguarding your personal information very seriously.
                            </Typography>
                            <Typography gutterBottom variant="h6" align="center" sx={{ fontWeight: 'bold', color: '#7A562E' }} >
                                Information We Collect:
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" gutterBottom sx={{ textAlign: 'center' }}>
                                We collect personal information from our users when they register on our website, subscribe to our newsletter, fill out a form, or place an order. This may include your name, email address, physical address, phone number, and payment information.
                            </Typography>
                            <Typography gutterBottom variant="h6" align="center" sx={{ fontWeight: 'bold', color: '#7A562E' }} >
                                How We Use Your Information:
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" gutterBottom sx={{ textAlign: 'center' }}>
                                We use the information we collect from you to personalize your experience, improve our website, and provide you with the services and products you have requested. This includes creating and delivering customized meal plans, sending promotional emails, and processing payments.
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" gutterBottom sx={{ textAlign: 'center' }}>
                                We may also use your information to improve our website and customer service, conduct market research, and respond to your inquiries, questions, and requests. </Typography>
                            <Typography gutterBottom variant="h6" align="center" sx={{ fontWeight: 'bold', color: '#7A562E' }} >
                                How We Protect Your Information:
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" gutterBottom sx={{ textAlign: 'center' }}>
                                We are committed to ensuring the security of your personal information and take reasonable measures to protect it against unauthorized access, use, or disclosure. We use a variety of security technologies and procedures to help protect your personal information from unauthorized access, use, or disclosure.
                            </Typography>
                            <Typography gutterBottom variant="h6" align="center" sx={{ fontWeight: 'bold', color: '#7A562E' }} >
                                Disclosure of Your Information:
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" gutterBottom sx={{ textAlign: 'center' }}>
                                We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as required by law or to provide services or products to you. </Typography>
                            <Typography gutterBottom variant="h6" align="center" sx={{ fontWeight: 'bold', color: '#7A562E' }} >
                                Third-Party Links:
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" gutterBottom sx={{ textAlign: 'center' }}>
                                Our website may contain links to third-party websites. These websites have their own privacy policies, and we are not responsible for the privacy practices of these sites. We encourage you to review the privacy policies of these sites before providing any personal information.
                            </Typography>
                            <Typography gutterBottom variant="h6" align="center" sx={{ fontWeight: 'bold', color: '#7A562E' }} >
                                Changes to This Privacy Policy:
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" gutterBottom sx={{ textAlign: 'center' }}>
                                We may update this Privacy Policy from time to time to reflect changes to our information practices. We will notify you of any changes by posting the new Privacy Policy on our website.
                            </Typography>
                            <Typography gutterBottom variant="h6" align="center" sx={{ fontWeight: 'bold', color: '#7A562E' }} >
                                Contact Us:


                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" gutterBottom sx={{ textAlign: 'center' }}>
                                If you have any questions or concerns about this Privacy Policy, please contact us at buypotato@bakepotato.com</Typography>
                        </CardContent>

                    </Card>
                </Grid>
            </div>
        </div>
    )
}

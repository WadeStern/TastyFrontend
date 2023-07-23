import React from 'react'
import TextField from '@mui/material/TextField';
import { Button, Card, Grid, Typography, CardContent } from '@mui/material';
import BannerImage from "../assets/morefood.png";


export default function Terms() {
    return (
        <div>
            <div style={{ backgroundImage: `url(${BannerImage})` }}>
                <Grid >
                    <Card variant='outlined' style={{ maxWidth: 800, padding: "20px 5px ", margin: "0 auto" }}>
                        <CardContent>
                            <Typography gutterBottom variant="h3" align="center" sx={{ fontWeight: 'bold', color: '#7A562E' }} >
                                Terms of Use
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" gutterBottom sx={{ textAlign: 'center' }}>
                                Welcome to our meal planning website! Please read these terms of use carefully before using our service. By accessing or using our website, you agree to be bound by these terms and conditions.
                            </Typography>
                            <Typography gutterBottom variant="h6" align="center" sx={{ fontWeight: 'bold', color: '#7A562E' }} >
                                1. Use of Service
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" gutterBottom sx={{ textAlign: 'center' }}>
                                Our website is designed to provide meal planning resources and tools to help users plan healthy meals. You may use our website for personal, non-commercial use only. You must be at least 18 years old to use our service.
                            </Typography>
                            <Typography gutterBottom variant="h6" align="center" sx={{ fontWeight: 'bold', color: '#7A562E' }} >
                                2. Account Creation
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" gutterBottom sx={{ textAlign: 'center' }}>
                                To access certain features of our website, you may be required to create an account. You agree to provide accurate, complete, and updated information when creating an account. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
                            </Typography>
                            <Typography gutterBottom variant="h6" align="center" sx={{ fontWeight: 'bold', color: '#7A562E' }} >
                                3. User Content
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" gutterBottom sx={{ textAlign: 'center' }}>
                                Our website allows users to upload and share content, such as recipes and meal plans. You retain all rights to your content, but you grant us a non-exclusive, royalty-free, transferable, sublicensable, worldwide license to use, store, display, reproduce, and distribute your content on our website and in connection with our service.
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" gutterBottom sx={{ textAlign: 'center' }}>
                                You are solely responsible for any content that you upload to our website. You agree not to upload any content that is unlawful, defamatory, obscene, or otherwise objectionable. We reserve the right to remove any content that we deem inappropriate.
                            </Typography>
                            <Typography gutterBottom variant="h6" align="center" sx={{ fontWeight: 'bold', color: '#7A562E' }} >
                                4. Intellectual Property
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" gutterBottom sx={{ textAlign: 'center' }}>
                                Our website and all content and materials on our website, including text, graphics, logos, images, and software, are owned by us or our licensors and are protected by copyright, trademark, and other intellectual property laws.
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" gutterBottom sx={{ textAlign: 'center' }}>
                                You may not reproduce, distribute, display, or sell any content or materials on our website without our prior written consent.
                            </Typography>
                            <Typography gutterBottom variant="h6" align="center" sx={{ fontWeight: 'bold', color: '#7A562E' }} >
                                5. Disclaimer of Warranties
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" gutterBottom sx={{ textAlign: 'center' }}>
                                Our website is provided on an "as is" and "as available" basis without any warranties, express or implied. We do not warrant that our website will be error-free or uninterrupted, that the content on our website will be accurate, complete, or reliable, or that our website will meet your requirements
                            </Typography>
                            <Typography gutterBottom variant="h6" align="center" sx={{ fontWeight: 'bold', color: '#7A562E' }} >
                                6. Limitation of Liability
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" gutterBottom sx={{ textAlign: 'center' }}>
                                In no event shall we be liable for any direct, indirect, incidental, special, or consequential damages arising out of or in connection with your use of our website or our service, including, but not limited to, damages for loss of profits, goodwill, use, data, or other intangible losses.
                            </Typography>
                            <Typography gutterBottom variant="h6" align="center" sx={{ fontWeight: 'bold', color: '#7A562E' }} >
                                7. Indemnification
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" gutterBottom sx={{ textAlign: 'center' }}>
                                You agree to indemnify and hold us harmless from and against any claims, actions, demands, damages, liabilities, and settlements, including without limitation, reasonable legal and accounting fees, arising out of or in connection with your use of our website or our service or your violation of these terms of use.
                            </Typography>
                            <Typography gutterBottom variant="h6" align="center" sx={{ fontWeight: 'bold', color: '#7A562E' }} >
                                8. Modification of Terms of Use
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" gutterBottom sx={{ textAlign: 'center' }}>
                                We reserve the right to modify these terms of use at any time without notice. Your continued use of our website following any such modification constitutes your agreement to be bound by the modified terms of use.
                            </Typography>
                            <Typography gutterBottom variant="h6" align="center" sx={{ fontWeight: 'bold', color: '#7A562E' }} >
                                9. Governing Law and Jurisdiction
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" gutterBottom sx={{ textAlign: 'center' }}>
                                These terms of use shall be governed by and construed in accordance with the laws of the jurisdiction in which our website is located. Any dispute arising out of or in connection with these terms of use shall be subject to the exclusive jurisdiction of the courts located in that jurisdiction.
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" gutterBottom sx={{ textAlign: 'center' }}>
                                Thank you for using our meal planning website, Buy Potato Bake Potato!
                            </Typography>
                        </CardContent>

                    </Card>
                </Grid>
            </div>
        </div>
    )
}

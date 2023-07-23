import React from 'react'
import "../styles/Home.css";
import { Link } from "react-router-dom";
import BannerImage from "../assets/morefood.png";
import MealPlan from "../assets/mealplan.png";
import Prep from "../assets/prep.png";
import GetFood from "../assets/getfood.png";
import Typewriter from 'typewriter-effect';
import { Button, Card, Grid, Typography, CardContent, ImageList, CardActions, CardHeader, IconButton, Carousel } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import RestAPI from '../RestAPI';
import RecipeCard from '../components/RecipeCard';


function Home() {
    const [user, setUser] = React.useState();
    const [loading, setLoading] = React.useState(false);
    const [recipes, setRecipes] = React.useState([]);
    const [suggestedRecipes, setSuggestedRecipes] = React.useState([]);

    function unicodeToChar(text) {
        return text.replace(/\\u[\dA-F]{4}/gi,
            function (match) {
                return String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16));
            });
    }
    const recipieget = (user) => {
        RestAPI.getCustomRecipies(user.username).then((res) => {
            setSuggestedRecipes([])
            res.data.map((resData) => {
                setSuggestedRecipes(prev => [
                    ...prev,
                    {
                        id: resData.id,
                        label: unicodeToChar(resData.title).replace(/['"]+/g, ''),
                        thumbnail: resData.thumbnail.replace(/['"]+/g, ''),
                        likedBy: resData.likedBy ? resData.likedBy.split(",") : null,
                        dislikedBy: resData.dislikedBy ? resData.dislikedBy.split(",") : null
                    }
                ]
                )

            })
        })
    }
        

        

    React.useEffect(() => {
        if (sessionStorage.getItem("user") !== null) {
            setUser(JSON.parse(window.sessionStorage.getItem("user")));
            recipieget(JSON.parse(window.sessionStorage.getItem("user")));
        }
        RestAPI.getNumRecipes(3).then((res) => {
            setRecipes([])
            console.log(res.data)
            res.data.map((resData) => {
                setRecipes(prev => [
                    ...prev,
                    {
                        id: resData.id,
                        label: unicodeToChar(resData.title).replace(/['"]+/g, ''),
                        thumbnail: resData.thumbnail.replace(/['"]+/g, ''),
                        likedBy: resData.likedBy ? resData.likedBy.split(",") : null,
                        dislikedBy: resData.dislikedBy ? resData.dislikedBy.split(",") : null
                    }
                ]
                )

            })
        })
        
    }, [])

    console.log(suggestedRecipes)
    if (user) {
        return (
            <div>
                <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
                    <div className='headerContainer'>
                        <div className='header'>
                            <h1> Buy Potato Bake Potato </h1>
                            <h1> <Typewriter
                                onInit={(typewriter) => {
                                    typewriter.typeString('Welcome')
                                        .callFunction(() => {
                                            console.log('String typed out!');
                                        })
                                        .pauseFor(500)
                                        .deleteAll()
                                    typewriter.typeString(user.username)
                                        .callFunction(() => {
                                            console.log('String typed out!');
                                        })
                                        .pauseFor(200)
                                        .start();

                                }}

                            /></h1>
                            <Link to="/survey">
                                <button> Survey </button>
                            </Link>
                        </div>
                    </div>

                </div>

                <div>
                    <Grid style={{ marginBottom: "20px", padding: "30px", backgroundColor: '#7A562E' }}>
                        <Typography gutterBottom variant="h5" align="center" sx={{ fontWeight: 'bold', color: 'white' }} >
                            "Meal planning is a simple, yet powerful tool that can help you take control of your health and wellbeing." -Unknown
                        </Typography>

                    </Grid>
                </div>
                <div>
                    <Grid style={{ marginBottom: "20px", padding: "30px" }}>
                        <Typography gutterBottom variant="h3" align="left" sx={{ fontWeight: 'bold', color: '#7A562E' }} >
                            Trending Meals This Week
                        </Typography>
                        <Grid style={{ marginTop: "20px", marginBottom: "20px" }}>
                        <Grid container>
                            <Grid item xs={12} style={{ marginTop: "20px", marginBottom: "20px" }}>
                                <Card variant='outlined' style={{ width: '80%', padding: "20px 5px ", margin: "0 auto" }}>
                                    <Grid container spacing={2} direction="row" >
                                {
                                    recipes.map((recipe) => (
                                        <RecipeCard recipe={recipe} numCards={3} user={user} />
                                    ))
                                }
                                </Grid>
                                </Card>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
                {
                    suggestedRecipes.length>0 &&
                    <div>
                    <Grid style={{ marginBottom: "20px", padding: "30px" }}>
                        <Typography gutterBottom variant="h3" align="left" sx={{ fontWeight: 'bold', color: '#7A562E' }} >
                            This Week's Meals
                        </Typography>
                        <div>
                        <div>
                    <Grid style={{ marginTop: "20px", marginBottom: "20px" }}>
                        <Grid container>
                            <Grid item xs={12} style={{ marginTop: "20px", marginBottom: "20px" }}>
                                <Card variant='outlined' style={{ width: '80%', padding: "20px 5px ", margin: "0 auto" }}>
                                    <Grid container spacing={2} direction="row" >
                                            {suggestedRecipes.map((recipe) => (
                                            <RecipeCard recipe={recipe} numCards={3} user={user} />
                                        ))}

                                    </Grid>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>                                
                </div>
                    </Grid>
                </div>
                    
                }
                
                <div>
                    <Grid style={{ marginTop: "20px", marginBottom: "20px", padding: "30px", backgroundColor: '#7A562E' }}>
                        <Typography gutterBottom variant="h4" align="center" sx={{ fontWeight: 'bold', color: 'white' }} >
                            Some Helpful Tips
                        </Typography>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel1a-content"
                                id="panel1a-header"
                            >
                                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Stick To The Plan</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="h6">
                                    Once you've created your meal plan for the week, try to stick to it as closely as possible. This will help you avoid last-minute decisions to order takeout or eat unhealthy snacks.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Prep Ahead Of Time</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="h6">
                                    Prepping your ingredients and meals ahead of time can save you time and stress during the week. Try to set aside a block of time each week to prep your meals and ingredients for the upcoming week.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Don't Forget About Snacks</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="h6">
                                    Snacks can be an important part of your meal plan, especially if you tend to get hungry between meals. Include healthy snacks like fruit, veggies, nuts, or yogurt in your meal plan to help keep you satisfied throughout the day.
                                </Typography >
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Shop Smart </Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="h6">
                                    When grocery shopping, stick to your list and avoid buying unnecessary items. Try to shop in the perimeter of the store where the fresh produce and protein are located, and avoid the middle aisles with processed foods and snacks.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                        <Accordion>
                            <AccordionSummary
                                expandIcon={<ExpandMoreIcon />}
                                aria-controls="panel2a-content"
                                id="panel2a-header"
                            >
                                <Typography variant="h5" sx={{ fontWeight: 'bold' }}>Be Flexible</Typography>
                            </AccordionSummary>
                            <AccordionDetails>
                                <Typography variant="h6">
                                    While meal planning can be a great tool for staying on track with your health goals, it's important to be flexible and adjust your plan as needed. If you have unexpected plans or events come up, don't be too hard on yourself if you can't stick to your plan perfectly. The key is to do your best and make healthy choices whenever possible.
                                </Typography>
                            </AccordionDetails>
                        </Accordion>
                    </Grid>
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <div className='home' style={{ backgroundImage: `url(${BannerImage})` }}>
                    <div className='headerContainer'>
                        <div className='header'>
                            <h1> Buy Potato Bake Potato </h1>
                            <p> <Typewriter
                                onInit={(typewriter) => {
                                    typewriter.typeString('Curated Meal Plans ')
                                        .callFunction(() => {
                                            console.log('String typed out!');
                                        })
                                        .pauseFor(500)
                                        .deleteAll()
                                    typewriter.typeString('For All Taste Buds')
                                        .callFunction(() => {
                                            console.log('String typed out!');
                                        })
                                        .pauseFor(200)
                                        .deleteAll()
                                        .start();

                                }}
                            /></p>

                            <Link to="/signup">
                                <button> Sign Up Now</button>
                            </Link>
                            <Link to="/login">
                                <button> Login </button>
                            </Link>

                        </div>
                    </div>
                </div>
                <Grid style={{ marginTop: "20px", marginBottom: "20px", padding: "30px" }}>
                    <Typography gutterBottom variant="h5" align="center" sx={{ fontWeight: 'bold', color: '#7A562E' }} >
                        Are you tired of constantly feeling stressed and overwhelmed when it comes to planning your meals? Do you find yourself eating the same thing every day or relying on takeout and fast food because you don't have time or energy to cook? If so, a meal planning program may be just what you need!
                    </Typography>
                    <div className='row'>
                        <div class="column">
                            <img src={MealPlan} alt="" />
                            <Typography align="center" style={{ padding: "10px" }}>
                                By signing up for a meal planning program, you will have access to a variety of healthy and delicious recipes that are tailored to your specific dietary needs and preferences. These programs can also help you save time and money by providing weekly shopping lists and helping you make the most of your ingredients.
                            </Typography>
                        </div>
                        <div class="column">
                            <img src={GetFood} alt="" />
                            <Typography align="center" style={{ padding: "10px" }}>
                                Not only will a meal planning program make your life easier and more organized, but it can also have significant health benefits. By planning your meals ahead of time, you are more likely to make nutritious choices and avoid the temptation of unhealthy options.
                            </Typography>
                        </div>
                        <div class="column">
                            <img src={Prep} alt="" />
                            <Typography align="center" style={{ padding: "10px" }}>
                                If you're still on the fence, consider the long-term benefits of investing in a meal planning program. By developing healthy eating habits and sticking to a regular meal schedule, you will likely experience increased energy, improved digestion, and better overall health.  </Typography>
                        </div>

                    </div>
                    <Link to="/signup">
                        <Button align="center" fullWidth variant="contained" size="large" style={{ padding: "0px,0px,5px,0px", backgroundColor: "green", marginTop: "10px", marginBottom: "20px" }}> Sign Up Now</Button>
                    </Link>
                    <div>
                        <Grid style={{ marginBottom: "20px", padding: "30px" }}>
                            <Typography variant="h3" align="center" sx={{ fontWeight: 'bold', color: '#7A562E' }} >
                                Recipes of the Week
                            </Typography>
                            <Grid style={{ marginTop: "20px", marginBottom: "20px" }}>
                                <Grid container>
                                    <Grid item xs={12} style={{ marginTop: "20px", marginBottom: "20px" }}>
                                        <Card variant='outlined' style={{ width: '1005px', padding: "20px 5px ", margin: " auto" }}>
                                            <Grid container spacing={2} direction="row"  >
                                            {
                                    recipes.map((recipe) => (
                                        <RecipeCard recipe={recipe} numCards={3} user={user} />
                                    ))
                                }
                                            </Grid>
                                        </Card>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>

                    </div>
                </Grid >
                <Grid style={{ marginBottom: "20px", padding: "30px" }}>


                    <Typography gutterBottom variant="h5" align="center" sx={{ fontWeight: 'bold', color: '#7A562E' }} >
                        Our website is dedicated to providing you with the tools and resources you need to plan healthy and delicious meals that fit your busy lifestyle.
                    </Typography>
                    <Typography align="center" style={{ padding: "10px" }}>
                        We understand that meal planning can be a daunting task, which is why we've created a user-friendly platform that makes it easy and enjoyable to plan your meals. Our website offers a wide variety of recipes that are tailored to your specific dietary needs and preferences, including options for gluten-free, vegetarian, and low-carb diets.

                        In addition to our extensive recipe database, our website also provides customizable meal plans that can be tailored to your schedule and lifestyle. We understand that everyone's needs are different, which is why we offer flexible options for daily, weekly, and monthly meal planning.
                    </Typography>
                    <Link to="/signup"  >
                        <Button align="center" fullWidth variant="contained" size="large" style={{ padding: "0px,0px,5px,0px", backgroundColor: "green", marginTop: "10px", marginBottom: "20px" }}> Sign Up Now</Button>
                    </Link>
                </Grid>

            </div >
        )
    }
}

export default Home

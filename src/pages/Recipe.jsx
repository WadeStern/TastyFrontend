import React from 'react'
import "../styles/Home.css";
import BannerImage from "../assets/morefood.png";
import { Card, Grid, Typography, CardContent } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import { useParams } from "react-router-dom"
import RestAPI from '../RestAPI';

const Recipe = () => {
    const [user, setUser] = React.useState();
    const [recipe, setRecipe] = React.useState({});
    const id = useParams()

    function unicodeToChar(text) {
        return text.replace(/\\u[\dA-F]{4}/gi,
            function (match) {
                return String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16));
            });

    }
    function splitText(text) {
        const myArray = text.split(",");
    }

    React.useEffect(() => {
        if (sessionStorage.getItem("user") !== null) {
            setUser(JSON.parse(sessionStorage.getItem("user")));

        }
        setRecipe({})
        RestAPI.getRecipeByID(id.recipeGUID).then((res) => {

            setRecipe(
                {
                    label: unicodeToChar(res.data.title).replace(/['"]+/g, ''),
                    thumbnail: res.data.thumbnail.replace(/['"]+/g, '',),
                    servings: res.data.servings,
                    description: res.data.description ? unicodeToChar(res.data.description).replace(/['"]+/g, '',) : null,
                    ingredients: res.data.ingredients.replace(/n\/a/g, '').split("||"),
                    nutrition: JSON.parse(res.data.nutrition),
                    steps: Object.values(JSON.parse(res.data.steps)),
                }
            )
            console.log((JSON.parse(res.data.nutrition)))
        })

    }, [])

    return (

        <div style={{ backgroundImage: `url(${BannerImage})` }}>
            <Grid style={{ marginTop: "20px", marginBottom: "20px" }}>
                <Card variant='outlined' style={{ maxWidth: 800, padding: "20px 5px ", margin: "0 auto", marginTop: '10px' }}>
                    <CardContent>
                        <Typography gutterBottom variant="h4" align="center" sx={{ fontWeight: 'bold', color: '#7A562E' }} >
                            {recipe.label}
                        </Typography>
                        <CardMedia
                            square='false'
                            component="img"
                            height="200"
                            image={recipe.thumbnail} />
                        {recipe.description &&
                            <Typography gutterBottom variant="h5" align="left" sx={{ fontWeight: 'bold', color: '#7A562E', marginTop: '10px' }} >
                                Description
                            </Typography>
                        }
                        <Typography gutterBottom variant="p" align="left" sx={{ marginTop: '10px' }} >
                            {recipe.description}
                        </Typography>
                        <Typography gutterBottom variant="h5" align="left" sx={{ fontWeight: 'bold', color: '#7A562E', marginTop: '10px' }} >
                            Servings: {recipe.servings}
                        </Typography>
                        <Typography gutterBottom variant="h5" align="left" sx={{ fontWeight: 'bold', color: '#7A562E', marginTop: '10px' }} >
                            Ingredients
                        </Typography>
                        <Typography gutterBottom variant="p" align="left" sx={{ marginTop: '10px' }} style={{ whiteSpace: 'pre-line' }} >
                            {recipe.ingredients ?
                                recipe.ingredients.map((item) => {
                                    if (item != '') {
                                        return (item + "\n \n")
                                    }
                                }) :
                                null
                            }
                        </Typography>
                        <Typography gutterBottom variant="h5" align="left" sx={{ fontWeight: 'bold', color: '#7A562E', marginTop: '10px' }} >
                            Steps:
                        </Typography>
                        <Typography gutterBottom variant="p" align="left" sx={{ marginTop: '10px' }} style={{ whiteSpace: 'pre-line' }} >
                            {recipe.steps ?
                                recipe.steps.map((item) => {
                                    return (item + "\n \n")
                                }) :
                                null
                            }
                        </Typography>
                        <Typography gutterBottom variant="h5" align="left" sx={{ fontWeight: 'bold', color: '#7A562E', marginTop: '10px' }} >
                            Nutritional Information
                        </Typography>
                        <Typography gutterBottom variant="p" align="left" sx={{ marginTop: '10px' }} style={{ whiteSpace: 'pre-line' }}>
                            {recipe.nutrition
                                ? Object.keys(recipe.nutrition).map((key) => {
                                    if (key === 'calories') {
                                        return (`${key.charAt(0).toUpperCase() + key.slice(1)} ${recipe.nutrition[key]} \n \n`)
                                    }
                                    return (`${key.charAt(0).toUpperCase() + key.slice(1)} ${recipe.nutrition[key]}g \n \n`)
                                })
                                : null
                            }
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>

        </div>

    )
}


export default Recipe
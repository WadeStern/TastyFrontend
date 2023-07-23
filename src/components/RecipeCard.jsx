import React from 'react'
import {  IconButton, Card, Grid, CardMedia, CardActions, CardHeader, CardContent, CardActionArea, } from '@mui/material';
import RestAPI from '../RestAPI';
import {  useNavigate  } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons';
import { faThumbsUp as regularFaThumbsUp, faThumbsDown as regularFaThumbsDown } from '@fortawesome/free-regular-svg-icons';
import "../styles/Recipes.css";




const RecipeCard = ({ recipe, numCards, user }) => {
    const [liked, setLiked] = React.useState(false)
    const [disliked, setDisliked] = React.useState(false)
    const navigate = useNavigate();

    React.useEffect(() => {
        setLiked(recipe.likedBy ? recipe.likedBy.includes(user.id.toString()) : false)
        setDisliked(recipe.dislikedBy ? recipe.dislikedBy.includes(user.id.toString()) : false)
    }, [])
    const putLikedRecipie = (id) => {
        if (sessionStorage.getItem("user") !== null) {
            return RestAPI.putLikedRecipie(user.id, id)
        } else {
            alert("Must be logged in");
            return;
        }


    }

    const putDislikedRecipie = (id) => {
        if (sessionStorage.getItem("user") !== null) {
            RestAPI.putDislikedRecipie(user.id, id)
        } else {
            alert("Must be logged in");
            return;
        }
    }
    return (
        
        <Grid item sm={12 / numCards}>
            <Card sx={{ width: 550, height: 400 }} style={{ width: '100%', margin: '10px' }}>
                <CardActionArea
                
                >
                        <CardHeader
                        onClick={()=>navigate(`/recipe/${recipe.id}`)}
                            title={recipe.label}
                        />
                    <CardContent alignItems='center' >
                        <CardMedia
                        onClick={()=>navigate(`/recipe/${recipe.id}`)}
                            square='false'
                            component="img"
                            height="200"
                            image={recipe.thumbnail} />

                        <CardActions>
                            <IconButton
                                onClick={() => {
                                    setLiked(!liked);
                                    if(disliked){
                                        setDisliked(!disliked);
                                    }
                                    putLikedRecipie(recipe.id)
                                }
                                }>
                                {liked
                                    ? <FontAwesomeIcon icon={faThumbsUp} />
                                    : <FontAwesomeIcon icon={regularFaThumbsUp} />
                                }
                            </IconButton>
                            <IconButton onClick={() => {
                                setDisliked(!disliked);
                                if(liked){
                                    setLiked(!liked);
                                }
                                putDislikedRecipie(recipe.id)
                            }}>
                                {disliked
                                    ? <FontAwesomeIcon icon={faThumbsDown} />
                                    : <FontAwesomeIcon icon={regularFaThumbsDown} />
                                }
                            </IconButton>
                        </CardActions>
                    </CardContent>
                    
                    
                </CardActionArea>
            </Card>
        </Grid>

    )
}


export default RecipeCard

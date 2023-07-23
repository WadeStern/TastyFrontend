import React from 'react'

import {  Card, Grid,  CardHeader } from '@mui/material';
import RestAPI from '../RestAPI';

import "../styles/Recipes.css";

import RecipeCard from '../components/RecipeCard';


const LikedRecipes = () => {

    const [recipes, setRecipes] = React.useState([]);
    
    const [user, setUser] = React.useState();
    function unicodeToChar(text) {
        return text.replace(/\\u[\dA-F]{4}/gi,
            function (match) {
                return String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16));
            });
    }
    React.useEffect(()=>{
        if (sessionStorage.getItem("user") !== null) {
            setUser(JSON.parse(window.sessionStorage.getItem("user")));
            RestAPI.getLikedRecipes(JSON.parse(window.sessionStorage.getItem("user")).username).then((res) => {
                setRecipes([])
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
        }
    },[])
    
        
    return(
        <div >
                    <Grid style={{ marginTop: "20px", marginBottom: "20px" }}>
                        <Grid container>
                            <Grid item xs={12} style={{ marginTop: "20px", marginBottom: "20px" }}>
                                <Card variant='outlined' style={{ width: '80%', padding: "20px 5px ", margin: "0 auto" }}>
                                    <Grid container spacing={2} direction="row" >
                                        {
                                        recipes.length>0
                                        ? recipes.map((recipe) => (
                                            <RecipeCard recipe={recipe} numCards={3} user={user} />
                                        ))
                                        :<Grid item sm={12}>
                                        <Card sx={{ width: 550, height: 400 }} style={{ width: '100%', margin: '10px' }}>
                                            
                                                    <CardHeader
                                                    sx={{justifyContent:"center"}}
                                                       
                                                    />
                                                        


                                        </Card>
                                        </Grid>
                                        }
                                    </Grid>
                                </Card>
                            </Grid>
                        </Grid>
                    </Grid>


                </div>
    )
}
export default LikedRecipes;

import React from 'react'
import TextField from '@mui/material/TextField';
import { Card, Grid,  CardHeader, Select, MenuItem } from '@mui/material';
import RestAPI from '../RestAPI';
import "../styles/Recipes.css";
import SearchIcon from '@mui/icons-material/Search';
import RecipeCard from '../components/RecipeCard';

const Recipes = () => {
    const [loading, setLoading] = React.useState(false);
    const [recipes, setRecipes] = React.useState([]);
    const [filterText, setFilterText] = React.useState("");
    const [tagOrTitle, setTagOrTitle] = React.useState(true);
    const [user, setUser] = React.useState();

    function unicodeToChar(text) {
        return text.replace(/\\u[\dA-F]{4}/gi,
            function (match) {
                return String.fromCharCode(parseInt(match.replace(/\\u/g, ''), 16));
            });
    }
    React.useEffect(() => {
        if (sessionStorage.getItem("user") !== null) {
            setUser(JSON.parse(window.sessionStorage.getItem("user")));
        }
    }, [])

    const handleSearch = async () => {
        setRecipes([])
        if (tagOrTitle) {
            RestAPI.getRecipesSearchTitle(filterText).then((res) => {
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
            }).catch(err => {
                alert("NO SEARCH VALUE ENTERED")
            })
        } else if (!tagOrTitle) {
            RestAPI.getRecipesSearchTags(filterText).then((res) => {

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
            }).catch(err => {
                alert("NO SEARCH VALUE ENTERED")
            })
        }
    }

    return (
        <div>
            <Grid style={{ marginTop: "20px" }}>
                <div>
                <h1> What are you craving today?</h1>
                </div>
                
                <div style={{ paddingTop: '5px', paddingLeft: '10%', justifySelf: "center", flexDirection: "row" }}>
                    <TextField
                        style={{ backgroundColor: 'white', paddingTop: '3px', width: "67%" }}
                        label="Search"
                        onChange={(e) => {
                            setFilterText(e.target.value);
                        }}
                    />
                    <Select
                        style={{ backgroundColor: 'white', width: "10%", margin: "0px 0px 0px 5px" }}
                        onChange={(e) => {
                            setTagOrTitle(e.target.value);

                        }}
                    >
                        <MenuItem value={true} default>Title</MenuItem>
                        <MenuItem value={false}>Tag</MenuItem>
                    </Select>
                    <button className="searchButton" style={{ marginLeft: '15px', marginTop: '2px' }}
                        onClick={() => handleSearch()}
                    >
                        <SearchIcon></SearchIcon>
                    </button>
                </div>
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
                                                        title = {"Enter a search term"}
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
            </Grid>
        </div>
    )
}
export default Recipes
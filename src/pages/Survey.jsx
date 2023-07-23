import React from 'react'
import TextField from '@mui/material/TextField';
import { Button, ButtonGroup, Checkbox } from '@mui/material';
import RestAPI from '../RestAPI';
import { Card, Box, Grid, Select, MenuItem, Typography, CardContent, ToggleButtonGroup, InputLabel, FormHelperText } from '@mui/material';
import BannerImage from "../assets/morefood.png";
import { useNavigate } from 'react-router';
import jwt from 'jwt-decode'

const UserSurvey = () => {
    /**
     * 
     * 
     * User Information 
     * 
     */
    const [calorie_goal, setGoal] = React.useState(""); //Stores the calorie goals of the user
    const [gender, setGender] = React.useState(""); //User gender
    const [height, setHeight] = React.useState(""); //User height 
    const [weight, setWeight] = React.useState(""); //User Weight
    const [age, setAge] = React.useState(""); //Set age
    const [cooking_exp, setCookingExp] = React.useState(""); //set cookign exp
    const [num_days, setNumDays] = React.useState(""); //setNumDays
    const [num_meals, setNumMeals] = React.useState(""); //setNumMeals
    const [activity_level, setActLvl] = React.useState(""); //Set Act Lvl
    const [breakfast, setBreakfast] = React.useState("");
    const [lunch, setLunch] = React.useState("");
    const [dinner, setDinner] = React.useState("");
    const [user, setUser] = React.useState({});

    React.useEffect(() => {
        if (sessionStorage.getItem("user") !== null) {
            const temp = JSON.parse(window.sessionStorage.getItem("user"));
            setUser(temp);
            
        }
    }, [])

    


    /**
     * 
     * 
     * Error handlers
     * 
     */
    const [calorie_error, setCalorieError] = React.useState(false);
    const [gender_error, setGenderError] = React.useState(false);
    const [height_error, setHeightError] = React.useState(false);
    const [weight_error, setWeightError] = React.useState(false);
    const [age_error, setAgeError] = React.useState(false);
    const [cooking_exp_error, setCookingError] = React.useState(false);
    const [days_error, setDaysError] = React.useState(false);
    const [meals_error, setMealsError] = React.useState(false);
    const [act_lvl_error, setActLvlError] = React.useState(false);
    const navigate = useNavigate();

    const handleClick = (e) => {

        if (calorie_goal !== "" || gender !== "" || height !== "" || weight !== "" || age !== "" || cooking_exp !== "" || num_days !== "" || num_meals !== "" || activity_level !== "") {
            const surveyData = ({
                userID: JSON.parse(window.sessionStorage.getItem("user")).id,
                calorie_goal: calorie_goal,
                gender: gender,
                height: height,
                weight: weight,
                age: age,
                cooking_exp: cooking_exp,
                num_days: num_days,
                activity_level: activity_level
            })
            RestAPI.putUserData(surveyData).then((res) => {
                navigate("/home");
            })

        }

    }

    /**
     * 
     * Change Handler
     * 
     */

    const handleCalorieChange = (e) => {
        setGoal(e.target.value);
    }
    const handleWeightChange = (e) => {
        setWeight(e.target.value);
    }
    const handleHieghtChange = (e) => {
        setHeight(e.target.value);
    }
    const handleAgeChange = (e) => {
        setAge(e.target.value);
    }
    const handleExpChange = (e) => {
        setCookingExp(e.target.value);
    }
    const handleDaysChange = (e) => {
        setNumDays(e.target.value);
    }
    
    
    /**
     * 
     * Style of the page
     * 
     */

    return (
        <div>
            <div style={{ backgroundImage: `url(${BannerImage})` }}>
                <Grid style={{ marginBottom: "20px" }}>
                    <Card variant='outlined' style={{ maxWidth: 600, padding: "20px 5px ", margin: "0 auto" }}>
                        <CardContent>
                            <Typography gutterBottom variant="h3" align="center" sx={{ fontWeight: 'bold', color: '#7A562E' }} >
                                SURVEY
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p" gutterBottom sx={{ textAlign: 'center' }}>
                                Welcome to our meal planning survey! We are interested in learning more about your meal planning habits and preferences. This survey will take approximately 5 minutes to complete and your responses will be kept confidential.
                            </Typography>

                            <Typography variant="body2" color="textSecondary" component="p" gutterBottom sx={{ textAlign: 'center' }}>
                                The purpose of this survey is to gather information on your current meal planning habits, such as how often you plan meals, what types of meals you plan, and what resources you use for meal planning. Additionally, we are interested in learning about any challenges you may face when it comes to meal planning and any suggestions you may have for improving the process.

                            </Typography>

                            <Typography variant="body2" color="textSecondary" component="p" gutterBottom sx={{ textAlign: 'center' }}>
                                Your feedback is important to us and will help us develop resources and tools to support healthy and efficient meal planning. Thank you for taking the time to complete this survey!
                            </Typography>



                            <Box
                                component="form"
                                sx={{ display: 'flex', flexWrap: 'wrap' }}
                                noValidate
                                autoComplete="off"
                            >
                                <div>

                                    <TextField fullWidth
                                        id="calories"
                                        label="Enter Calorie Goal"
                                        variant="outlined"
                                        margin="normal"
                                        value={calorie_goal}
                                        onChange={handleCalorieChange}
                                        error={calorie_error}
                                        helperText={calorie_error ? "Enter your Daily Calorie Goal" : ""}
                                        onBlur={() => (calorie_goal === "" || calorie_goal === null ? setCalorieError(true) : setCalorieError(false))}
                                    />
                                    <InputLabel>Select Gender</InputLabel>
                                    <Select
                                        style={{ width:"25%", margin:"5px 5px 5px 5px" }}
                                        onChange={(e) => {
                                            setGender(e.target.value);
                                        }}
                                    >
                                        <MenuItem value={"male"}>Male</MenuItem>
                                        <MenuItem value={"female"}>Female</MenuItem>
                                </Select>
                                    <div>
                                        <TextField fullWidth
                                            id="weight"
                                            label="Enter weight in lbs"
                                            variant="outlined"
                                            margin="normal"
                                            value={weight}
                                            onChange={handleWeightChange}
                                            error={weight_error}
                                            helperText={weight_error ? "Enter your weight in lbs" : ""}
                                            onBlur={() => (weight === "" || weight === null ? setWeightError(true) : setWeightError(false))}
                                        />
                                        <TextField fullWidth
                                            id="height"
                                            label="Enter height in inches"
                                            variant="outlined"
                                            margin="normal"
                                            value={height}
                                            onChange={handleHieghtChange}
                                            error={height_error}
                                            helperText={height_error ? "Enter your height inches" : ""}
                                            onBlur={() => (height === "" || height === null ? setHeightError(true) : setHeightError(false))}
                                        />
                                        <TextField fullWidth
                                            id="age"
                                            label="Enter Age"
                                            variant="outlined"
                                            margin="normal"
                                            value={age}
                                            onChange={handleAgeChange}
                                            error={age_error}
                                            helperText={age_error ? "Enter your Age" : ""}
                                            onBlur={() => (age === "" || age === null ? setAgeError(true) : setAgeError(false))}
                                        />

                                    </div>
                                    <InputLabel>Select Cooking Expierence</InputLabel>
                                    <Select
                                        style={{ width:"25%", margin:"5px 5px 5px 5px" }}
                                        onChange={(e) => {
                                            
                                            setCookingExp(e.target.value);
                                        }}
                                    >
                                        <MenuItem value={"new"}>Novice</MenuItem>
                                        <MenuItem value={"imm"}>Intermediate</MenuItem>
                                        <MenuItem value={"adv"}>Advanced</MenuItem>
                                </Select>
                                    <TextField fullWidth
                                        id="days"
                                        label="Enter the amount of days you plan on cooking"
                                        variant="outlined"
                                        margin="normal"
                                        value={num_days}
                                        onChange={handleDaysChange}
                                        error={days_error}
                                        helperText={days_error ? "Enter days from 1-7" : ""}
                                        onBlur={() => (num_days === "" || num_days === null || (num_days > 7 && num_days < 0) ? setDaysError(true) : setDaysError(false))}
                                    />

                                    <InputLabel>How active are you?</InputLabel>
                                    <Select
                                        style={{ width:"25%", margin:"5px 5px 5px 5px" }}
                                        onChange={(e) => {
                                            setActLvl(e.target.value);
                                        }}
                                    >
                                        <MenuItem value={"none"}>Not at all</MenuItem>
                                        <MenuItem value={"some"}>Some</MenuItem>
                                        <MenuItem value={"act"}>Very Active</MenuItem>
                                    </Select>
                    
                                </div>

                                <Button variant="contained" fullWidth onClick={handleClick} style={{ padding: "0px,0px,5px,0px", backgroundColor: "#7A562E", marginTop: "10px", marginBottom: "20px" }}>SUBMIT</Button>

                            </Box>


                        </CardContent>

                    </Card>
                </Grid>
            </div>
        </div>

    )


}

export default UserSurvey
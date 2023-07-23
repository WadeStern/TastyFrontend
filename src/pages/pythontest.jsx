import RestAPI from '../RestAPI';
import React, { useEffect, useState } from 'react';
import "../styles/Home.css";



function PythonTest() {

    const [decodedData, setDecodedData] = React.useState('a');

    React.useEffect(() => {
        RestAPI.checkpython().then((res) => {
            try {
                
                const parsedData = JSON.parse(JSON.stringify(res)); // Decode the result
                setDecodedData(parsedData); // Update the decodedData state
            } catch (error) {
                console.error('Error parsing JSON:', error);
                setDecodedData('there was an error');
                // Handle the parsing error, e.g., set fallback value or display an error message
            }
            
        });
    }, []);
    

    return (
        <div>
            Check for backend frontend connectivity {decodedData}
            
        </div>
            
        
        
    )
}

export default PythonTest;
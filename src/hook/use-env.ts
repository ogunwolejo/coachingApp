import React from 'react'


const useEnv = () => {
    if(!process.env.REACT_APP_API_URL || process.env.REACT_APP_API_URL.trim().length === 0) {
        console.log("Error in environment variable REACT_APP_API_URL")
        return null
    }

    return {
        url:process.env.REACT_APP_API_URL
    }
}

export default useEnv
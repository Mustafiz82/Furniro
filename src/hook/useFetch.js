import React, { useEffect, useState } from 'react';
import axiosPUblic from '../axios/axiosPublic';

const useFetch = (endpoint) => {

    const [data , setData] = useState(null)
    const [loading , setLoading] = useState(true)
    const [error , setError] = useState("")
    const [refetchData , setRefetchData] =  useState(false)
    
    const refetch = () => {
        setRefetchData(!refetchData)
    }


    useEffect(() => {
        axiosPUblic.get(endpoint)
        .then(res => {
            setData(res.data)
            setLoading(false)
        })
        .catch(err => setError(err))
    } , [refetchData])



    return {data , loading , error , refetch}
};

export default useFetch;
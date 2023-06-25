import { useState, useEffect } from "react";
import axios from "axios";
const useFetch = (endpoint, query) => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': '4cd3f03a99msh490460db4c9b256p1bc080jsnbd930a426240' ,
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        params: { ...query },
    };

    const fetchData = async () => {
        setLoading(true);

        try {
            const response = await axios.request(options);
            setData(response.data.data);
        } catch (error) {
            setError(error);
            alert(error)
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    const refetch = () => {
        setLoading(true);
        fetchData();
    }

    return { data, isLoading, error, refetch }
}

export default useFetch;
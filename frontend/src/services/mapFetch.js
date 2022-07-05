import React, { useState, useEffect } from 'react';

export const useFetch = (url = 'http://localhost:8000/fields', options = null) => {
    const [data, setData] = useState(null);
    useEffect(() => {
      fetch(url, options)
        .then(res => res.json())
        .then(data => setData(data));
    }, [url, options]);
    return {data}
}

export default {}
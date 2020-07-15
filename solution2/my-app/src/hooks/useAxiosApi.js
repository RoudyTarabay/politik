import React, { useState, useEffect } from "react";
import axios from "axios";
export default function useAxioAPI(props) {
  //   const [url, setUrl] = useState();
  const [response, setResponse] = useState([]);
  const [queryParams, setQueryParams] = useState({
    lang: props.queryParams ? props.queryParams.lang || "en" : "en",
    format: props.queryParams ? props.queryParams.format || "json" : "json",
  });
  useEffect(() => {
    const apiCall = (async () => {
      try {
        const response = await axios.get(props.url, {
          params: {
            format: queryParams.format,
            lang: queryParams.lang,
          },
        });
        setResponse(response.data);
      } catch {
        //seterror
      }
    })();
  }, [props.url]);

  return [response];
}

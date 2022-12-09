import { useEffect, useState } from "react";

function useFetch(url) {
  const [data, setData] = useState();
  const [error, setError] = useState();

  //Write the fetch request
  useEffect(() => {
    fetch(url, {
      headers: { Accept: "application/json" },
    })
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => setError(err));
  }, [url]);

  return {
    data: data,
    error: error,
  };
}

export default useFetch;

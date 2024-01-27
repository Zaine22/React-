import { useEffect, useState } from "react";

function useFetch(url) {
  let [data, setData] = useState(null);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [url]);

  return { data };
}

export default useFetch;

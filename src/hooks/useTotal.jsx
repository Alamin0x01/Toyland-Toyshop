import { useEffect, useState } from "react";

const useTotal = () => {
  const [total, setTotal] = useState(null);

  const getData = async () => {
    const response = await fetch(
      `https://toy-marketplace-server-side-alamin0x01.vercel.app/totaltoy`
    );

    const { result } = await response.json();
    setTotal(result);
  };

  useEffect(() => {
    getData();
  }, []);
  return total;
};

export default useTotal;

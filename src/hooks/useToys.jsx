import { useEffect, useState } from "react";

const useToys = (page, limit, cetagory, search) => {
  const [toys, setToys] = useState(null);

  const getData = async () => {
    const response = await fetch(
      `https://toy-marketplace-server-side-alamin0x01.vercel.app/toys?page=${page}&limit=${limit}&cetagory=${cetagory}&search=${search}`
    );

    const result = await response.json();
    setToys(result);
  };

  useEffect(() => {
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, limit, cetagory, search]);

  return toys;
};

export default useToys;

import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthProvider";

const useMyToys = (sort) => {
  const [toys, setToys] = useState(null);
  const { user } = useAuth();

  const getData = async () => {
    const response = await fetch(
      `https://fan-vault-toys-server.vercel.app/mytoys?userId=${user?.uid}&sort=${sort}`
    );

    const result = await response.json();
    setToys(result);
  };

  useEffect(() => {
    getData();
  }, [sort]);

  return [toys, setToys];
};

export default useMyToys;

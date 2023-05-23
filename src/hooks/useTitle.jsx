import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `Toyland Toyshop | ${title}`;
  }, []);
};

export default useTitle;

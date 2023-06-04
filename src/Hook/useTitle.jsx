import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title}-Toyland Toyshop`;
  }, [title]);
};
export default useTitle;

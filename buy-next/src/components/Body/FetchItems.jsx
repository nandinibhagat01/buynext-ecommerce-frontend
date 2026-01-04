import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PCardActions } from "../store/PCardSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);

  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus?.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;
    //setFetching(true);
    //fetch("https://localhost:8080/items")
    fetch("/items.json", { signal })
      .then((res) => res.json())
      .then(({items}) => {
        dispatch(PCardActions.addInitialProducts(items[0]));

      //   .catch((err) => {
      //   if (err.name !== "AbortError") console.error(err);
      // });
        
      });
    return () => {
      controller.abort();
    };
  }, [fetchStatus]);

  return (
    <>
      <div></div>
    </>
  );
};
export default FetchItems;

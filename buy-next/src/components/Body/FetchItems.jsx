import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PCardActions } from "../store/PCardSlice";
import { FetchStatusActions } from "../store/FetchStatusSlice";

const FetchItems = () => {
  const fetchDone = useSelector((store) => store.fetchStatus.fetchDone);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchDone) return;

    const controller = new AbortController();

    dispatch(FetchStatusActions.markFetchingStarted());

    fetch("http://localhost:8080/items", { signal: controller.signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(PCardActions.addInitialProducts(items));
        dispatch(FetchStatusActions.markFetchDone());
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          console.error(err);
          dispatch(FetchStatusActions.markFetchingFinished());
        }
      });

    return () => controller.abort();
  }, [fetchDone, dispatch]);

  return null;
};

export default FetchItems;

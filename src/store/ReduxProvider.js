"use client";
import { Provider } from "react-redux";
import { store } from "./store";
import { useEffect, useState } from "react";
import { loadState, saveState } from "@/utils/helper";
let storeHolder;
export default function ReduxProvider({ children }) {
  const [loaded, setLoaded] = useState(false);
  const [reduxStore, setReduxStore] = useState({});
  useEffect(function () {
    const persisted = loadState();
    storeHolder = store({ wishlist: persisted || { items: [] } });
    storeHolder.subscribe(() => {
      saveState(storeHolder.getState().wishlist);
    });
    setReduxStore(storeHolder);
    setLoaded(true);
  }, []);
  if (!loaded) return null; // Avoid mismatch on server/client
  return <Provider store={reduxStore}>{children}</Provider>;
}

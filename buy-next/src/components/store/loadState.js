export const loadState = () => {
  try {
    const serialized = localStorage.getItem("reduxState");
    return serialized ? JSON.parse(serialized) : undefined;
  } catch {
    return undefined;
  }
};

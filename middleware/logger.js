const logger = store => next => action => {
    console.group(action.type);
    console.log("Action: ", action);
    const result = next(action);
    console.log("Result: ", store.getState());
    console.groupEnd();
  };
  
  export default logger;
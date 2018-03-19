export const addToStore = (item) => {
    console.log('adding role:', item);
    return ({
        type: 'addRole',
        item
    });
}

export const nullifyCount = (count = 0) =>{
  console.log("nullifing Count");
  return({
    type : 'NullifyCount',
    count
  });
}

export const incrementCount = (count) =>{
  console.log("Incrementing count")
  return({
    type : 'IncrementCount',
    count
  })
}

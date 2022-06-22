const swap = (arr, indexOne, indexTwo) => {
      const temp = arr[indexTwo];
      arr[indexTwo] = arr[indexOne];
      arr[indexOne] = temp;
    }
    
    export default swap;
    
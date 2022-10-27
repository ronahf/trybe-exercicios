// Utilize o reduce para transformar uma matriz em um array.

const arrays = [['1', '2', '3'],[true],[4, 5, 6],];
  
  const flatten = () => {
    return arrays.reduce((acc, array) => {
      // console.log(array);
        array.forEach(item => {
          // console.log(item);
            acc.push(item)
        })
        return acc;
    }, []);
  }
console.log(flatten());

//o forEach não exige return. 
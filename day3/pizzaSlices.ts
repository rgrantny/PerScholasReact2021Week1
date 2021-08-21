/**
 * Draws a length 1 width 1 pizza slice
 * Length 1 width 1:
  -
 |_|
​
 */
function drawSmallPizzaSlice(length: number, width: number): string {
    let smallPizza = " ";
    for (let i = 0; i < length; i++) {
        smallPizza += '-';
    }
    smallPizza += '\n';

    for (let i = 0; i < width; i++) {
        smallPizza  += "|";
        for (let j = 0; j < width; j++) {
            smallPizza += "_";
        }
        smallPizza += "|";
    }
    return smallPizza;
}
​
/**
 * Draw a length 1 width 2 pizza slice 
 * Medium - Length 1 width 2:
  
   --
  |__|
 * 
 */
function drawMediumPizzaSlice(length: number, width: number): string {
    let mediumPizza = " ";
    for(let i = 0; i < width; i++)
    {
        mediumPizza += '-';
    }
    mediumPizza += '\n';
    for(let i = 0; i < length; i++)
    {
        if(i == length-1)
        {
            mediumPizza += "|";
            for(let j = 0; j < width; j++)
            {
                mediumPizza += "_";
            }
            mediumPizza += "|"
        }
        else
        {
            mediumPizza += "|";
            for(let j = 0; j < width; j++)
            {
                mediumPizza += " ";
            }
            mediumPizza += "|"
            mediumPizza+= "\n";
        }
    }

    return mediumPizza;
}
​
/**
 * 
 * Draws a length 2 width 2 pizza slice 
 * @returns {string}
 * Length 2 width 2:
  
   --
  | .|
  |__|
​
 */
function drawLargePizzaSlice(length: number, width: number):string {
    let largePizza = " ";
    for(let i = 0; i < width; i++)
    {
        largePizza += '-';
    }
    largePizza += '\n';
    for(let i = 0; i < length; i++)
    {
        if(i == length-1)
        {
            largePizza += "|";
            for(let j = 0; j < width; j++)
            {
                largePizza += "_";
            }
            largePizza += "|"
        }
        else
        {
            largePizza += "|";
            for(let j = 0; j < width-1; j++)
            {
                largePizza += " ";
            }
            largePizza += ".|"
            largePizza+= "\n";
        }
    }

    return largePizza;
}
/**
 * @param {string} sliceSize
 *                 size of slice
 * @return {string}
 *         Returns a string which is a "drawing" of the slice. Examples
 * 
 * Small - Length 1 width 1:
   -
  |_|
​
 * 
 * Medium - Length 1 width 2:
  
   --
  |__|
 * 
​
 * 
 * Large - Length 2 width 2:
 * 
  
   --
  | .|
  |__|
​
 */
function drawAnyPizzaSlice() {}
​
console.log(drawSmallPizzaSlice(1, 1));
console.log(drawMediumPizzaSlice(1, 2));
console.log(drawLargePizzaSlice(2, 2));
// console.log(drawAnyPizzaSlice());
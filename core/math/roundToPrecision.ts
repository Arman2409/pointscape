const roundToPrecision = (
    number:number, 
    precision:number):number => {
    const multiplier = 10**precision;
    return Math.round(number * multiplier) // round using Math.round
           / multiplier; // scale back the decimal
  }

export default roundToPrecision;
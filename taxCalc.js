export function taxCalc(a){ // 'a' refers to earnings
    return (a > 0 & a < 12000) ? 0 : // If earnings > 0 but < 12000 per year, return 0, otherwise 
    (a >= 12000 & a < 36000) ? 0.2 * a : // If earnings > or = 12000 but < 36000, return 20% of earnings, otherwise return 40% of earnings
    (a >= 36000) ? 0.4 * a  : -1 // If earnings > or = 36000, return 40% of earnings, otherwise return -1
}

// console.log(taxCalc(-10000));

// By Valentine Kiguli
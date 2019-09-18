const calculateStylePoints = (styleNotes) => {
    if(styleNotes.length > 5) styleNotes = styleNotes.slice(0,5);
    
    //Checks if value is range (0-20) and if is format (18.0, 18.5)
    const checkValue = el => {return el >20 || el < 0 || el % 1 !== 0.5 && el % 1 !== 0};
    const correctValue = styleNotes.find(checkValue); //if value is correct that return undefined
   
    if(correctValue === undefined && styleNotes.length === 5) {
        const extremeNotes = Math.min.apply(null, styleNotes) + Math.max.apply(null, styleNotes);

        let sumStylePoints = styleNotes.reduce(function(prev, curr) {
            return prev + curr;
        });

        const finallyStyleNotes = sumStylePoints - extremeNotes; 

        return finallyStyleNotes;
    } 

        return 'error, wrong value!';
};

module.exports = calculateStylePoints;
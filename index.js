const formatDate = (timeInSeconds) => {
    if(!timeInSeconds) return '0s';
    /*FORMAT FOR HOURS*/
    if(timeInSeconds > 3600) {
        if (timeInSeconds % 3600 === 0 ) return `${timeInSeconds / 3600}h`;
        else if (timeInSeconds % 3600 < 60) return `${Math.floor(timeInSeconds / 3600)}h ${timeInSeconds % 3600}s`;
        else if (timeInSeconds % 3600 % 60 === 0) return `${Math.floor(timeInSeconds / 3600)}h ${timeInSeconds % 3600 /60}m`;
        else if (timeInSeconds % 3600 >= 60) {
            let hours = Math.floor(timeInSeconds / 3600);
            let minutes = Math.floor(timeInSeconds % 3600 / 60);
            let seconds = timeInSeconds % 3600 % 60 ;

            return `${hours}h ${minutes}m ${seconds}s`; 
        } 
    }
    
    /*FORMAT FOR MINUTES*/
    if (timeInSeconds <3600 && timeInSeconds >60) {
        if(timeInSeconds % 60 === 0 ) return `${timeInSeconds / 60}m`;
        else if (timeInSeconds % 60 !== 0) return `${Math.floor(timeInSeconds /60)}m ${timeInSeconds % 60}s`;
    }

    /*FORMAT FOR SECONDS*/
    if(timeInSeconds < 60) return `${timeInSeconds}s`;
}
  
  module.exports = formatDate;
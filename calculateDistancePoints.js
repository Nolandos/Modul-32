const calculateDistancePoints = (distance, hillSize, kPoint) => {
    if(hillSize >= 85 && hillSize <= 109) {
        const basePoints = 60;
        const finallyPoints = basePoints + (distance - kPoint) *2;
        return finallyPoints;
    }
    if(hillSize >= 110 && hillSize <= 184) {
        const basePoints = 60;
        const finallyPoints = basePoints + (distance - kPoint) *1.8;
        return finallyPoints;
    }
    if(hillSize >= 185) {
        const basePoints = 120;
        const finallyPoints = basePoints + (distance - kPoint) * 1.2;
        return finallyPoints;
    }
  };

  module.exports = calculateDistancePoints;
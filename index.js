// Returns the number of blocks from Scuber's headquarters to the pickup location.
function distanceFromHqInBlocks(someValue) {
    return Math.abs(someValue - 42); // Assuming Scuber's headquarters is at block 42
  }
  
  // Returns the number of feet from Scuber's headquarters to the pickup location.
  function distanceFromHqInFeet(someValue) {
    return distanceFromHqInBlocks(someValue) * 264; // Each block is 264 feet
  }
  
  // Calculates the number of feet a passenger travels given a starting block and an ending block (North and South only).
  function distanceTravelledInFeet(start, destination) {
    return Math.abs(destination - start) * 264; // Each block is 264 feet
  }
  
  // Given the starting and ending block, returns the fare for the customer.
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
  
    if (distance <= 400) {
      return 0; // First 400 feet are free
    } else if (distance > 400 && distance <= 2000) {
      return (distance - 400) * 0.02; // 2 cents per foot for distance between 400 and 2000 feet
    } else if (distance > 2000 && distance < 2500) {
      return 25; // Flat fare for distance over 2000 feet and under 2500 feet
    } else if (distance >= 2500) {
      return 'cannot travel that far'; // Scuber does not allow rides over 2500 feet
    }
  }
  
  // Example usage:
  console.log(distanceFromHqInBlocks(50)); // Example output: 8 blocks
  console.log(distanceFromHqInFeet(50)); // Example output: 2112 feet
  console.log(distanceTravelledInFeet(50, 46)); // Example output: 1056 feet
  console.log(calculatesFarePrice(50, 46)); // Example output: 8.32
  
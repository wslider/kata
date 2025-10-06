// Time Like String Format (6 KYU) - 2025 October 05

  function solution(hour) {
  let stringHour = hour.toString();
  
  if (stringHour.length === 3 || stringHour.length === 4) {
  let hourArray = stringHour.split('');
  hourArray.splice(-2, -1, ':');
  return hourArray.join(''); }
    
  else  {
    throw new Error('Invalid input: hour must be 3 or 4 digits');
  }
}



// Character Counter - 2025 September 23

  function validateWord(s)
  {
  const newArray = Array.from(s.toLowerCase());
    
    // Count occurrences of each character
    const counts = {};
    for (const item of newArray) {
      counts[item] = (counts[item] || 0) + 1;
    }
    
    // Get the set of counts (unique frequencies)
    const frequencies = Object.values(counts);
    
    // Check if all frequencies are the same
    return frequencies.every(count => count === frequencies[0]);
    
  }


// Digital Root

  function digitalRoot(n) {
    if(n===0) return 0;
    else if (n % 9 === 0) return 9;
    else return n % 9;
  }

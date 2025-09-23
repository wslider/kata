


function digitalRoot(n) {
   if(n===0) return 0;
  else if (n % 9 === 0) return 9;
  else return n % 9;
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
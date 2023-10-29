function divide(a, b) {
    try {
      if (b === 0) {
        throw new Error("Division by zero is not allowed.");
      }
  
      return a / b;
    } catch (error) {
      console.error("Error caught:", error.message);
      return "Error occurred";
    }
  }
  
  // Test the divide function with various inputs
  console.log(divide(10, 2));    // Output: 5
  console.log(divide(8, 0));     // Output: Error caught: Division by zero is not allowed. Error occurred
  console.log(divide("abc", 5));  // Output: Error caught:  Error occurred
  
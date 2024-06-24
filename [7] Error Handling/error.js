function divide(a, b) {
    if (b === 0) {
      throw new Error("Деление на ноль недопустимо!");
    }
    return a / b;
  }

  try {
    console.log(divide(10, 2)); // Output: 5
    console.log(divide(20, 0)); // Throws an error: "Деление на ноль недопустимо!"
  } catch (error) {
    console.error(error.message);
  }
  
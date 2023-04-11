function getSomeValue() {
    return 2
  }
  
  function myFunction(num1) {
    return getSomeValue() * getSomeValue()
  }
  
  const result = myFunction(5)

  //result : 2 * 2 = 4
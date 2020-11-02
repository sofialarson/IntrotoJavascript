//Create a function that takes in one argument that is passed through a
//conditional statement. (For example, something like our haunted house door()
// function.) Print some resulting text to the console. Test all of your
//conditions to make sure you can receive all of your results back.

console.log(whatToEatForLunch(Math.random() * 2));

function whatToEatForLunch (conditionalnumber) {
  if (conditionalnumber >= 1) {
    return "thank god, i'm eating bread and cheese for lunch";
  } else {
    return "...i guess its time to finally eat the soup that's been in my cupboard for a year";
  }
}

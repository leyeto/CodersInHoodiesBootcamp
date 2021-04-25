const ingredients = [
  { name: "carrot", time: 500 },
  { name: "potato", time: 1000 },
  { name: "onion", time: 250 },
  { name: "celery", time: 150 },
  { name: "tomato", time: 100 },
];

/**
 * Exercise 1
 *
 * create a function {asyncCookIngredient} which takes 1 argument:
 *
 * an {ingredient} object (like the objects in the array on line 1)
 * with 2 keys: name and time.
 *
 * Return a promise which gets resolved after the time has elapsed.
 *
 * The value used to resolve the promise should be the original
 * {ingredient} object
 *
 */

const asyncCookIngredient = (ingredient) => {
  const promise = new Promise((resolve) => {
    setTimeout(() => {
      resolve(ingredient);
    }, ingredient.time);
  });
  return promise;
};

/**
 * Exercise 2
 *
 * create a function {asyncCookMeal} which will recieve an
 * array of {ingredientsToCook} and call {asyncCookIngredient} for
 * each ingredient
 *
 * Return a promise which gets resolved after all of the
 * ingredients are cooked
 *
 * The value used to resolve the promise should be and object
 * containing an array of {ingredientNames} and the {totalTime}:
 *
 * {
 *  ingredientNames: ["carrot", "onion"],
 *  totalTime: 750
 * }
 *
 */

const asyncCookMeal = (ingredientsToCook) => {
  let maxCookTime = 0;
  const bigPromise = new Promise((resolve) => {
    const cookingDone = {
      ingredientNames: [],
      totalTime: 0,
    };

    for (let i = 0; i < ingredientsToCook.length; i++) {
      if (maxCookTime < ingredientsToCook[i].time) {
        maxCookTime = ingredientsToCook[i].time;
      }
    }

    ingredientsToCook.forEach((ingredient) => {
      cookingDone.ingredientNames.push(ingredient.name);
      cookingDone.totalTime += ingredient.time;
      asyncCookIngredient(ingredient);
    });

    setTimeout(() => {
      resolve(cookingDone);
    }, maxCookTime);
  });

  return bigPromise;
};

// const asyncCookMeal = (ingredientsToCook) => {
//   let maxCookTime = 0;
//   const bigPromise = new Promise((resolve) => {
//     const cookingDone = {
//       ingredientNames: [],
//       totalTime: 0,
//     };

//     ingredientsToCook.forEach((ingredient) => {
//       if (ingredient.time > maxCookTime) {
//         maxCookTime = ingredient.time;
//       }
//       ingredientsToCook.ingredientNames.push(ingredient.name);
//       ingredientsToCook.totalTime += ingredient.time;
//       asyncCookIngredient(ingredient);
//     });
//     console.log("maxCookTime is " + maxCookTime);
//     console.log("cookingDone is " + cookingDone);

//     setTimeout(() => {
//       resolve(cookingDone);
//     }, maxCookTime);
//   });
//   console.log(bigPromise);

//   return bigPromise;
// };

// OLD CODE

// const asyncCookMeal = (ingredientsToCook) => {
//   let totalCookTime = 0;
//   ingredientsToCook.forEach((ingredient) => {
//     totalCookTime += ingredient.time;
//   });

//   const cookedPromise = new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Food is ready");
//       ingredientsToCook.forEach((ingredient) => {
//         resolve(asyncCookIngredient(ingredient));
//       });
//     }, totalCookTime);
//   });
//   return cookedPromise;
// };

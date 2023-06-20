const getEstimation = (vacationConcept) => {
    let price = 0;
    switch (vacationConcept.foodPlan) {
        case 1:
            console.log('You have chosen the All Inclusive plan');
            price = 1000;
            break;
        case 2:
            console.log('You have chosen the Dinner Included plan')
            price = 500;
            break;
        case 3:
            console.log('You have chosen the Breakfast Included plan')
            price = 300;
            break;
    }

    /*     console.log("🚀 ~ file: debugging.js:15 ~ getEstimation ~ price:", price)
     */

    const {
        nrOfPeople
    } = vacationConcept
    price *= nrOfPeople
    /*     console.log("🚀 ~ file: debugging.js:25 ~ getEstimation ~ price:", price)
     */
    if (vacationConcept.oceanView) {
        price += 300
        /*         console.log("🚀 ~ file: debugging.js:28 ~ getEstimation ~ price:", price)
         */
    }

    return price;
}


const holiday1 = {
    foodPlan: 3,
    nrOfPeople: 2,
    oceanView: false
}

const holiday2 = {
    foodPlan: 2,
    nrOfPeople: 3,
    oceanView: true
}

const holiday3 = {
    foodPlan: 1,
    nrOfPeople: 1,
    oceanView: false
}

console.log(`The estimation should be 600 and is ${getEstimation(holiday1)}`)
console.log(`The estimation should be 1800 and is ${getEstimation(holiday2)}`)
console.log(`The estimation should be 1000 and is ${getEstimation(holiday3)}`)
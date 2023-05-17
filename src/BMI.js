export const getAverageBodyMassIndex = (people) => {
    try {
        const totalBodyMassIndex = people.reduce((total, person) => {
            console.log('person: ', person);
            const bodyMassIndex = person.weight / (person.height * person.height);
            console.log('body mass indexx: ', bodyMassIndex);
            return total + bodyMassIndex;
        }, 0);

        console.log('testing')

        return totalBodyMassIndex / people.length;
    } catch (error) {
        console.log('It was not possible to calculate the average body mass index');
        return error;
    }
}


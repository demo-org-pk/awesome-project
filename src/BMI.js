export const getAverageBodyMassIndex = (people) => {
    try {
        const totalBodyMassIndex = people.reduce((total, person) => {
            const bodyMassIndex = person.weight / (person.height * person.height);
            return total + bodyMassIndex;
        }, 0);

        return totalBodyMassIndex / people.length;
    } catch (error) {
        console.log('It was not possible to calculate the average body mass index');
        return error;
    }
}


const storePlants = [];
export const addPlant = (seedObject) => {
 return storePlants.push(seedObject);
}
export const usePlants = () => {
    return storePlants;
}
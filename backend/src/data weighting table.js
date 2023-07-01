const timeSlot = {
    peopleArray: [],
    weatherRank: -1,
    recommendationValue: -1
};

const getTimeSlot = () => {
    return timeSlot;
}

const setTimeSlot = (newTimeSlot) => {
    timeSlot = newTimeSlot;
}

export { getTimeSlot, setTimeSlot }
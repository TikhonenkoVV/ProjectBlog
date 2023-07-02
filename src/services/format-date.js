export const formatDate = (date) => {
    const month = new Date(date).getMonth() + 1;

    const day = new Date(date).getDate().toString().padStart(2, 0);
    const year = new Date(date).getFullYear().toString();
    const hours = new Date(date).getHours().toString().padStart(2, 0);
    const minutes = new Date(date).getMinutes().toString().padStart(2, 0);
    let monthToString;
    switch (month) {
        case 1:
            monthToString = "січняс";
            break;
        case 2:
            monthToString = "лютого";
            break;
        case 3:
            monthToString = "березня";
            break;
        case 4:
            monthToString = "квітня";
            break;
        case 5:
            monthToString = "травня";
            break;
        case 6:
            monthToString = "червня";
            break;
        case 7:
            monthToString = "липня";
            break;
        case 8:
            monthToString = "серпня";
            break;
        case 9:
            monthToString = "вересня";
            break;
        case 10:
            monthToString = "жовтня";
            break;
        case 11:
            monthToString = "листопада";
            break;
        case 12:
            monthToString = "грудня";
            break;

        default:
            console.log("Не вірне значення");
            break;
    }
    return `${day} ${monthToString}, ${year} | ${hours}:${minutes}`;
};

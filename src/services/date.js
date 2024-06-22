const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export const formattedDateServer = function (date) {
    let d = new Date(date)
    let month = String(d.getMonth() + 1);
    let day = String(d.getDate());
    const year = String(d.getFullYear());

    if (month.length < 2) {
        month = '0' + month;
    }
    if (day.length < 2) {
        day = '0' + day;
    }

    return `${year}/${month}/${day}`;
};



export const formattedDate3 = function (date) {
    let d = new Date(date)
    let month = String(d.getMonth());
    let day = String(d.getDate());
    const year = String(d.getFullYear());

    if (month.length < 2) {
        month = '0' + month;
    }
    if (day.length < 2) {
        day = '0' + day;
    }

    return `${day} ${months[d.getMonth()]} ${year}`;
};

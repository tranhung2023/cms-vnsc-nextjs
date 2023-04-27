export const getDate = (plus: number) => {
    const date = new Date();
    const previous = new Date(date.getTime());
    previous.setDate(date.getDate() + plus);

    return previous;
};

export const unixTimeToStringTime = (unix_timestamp: number) => {
    const date = new Date(unix_timestamp);
    const hours = '0' + date.getHours();
    const minutes = '0' + date.getMinutes();
    return hours.slice(-2) + ':' + minutes.slice(-2);
};

export const unixTimeToStringDate = (unix_timestamp: number) => {
    const date = new Date(unix_timestamp);
    const year = date.getFullYear();
    const month = '0' + (date.getMonth() + 1);
    const day = '0' + date.getDate();
    return day.slice(-2) + '/' + month.slice(-2) + '/' + year;
};

export const getRangeTimeStock = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = '0' + (date.getMonth() + 1);
    const day = '0' + date.getDate();
    const t9h = year + '/' + month.slice(-2) + '/' + day.slice(-2) + ' 09:00:00';
    const t10h = year + '/' + month.slice(-2) + '/' + day.slice(-2) + ' 10:00:00';
    const t11h = year + '/' + month.slice(-2) + '/' + day.slice(-2) + ' 11:00:00';
    const t12h = year + '/' + month.slice(-2) + '/' + day.slice(-2) + ' 12:00:00';
    const t13h = year + '/' + month.slice(-2) + '/' + day.slice(-2) + ' 13:00:00';
    const t14h = year + '/' + month.slice(-2) + '/' + day.slice(-2) + ' 14:00:00';
    const t15h = year + '/' + month.slice(-2) + '/' + day.slice(-2) + ' 15:00:00';
    const tzoffset = new Date().getTimezoneOffset() * 60000;
    const t9hUnix = new Date(t9h).getTime() - tzoffset;
    const t10hUnix = new Date(t10h).getTime() - tzoffset;
    const t11hUnix = new Date(t11h).getTime() - tzoffset;
    const t12hUnix = new Date(t12h).getTime() - tzoffset;
    const t13hUnix = new Date(t13h).getTime() - tzoffset;
    const t14hUnix = new Date(t14h).getTime() - tzoffset;
    const t15hUnix = new Date(t15h).getTime() - tzoffset;
    return [t9hUnix, t10hUnix, t11hUnix, t12hUnix, t13hUnix, t14hUnix, t15hUnix];
};

export const getDateFilter = (plus: number) => {
    const data = getDate(plus);
    const month = '0' + (data.getMonth() + 1);
    const date = '0' + data.getDate();
    const year = data.getFullYear();
    return {
        dateFilter: year + '-' + month.slice(-2) + '-' + date.slice(-2),
        dateFilterReverse: date.slice(-2) + '-' + month.slice(-2) + '-' + year,
        dateShow: date.slice(-2) + '/' + month.slice(-2) + '/' + year,
    };
};

export const getDateFilterFromData = (data: Date) => {
    const month = '0' + (data.getMonth() + 1);
    const date = '0' + data.getDate();
    const year = data.getFullYear();
    return year + '-' + month.slice(-2) + '-' + date.slice(-2);
};

export const secondsToMinutes = (seconds: number) => {
    const minute = Math.floor(seconds / 60);
    const second = seconds % 60;
    return minute + ':' + second;
};

export const formatDayToFamiliar = (day: number, fulltext = false) => {
    let result = undefined;
    switch (day) {
        case 0:
            result = fulltext ? 'Chủ nhật' : 'CN';
            break;
        case 1:
            result = fulltext ? 'Thứ 2' : 'T2';
            break;
        case 2:
            result = fulltext ? 'Thứ 3' : 'T3';
            break;
        case 3:
            result = fulltext ? 'Thứ 4' : 'T4';
            break;
        case 4:
            result = fulltext ? 'Thứ 5' : 'T5';
            break;
        case 5:
            result = fulltext ? 'Thứ 6' : 'T6';
            break;
        case 6:
            result = fulltext ? 'Thứ 7' : 'T7';
            break;
    }
    return result;
};

/**
 * Format lại time
 * Ví dụ từ : "2023-04-13T00:00:00.000Z"
 * Sang: "13/04/2023"
 * @param timeString
 * @returns
 */
export const reFormatTimeString = (timeString: string, separate: string = '/') => {
    const dt = new Date(timeString);
    const month = '0' + (dt.getMonth() + 1);
    const date = '0' + dt.getDate();
    const year = dt.getFullYear();
    return date.slice(-2) + separate + month.slice(-2) + separate + year;
};

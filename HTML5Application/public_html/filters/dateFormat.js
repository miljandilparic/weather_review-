Vue.filter("dateFormat", function (value, format = 'day') {
    var filtered_value = '';
    var date = new Date(value);
    switch(format) {
        case 'day':
            var days = ['SUNDAY', 'MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY'];
            filtered_value = days[date.getDay()];
            break;
        case 'month':
            const months = [
                "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
                "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"
            ];
            filtered_value = months[date.getMonth()];
            break;
        case 'date':
            filtered_value = date.getDate();
            break;
        case 'year':
            filtered_value = date.getFullYear();
            break;
        default:
            break;
    }
    return filtered_value;
});
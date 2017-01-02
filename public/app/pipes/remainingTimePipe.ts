import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'remainingTimePipe'
})

export class RemainingTimePipe implements PipeTransform {
    transform(date: any): any {
        const DaysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        const Months = "JanFebMarAprMayJunJulAugSepOctNovDec";
        const padding = "in ";

        //Input pattern example: 2017-01-02T09:23:00.000Z
        let input = date + "";
        let splitted = input.split('T');
        let today = new Date();

        let year = +splitted[0].split('-')[0];
        let month = +splitted[0].split('-')[1];
        let day = +splitted[0].split('-')[2];

        let splittedTime = splitted[1].split(':');

        let hour = +splittedTime[0];
        let minute = +splittedTime[1];
        let second = +splittedTime[2].split('.')[0];

        //Years
        let currentYear = today.getFullYear();
        let remaining = year - currentYear;

        if (remaining < 0) {
            return 'Started';
        }

        if (remaining > 0) {
            if (remaining == 1) {
                return padding + '1 year';
            }
            return padding + remaining + ' years';
        }

        //Months
        let currentMonth = today.getMonth() + 1;
        remaining = month - currentMonth;

        if (remaining > 0) {
            if (remaining == 1) {
                //TODO Leap year
                let currentDate = today.getDate();
                let daysInPreviousMonth = (month != 0 ? DaysInMonths[month - 1] : DaysInMonths[11]);
                let daysRemaining = (daysInPreviousMonth + day) - currentDate;

                if (daysRemaining < 7) {
                    if (daysRemaining == 1) {
                        return padding + '1 day';
                    }
                    return padding + daysRemaining + ' days';
                }

                let weeksPassed = daysRemaining / 7;
                weeksPassed = Math.round(weeksPassed);
                if (weeksPassed == 1) {
                    return padding + '1 week';
                }
                return padding + weeksPassed + ' weeks';

            }
            return padding + remaining + ' months';
        }

        //Days
        let currentDay = today.getDate();
        let daysPassed = day - currentDay;

        if (daysPassed > 0) {
            if (daysPassed < 7) {
                if (daysPassed == 1) {
                    return padding + '1 day';
                }
                return padding + daysPassed + ' days';
            }

            let weeksPassed = daysPassed / 7;
            weeksPassed = Math.round(weeksPassed);
            if (weeksPassed == 1) {
                return padding + '1 week';
            }
            return padding + weeksPassed + ' weeks';
        }

        //Hours
        let currentHour = today.getHours();
        remaining = hour - currentHour;

        if (remaining > 1) {
            if (remaining == 2) {
                return padding + '1 hour';
            }
            return padding + remaining + ' hours';
        }

        //Minutes
        let currentMinute = today.getMinutes();

        if (remaining == 1) {
            remaining = 60 + minute - currentMinute;
        } else {
            remaining = minute - currentMinute;
        }


        if (remaining > 0) {
            if (remaining == 1) {
                return padding + 'a minute';
            }
            return padding + remaining + ' minutes';
        }

        //Seconds

        let currentSecond = today.getSeconds();
        remaining = second - currentSecond;

        if (remaining > 0) {
            return padding + 'less than a minute';
        }

        return 'Started';
    }
}
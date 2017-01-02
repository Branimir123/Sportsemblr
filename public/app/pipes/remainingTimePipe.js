"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var RemainingTimePipe = (function () {
    function RemainingTimePipe() {
    }
    RemainingTimePipe.prototype.transform = function (date) {
        var DaysInMonths = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        var Months = "JanFebMarAprMayJunJulAugSepOctNovDec";
        var padding = "in ";
        //Input pattern example: 2017-01-02T09:23:00.000Z
        var input = date + "";
        var splitted = input.split('T');
        var today = new Date();
        var year = +splitted[0].split('-')[0];
        var month = +splitted[0].split('-')[1];
        var day = +splitted[0].split('-')[2];
        var splittedTime = splitted[1].split(':');
        var hour = +splittedTime[0];
        var minute = +splittedTime[1];
        var second = +splittedTime[2].split('.')[0];
        //Years
        var currentYear = today.getFullYear();
        var remaining = year - currentYear;
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
        var currentMonth = today.getMonth() + 1;
        remaining = month - currentMonth;
        if (remaining > 0) {
            if (remaining == 1) {
                //TODO Leap year
                var currentDate = today.getDate();
                var daysInPreviousMonth = (month != 0 ? DaysInMonths[month - 1] : DaysInMonths[11]);
                var daysRemaining = (daysInPreviousMonth + day) - currentDate;
                if (daysRemaining < 7) {
                    if (daysRemaining == 1) {
                        return padding + '1 day';
                    }
                    return padding + daysRemaining + ' days';
                }
                var weeksPassed = daysRemaining / 7;
                weeksPassed = Math.round(weeksPassed);
                if (weeksPassed == 1) {
                    return padding + '1 week';
                }
                return padding + weeksPassed + ' weeks';
            }
            return padding + remaining + ' months';
        }
        //Days
        var currentDay = today.getDate();
        var daysPassed = day - currentDay;
        if (daysPassed > 0) {
            if (daysPassed < 7) {
                if (daysPassed == 1) {
                    return padding + '1 day';
                }
                return padding + daysPassed + ' days';
            }
            var weeksPassed = daysPassed / 7;
            weeksPassed = Math.round(weeksPassed);
            if (weeksPassed == 1) {
                return padding + '1 week';
            }
            return padding + weeksPassed + ' weeks';
        }
        //Hours
        var currentHour = today.getHours();
        remaining = hour - currentHour;
        if (remaining > 1) {
            if (remaining == 2) {
                return padding + '1 hour';
            }
            return padding + remaining + ' hours';
        }
        //Minutes
        var currentMinute = today.getMinutes();
        if (remaining == 1) {
            remaining = 60 + minute - currentMinute;
        }
        else {
            remaining = minute - currentMinute;
        }
        if (remaining > 0) {
            if (remaining == 1) {
                return padding + 'a minute';
            }
            return padding + remaining + ' minutes';
        }
        //Seconds
        var currentSecond = today.getSeconds();
        remaining = second - currentSecond;
        if (remaining > 0) {
            return padding + 'less than a minute';
        }
        return 'Started';
    };
    return RemainingTimePipe;
}());
RemainingTimePipe = __decorate([
    core_1.Pipe({
        name: 'remainingTimePipe'
    }),
    __metadata("design:paramtypes", [])
], RemainingTimePipe);
exports.RemainingTimePipe = RemainingTimePipe;
//# sourceMappingURL=remainingTimePipe.js.map
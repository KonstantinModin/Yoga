window.addEventListener('DOMContentLoaded', function () {
    'use strict';
    
    // Tabs
    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++) {
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }

    hideTabContent(1);

    function showTabContent(b) {
        if (tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.add('show');
            tabContent[b].classList.remove('hide');
        }
    }

    info.addEventListener('click', function (event) {
        let target = event.target;
        if (target && target.classList.contains('.info-header-tab')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });


    // Timer
    let d = new Date(), //Для установки текущей даты + 2 дня
        deadLine = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + (d.getDate() + 2);
    // let deadLine = '2018-12-26';

    function getTimeRemaining(endtime) {
        let t = Date.parse(endtime) - Date.parse(new Date()),
            seconds = Math.floor((t / 1000) % 60),
            minutes = Math.floor((t / 1000 / 60) % 60),
            hours = Math.floor(t / 1000 / 60 / 60);

        // if (seconds < 0) {
        //     return {
        //         'total': 0,
        //         'hours': 0,
        //         'minutes': 0,
        //         'seconds': 0
        //     }
        // } else {
            return {
                'total': t,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            };
        // }
    };

    function setClock(id, endtime) {
        let timer = document.getElementById(id),
            hours = timer.querySelector('.hours'),
            minutes = timer.querySelector('.minutes'),
            seconds = timer.querySelector('.seconds'),
            timeInterval = setInterval(updateClock, 1000);

        function updateClock() {
            let t = getTimeRemaining(endtime);
            if (t.hours > 9) {
                hours.textContent = t.hours;
            } else {
                    hours.textContent = '0' + t.hours;  
            };
            
            if (t.minutes > 9) {
                minutes.textContent = t.minutes;
            } else {
                minutes.textContent = '0' + t.minutes;
            }
            if (t.seconds > 9)  {
                seconds.textContent = t.seconds;
            } else {
                seconds.textContent = '0' + t.seconds;
            }

            if (t.total <= 0) {
                clearInterval(timeInterval);
                hours.textContent = '00';
                minutes.textContent = '00';
                seconds.textContent = '00';
            }
        }
    }

    setClock('timer', deadLine);

});
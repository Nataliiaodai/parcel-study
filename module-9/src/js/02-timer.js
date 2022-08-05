import  flatpickr  from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import Notiflix from 'notiflix';

const refs = {
    inputDataTime: document.querySelector("#datetime-picker"),
    buttonDataStart: document.querySelector("button[data-start]"),
    boxTimer: document.querySelector(".timer"),
    dataDays: document.querySelector("span[data-days]"),
    dataHours: document.querySelector("span[data-hours]"),
    dataMinutes: document.querySelector("span[data-minutes]"),
    dataSeconds: document.querySelector("span[data-seconds]"),
};
refs.buttonDataStart.disabled = true;
let timerId = null;
let userDate = null;

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
        if(selectedDates[0]<= options.defaultDate) {
            Notiflix.Notify.failure('Please choose a date in the future');
            refs.buttonDataStart.disabled = true;
        }else {
            refs.buttonDataStart.disabled = false;
            refs.buttonDataStart.style.cursor = 'pointer'
        }
        userDate = selectedDates[0];
    },
};

flatpickr(refs.inputDataTime, options);

const onClickStartTimer = () => {
    timerId = setInterval(() =>  {
        const dif = userDate - new Date();
        if(dif <= 0) {
            clearInterval(timerId);
            return;
        }
        setTime();
    },1000);
};

refs.buttonDataStart.addEventListener('click',onClickStartTimer )

function convertMs(msTotal) {
    const msInSecond = 1000;
    const msInMinute = msInSecond * 60;
    const msInHour = msInMinute * 60;
    const msInDay = msInHour * 24;

    let ms = msTotal;

    const days = Math.floor(msTotal / msInDay);
    ms -= days * msInDay;
    const hours = Math.floor(ms / msInHour);
    ms -= hours * msInHour;
    const minutes = Math.floor(ms / msInMinute);
    ms -= minutes * msInMinute;
    const seconds = Math.floor(ms / msInSecond);
    ms -= seconds * msInSecond;

    return {days,hours,minutes,seconds, ms};
};

function pads (value) {
    return String(value).padStart(2,'0')
}

function setTime () {
    const {days, hours, minutes, seconds} = convertMs(userDate - new Date());
    refs.dataDays.textContent = pads(days);
    refs.dataHours.textContent = pads(hours);
    refs.dataMinutes.textContent = pads(minutes);
    refs.dataSeconds.textContent = pads(seconds);
}


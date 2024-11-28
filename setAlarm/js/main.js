// Set Alarm

// Write a function named setAlarm/set_alarm/set-alarm/setalarm (depending on language) which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

// employed | vacation 
// true     | true     => false
// true     | false    => true
// false    | true     => false
// false    | false    => false

// function setAlarm(employed, vacation){
//     return employed && !vacation;

// }


const setAlarm = (employed, vacation) => employed && !vacation;

console.log(setAlarm(true, true )); // => false , If we are employed and on vacation the alarm should NOT be set, we want to sleep in.
console.log(setAlarm(true, false)); // => true
console.log(setAlarm(false, true)); // false
console.log(setAlarm(false, false)); // false
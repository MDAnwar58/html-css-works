const birthDateTime = new Date("2001-12-15T20:30:00").getTime(); // Considering 8:30 PM as birth time
const birthDate = new Date("2001-12-15").getTime(); // Get just the date for comparison

// Update age every second
setInterval(() => {
  const currentDate = new Date().getTime();

    // Calculate age by considering the specific birth time
    let ageInDays;
    if (currentDate >= birthDateTime) {
      ageInDays = Math.floor((currentDate - birthDate) / (1000 * 60 * 60 * 24));
    } else {
      ageInDays = Math.floor((currentDate - birthDate) / (1000 * 60 * 60 * 24)) - 1;
    }
    
    // Calculate remaining hours and minutes
    const remainingMilliseconds = currentDate - birthDateTime;
    const remainingHours = Math.floor(remainingMilliseconds / (1000 * 60 * 60)) % 24;
    const remainingMinutes = Math.floor(remainingMilliseconds / (1000 * 60)) % 60;

    // Convert the total days to a string
    const daysString = ageInDays.toString().padStart(4, '0'); // Pad with zeros to ensure 4 digits

    // Update flip cards for days
    updateFlipCard(document.querySelector("[data-days-thousands]"), daysString[0]);
    updateFlipCard(document.querySelector("[data-days-hundreds]"), daysString[1]);
    updateFlipCard(document.querySelector("[data-days-tens]"), daysString[2]);
    updateFlipCard(document.querySelector("[data-days-ones]"), daysString[3]);

    // Update flip cards for hours
    updateFlipCard(document.querySelector("[data-hours-tens]"), Math.floor(remainingHours / 10));
    updateFlipCard(document.querySelector("[data-hours-ones]"), remainingHours % 10);

    // Update flip cards for minutes
    updateFlipCard(document.querySelector("[data-minutes-tens]"), Math.floor(remainingMinutes / 10));
    updateFlipCard(document.querySelector("[data-minutes-ones]"), remainingMinutes % 10);
  }, 1000);

// Function to update flip card content
function updateFlipCard(flipCard, newValue) {
  const top = flipCard.querySelector('.top');
  const bottom = flipCard.querySelector('.bottom');
  const oldValue = parseInt(top.textContent);

  if (newValue !== oldValue) {
    top.textContent = newValue;
    bottom.textContent = newValue;
  }
}



function convertTo24HourFormat(time12h) {
    // Split the time string into hours, minutes, and period (AM/PM)
    const [time, period] = time12h.split(' ');

    // Split the hours and minutes
    const [hoursStr, minutesStr] = time.split(':');

    // Convert hours to number
    let hours = parseInt(hoursStr);

    // Adjust hours for PM time
    if (period === 'PM' && hours !== 12) {
        hours += 12;
    }

    // Convert hours back to string
    const hours24h = hours.toString().padStart(2, '0');

    // Return the time in 24-hour format
    return `${hours24h}:${minutesStr}`;
}

const time12h = '8:30 PM';
const time24h = convertTo24HourFormat(time12h);
console.log(time24h);
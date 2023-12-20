function calculateTime(deliveries) {
  const limit = 7 * 3600;
  let accumulate = 0;

  for (const delivery of deliveries) {
    const [hours, minutes, seconds] = delivery.split(':').map(Number);
    const time = hours * 3600 + minutes * 60 + seconds;
    accumulate += time;
  }

  const difference = accumulate - limit;

  const formatTime = (seconds) => {
    const date = new Date(seconds * 1000);
    return date.toISOString().substring(11, 19);
  };

  return difference < 0 ? `-${formatTime(-difference)}` : formatTime(difference);
}
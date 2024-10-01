function timeAgo(date) {
  const seconds = Math.floor((new Date() - new Date(date)) / 1000);
  
  const intervals = {
    "tahun": 31536000,
    "bulan": 2592000,
    "hari": 86400,
    "jam": 3600,
    "minit": 60,
    "saat": 1
  };

  for (let [unit, value] of Object.entries(intervals)) {
    const interval = Math.floor(seconds / value);
    if (interval >= 1) {
      return interval + ` ${unit}` + (interval > 1 ? " lepas" : " lepas");
    }
  }
  return "sebentar tadi";
}

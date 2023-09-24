
export function stringify(obj:any) {
  let cache:any = [];
  let str = JSON.stringify(obj, function(key, value) {
    if (typeof value === "object" && value !== null) {
      if (cache.indexOf(value) !== -1) {
        // Circular reference found, discard key
        return;
      }
      // Store value in our collection
      cache.push(value);
    }
    return value;
  });
  cache = null; // reset the cache
  return str;
}

export function toJDate(date:Date) {
  console.log("date: " + typeof date)
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let day = date.getDate();
  let month = monthNames[date.getMonth()];
  let year = date.getUTCFullYear();
  let mDate = day + ' ' + month + ' ' + year;
  return mDate;
}


export function getColorFromCollectionName(collection:string) {
    let color:string;
    switch(collection) {
      case 'essays':
        color = "#86ed32";
          break;
      case 'projects':
        color = "#32c1ed";
        break;
      case 'previous':
        color = "#edd732";
        break;
      case 'started':
        color = "#ed329f";
        break;
    }
    return color;
}


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

export function getColorFromCollectionName(collection:string) {
    let color:string = "";
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

export function toJDate(date:Date, period:string) {
  //console.log("date: " + typeof date)
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let day = date.getDate();
  let month = monthNames[date.getMonth()];
  let year = date.getUTCFullYear();
  let resutl = "";
  switch (period) {
    case "Day":
      resutl = day + ' ' + month + ' ' + year;
      break;
    case "Month":
      resutl = month + ' ' + year;
      break;
      case "Year":
        resutl = "Year " + year;
        break;
      case "Decade":
        let star_end = getDecadesFromYear(year);
        resutl = "The " + star_end.start + "'s Decade";
        //console.log("resutl: " + resutl);
        break;
  }
  return resutl;
}

export function getDecadesFromYear (year: number): any {
  if (Number.isNaN(year) || (year.toString().length < 4) || (year.toString().length > 4)) {
      throw new Error('Date must be valid and have a 4-digit year attribute');
  }
  let start       = Number(`${year.toString()[2]}0`);
  let startIdx    = year.toString().substring(0, 2);
  let end         = 0;
  start           = (start === 0) ? Number(`${startIdx}00`) : Number(`${startIdx}${start}`);
  end             = start + 10;
  return { start: start, end: end };
}

export function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export interface DateObj {
  url : string;
  day : Date;
  period: string;
  title: string;
  desc: string;
  img: string;
  location: string;
  map: string;
  color:string;
}

export interface DataObj {
  title : string;
  description : Date;
  image: string;
  pubDate: string;
  tags: [];
  technology: [];
  dates: Record<string, DateObj>;
}

export interface CollObj {
  date : DateObj;
  body : string;
}

export interface ArticleObj {
  slug : string;
  collection : string;
  title: string;
}

export interface QuoteObj {
  title : string;
  quote : string;
  url: string;
  color:string;
  article: ArticleObj;
}

export interface SearchObj {
  title : string;
  description : string;
  collection: string;
  slug : string;
  body : string;
}



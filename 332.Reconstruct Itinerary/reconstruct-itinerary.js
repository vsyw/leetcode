// /**
//  * @param {string[][]} tickets
//  * @return {string[]}
//  */
// const findItinerary = function (tickets) {
//   const itinerary = [];
//   let next = '';
//   tickets.sort((a, b) => {
//     if (a[1] > b[1]) return 1;
//     else if (a[1] < b[1]) return -1;
//     return 0;
//   });
//   for (let i = 0; i < tickets.length; i++) {
//     if (tickets[i][0] === 'JFK') {
//       next = tickets[i][1];
//       itinerary.push(...tickets.splice(i, 1));
//       break;
//     }
//   }
//   let count = 0;
//   while (tickets.length > 0) {
//     if (tickets[count][0] === next) {
//       next = tickets[count][1];
//       itinerary.push(...tickets.splice(count, 1));
//       count = 0;
//       continue;
//     }
//     count++;
//   }
//   const ans = [];
//   for (let i = 0; i < itinerary.length; i++) {
//     if (i === itinerary.length - 1) {
//       ans.push(itinerary[i][0]);
//       ans.push(itinerary[i][1]);
//       continue;
//     }
//     ans.push(itinerary[i][0]);
//   }
//   return ans;
// };

function visit(airport, target, route) {
  // console.log(airport, target, route, size);
  // if (target[airport].length === 0 && route.length === size) return;
  // if (!target[airport].length) return;
  while (target.hasOwnProperty(airport) && target[airport].length > 0) {
    const next = target[airport].shift();
    // route.push(next);
    visit(next, target, route);
    // console.log('fuck');
    // route.pop();
  }
  route.push(airport);
}

const findItinerary = function (tickets) {
  const target = {};
  const route = [];

  tickets.sort((a, b) => {
    if (a[1] > b[1]) return 1;
    else if (a[1] < b[1]) return -1;
    return 0;
  });
  
  for (let i = 0; i < tickets.length; i++) {
    if (!target.hasOwnProperty(tickets[i][0])) {
      target[tickets[i][0]] = [tickets[i][1]];
    } else {
      target[tickets[i][0]].push(tickets[i][1]);
    }
  }
  visit('JFK', target, route);
  return route.reverse();
};


console.log(findItinerary([["JFK","KUL"],["JFK","NRT"],["NRT","JFK"]]));














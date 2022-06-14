const list1 = [
  ['1', 'user_1', 'resource_1'],
  ['5', 'user_4', 'resource_1'],
  ['3', 'user_2', 'resource_1'],
  ['4', 'user_2', 'resource_1'],
  ['5', 'user_3', 'resource_1'],
  ['1', 'user_2', 'resource_1'],
  ['1', 'user_1', 'resource_1'],
  ['2', 'user_2', 'resource_1']
 ]
 
 /*
 obj = {}
 
 for (loop) {
  time = corrent[0]
  user = current[1]
  if (!obj[currentArr[1]]) {
    obj[user] = [parseInt(time), parseInt(time)]
  }
  if (time < obj[user][0]) {
    obj[user][0] = time;
  } else if (time > obj[user][1]) {
    obj[user][1] = time;
  }
 }
 
 return obj;
 
 */
 
 const userTimes = (list) => {
  const userHash = {};
  
  for (let i = 0; i < list.length; i++) {
    const time = list[i][0]
    const user = list[i][1]
    
    if (!userHash[user]) {
      userHash[user] = [parseInt(time), parseInt(time)]
    } else if (parseInt(time) < userHash[user][0]) {
      userHash[user][0] = parseInt(time)
    } else if (parseInt(time) > userHash[user][1]) {
      userHash[user][1] = parseInt(time)
    }
    
  }
  return userHash;
 }
 
 console.log(userTimes(list1))
function runningMedian(a) {
      let median
      if (a.length % 2 === 0) {
          const evenMid = Math.floor(a.length / 2) - 1
          median = (a[evenMid] + a[evenMid + 1]) / 2
      } else {
          const oddMid = (a.length - 1) / 2
          median = a[oddMid]
      }
      return median
  }

  console.log(runningMedian([1, 2, 3, 4, 5, 6, 7, 8]))
function produceDrivingRange(blockRange) {
  return function(startBlock, endBlock) {
    let start = parseInt(startBlock)
    let end = parseInt(endBlock)
    let distance = Math.abs(end - start)
    let difference = distance - blockRange

    if (blockRange < distance) {
      return `${difference} blocks out of range`
    } else {
      return `${difference} blocks out of range`
    }
  }
}

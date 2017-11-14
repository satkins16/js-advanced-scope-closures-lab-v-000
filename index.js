function produceDrivingRange(blockRange) {
  return function(startBlock, endBlock) {
    let start = parseInt(startBlock)
    let end = parseInt(endBlock)
    let distance = Math.abs(end - start)
    let difference = blockRange - distance

    if (blockRange < distance) {
      return true
    } else {
      return `${difference} blocks out of range`
    }
  }
}

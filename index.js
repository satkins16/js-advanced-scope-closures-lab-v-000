function produceDrivingRange(blockRange) {
  return function(startBlock, endBlock) {
    let start = parseInt(startBlock)
    let end = parseInt(endBlock)
    let distance = Math.abs(end - start)

    if (blockRange < distance) {
      return true
    } else {
      return false
    }
  }
}

function produceDrivingRange(blockRange) {
  return function(startBlock, endBlock) {
    let start = startBlock.parseInt(startBlock)
    let end = endBlock.parseInt(endBlock)
    let distance = Math.abs(end - start)

    if (blockRange < distance) {
      return true
    } else {
      return false
    }
  }
}

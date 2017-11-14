function produceDrivingRange(range) {
  return function(startBlock, endBlock) {
    let start = startBlock.parseInt(startBlock)
    let end = endBlock.parseInt(endBlock)
    let distance = Math.abs(end - start)

    if (range < distance) {
      true
    } else {
      false
    }
  }
}

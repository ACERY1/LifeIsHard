// 给定一个整数数列，找出其中和为特定值的那两个数。
// 你可以假设每个输入都只会有一种答案，同样的元素不能被重用。

// 示例:

// 给定 nums = [2, 7, 11, 15], target = 9

// 因为 nums[0] + nums[1] = 2 + 7 = 9
// 所以返回 [0, 1]

var twoSum = function (nums, target) {
  var result = []
  var _temp = 0
  var _count = -1
  var isFound = false
  var _newNum = nums

  while (_newNum.length > 0) {
    _temp = _newNum.shift()
    _count ++
    _newNum.forEach (function (_item,_index) {
      if (isFound) return
      // console.log(_temp, _item)
      if (_temp + _item === target) {
       result = [_count, _count + _index+1]
       isFound = true
      } else {
        result = 'not found'
      }
    })
  }
  return result
};


console.log(twoSum([2,5,5,10], 10))

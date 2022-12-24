/**
 * 题目一：
 * 找出 num中两个数相加等于 target 的索引位置
 * const num = [1,4,6,8,9], target = 12;   // [1,3]
 */
function sumne(nums, target) {
  // 方法一
  console.log(Date.now());
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      // console.log(num[j])
      if (nums[i] + nums[j] == target) {
        console.log(Date.now());
        return [i, j];
      }
    }
  }
}
// console.log(sumne([1,4,6,8,9],12))

function sumne2(nums, target) {
  // 方法二
  console.log(Date.now());
  const pairLoolup = {};
  for (let i = 0; i < nums.length; i++) {
    pairLoolup[nums[i]] = i;
  }
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    const pairToFind = target - num;
    const pairToFindIndex = pairLoolup[pairToFind];
    console.log(pairLoolup);
    console.log("pairToFind", pairToFind);
    console.log("pairToFindIndex", pairToFindIndex);
    if (pairLoolup.hasOwnProperty(pairToFind) && pairToFindIndex !== i) {
      console.log(Date.now());
      return [i, pairToFindIndex];
    }
  }
  console.log(pairLoolup);
}
// console.log(sumne2([1,4,6,8,9],12))

/**
 * 题目二、
 * 找出每一项都包含的字符
 * const stres = ["flieo","fleoe","flomeo","fpoeo"]    // f
 */
function longestCommonPrefix(strs) {
  let output = "";
  const firstWord = strs[0];
  for (let i = 0; i < firstWord.length; i++) {
    const cl = firstWord[i];
    let match = true;
    for (let j = 1; j < strs.length; j++) {
      const word = strs[j];
      const c2 = word[i];
      if (cl !== c2) {
        match = false;
        break;
      }
    }
    if (match) {
      output = output + cl;
    } else {
      break;
    }
  }
  return output;
}
// console.log(longestCommonPrefix(["flieo","fleoe","flomeo","fpoeo"]))

/**
 * 题目三、
 * 找出needle出现在haystack中的初始索引
 * const haystack = "hello", needle = "ll";   // 2
 */
function strStr(haystack, needle) {
  if (needle === "" || needle === haystack) {
    return 0;
  }
  if (haystack.length < needle.length) {
    return -1;
  }
  for (let i = 0; i < haystack.length; i++) {
    if (haystack.substring(i, i + needle.length) === needle) {
      return i;
    }
  }
  return -1;
}
// console.log(strStr("hello", "lo"))

/**
 * 3 . 无重复字符的最长子串
 * 示例1："abcabcbb"   // 3
 * 示例2："bbbbb"   // 1
 * 示例3："keewp"   // 3
 */
function lengthOfLongestSubstring(s) {
  // 创建一个set
  const set = new Set();
  // 创建两个指针，第一个指向字符串的开头-j，第二个随着for循环遍历字符串-i
  let i = 0,
    j = 0,
    maxLength = 0;
  if (s.length === 0) {
    return 0;
  }
  for (i; i < s.length; i++) {
    // 如果set里没有s[i]，说明目前为止还没有重复的字符，把s[i]添加到set里，然后更新最大不重复字符的数量
    if (!set.has(s[i])) {
      set.add(s[i]);
      maxLength = Math.max(maxLength, set.size);
    } else {
      // 如果set里有s[i]，则从set里开始删除s[j]，并且递增j，在检查set里是否有s[i]，直到set里没有s[i]为止
      while (set.has(s[i])) {
        set.delete(s[j]);
        j++;
      }
      set.add(s[i]);
    }
  }
  return maxLength;
}

// console.log(lengthOfLongestSubstring("abcabcbb"));

/**
 * 找出needle出现在haystack中的初始索引
 * const haystack = "hello", needle = "ll";   // 2
 */
function strStr(haystack, needle) {
  if (needle === "" || needle === haystack) {
    return 0;
  }
  if (haystack.length < needle.length) {
    return -1;
  }
  for (let i = 0; i < haystack.length; i++) {
    if (haystack.substring(i, i + needle.length) === needle) {
      return i;
    }
  }
  return -1;
}
// console.log(strStr("hello", "lo"))

/**
 * 第54题：螺旋矩阵 Spiral Matrix
 * 示例1：
 * [
 *  [1, 2, 3],
 *  [4, 5, 6],
 *  [7, 8, 9]
 * ]
 * // 1输出： [1, 2, 3, 4, 5, 6,7, 8, 9]
 */

function spiralOrder(matrix) {
  // 如果数组为空，返回空数组
  if (matrix.length === 0) {
    return [];
  }
  // 定义4个边界以及当前方向
  let top = 0,
    bottom = matrix.length - 1,
    left = 0,
    right = matrix[0].length - 1,
    direction = "right",
    result = [];
  // 当左边界小于等于右边界，且上边界小于等于下边界时，执行while循环：按照右下左上的顺序，依次将路径上的字符添加到结果里
  while (left <= right && top <= bottom) {
    if (direction === "right") {
      for (let i = left; i <= right; i++) {
        result.push(matrix[top][i]);
      }
      top++;
      direction = "down";
    } else if (direction === "down") {
      for (let i = top; i <= bottom; i++) {
        result.push(matrix[i][right]);
      }
      right--;
      direction = "left";
    } else if (direction === "left") {
      for (let i = right; i >= left; i--) {
        result.push(matrix[bottom][i]);
      }
      bottom--;
      direction = "top";
    } else if (direction === "top") {
      for (let i = bottom; i >= top; i--) {
        result.push(matrix[i][left]);
      }
      left++;
      direction = "right";
    }
  }
  // 返回结果
  return result;
}
console.log(spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ])
); // [1, 2, 3, 6, 9,8, 7, 4, 5]

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

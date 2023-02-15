# 2032. Two Out of Three

# Given three integer arrays nums1, nums2, and nums3, return a distinct array containing all the values that are present in at least two out of the three arrays. 
# You may return the values in any order.

class Solution:
  def twoOutOfThree(self, nums1: List[int], nums2: List[int], nums3: List[int]) -> List[int]:
    nums1 = set(nums1)
    nums2 = set(nums2)
    nums3 = set(nums3)
    res = set()
    for n in nums1:
      if n in nums2 or n in nums3: res.add(n)
    for n in nums2:
      if n in nums1 or n in nums3: res.add(n)
    for n in nums3:
      if n in nums1 or n in nums2: res.add(n)
    return res
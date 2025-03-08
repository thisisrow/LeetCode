nums=[1,3,6];
target=5;
var searchInsert = function(nums, target) {
    for(i=0;i<nums.length;i++){
        if(nums[i]==target){
            return i;
        }else if(nums[i]>target){
            return i;
        }
}};

console.log(searchInsert(nums, target)); 
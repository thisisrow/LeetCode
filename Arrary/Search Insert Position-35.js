nums=[1,3,5,6];
target=7;
var searchInsert = function(nums, target) {

    for(i=0;i<nums.length;i++){
        if(nums[i]==target){
            return i;
        }else if(nums[i]>target){
            return i;
        }
       return nums.length;
}};

console.log(searchInsert(nums, target)); 
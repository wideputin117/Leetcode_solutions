 
    // FILEPATH: two_sum.cpp

    #include <iostream>
    #include <unordered_map>
    #include <vector>

    std::vector<int> two_sum(std::vector<int>& nums, int target) {
        std::unordered_map<int, int> num_dict;
        for (int i = 0; i < nums.size(); i++) {
            int complement = target - nums[i];
            if (num_dict.find(complement) != num_dict.end()) {
                return {num_dict[complement], i};
            }   
            num_dict[nums[i]] = i;
        }
        return {};
    }

    int main() {
        std::vector<int> nums = {2, 11, 15,7};
        int target = 9;
        std::vector<int> result = two_sum(nums, target);
        std::cout << "[" << result[0] << ", " << result[1] << "]" << std::endl;
        return 0;
    }

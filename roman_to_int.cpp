#include<iostream>
#include<unordered_map>
using namespace std;
int convertInt(string s){
    unordered_map<char, int> romanValues{
        {'I', 1}, {'V', 5}, {'X', 10}, {'L', 50},
        {'C', 100}, {'D', 500}, {'M', 1000}
    };
    // have to declare varialbe to store the value
    int result = 0;
    int prevValue = 0;

    for(int i = s.size() - 1; i >= 0; i--){
        int currentValue = romanValues[s[i]];
        if(currentValue < prevValue){
            result -= currentValue;
        }else{
            result += currentValue;
        }
        prevValue = currentValue;;
    }
    return result;
}
int main(){
    string roman = "MCMXCIV";
    int num = convertInt(roman);
    cout << "Integer value for" << roman << " is " << num;
    return 0;
}
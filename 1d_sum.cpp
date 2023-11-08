// 1d arr sum in c++
#include<iostream>
using namespace std;

int main(void){
    int n;
    cout << "Enter the number of elements in the array" << endl;
    cin >> n;
    int arr[n];
    int newArr[n];
    cin >> arr[0];
    newArr[0] = arr[0];
    for(int i = 1; i < n; i++){
        cin >> arr[i];
        newArr[i] = arr[i] + newArr[i-1];
    }
    for(int i = 0; i < n; i++){
        cout << newArr[i] << endl;
    }
    return 0;
}
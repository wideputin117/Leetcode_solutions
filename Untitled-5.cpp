// lets find sum of arr
#include<iostream>
using namespace std;

int sumArr(int arr[], int n){
    int sum = 0;
    for(int i = 0; i < n; i++){
        sum += arr[i];
    }
    return sum;
}

int main(void){
    int n;
    cout << "Enter the number of elements: ";
    cin >> n;
    int arr[n];
    for(int i = 0; i < n; i++){
        cout << "Enter element " << i+1 << ": ";
        cin >> arr[i];
    }
    int ans = sumArr(arr, n);
    cout << "The sum of the array is: " << ans << endl;
    return 0;
}

// to add one elem in one another 

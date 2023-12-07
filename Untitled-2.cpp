// to find the sorted arr
#include<iostream>
 using namespace std;

int maxElem(int arr[], int n){
    int max = arr[0];
    for(int i = 1; i < n; i++){
       
        if(max< arr[i]){
            max = arr[i];
        }
        
   }
   return max;
}
 int main(void){
    int n;
    cin >> n;
    int arr[n];
   for(int i = 0; i<n; i++){
        cin >> arr[i];
    }

    int ans =  maxElem(arr,n);
   cout <<"the max element is " << ans << endl;
    return 0;
 }
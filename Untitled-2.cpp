// guess the no
#include<iostream>
using namespace std;

int main(void){

    int pick, guess;
    cin >> pick ;
    cin >> guess;
   if(pick < guess){
    cout << "-1";
    return -1;
   } else if(pick > guess){
    cout << "1";
    return 1;
   }
   else{
    cout << "0";
    return 0;
   }
}
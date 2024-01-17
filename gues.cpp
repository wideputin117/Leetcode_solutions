#include <iostream>
using namespace std;

int getNo(int val, int guessval) {
    if (val < guessval) {
        return -1;
    } else if (val > guessval) {
        return 1;
    } else {
        return 0;
    }
}

void guessNumber(int answer) {
    switch (answer) {
        case -1:
            cout << "The picked number is less than the guessed number." << endl;
            break;
        case 1:
            cout << "The picked number is greater than the guessed number." << endl;
            break;
        case 0:
            cout << "Congratulations! You guessed the correct number." << endl;
            break;
        default:
            cout << "Invalid input or comparison." << endl;
            break;
    }
}

int main() {
    int n;
    int guessno;
    cin >> n;
    cin >> guessno;

    int answer = getNo(n, guessno);
    guessNumber(answer);
    return 0;
}

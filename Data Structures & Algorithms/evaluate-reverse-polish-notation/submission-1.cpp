class Solution {
public:
    int evalRPN(vector<string>& tokens) {
        stack<int> numbers;

        for(const string& token : tokens) {
            if(token == "+") {
                int a = numbers.top(); numbers.pop();
                int b = numbers.top(); numbers.pop();
                numbers.push(a + b);
            } else if(token == "-") {
                int a = numbers.top(); numbers.pop();
                int b = numbers.top(); numbers.pop();
                numbers.push(b - a);
            } else if(token == "*") {
                int a = numbers.top(); numbers.pop();
                int b = numbers.top(); numbers.pop();
                numbers.push(a * b);
            } else if(token == "/") {
                int a = numbers.top(); numbers.pop();
                int b = numbers.top(); numbers.pop();
                numbers.push(b / a);
            } else {
                numbers.push(stoi(token));
            }
        }

        return numbers.top();
    }
};

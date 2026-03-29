class ListNode {
    public:
        int val;
        ListNode* next;
    
        // Constructor that sets 'next' to nullptr by default
        ListNode(int val) : val(val), next(nullptr) {}
    
        // Constructor that accepts both value and next node
        ListNode(int val, ListNode* next) : val(val), next(next) {}
};

class LinkedList {
public:
    ListNode* head;
    ListNode* tail;

    LinkedList() {
        head = new ListNode(-1);
        tail = head;
    }

    int get(int index) {
        int i = 0;
        ListNode* current = head->next;

        while(current != nullptr) {
            if (i == index) {
                return current->val;
            }
            i++;
            current = current->next;
        } 

        return -1;
    }

    void insertHead(int val) {
        ListNode* newNode = new ListNode(val);
        newNode->next = head->next;
        head->next = newNode;
        if (newNode->next == nullptr) {  // If list was empty before insertion
            tail = newNode;
        }
    }
    
    void insertTail(int val) {
        tail->next = new ListNode(val);
        tail = tail->next;
    }

    bool remove(int index) {
        int i = 0;
        ListNode* curr = head;
        while (i < index && curr != nullptr) {
            i++;
            curr = curr->next;
        }

        // Remove the node ahead of curr
        if (curr != nullptr && curr->next != nullptr) {
            if (curr->next == tail) {
                tail = curr;
            }
            ListNode* toDelete = curr->next;
            curr->next = curr->next->next;
            delete toDelete;
            return true;
        }
        return false;
    }

    vector<int> getValues() {
        vector<int> values;
        ListNode* current = head->next;
        while(current != nullptr) {
            values.push_back(current->val);
            current = current->next;
        }
        
        return values;
    }
};

// class DynamicArray {
// private:
//     int* arr;
//     int length;
//     int capacity;
// public:
//     DynamicArray(int capacity) : capacity(capacity), length(0) {
//         arr = new int[capacity];
//     }

//     int get(int i) {
//         return arr[i];
//     }

//     void set(int i, int n) {
//         arr[i] = n;
//     }

//     void pushback(int n) {
//         if (length == capacity) {
//             resize();
//         }
//         arr[length] = n;
//         length++;
//     }

//     int popback() {
//         if (length > 0) {
//             // soft delete the last element
//             length--;
//         }
//         return arr[length];
//     }

//     void resize() {
//         capacity *= 2;
//         int* newArr = new int[capacity];
//         for (int i = 0; i < length; i++) {
//             newArr[i] = arr[i];
//         }
//         delete[] arr;
//         arr = newArr;
//     }

//     int getSize() {
//         return length;
//     }

//     int getCapacity() {
//         return capacity;
//     }
// };


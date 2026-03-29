class Node {
public:
    int value;
    Node* next;
    Node* prev;

    Node(int value) : value(value), next(nullptr), prev(nullptr) {}
};

class Deque {
private:
    Node* dummyHead;
    Node* dummyTail;
public:
    Deque() {
        dummyHead = new Node(0);
        dummyTail = new Node(0);

        dummyHead->next = dummyTail;
        dummyTail->prev = dummyHead;
    }

    bool isEmpty() {
        return dummyHead->next == dummyTail;
    }

    void append(int value) {
        Node* newNode = new Node(value);
        Node* prevNode = dummyTail->prev;

        newNode->next = dummyTail;
        newNode->prev = prevNode;

        prevNode->next = newNode;
        dummyTail->prev = newNode;
    }

    void appendleft(int value) {
        Node* newNode = new Node(value);
        Node* nextNode = dummyHead->next;

        newNode->next = nextNode;
        newNode->prev = dummyHead;

        dummyHead->next = newNode;
        nextNode->prev = newNode;
    }

    int pop() {
        if(isEmpty()) {
            return -1;
        }
        Node* prevNode = dummyTail->prev;
        int val = prevNode->value;
        
        dummyTail->prev = prevNode->prev;
        prevNode->prev->next = dummyTail;
        delete prevNode;

        return val;
    }

    int popleft() {
        if(isEmpty()) {
            return -1;
        }
        Node* nextNode = dummyHead->next;
        int val = nextNode->value;

        dummyHead->next = nextNode->next;
        nextNode->next->prev = dummyHead;
        delete nextNode;

        return val;
    }
};

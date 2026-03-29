class MinHeap {
private:
    vector<int> heap;

    void perculate_down(int i) {
        int child = 2 * i;
        while(child < heap.size()) {
            if(child + 1 < heap.size() && heap[child] > heap[child + 1]) {
                child++;
            }

            if(heap[child] >= heap[i]) {
                break;
            }

            int tmp = heap[i];
            heap[i] = heap[child];
            heap[child] = tmp;
            i = child;
            child = 2 * i;
        }
    }
public:
    MinHeap() {
        heap.push_back(0);
    }

    void push(int val) {
        heap.push_back(val);
        int i = heap.size() - 1;
        while(i > 1 && heap[i] < heap[i / 2]) {
            int tmp = heap[i / 2];
            heap[i / 2] = heap[i];
            heap[i] = tmp;
            i = i / 2;
        }
    }

    int pop() {
        if(heap.size() <= 1) {
            return -1;
        }
        if(heap.size() == 2) {
            int root = heap.back();
            heap.pop_back();
            return root;
        }

        int root = heap[1];
        heap[1] = heap.back();
        heap.pop_back();
        perculate_down(1);

        return root;
    }

    int top() {
        return (heap.size() > 1) ? heap[1] : -1;
    }

    void heapify(const vector<int>& arr) {
        heap.clear();
        heap.push_back(0);
        
        heap.insert(heap.end(), arr.begin(), arr.end());

        for(int i = (heap.size() - 1) / 2; i > 0; i--) {
            perculate_down(i);
        }
    }
};

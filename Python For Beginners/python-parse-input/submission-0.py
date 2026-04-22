from typing import List

def read_integers() -> List[int]:
    inputs = input()
    strings = inputs.split(',')
    my_list = []

    for string in strings:
        my_list.append(int(string))

    return my_list

# do not modify the code below
print(read_integers())
print(read_integers())
print(read_integers())

from typing import Dict, List

def get_dict_values(age_dict: Dict[str, int]) -> List[int]:
    my_list = []

    for value in age_dict.values():
        my_list.append(value)

    return my_list

# do not modify below this line
print(get_dict_values({"Alice": 25, "Bob": 30, "Charlie": 35}))
print(get_dict_values({"Alice": 25, "Bob": 30, "Charlie": 35, "David": 40}))

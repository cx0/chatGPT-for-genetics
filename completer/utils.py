from typing import Dict, List, Union, Any

# This function is used to extract values from a (deep) nested JSON object
# Credit: https://gist.github.com/toddbirchard/b6f86f03f6cf4fc9492ad4349ee7ff8b?permalink_comment_id=4178846#gistcomment-4178846
def extract_values(
    object_to_search: Union[Dict[Any, Any], List[Any]], search_key: str
) -> List:
    """Recursively pull values of specified key from nested JSON."""
    results_array: List = []

    def extract(
        object_to_search: Union[Dict[Any, Any], List[Any]],
        results_array: List[Any],
        search_key: str,
    ) -> List:
        """Return all matching values in an object."""
        if isinstance(object_to_search, dict):
            for key, val in object_to_search.items():
                if isinstance(val, (dict, list)):
                    if key == search_key:
                        results_array.append(val)
                    extract(val, results_array, search_key)
                elif key == search_key:
                    results_array.append(val)
        elif isinstance(object_to_search, list):
            for item in object_to_search:
                extract(item, results_array, search_key)
        return results_array

    results = extract(object_to_search, results_array, search_key)
    to_return = []
    for result in results:
        if type(result) == list:
            for item in result:
                to_return.append(item)
        else:
            to_return.append(result)
    return to_return

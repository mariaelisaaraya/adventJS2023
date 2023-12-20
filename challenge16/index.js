function transformTree(tree) {
    function arrayToTree(arr, i = 0) {
        if (i >= arr.length || arr[i] === null) return null;
        return {
        value: arr[i],
        left: arrayToTree(arr, 2 * i + 1),
        right: arrayToTree(arr, 2 * i + 2)
        };
    }
        
    const root = arrayToTree(tree);

    return root;
}
  
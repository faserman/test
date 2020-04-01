function sort(arr, direction) {
    var n = arr.length;
    for (var i = 0; i < n - 1; i++) {
        var min = i;
        for (var j = i + 1; j < n; j++) {
            if (direction === 0) {
                if (arr[j] < arr[min])
                    min = j;
            } else {
                if (arr[j] > arr[min])
                    min = j;
            }
        };
        var t = arr[min]; arr[min] = arr[i]; arr[i] = t;
    };
    return arr;
};

sort([1,7,4,9,2], 0);
function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
        let minIdx = i;
        for (let j = i + 1; j < n; j++) {
            if (arr[j] < arr[minIdx]) {
                minIdx = j;
            }
        }
        let temp = arr[i];
        arr[i] = arr[minIdx];
        arr[minIdx] = temp;
    }
    return arr;
}

function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
        let key = arr[i];
        let j = i - 1;
        while (j >= 0 && arr[j] > key) {
            arr[j + 1] = arr[j];
            j = j - 1;
        }
        arr[j + 1] = key;
    }
    return arr;
}

function numberFactorMemo(n, memo = {}) {
    if (n === 0 || n === 1 || n === 2) return 1;
    if (n === 3) return 2;
    if (n in memo) return memo[n];
    memo[n] = numberFactorMemo(n - 1, memo) + numberFactorMemo(n - 3, memo) + numberFactorMemo(n - 4, memo);
    return memo[n];
function getSumUnique(arr) {
    let sum = 0;
    let counts = {};
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        counts[num] = (counts[num] || 0) + 1;
    }
    for (let key in counts) {
        if (counts[key] === 1) {
            sum += Number(key);
        }
    }
    return sum;
}

function getFirstNonRepeating(arr) {
    let counts = {};
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        counts[num] = (counts[num] || 0) + 1;
    }
    for (let i = 0; i < arr.length; i++) {
        if (counts[arr[i]] === 1) {
            return arr[i];
        }
    }
    return null;
}

function getCountOccurrences(arr) {
    let counts = {};
    for (let i = 0; i < arr.length; i++) {
        let num = arr[i];
        counts[num] = (counts[num] || 0) + 1;
    }
    return counts;
}
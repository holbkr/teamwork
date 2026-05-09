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
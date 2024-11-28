export class HashMap {
    constructor(capacity = 10, loadFactor = 0.75) {
        this.capacity = capacity;
        this.loadFactor = loadFactor;
        this.buckets = new Array(this.capacity).fill(null).map(() => []);
    }

    hash(key) {
        let hashCode = 0;
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = primeNumber * hashCode + key.charCodeAt(i);
            hashCode = hashCode % this.capacity;
        }

        console.log(key, ", ", hashCode);
        return hashCode;
    }

    set(key, value) {
        if (key === null || key === "") return;

        let hashCode = this.hash(key);
        let bucket = this.buckets[hashCode];

        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket[i][1] = value; // Update value if key exists
                return;
            }
        }
        // If key doesn't exist, add new entry
        bucket.push([key, value]);
        //check and implement bucket growth.
    }

    get(key) {
        // takes one argument as a key and returns the value that is assigned to this key. If a key is not found, return null.
        const hashCode = this.hash(key);
        const bucket = this.buckets[hashCode];
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                return bucket[i][1];
            }
        }
        return null;
    }

    has(key) {
        // takes a key as an argument and returns true or false based on whether or not the key is in the hash map.
        const hashCode = this.hash(key);
        const bucket = this.buckets[hashCode];
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                return true;
            }
        }
        return false;
    }

    remove(key) {
        // If the given key is in the hash map, it should remove the entry with that key and return true.
        // If the key isn’t in the hash map, it should return false.
        if (key === null || key === "") return false;

        const hashCode = this.hash(key);
        const bucket = this.buckets[hashCode];
        for (let i = 0; i < bucket.length; i++) {
            if (bucket[i][0] === key) {
                bucket.splice(i, 1);
                return true;
            }
        }
        return false;
    }

    length() {
        // returns the number of stored keys in the hash map.
        let count = 0;
        this.buckets.forEach((bucket) => {
            bucket.forEach((pair) => {
                if (pair[0] != null) count++;
            });
        });
        return count;
    }
    clear() {
        // removes all entries in the hash map.
        this.buckets = new Array(this.capacity).fill(null).map(() => []);
    }

    keys() {
        // returns an array containing all the keys inside the hash map.
        let keysArr = [];
        this.buckets.forEach((bucket) => {
            bucket.forEach((pair) => {
                if (pair[0] != null) keysArr.push(pair[0]);
            });
        });
        return keysArr;
    }
    values() {
        // returns an array containing all the values
        let valuesArr = [];
        this.buckets.forEach((bucket) => {
            bucket.forEach((pair) => {
                if (pair[0] != null) valuesArr.push(pair[1]);
            });
        });
        return valuesArr;
    }

    entries() {
        // returns an array that contains each key, value pair. Example: [[firstKey, firstValue], [secondKey, secondValue]]
        let entries = [];
        this.buckets.forEach((bucket) => {
            bucket.forEach((pair) => {
                if (pair[0] != null) entries.push(pair);
            });
        });
        return entries;
    }
}

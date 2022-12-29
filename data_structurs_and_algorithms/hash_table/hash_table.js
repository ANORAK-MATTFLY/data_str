function HashTable(size) {
    this.size = size;
    this.keys = this.initArray(size);
    this.values = this.initArray(size);
    this.limit = 0;
    HashTable.prototype.put = function (key, value) {
        if (this.limit > this.size) {
            throw "Hash table is full";
        }
        let hashedIndex = this.hash(key);

        while (this.keys[hashedIndex] != null) {
            hashedIndex++;
            hashedIndex = hashedIndex % this.size;
        }
        this.keys[hashedIndex] = key;
        this.values[hashedIndex] = value;
        this.limit++;
    }

    HashTable.prototype.get = function (key) {
        let hashedIndex = this.hash(key);

        while (this.keys[hashedIndex] != key) {
            hashedIndex++;
            hashedIndex = hashedIndex % this.size;
        }
        return this.values[hashedIndex];
    }

    HashTable.prototype.hash = function (key) {
        // Check if int
        if (!(Number.isInteger(key))) {
            throw "The key is expected to be of type Number";
        }
        return (key % this.size);
    }

    HashTable.prototype.initArray = function (size) {
        let array = [];
        for (let i = 0; i < size; i++) {
            array.push(null);
        }
        return array;
    }
}

const hashTable = new HashTable(13);

hashTable.put(7, "hi");
hashTable.put(20, "hello");
hashTable.put(33, "sunny");
hashTable.put(46, "weather");
hashTable.put(59, "wow");
hashTable.put(72, "forty");
hashTable.put(85, "happy");
hashTable.put(98, "sad");

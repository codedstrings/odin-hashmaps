# HashMap Implementation in JavaScript

## Overview
This is a custom HashMap implementation in JavaScript, providing efficient key-value storage with collision handling and dynamic resizing. 
This project was done as part of The odin project
https://www.theodinproject.com/lessons/javascript-hashmap

## Features
- Implements standard HashMap methods
- Collision resolution using chaining
- Dynamic bucket resizing based on load factor

## Methods
- `set(key, value)`: Add or update a key-value pair
- `get(key)`: Retrieve value for a given key
- `has(key)`: Check if a key exists
- `remove(key)`: Remove a key-value pair
- `length()`: Get number of entries
- `clear()`: Remove all entries
- `keys()`: Get all keys
- `values()`: Get all values
- `entries()`: Get all key-value pairs

## Installation and Usage
Clone the repository and import the HashMap class into your project.

```javascript
const map = new HashMap(16, 0.75);
map.set('apple', 'red');
map.get('apple'); // returns 'red'
map.has('apple'); // returns true
```

## Performance
- O(1) average case for most operations
- Handles collisions with chaining
- Automatic resizing when load factor exceeded

## Contributing
Contributions welcome! Please submit pull requests or open issues.

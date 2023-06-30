# easyUuid

easyUuid is a simple JavaScript library that provides a way to generate unique identifiers (UUIDs) easily. It allows you to generate random UUIDs that are guaranteed to be unique across different instances.

## Installation

You can install easyUuid using npm: "TODO add method"

## Usage

In your JavaScript file, import the `easyUuid` library:

```javascript
import EasyUuid from './easyUuid.js';

or directly into template
<script type="module" src="./easyUuid.js"></script>

// Generate a unique ID
const id = EasyUuid.generate();
console.log(id); // Outputs a unique UUID like "1890e0dfb11-31105784-8-31105784"

// I created this because i needed a really unique id for mixed content templates, because by copying content and appending it to existing one you would have duplicated id-s

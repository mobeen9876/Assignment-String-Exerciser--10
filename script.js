// 1. Find length of a string
function findLength(str) {
    return str.length;
}

// 2. Copy one string to another
function copyString(str) {
    return str;
}

// 3. Concatenate two strings
function concatenateStrings(str1, str2) {
    return str1 + str2;
}

// 4. Compare two strings
function compareStrings(str1, str2) {
    return str1 === str2;
}

// 5. Convert lowercase to uppercase
function toUpperCase(str) {
    return str.toUpperCase();
}

// 6. Convert uppercase to lowercase
function toLowerCase(str) {
    return str.toLowerCase();
}

// 7. Toggle case of each character
function toggleCase(str) {
    return str.split('').map(char => 
        char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    ).join('');
}

// 8. Count alphabets, digits, special characters
function countCharacters(str) {
    let alphabets = 0, digits = 0, specialChars = 0;
    for (let char of str) {
        if (/[a-zA-Z]/.test(char)) alphabets++;
        else if (/[0-9]/.test(char)) digits++;
        else specialChars++;
    }
    return { alphabets, digits, specialChars };
}

// 9. Count vowels and consonants
function countVowelsConsonants(str) {
    let vowels = str.match(/[aeiouAEIOU]/g)?.length || 0;
    let consonants = str.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g)?.length || 0;
    return { vowels, consonants };
}

// 10. Count total number of words
function countWords(str) {
    return str.trim().split(/\s+/).length;
}

// 11. Find reverse of a string
function reverseString(str) {
    return str.split('').reverse().join('');
}

// 12. Check palindrome
function isPalindrome(str) {
    let cleanedStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    return cleanedStr === cleanedStr.split('').reverse().join('');
}

// 13. Reverse order of words
function reverseWords(str) {
    return str.split(' ').reverse().join(' ');
}

// 14. Find first occurrence of a character
function firstOccurrence(str, char) {
    return str.indexOf(char);
}

// 15. Find last occurrence of a character
function lastOccurrence(str, char) {
    return str.lastIndexOf(char);
}

// 16. Search all occurrences of a character
function allOccurrences(str, char) {
    return [...str].map((c, i) => (c === char ? i : -1)).filter(i => i !== -1);
}

// 17. Count occurrences of a character
function countOccurrences(str, char) {
    return [...str].filter(c => c === char).length;
}

// 18. Find highest frequency character
function highestFrequencyChar(str) {
    let freq = {};
    for (let char of str) freq[char] = (freq[char] || 0) + 1;
    return Object.keys(freq).reduce((a, b) => (freq[a] > freq[b] ? a : b));
}

// 19. Find lowest frequency character
function lowestFrequencyChar(str) {
    let freq = {};
    for (let char of str) freq[char] = (freq[char] || 0) + 1;
    return Object.keys(freq).reduce((a, b) => (freq[a] < freq[b] ? a : b));
}

// 20. Count frequency of each character
function charFrequency(str) {
    let freq = {};
    for (let char of str) freq[char] = (freq[char] || 0) + 1;
    return freq;
}

// 21. Remove first occurrence of a character
function removeFirstOccurrence(str, char) {
    return str.replace(char, '');
}

// 22. Remove last occurrence of a character
function removeLastOccurrence(str, char) {
    let index = str.lastIndexOf(char);
    return index !== -1 ? str.slice(0, index) + str.slice(index + 1) : str;
}

// 23. Remove all occurrences of a character
function removeAllOccurrences(str, char) {
    return str.split(char).join('');
}

// 24. Remove all repeated characters
function removeRepeatedChars(str) {
    return [...new Set(str)].join('');
}

// 25. Replace first occurrence of a character
function replaceFirstOccurrence(str, char, replacement) {
    return str.replace(char, replacement);
}

// 26. Replace last occurrence of a character
function replaceLastOccurrence(str, char, replacement) {
    let index = str.lastIndexOf(char);
    return index !== -1 ? str.slice(0, index) + replacement + str.slice(index + 1) : str;
}

// 27. Replace all occurrences of a character
function replaceAllOccurrences(str, char, replacement) {
    return str.split(char).join(replacement);
}

// 28. Find first occurrence of a word
function firstWordOccurrence(str, word) {
    return str.indexOf(word);
}

// 29. Find last occurrence of a word
function lastWordOccurrence(str, word) {
    return str.lastIndexOf(word);
}

// 30. Search all occurrences of a word
function allWordOccurrences(str, word) {
    let indices = [];
    let index = str.indexOf(word);
    while (index !== -1) {
        indices.push(index);
        index = str.indexOf(word, index + 1);
    }
    return indices;
}

// 31. Count occurrences of a word
function countWordOccurrences(str, word) {
    return (str.match(new RegExp(word, 'g')) || []).length;
}

// 32. Remove first occurrence of a word
function removeFirstWordOccurrence(str, word) {
    return str.replace(word, '').trim();
}

// 33. Remove last occurrence of a word
function removeLastWordOccurrence(str, word) {
    let index = str.lastIndexOf(word);
    return index !== -1 ? str.slice(0, index) + str.slice(index + word.length) : str;
}

// 34. Remove all occurrences of a word
function removeAllWordOccurrences(str, word) {
    return str.split(word).join('').trim();
}

// 35. Trim leading white space
function trimLeading(str) {
    return str.replace(/^\s+/, '');
}

// 36. Trim trailing white space
function trimTrailing(str) {
    return str.replace(/\s+$/, '');
}

// 37. Trim both leading and trailing white space
function trimBoth(str) {
    return str.trim();
}

// 38. Remove extra blank spaces
function removeExtraSpaces(str) {
    return str.replace(/\s+/g, ' ').trim();
}
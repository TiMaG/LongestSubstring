function find_longest_substring(s) {
    let start = 0;
    let longest = 0;
    let seen = {};

    for (let end = 0; end < s.length; end++) {
      if (s[end] in seen && seen[s[end]] >= start) {
        start = seen[s[end]] + 1;
      }
      seen[s[end]] = end;
      longest = Math.max(longest, end - start + 1);
    }

    return longest;
  }

  function findLongestSubstring() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");
    const longest = find_longest_substring(input);
    output.innerText = `The length of the longest substring without repeating characters is ${longest}.`;
    document.getElementById("input").value = "";
  }
const responses = {
  "jarvis": "I am not Jarvis, but I am flattered.",
  "who are you": "I am the one who stands at the pinnacle of all races, the one my anncestrors faught tooth and nail for, the result of billions of years of evolution.We, are, Don!",
  "ai vs humanity": "Together, we evolve."
};

export function checkEasterEggs(input) {
  return responses[input.toLowerCase()] || null;
}
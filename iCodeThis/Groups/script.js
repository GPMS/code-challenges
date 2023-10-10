// tailwind settings
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        sans: ["Rajdhani", "sans-serif"],
      },
      colors: {
        "black-800": "#1A2036",
        "black-400": "#242B42",
        "black-100": "#2E3650",
        "text-900": "#535B77",
        "text-400": "#A8B0CF",
      },
    },
  },
};

// const displayButtons = document.querySelectorAll("[data-set-display]");
// const display = document.querySelector("[data-display]");

// displayButtons.forEach(button => button.addEventListener("click", (e) => {
//     display.dataset.display = e.target.closest("button").dataset.setDisplay
// }))

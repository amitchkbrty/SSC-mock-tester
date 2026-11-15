// Original SSC syllabus practice material. Year/shift labels are practice groupings, not past-paper provenance.
const ADDITIONAL_QUESTIONS = [
  {
    "id": "expanded-1",
    "subject": "Quant",
    "q": "A shop buys an article for ₹300 and sells it for ₹360. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2017",
    "shift": 1,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-2",
    "subject": "Quant",
    "q": "The mean of 30, 33, 36, 39 and 42 is?",
    "opts": [
      "36",
      "33",
      "39",
      "42"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 36.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2018",
    "shift": 2,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-3",
    "subject": "Reasoning",
    "q": "Complete the series: 14, 18, 22, 26, ?",
    "opts": [
      "30",
      "28",
      "32",
      "34"
    ],
    "ans": 0,
    "exp": "Add 4 to each term.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2019",
    "shift": 3,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-4",
    "subject": "Reasoning",
    "q": "If P is ranked 3 from the top and 9 from the bottom, how many people are in the row?",
    "opts": [
      "11",
      "12",
      "10",
      "13"
    ],
    "ans": 0,
    "exp": "Total = rank from top + rank from bottom − 1.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2020",
    "shift": 1,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-5",
    "subject": "Quant",
    "q": "A shop buys an article for ₹370 and sells it for ₹444. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2021",
    "shift": 2,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-6",
    "subject": "Quant",
    "q": "The mean of 37, 40, 43, 46 and 49 is?",
    "opts": [
      "43",
      "40",
      "46",
      "49"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 43.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2022",
    "shift": 3,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-7",
    "subject": "Reasoning",
    "q": "Complete the series: 17, 21, 25, 29, ?",
    "opts": [
      "33",
      "31",
      "35",
      "37"
    ],
    "ans": 0,
    "exp": "Add 4 to each term.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2023",
    "shift": 1,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-8",
    "subject": "Reasoning",
    "q": "If P is ranked 4 from the top and 10 from the bottom, how many people are in the row?",
    "opts": [
      "13",
      "14",
      "12",
      "15"
    ],
    "ans": 0,
    "exp": "Total = rank from top + rank from bottom − 1.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2024",
    "shift": 2,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-9",
    "subject": "Quant",
    "q": "A shop buys an article for ₹440 and sells it for ₹528. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2025",
    "shift": 3,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-10",
    "subject": "Quant",
    "q": "The mean of 44, 47, 50, 53 and 56 is?",
    "opts": [
      "50",
      "47",
      "53",
      "56"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 50.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2026",
    "shift": 1,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-11",
    "subject": "Reasoning",
    "q": "Complete the series: 20, 24, 28, 32, ?",
    "opts": [
      "36",
      "34",
      "38",
      "40"
    ],
    "ans": 0,
    "exp": "Add 4 to each term.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2017",
    "shift": 2,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-12",
    "subject": "Reasoning",
    "q": "If P is ranked 5 from the top and 11 from the bottom, how many people are in the row?",
    "opts": [
      "15",
      "16",
      "14",
      "17"
    ],
    "ans": 0,
    "exp": "Total = rank from top + rank from bottom − 1.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2018",
    "shift": 3,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-13",
    "subject": "Quant",
    "q": "A shop buys an article for ₹510 and sells it for ₹612. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2019",
    "shift": 1,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-14",
    "subject": "Quant",
    "q": "The mean of 51, 54, 57, 60 and 63 is?",
    "opts": [
      "57",
      "54",
      "60",
      "63"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 57.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2020",
    "shift": 2,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-15",
    "subject": "Reasoning",
    "q": "Complete the series: 23, 27, 31, 35, ?",
    "opts": [
      "39",
      "37",
      "41",
      "43"
    ],
    "ans": 0,
    "exp": "Add 4 to each term.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2021",
    "shift": 3,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-16",
    "subject": "Reasoning",
    "q": "If P is ranked 6 from the top and 12 from the bottom, how many people are in the row?",
    "opts": [
      "17",
      "18",
      "16",
      "19"
    ],
    "ans": 0,
    "exp": "Total = rank from top + rank from bottom − 1.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2022",
    "shift": 1,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-17",
    "subject": "Quant",
    "q": "A shop buys an article for ₹580 and sells it for ₹696. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2023",
    "shift": 2,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-18",
    "subject": "Quant",
    "q": "The mean of 58, 61, 64, 67 and 70 is?",
    "opts": [
      "64",
      "61",
      "67",
      "70"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 64.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2024",
    "shift": 3,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-19",
    "subject": "Reasoning",
    "q": "Complete the series: 26, 30, 34, 38, ?",
    "opts": [
      "42",
      "40",
      "44",
      "46"
    ],
    "ans": 0,
    "exp": "Add 4 to each term.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2025",
    "shift": 1,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-20",
    "subject": "Reasoning",
    "q": "If P is ranked 7 from the top and 13 from the bottom, how many people are in the row?",
    "opts": [
      "19",
      "20",
      "18",
      "21"
    ],
    "ans": 0,
    "exp": "Total = rank from top + rank from bottom − 1.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2026",
    "shift": 2,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-21",
    "subject": "Quant",
    "q": "A shop buys an article for ₹650 and sells it for ₹780. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2017",
    "shift": 3,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-22",
    "subject": "Quant",
    "q": "The mean of 65, 68, 71, 74 and 77 is?",
    "opts": [
      "71",
      "68",
      "74",
      "77"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 71.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2018",
    "shift": 1,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-23",
    "subject": "Reasoning",
    "q": "Complete the series: 29, 33, 37, 41, ?",
    "opts": [
      "45",
      "43",
      "47",
      "49"
    ],
    "ans": 0,
    "exp": "Add 4 to each term.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2019",
    "shift": 2,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-24",
    "subject": "Reasoning",
    "q": "If P is ranked 8 from the top and 14 from the bottom, how many people are in the row?",
    "opts": [
      "21",
      "22",
      "20",
      "23"
    ],
    "ans": 0,
    "exp": "Total = rank from top + rank from bottom − 1.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2020",
    "shift": 3,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-25",
    "subject": "Quant",
    "q": "A shop buys an article for ₹720 and sells it for ₹864. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2021",
    "shift": 1,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-26",
    "subject": "Quant",
    "q": "The mean of 72, 75, 78, 81 and 84 is?",
    "opts": [
      "78",
      "75",
      "81",
      "84"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 78.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2022",
    "shift": 2,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-27",
    "subject": "Reasoning",
    "q": "Complete the series: 32, 36, 40, 44, ?",
    "opts": [
      "48",
      "46",
      "50",
      "52"
    ],
    "ans": 0,
    "exp": "Add 4 to each term.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2023",
    "shift": 3,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-28",
    "subject": "Reasoning",
    "q": "If P is ranked 9 from the top and 15 from the bottom, how many people are in the row?",
    "opts": [
      "23",
      "24",
      "22",
      "25"
    ],
    "ans": 0,
    "exp": "Total = rank from top + rank from bottom − 1.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2024",
    "shift": 1,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-29",
    "subject": "Quant",
    "q": "A shop buys an article for ₹790 and sells it for ₹948. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2025",
    "shift": 2,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-30",
    "subject": "Quant",
    "q": "The mean of 79, 82, 85, 88 and 91 is?",
    "opts": [
      "85",
      "82",
      "88",
      "91"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 85.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2026",
    "shift": 3,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-31",
    "subject": "Reasoning",
    "q": "Complete the series: 35, 39, 43, 47, ?",
    "opts": [
      "51",
      "49",
      "53",
      "55"
    ],
    "ans": 0,
    "exp": "Add 4 to each term.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2017",
    "shift": 1,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-32",
    "subject": "Reasoning",
    "q": "If P is ranked 10 from the top and 16 from the bottom, how many people are in the row?",
    "opts": [
      "25",
      "26",
      "24",
      "27"
    ],
    "ans": 0,
    "exp": "Total = rank from top + rank from bottom − 1.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2018",
    "shift": 2,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-33",
    "subject": "Quant",
    "q": "A shop buys an article for ₹860 and sells it for ₹1032. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2019",
    "shift": 3,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-34",
    "subject": "Quant",
    "q": "The mean of 86, 89, 92, 95 and 98 is?",
    "opts": [
      "92",
      "89",
      "95",
      "98"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 92.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2020",
    "shift": 1,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-35",
    "subject": "Reasoning",
    "q": "Complete the series: 38, 42, 46, 50, ?",
    "opts": [
      "54",
      "52",
      "56",
      "58"
    ],
    "ans": 0,
    "exp": "Add 4 to each term.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2021",
    "shift": 2,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-36",
    "subject": "Reasoning",
    "q": "If P is ranked 11 from the top and 17 from the bottom, how many people are in the row?",
    "opts": [
      "27",
      "28",
      "26",
      "29"
    ],
    "ans": 0,
    "exp": "Total = rank from top + rank from bottom − 1.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2022",
    "shift": 3,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-37",
    "subject": "Quant",
    "q": "A shop buys an article for ₹930 and sells it for ₹1116. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2023",
    "shift": 1,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-38",
    "subject": "Quant",
    "q": "The mean of 93, 96, 99, 102 and 105 is?",
    "opts": [
      "99",
      "96",
      "102",
      "105"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 99.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2024",
    "shift": 2,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-39",
    "subject": "Reasoning",
    "q": "Complete the series: 41, 45, 49, 53, ?",
    "opts": [
      "57",
      "55",
      "59",
      "61"
    ],
    "ans": 0,
    "exp": "Add 4 to each term.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2025",
    "shift": 3,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-40",
    "subject": "Reasoning",
    "q": "If P is ranked 12 from the top and 18 from the bottom, how many people are in the row?",
    "opts": [
      "29",
      "30",
      "28",
      "31"
    ],
    "ans": 0,
    "exp": "Total = rank from top + rank from bottom − 1.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2026",
    "shift": 1,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-41",
    "subject": "Quant",
    "q": "A shop buys an article for ₹1000 and sells it for ₹1200. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2017",
    "shift": 2,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-42",
    "subject": "Quant",
    "q": "The mean of 100, 103, 106, 109 and 112 is?",
    "opts": [
      "106",
      "103",
      "109",
      "112"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 106.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2018",
    "shift": 3,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-43",
    "subject": "Reasoning",
    "q": "Complete the series: 44, 48, 52, 56, ?",
    "opts": [
      "60",
      "58",
      "62",
      "64"
    ],
    "ans": 0,
    "exp": "Add 4 to each term.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2019",
    "shift": 1,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-44",
    "subject": "Reasoning",
    "q": "If P is ranked 13 from the top and 19 from the bottom, how many people are in the row?",
    "opts": [
      "31",
      "32",
      "30",
      "33"
    ],
    "ans": 0,
    "exp": "Total = rank from top + rank from bottom − 1.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2020",
    "shift": 2,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-45",
    "subject": "Quant",
    "q": "A shop buys an article for ₹1070 and sells it for ₹1284. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2021",
    "shift": 3,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-46",
    "subject": "Quant",
    "q": "The mean of 107, 110, 113, 116 and 119 is?",
    "opts": [
      "113",
      "110",
      "116",
      "119"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 113.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2022",
    "shift": 1,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-47",
    "subject": "Reasoning",
    "q": "Complete the series: 47, 51, 55, 59, ?",
    "opts": [
      "63",
      "61",
      "65",
      "67"
    ],
    "ans": 0,
    "exp": "Add 4 to each term.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2023",
    "shift": 2,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-48",
    "subject": "Reasoning",
    "q": "If P is ranked 14 from the top and 20 from the bottom, how many people are in the row?",
    "opts": [
      "33",
      "34",
      "32",
      "35"
    ],
    "ans": 0,
    "exp": "Total = rank from top + rank from bottom − 1.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2024",
    "shift": 3,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-49",
    "subject": "Quant",
    "q": "A shop buys an article for ₹1140 and sells it for ₹1368. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2025",
    "shift": 1,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-50",
    "subject": "Quant",
    "q": "The mean of 114, 117, 120, 123 and 126 is?",
    "opts": [
      "120",
      "117",
      "123",
      "126"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 120.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2026",
    "shift": 2,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-51",
    "subject": "Reasoning",
    "q": "Complete the series: 50, 54, 58, 62, ?",
    "opts": [
      "66",
      "64",
      "68",
      "70"
    ],
    "ans": 0,
    "exp": "Add 4 to each term.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2017",
    "shift": 3,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-52",
    "subject": "Reasoning",
    "q": "If P is ranked 15 from the top and 21 from the bottom, how many people are in the row?",
    "opts": [
      "35",
      "36",
      "34",
      "37"
    ],
    "ans": 0,
    "exp": "Total = rank from top + rank from bottom − 1.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2018",
    "shift": 1,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-53",
    "subject": "Quant",
    "q": "A shop buys an article for ₹1210 and sells it for ₹1452. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2019",
    "shift": 2,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-54",
    "subject": "Quant",
    "q": "The mean of 121, 124, 127, 130 and 133 is?",
    "opts": [
      "127",
      "124",
      "130",
      "133"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 127.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2020",
    "shift": 3,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-55",
    "subject": "Reasoning",
    "q": "Complete the series: 53, 57, 61, 65, ?",
    "opts": [
      "69",
      "67",
      "71",
      "73"
    ],
    "ans": 0,
    "exp": "Add 4 to each term.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2021",
    "shift": 1,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-56",
    "subject": "Reasoning",
    "q": "If P is ranked 16 from the top and 22 from the bottom, how many people are in the row?",
    "opts": [
      "37",
      "38",
      "36",
      "39"
    ],
    "ans": 0,
    "exp": "Total = rank from top + rank from bottom − 1.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2022",
    "shift": 2,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-57",
    "subject": "Quant",
    "q": "A shop buys an article for ₹1280 and sells it for ₹1536. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2023",
    "shift": 3,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-58",
    "subject": "Quant",
    "q": "The mean of 128, 131, 134, 137 and 140 is?",
    "opts": [
      "134",
      "131",
      "137",
      "140"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 134.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2024",
    "shift": 1,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-59",
    "subject": "Reasoning",
    "q": "Complete the series: 56, 60, 64, 68, ?",
    "opts": [
      "72",
      "70",
      "74",
      "76"
    ],
    "ans": 0,
    "exp": "Add 4 to each term.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2025",
    "shift": 2,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-60",
    "subject": "Reasoning",
    "q": "If P is ranked 17 from the top and 23 from the bottom, how many people are in the row?",
    "opts": [
      "39",
      "40",
      "38",
      "41"
    ],
    "ans": 0,
    "exp": "Total = rank from top + rank from bottom − 1.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2026",
    "shift": 3,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-61",
    "subject": "Quant",
    "q": "A shop buys an article for ₹1350 and sells it for ₹1620. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2017",
    "shift": 1,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-62",
    "subject": "Quant",
    "q": "The mean of 135, 138, 141, 144 and 147 is?",
    "opts": [
      "141",
      "138",
      "144",
      "147"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 141.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2018",
    "shift": 2,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-63",
    "subject": "Reasoning",
    "q": "Complete the series: 59, 63, 67, 71, ?",
    "opts": [
      "75",
      "73",
      "77",
      "79"
    ],
    "ans": 0,
    "exp": "Add 4 to each term.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2019",
    "shift": 3,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-64",
    "subject": "Reasoning",
    "q": "If P is ranked 18 from the top and 24 from the bottom, how many people are in the row?",
    "opts": [
      "41",
      "42",
      "40",
      "43"
    ],
    "ans": 0,
    "exp": "Total = rank from top + rank from bottom − 1.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2020",
    "shift": 1,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-65",
    "subject": "Quant",
    "q": "A shop buys an article for ₹1420 and sells it for ₹1704. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2021",
    "shift": 2,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-66",
    "subject": "Quant",
    "q": "The mean of 142, 145, 148, 151 and 154 is?",
    "opts": [
      "148",
      "145",
      "151",
      "154"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 148.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2022",
    "shift": 3,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-67",
    "subject": "Reasoning",
    "q": "Complete the series: 62, 66, 70, 74, ?",
    "opts": [
      "78",
      "76",
      "80",
      "82"
    ],
    "ans": 0,
    "exp": "Add 4 to each term.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2023",
    "shift": 1,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-68",
    "subject": "Reasoning",
    "q": "If P is ranked 19 from the top and 25 from the bottom, how many people are in the row?",
    "opts": [
      "43",
      "44",
      "42",
      "45"
    ],
    "ans": 0,
    "exp": "Total = rank from top + rank from bottom − 1.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2024",
    "shift": 2,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-69",
    "subject": "Quant",
    "q": "A shop buys an article for ₹1490 and sells it for ₹1788. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2025",
    "shift": 3,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-70",
    "subject": "Quant",
    "q": "The mean of 149, 152, 155, 158 and 161 is?",
    "opts": [
      "155",
      "152",
      "158",
      "161"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 155.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2026",
    "shift": 1,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-71",
    "subject": "Reasoning",
    "q": "Complete the series: 65, 69, 73, 77, ?",
    "opts": [
      "81",
      "79",
      "83",
      "85"
    ],
    "ans": 0,
    "exp": "Add 4 to each term.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2017",
    "shift": 2,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-72",
    "subject": "Reasoning",
    "q": "If P is ranked 20 from the top and 26 from the bottom, how many people are in the row?",
    "opts": [
      "45",
      "46",
      "44",
      "47"
    ],
    "ans": 0,
    "exp": "Total = rank from top + rank from bottom − 1.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2018",
    "shift": 3,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-73",
    "subject": "Quant",
    "q": "A shop buys an article for ₹1560 and sells it for ₹1872. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2019",
    "shift": 1,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-74",
    "subject": "Quant",
    "q": "The mean of 156, 159, 162, 165 and 168 is?",
    "opts": [
      "162",
      "159",
      "165",
      "168"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 162.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2020",
    "shift": 2,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-75",
    "subject": "Reasoning",
    "q": "Complete the series: 68, 72, 76, 80, ?",
    "opts": [
      "84",
      "82",
      "86",
      "88"
    ],
    "ans": 0,
    "exp": "Add 4 to each term.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2021",
    "shift": 3,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-76",
    "subject": "Reasoning",
    "q": "If P is ranked 21 from the top and 27 from the bottom, how many people are in the row?",
    "opts": [
      "47",
      "48",
      "46",
      "49"
    ],
    "ans": 0,
    "exp": "Total = rank from top + rank from bottom − 1.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2022",
    "shift": 1,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-77",
    "subject": "Quant",
    "q": "A shop buys an article for ₹1630 and sells it for ₹1956. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2023",
    "shift": 2,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-78",
    "subject": "Quant",
    "q": "The mean of 163, 166, 169, 172 and 175 is?",
    "opts": [
      "169",
      "166",
      "172",
      "175"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 169.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2024",
    "shift": 3,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-79",
    "subject": "Reasoning",
    "q": "Complete the series: 71, 75, 79, 83, ?",
    "opts": [
      "87",
      "85",
      "89",
      "91"
    ],
    "ans": 0,
    "exp": "Add 4 to each term.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2025",
    "shift": 1,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-80",
    "subject": "Reasoning",
    "q": "If P is ranked 22 from the top and 28 from the bottom, how many people are in the row?",
    "opts": [
      "49",
      "50",
      "48",
      "51"
    ],
    "ans": 0,
    "exp": "Total = rank from top + rank from bottom − 1.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2026",
    "shift": 2,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-81",
    "subject": "Quant",
    "q": "A shop buys an article for ₹1700 and sells it for ₹2040. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2017",
    "shift": 3,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-82",
    "subject": "Quant",
    "q": "The mean of 170, 173, 176, 179 and 182 is?",
    "opts": [
      "176",
      "173",
      "179",
      "182"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 176.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2018",
    "shift": 1,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-83",
    "subject": "Reasoning",
    "q": "Complete the series: 74, 78, 82, 86, ?",
    "opts": [
      "90",
      "88",
      "92",
      "94"
    ],
    "ans": 0,
    "exp": "Add 4 to each term.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2019",
    "shift": 2,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-84",
    "subject": "Reasoning",
    "q": "If P is ranked 23 from the top and 29 from the bottom, how many people are in the row?",
    "opts": [
      "51",
      "52",
      "50",
      "53"
    ],
    "ans": 0,
    "exp": "Total = rank from top + rank from bottom − 1.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2020",
    "shift": 3,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-85",
    "subject": "Quant",
    "q": "A shop buys an article for ₹1770 and sells it for ₹2124. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2021",
    "shift": 1,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-86",
    "subject": "Quant",
    "q": "The mean of 177, 180, 183, 186 and 189 is?",
    "opts": [
      "183",
      "180",
      "186",
      "189"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 183.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2022",
    "shift": 2,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-87",
    "subject": "Reasoning",
    "q": "Complete the series: 77, 81, 85, 89, ?",
    "opts": [
      "93",
      "91",
      "95",
      "97"
    ],
    "ans": 0,
    "exp": "Add 4 to each term.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2023",
    "shift": 3,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-88",
    "subject": "Reasoning",
    "q": "If P is ranked 24 from the top and 30 from the bottom, how many people are in the row?",
    "opts": [
      "53",
      "54",
      "52",
      "55"
    ],
    "ans": 0,
    "exp": "Total = rank from top + rank from bottom − 1.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2024",
    "shift": 1,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-89",
    "subject": "Quant",
    "q": "A shop buys an article for ₹1840 and sells it for ₹2208. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2025",
    "shift": 2,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-90",
    "subject": "Quant",
    "q": "The mean of 184, 187, 190, 193 and 196 is?",
    "opts": [
      "190",
      "187",
      "193",
      "196"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 190.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2026",
    "shift": 3,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-91",
    "subject": "Reasoning",
    "q": "Complete the series: 80, 84, 88, 92, ?",
    "opts": [
      "96",
      "94",
      "98",
      "100"
    ],
    "ans": 0,
    "exp": "Add 4 to each term.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2017",
    "shift": 1,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-92",
    "subject": "Reasoning",
    "q": "If P is ranked 25 from the top and 31 from the bottom, how many people are in the row?",
    "opts": [
      "55",
      "56",
      "54",
      "57"
    ],
    "ans": 0,
    "exp": "Total = rank from top + rank from bottom − 1.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2018",
    "shift": 2,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-93",
    "subject": "Quant",
    "q": "A shop buys an article for ₹1910 and sells it for ₹2292. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2019",
    "shift": 3,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-94",
    "subject": "Quant",
    "q": "The mean of 191, 194, 197, 200 and 203 is?",
    "opts": [
      "197",
      "194",
      "200",
      "203"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 197.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2020",
    "shift": 1,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-95",
    "subject": "Reasoning",
    "q": "Complete the series: 83, 87, 91, 95, ?",
    "opts": [
      "99",
      "97",
      "101",
      "103"
    ],
    "ans": 0,
    "exp": "Add 4 to each term.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2021",
    "shift": 2,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-96",
    "subject": "Reasoning",
    "q": "If P is ranked 26 from the top and 32 from the bottom, how many people are in the row?",
    "opts": [
      "57",
      "58",
      "56",
      "59"
    ],
    "ans": 0,
    "exp": "Total = rank from top + rank from bottom − 1.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2022",
    "shift": 3,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-97",
    "subject": "Quant",
    "q": "A shop buys an article for ₹1980 and sells it for ₹2376. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2023",
    "shift": 1,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-98",
    "subject": "Quant",
    "q": "The mean of 198, 201, 204, 207 and 210 is?",
    "opts": [
      "204",
      "201",
      "207",
      "210"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 204.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2024",
    "shift": 2,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-99",
    "subject": "Reasoning",
    "q": "Complete the series: 86, 90, 94, 98, ?",
    "opts": [
      "102",
      "100",
      "104",
      "106"
    ],
    "ans": 0,
    "exp": "Add 4 to each term.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2025",
    "shift": 3,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-100",
    "subject": "Reasoning",
    "q": "If P is ranked 27 from the top and 33 from the bottom, how many people are in the row?",
    "opts": [
      "59",
      "60",
      "58",
      "61"
    ],
    "ans": 0,
    "exp": "Total = rank from top + rank from bottom − 1.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2026",
    "shift": 1,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-101",
    "subject": "Quant",
    "q": "A shop buys an article for ₹2050 and sells it for ₹2460. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2017",
    "shift": 2,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-102",
    "subject": "Quant",
    "q": "The mean of 205, 208, 211, 214 and 217 is?",
    "opts": [
      "211",
      "208",
      "214",
      "217"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 211.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2018",
    "shift": 3,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-103",
    "subject": "Reasoning",
    "q": "Complete the series: 89, 93, 97, 101, ?",
    "opts": [
      "105",
      "103",
      "107",
      "109"
    ],
    "ans": 0,
    "exp": "Add 4 to each term.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2019",
    "shift": 1,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-104",
    "subject": "Reasoning",
    "q": "If P is ranked 28 from the top and 34 from the bottom, how many people are in the row?",
    "opts": [
      "61",
      "62",
      "60",
      "63"
    ],
    "ans": 0,
    "exp": "Total = rank from top + rank from bottom − 1.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2020",
    "shift": 2,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-105",
    "subject": "Quant",
    "q": "A shop buys an article for ₹2120 and sells it for ₹2544. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2021",
    "shift": 3,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-106",
    "subject": "Quant",
    "q": "The mean of 212, 215, 218, 221 and 224 is?",
    "opts": [
      "218",
      "215",
      "221",
      "224"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 218.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2022",
    "shift": 1,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-107",
    "subject": "Reasoning",
    "q": "Complete the series: 92, 96, 100, 104, ?",
    "opts": [
      "108",
      "106",
      "110",
      "112"
    ],
    "ans": 0,
    "exp": "Add 4 to each term.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2023",
    "shift": 2,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-108",
    "subject": "Reasoning",
    "q": "If P is ranked 29 from the top and 35 from the bottom, how many people are in the row?",
    "opts": [
      "63",
      "64",
      "62",
      "65"
    ],
    "ans": 0,
    "exp": "Total = rank from top + rank from bottom − 1.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2024",
    "shift": 3,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-109",
    "subject": "Quant",
    "q": "A shop buys an article for ₹2190 and sells it for ₹2628. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2025",
    "shift": 1,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-110",
    "subject": "Quant",
    "q": "The mean of 219, 222, 225, 228 and 231 is?",
    "opts": [
      "225",
      "222",
      "228",
      "231"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 225.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2026",
    "shift": 2,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-111",
    "subject": "Reasoning",
    "q": "Complete the series: 95, 99, 103, 107, ?",
    "opts": [
      "111",
      "109",
      "113",
      "115"
    ],
    "ans": 0,
    "exp": "Add 4 to each term.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2017",
    "shift": 3,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-112",
    "subject": "Reasoning",
    "q": "If P is ranked 30 from the top and 36 from the bottom, how many people are in the row?",
    "opts": [
      "65",
      "66",
      "64",
      "67"
    ],
    "ans": 0,
    "exp": "Total = rank from top + rank from bottom − 1.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2018",
    "shift": 1,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-113",
    "subject": "Quant",
    "q": "A shop buys an article for ₹2260 and sells it for ₹2712. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2019",
    "shift": 2,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-114",
    "subject": "Quant",
    "q": "The mean of 226, 229, 232, 235 and 238 is?",
    "opts": [
      "232",
      "229",
      "235",
      "238"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 232.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2020",
    "shift": 3,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-115",
    "subject": "Reasoning",
    "q": "Complete the series: 98, 102, 106, 110, ?",
    "opts": [
      "114",
      "112",
      "116",
      "118"
    ],
    "ans": 0,
    "exp": "Add 4 to each term.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2021",
    "shift": 1,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-116",
    "subject": "Reasoning",
    "q": "If P is ranked 31 from the top and 37 from the bottom, how many people are in the row?",
    "opts": [
      "67",
      "68",
      "66",
      "69"
    ],
    "ans": 0,
    "exp": "Total = rank from top + rank from bottom − 1.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2022",
    "shift": 2,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-117",
    "subject": "Quant",
    "q": "A shop buys an article for ₹2330 and sells it for ₹2796. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2023",
    "shift": 3,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-118",
    "subject": "Quant",
    "q": "The mean of 233, 236, 239, 242 and 245 is?",
    "opts": [
      "239",
      "236",
      "242",
      "245"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 239.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2024",
    "shift": 1,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-119",
    "subject": "Reasoning",
    "q": "Complete the series: 101, 105, 109, 113, ?",
    "opts": [
      "117",
      "115",
      "119",
      "121"
    ],
    "ans": 0,
    "exp": "Add 4 to each term.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2025",
    "shift": 2,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-120",
    "subject": "Reasoning",
    "q": "If P is ranked 32 from the top and 38 from the bottom, how many people are in the row?",
    "opts": [
      "69",
      "70",
      "68",
      "71"
    ],
    "ans": 0,
    "exp": "Total = rank from top + rank from bottom − 1.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2026",
    "shift": 3,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-121",
    "subject": "Quant",
    "q": "A shop buys an article for ₹2400 and sells it for ₹2880. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2017",
    "shift": 1,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-122",
    "subject": "Quant",
    "q": "The mean of 240, 243, 246, 249 and 252 is?",
    "opts": [
      "246",
      "243",
      "249",
      "252"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 246.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2018",
    "shift": 2,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-123",
    "subject": "Reasoning",
    "q": "Complete the series: 104, 108, 112, 116, ?",
    "opts": [
      "120",
      "118",
      "122",
      "124"
    ],
    "ans": 0,
    "exp": "Add 4 to each term.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2019",
    "shift": 3,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-124",
    "subject": "Reasoning",
    "q": "If P is ranked 33 from the top and 39 from the bottom, how many people are in the row?",
    "opts": [
      "71",
      "72",
      "70",
      "73"
    ],
    "ans": 0,
    "exp": "Total = rank from top + rank from bottom − 1.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2020",
    "shift": 1,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-125",
    "subject": "Quant",
    "q": "A shop buys an article for ₹2470 and sells it for ₹2964. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2021",
    "shift": 2,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-126",
    "subject": "Quant",
    "q": "The mean of 247, 250, 253, 256 and 259 is?",
    "opts": [
      "253",
      "250",
      "256",
      "259"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 253.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2022",
    "shift": 3,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-127",
    "subject": "Reasoning",
    "q": "Complete the series: 107, 111, 115, 119, ?",
    "opts": [
      "123",
      "121",
      "125",
      "127"
    ],
    "ans": 0,
    "exp": "Add 4 to each term.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2023",
    "shift": 1,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-128",
    "subject": "Reasoning",
    "q": "If P is ranked 34 from the top and 40 from the bottom, how many people are in the row?",
    "opts": [
      "73",
      "74",
      "72",
      "75"
    ],
    "ans": 0,
    "exp": "Total = rank from top + rank from bottom − 1.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2024",
    "shift": 2,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-129",
    "subject": "Quant",
    "q": "A shop buys an article for ₹2540 and sells it for ₹3048. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2025",
    "shift": 3,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-130",
    "subject": "Quant",
    "q": "The mean of 254, 257, 260, 263 and 266 is?",
    "opts": [
      "260",
      "257",
      "263",
      "266"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 260.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2026",
    "shift": 1,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-131",
    "subject": "Reasoning",
    "q": "Complete the series: 110, 114, 118, 122, ?",
    "opts": [
      "126",
      "124",
      "128",
      "130"
    ],
    "ans": 0,
    "exp": "Add 4 to each term.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2017",
    "shift": 2,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-132",
    "subject": "Reasoning",
    "q": "If P is ranked 35 from the top and 41 from the bottom, how many people are in the row?",
    "opts": [
      "75",
      "76",
      "74",
      "77"
    ],
    "ans": 0,
    "exp": "Total = rank from top + rank from bottom − 1.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2018",
    "shift": 3,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-133",
    "subject": "Quant",
    "q": "A shop buys an article for ₹2610 and sells it for ₹3132. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2019",
    "shift": 1,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-134",
    "subject": "Quant",
    "q": "The mean of 261, 264, 267, 270 and 273 is?",
    "opts": [
      "267",
      "264",
      "270",
      "273"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 267.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2020",
    "shift": 2,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-135",
    "subject": "Reasoning",
    "q": "Complete the series: 113, 117, 121, 125, ?",
    "opts": [
      "129",
      "127",
      "131",
      "133"
    ],
    "ans": 0,
    "exp": "Add 4 to each term.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2021",
    "shift": 3,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-136",
    "subject": "Reasoning",
    "q": "If P is ranked 36 from the top and 42 from the bottom, how many people are in the row?",
    "opts": [
      "77",
      "78",
      "76",
      "79"
    ],
    "ans": 0,
    "exp": "Total = rank from top + rank from bottom − 1.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2022",
    "shift": 1,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-137",
    "subject": "Quant",
    "q": "A shop buys an article for ₹2680 and sells it for ₹3216. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2023",
    "shift": 2,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-138",
    "subject": "Quant",
    "q": "The mean of 268, 271, 274, 277 and 280 is?",
    "opts": [
      "274",
      "271",
      "277",
      "280"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 274.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2024",
    "shift": 3,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-139",
    "subject": "Reasoning",
    "q": "Complete the series: 116, 120, 124, 128, ?",
    "opts": [
      "132",
      "130",
      "134",
      "136"
    ],
    "ans": 0,
    "exp": "Add 4 to each term.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2025",
    "shift": 1,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-140",
    "subject": "Reasoning",
    "q": "If P is ranked 37 from the top and 43 from the bottom, how many people are in the row?",
    "opts": [
      "79",
      "80",
      "78",
      "81"
    ],
    "ans": 0,
    "exp": "Total = rank from top + rank from bottom − 1.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2026",
    "shift": 2,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-141",
    "subject": "Quant",
    "q": "A shop buys an article for ₹2750 and sells it for ₹3300. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2017",
    "shift": 3,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-142",
    "subject": "Quant",
    "q": "The mean of 275, 278, 281, 284 and 287 is?",
    "opts": [
      "281",
      "278",
      "284",
      "287"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 281.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2018",
    "shift": 1,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-143",
    "subject": "Reasoning",
    "q": "Complete the series: 119, 123, 127, 131, ?",
    "opts": [
      "135",
      "133",
      "137",
      "139"
    ],
    "ans": 0,
    "exp": "Add 4 to each term.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2019",
    "shift": 2,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-144",
    "subject": "Reasoning",
    "q": "If P is ranked 38 from the top and 44 from the bottom, how many people are in the row?",
    "opts": [
      "81",
      "82",
      "80",
      "83"
    ],
    "ans": 0,
    "exp": "Total = rank from top + rank from bottom − 1.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2020",
    "shift": 3,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-145",
    "subject": "Quant",
    "q": "A shop buys an article for ₹2820 and sells it for ₹3384. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2021",
    "shift": 1,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-146",
    "subject": "Quant",
    "q": "The mean of 282, 285, 288, 291 and 294 is?",
    "opts": [
      "288",
      "285",
      "291",
      "294"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 288.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2022",
    "shift": 2,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-147",
    "subject": "Reasoning",
    "q": "Complete the series: 122, 126, 130, 134, ?",
    "opts": [
      "138",
      "136",
      "140",
      "142"
    ],
    "ans": 0,
    "exp": "Add 4 to each term.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2023",
    "shift": 3,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-148",
    "subject": "Reasoning",
    "q": "If P is ranked 39 from the top and 45 from the bottom, how many people are in the row?",
    "opts": [
      "83",
      "84",
      "82",
      "85"
    ],
    "ans": 0,
    "exp": "Total = rank from top + rank from bottom − 1.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2024",
    "shift": 1,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-149",
    "subject": "Quant",
    "q": "A shop buys an article for ₹2890 and sells it for ₹3468. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2025",
    "shift": 2,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-150",
    "subject": "Quant",
    "q": "The mean of 289, 292, 295, 298 and 301 is?",
    "opts": [
      "295",
      "292",
      "298",
      "301"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 295.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2026",
    "shift": 3,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-151",
    "subject": "Reasoning",
    "q": "Complete the series: 125, 129, 133, 137, ?",
    "opts": [
      "141",
      "139",
      "143",
      "145"
    ],
    "ans": 0,
    "exp": "Add 4 to each term.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2017",
    "shift": 1,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-152",
    "subject": "Reasoning",
    "q": "If P is ranked 40 from the top and 46 from the bottom, how many people are in the row?",
    "opts": [
      "85",
      "86",
      "84",
      "87"
    ],
    "ans": 0,
    "exp": "Total = rank from top + rank from bottom − 1.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2018",
    "shift": 2,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-153",
    "subject": "Quant",
    "q": "A shop buys an article for ₹2960 and sells it for ₹3552. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2019",
    "shift": 3,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-154",
    "subject": "Quant",
    "q": "The mean of 296, 299, 302, 305 and 308 is?",
    "opts": [
      "302",
      "299",
      "305",
      "308"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 302.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2020",
    "shift": 1,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-155",
    "subject": "Reasoning",
    "q": "Complete the series: 128, 132, 136, 140, ?",
    "opts": [
      "144",
      "142",
      "146",
      "148"
    ],
    "ans": 0,
    "exp": "Add 4 to each term.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2021",
    "shift": 2,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-156",
    "subject": "Reasoning",
    "q": "If P is ranked 41 from the top and 47 from the bottom, how many people are in the row?",
    "opts": [
      "87",
      "88",
      "86",
      "89"
    ],
    "ans": 0,
    "exp": "Total = rank from top + rank from bottom − 1.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2022",
    "shift": 3,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-157",
    "subject": "Quant",
    "q": "A shop buys an article for ₹3030 and sells it for ₹3636. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2023",
    "shift": 1,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-158",
    "subject": "Quant",
    "q": "The mean of 303, 306, 309, 312 and 315 is?",
    "opts": [
      "309",
      "306",
      "312",
      "315"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 309.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2024",
    "shift": 2,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-159",
    "subject": "Reasoning",
    "q": "Complete the series: 131, 135, 139, 143, ?",
    "opts": [
      "147",
      "145",
      "149",
      "151"
    ],
    "ans": 0,
    "exp": "Add 4 to each term.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2025",
    "shift": 3,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-160",
    "subject": "Reasoning",
    "q": "If P is ranked 42 from the top and 48 from the bottom, how many people are in the row?",
    "opts": [
      "89",
      "90",
      "88",
      "91"
    ],
    "ans": 0,
    "exp": "Total = rank from top + rank from bottom − 1.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2026",
    "shift": 1,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-161",
    "subject": "Quant",
    "q": "A shop buys an article for ₹3100 and sells it for ₹3720. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2017",
    "shift": 2,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-162",
    "subject": "Quant",
    "q": "The mean of 310, 313, 316, 319 and 322 is?",
    "opts": [
      "316",
      "313",
      "319",
      "322"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 316.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2018",
    "shift": 3,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-163",
    "subject": "Reasoning",
    "q": "Complete the series: 134, 138, 142, 146, ?",
    "opts": [
      "150",
      "148",
      "152",
      "154"
    ],
    "ans": 0,
    "exp": "Add 4 to each term.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2019",
    "shift": 1,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-164",
    "subject": "Reasoning",
    "q": "If P is ranked 43 from the top and 49 from the bottom, how many people are in the row?",
    "opts": [
      "91",
      "92",
      "90",
      "93"
    ],
    "ans": 0,
    "exp": "Total = rank from top + rank from bottom − 1.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2020",
    "shift": 2,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-165",
    "subject": "Quant",
    "q": "A shop buys an article for ₹3170 and sells it for ₹3804. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2021",
    "shift": 3,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-166",
    "subject": "Quant",
    "q": "The mean of 317, 320, 323, 326 and 329 is?",
    "opts": [
      "323",
      "320",
      "326",
      "329"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 323.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2022",
    "shift": 1,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-167",
    "subject": "Reasoning",
    "q": "Complete the series: 137, 141, 145, 149, ?",
    "opts": [
      "153",
      "151",
      "155",
      "157"
    ],
    "ans": 0,
    "exp": "Add 4 to each term.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2023",
    "shift": 2,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-168",
    "subject": "Reasoning",
    "q": "If P is ranked 44 from the top and 50 from the bottom, how many people are in the row?",
    "opts": [
      "93",
      "94",
      "92",
      "95"
    ],
    "ans": 0,
    "exp": "Total = rank from top + rank from bottom − 1.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2024",
    "shift": 3,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-169",
    "subject": "Quant",
    "q": "A shop buys an article for ₹3240 and sells it for ₹3888. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2025",
    "shift": 1,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-170",
    "subject": "Quant",
    "q": "The mean of 324, 327, 330, 333 and 336 is?",
    "opts": [
      "330",
      "327",
      "333",
      "336"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 330.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2026",
    "shift": 2,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-171",
    "subject": "Reasoning",
    "q": "Complete the series: 140, 144, 148, 152, ?",
    "opts": [
      "156",
      "154",
      "158",
      "160"
    ],
    "ans": 0,
    "exp": "Add 4 to each term.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2017",
    "shift": 3,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-172",
    "subject": "Reasoning",
    "q": "If P is ranked 45 from the top and 51 from the bottom, how many people are in the row?",
    "opts": [
      "95",
      "96",
      "94",
      "97"
    ],
    "ans": 0,
    "exp": "Total = rank from top + rank from bottom − 1.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2018",
    "shift": 1,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-173",
    "subject": "Quant",
    "q": "A shop buys an article for ₹3310 and sells it for ₹3972. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2019",
    "shift": 2,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-174",
    "subject": "Quant",
    "q": "The mean of 331, 334, 337, 340 and 343 is?",
    "opts": [
      "337",
      "334",
      "340",
      "343"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 337.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2020",
    "shift": 3,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-175",
    "subject": "Reasoning",
    "q": "Complete the series: 143, 147, 151, 155, ?",
    "opts": [
      "159",
      "157",
      "161",
      "163"
    ],
    "ans": 0,
    "exp": "Add 4 to each term.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2021",
    "shift": 1,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-176",
    "subject": "Reasoning",
    "q": "If P is ranked 46 from the top and 52 from the bottom, how many people are in the row?",
    "opts": [
      "97",
      "98",
      "96",
      "99"
    ],
    "ans": 0,
    "exp": "Total = rank from top + rank from bottom − 1.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2022",
    "shift": 2,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-177",
    "subject": "Quant",
    "q": "A shop buys an article for ₹3380 and sells it for ₹4056. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2023",
    "shift": 3,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-178",
    "subject": "Quant",
    "q": "The mean of 338, 341, 344, 347 and 350 is?",
    "opts": [
      "344",
      "341",
      "347",
      "350"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 344.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2024",
    "shift": 1,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-179",
    "subject": "Reasoning",
    "q": "Complete the series: 146, 150, 154, 158, ?",
    "opts": [
      "162",
      "160",
      "164",
      "166"
    ],
    "ans": 0,
    "exp": "Add 4 to each term.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2025",
    "shift": 2,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-180",
    "subject": "Reasoning",
    "q": "If P is ranked 47 from the top and 53 from the bottom, how many people are in the row?",
    "opts": [
      "99",
      "100",
      "98",
      "101"
    ],
    "ans": 0,
    "exp": "Total = rank from top + rank from bottom − 1.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2026",
    "shift": 3,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-181",
    "subject": "Quant",
    "q": "A shop buys an article for ₹3450 and sells it for ₹4140. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2017",
    "shift": 1,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-182",
    "subject": "Quant",
    "q": "The mean of 345, 348, 351, 354 and 357 is?",
    "opts": [
      "351",
      "348",
      "354",
      "357"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 351.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2018",
    "shift": 2,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-183",
    "subject": "Reasoning",
    "q": "Complete the series: 149, 153, 157, 161, ?",
    "opts": [
      "165",
      "163",
      "167",
      "169"
    ],
    "ans": 0,
    "exp": "Add 4 to each term.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2019",
    "shift": 3,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-184",
    "subject": "Reasoning",
    "q": "If P is ranked 48 from the top and 54 from the bottom, how many people are in the row?",
    "opts": [
      "101",
      "102",
      "100",
      "103"
    ],
    "ans": 0,
    "exp": "Total = rank from top + rank from bottom − 1.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2020",
    "shift": 1,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-185",
    "subject": "Quant",
    "q": "A shop buys an article for ₹3520 and sells it for ₹4224. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2021",
    "shift": 2,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-186",
    "subject": "Quant",
    "q": "The mean of 352, 355, 358, 361 and 364 is?",
    "opts": [
      "358",
      "355",
      "361",
      "364"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 358.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2022",
    "shift": 3,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-187",
    "subject": "Reasoning",
    "q": "Complete the series: 152, 156, 160, 164, ?",
    "opts": [
      "168",
      "166",
      "170",
      "172"
    ],
    "ans": 0,
    "exp": "Add 4 to each term.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2023",
    "shift": 1,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-188",
    "subject": "Reasoning",
    "q": "If P is ranked 49 from the top and 55 from the bottom, how many people are in the row?",
    "opts": [
      "103",
      "104",
      "102",
      "105"
    ],
    "ans": 0,
    "exp": "Total = rank from top + rank from bottom − 1.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2024",
    "shift": 2,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-189",
    "subject": "Quant",
    "q": "A shop buys an article for ₹3590 and sells it for ₹4308. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2025",
    "shift": 3,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-190",
    "subject": "Quant",
    "q": "The mean of 359, 362, 365, 368 and 371 is?",
    "opts": [
      "365",
      "362",
      "368",
      "371"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 365.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2026",
    "shift": 1,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-191",
    "subject": "Reasoning",
    "q": "Complete the series: 155, 159, 163, 167, ?",
    "opts": [
      "171",
      "169",
      "173",
      "175"
    ],
    "ans": 0,
    "exp": "Add 4 to each term.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2017",
    "shift": 2,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-192",
    "subject": "Reasoning",
    "q": "If P is ranked 50 from the top and 56 from the bottom, how many people are in the row?",
    "opts": [
      "105",
      "106",
      "104",
      "107"
    ],
    "ans": 0,
    "exp": "Total = rank from top + rank from bottom − 1.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2018",
    "shift": 3,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-193",
    "subject": "Quant",
    "q": "A shop buys an article for ₹3660 and sells it for ₹4392. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2019",
    "shift": 1,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-194",
    "subject": "Quant",
    "q": "The mean of 366, 369, 372, 375 and 378 is?",
    "opts": [
      "372",
      "369",
      "375",
      "378"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 372.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2020",
    "shift": 2,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-195",
    "subject": "Reasoning",
    "q": "Complete the series: 158, 162, 166, 170, ?",
    "opts": [
      "174",
      "172",
      "176",
      "178"
    ],
    "ans": 0,
    "exp": "Add 4 to each term.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2021",
    "shift": 3,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-196",
    "subject": "Reasoning",
    "q": "If P is ranked 51 from the top and 57 from the bottom, how many people are in the row?",
    "opts": [
      "107",
      "108",
      "106",
      "109"
    ],
    "ans": 0,
    "exp": "Total = rank from top + rank from bottom − 1.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2022",
    "shift": 1,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-197",
    "subject": "Quant",
    "q": "A shop buys an article for ₹3730 and sells it for ₹4476. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2023",
    "shift": 2,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-198",
    "subject": "Quant",
    "q": "The mean of 373, 376, 379, 382 and 385 is?",
    "opts": [
      "379",
      "376",
      "382",
      "385"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 379.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2024",
    "shift": 3,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-199",
    "subject": "Reasoning",
    "q": "Complete the series: 161, 165, 169, 173, ?",
    "opts": [
      "177",
      "175",
      "179",
      "181"
    ],
    "ans": 0,
    "exp": "Add 4 to each term.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2025",
    "shift": 1,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-200",
    "subject": "Reasoning",
    "q": "If P is ranked 52 from the top and 58 from the bottom, how many people are in the row?",
    "opts": [
      "109",
      "110",
      "108",
      "111"
    ],
    "ans": 0,
    "exp": "Total = rank from top + rank from bottom − 1.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2026",
    "shift": 2,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-201",
    "subject": "Quant",
    "q": "A shop buys an article for ₹3800 and sells it for ₹4560. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2017",
    "shift": 3,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-202",
    "subject": "Quant",
    "q": "The mean of 380, 383, 386, 389 and 392 is?",
    "opts": [
      "386",
      "383",
      "389",
      "392"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 386.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2018",
    "shift": 1,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-203",
    "subject": "Reasoning",
    "q": "Complete the series: 164, 168, 172, 176, ?",
    "opts": [
      "180",
      "178",
      "182",
      "184"
    ],
    "ans": 0,
    "exp": "Add 4 to each term.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2019",
    "shift": 2,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-204",
    "subject": "Reasoning",
    "q": "If P is ranked 53 from the top and 59 from the bottom, how many people are in the row?",
    "opts": [
      "111",
      "112",
      "110",
      "113"
    ],
    "ans": 0,
    "exp": "Total = rank from top + rank from bottom − 1.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2020",
    "shift": 3,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-205",
    "subject": "Quant",
    "q": "A shop buys an article for ₹3870 and sells it for ₹4644. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2021",
    "shift": 1,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-206",
    "subject": "Quant",
    "q": "The mean of 387, 390, 393, 396 and 399 is?",
    "opts": [
      "393",
      "390",
      "396",
      "399"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 393.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2022",
    "shift": 2,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-207",
    "subject": "Reasoning",
    "q": "Complete the series: 167, 171, 175, 179, ?",
    "opts": [
      "183",
      "181",
      "185",
      "187"
    ],
    "ans": 0,
    "exp": "Add 4 to each term.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2023",
    "shift": 3,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-208",
    "subject": "Reasoning",
    "q": "If P is ranked 54 from the top and 60 from the bottom, how many people are in the row?",
    "opts": [
      "113",
      "114",
      "112",
      "115"
    ],
    "ans": 0,
    "exp": "Total = rank from top + rank from bottom − 1.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2024",
    "shift": 1,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-209",
    "subject": "Quant",
    "q": "A shop buys an article for ₹3940 and sells it for ₹4728. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2025",
    "shift": 2,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-210",
    "subject": "Quant",
    "q": "The mean of 394, 397, 400, 403 and 406 is?",
    "opts": [
      "400",
      "397",
      "403",
      "406"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 400.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2026",
    "shift": 3,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-211",
    "subject": "Reasoning",
    "q": "Complete the series: 170, 174, 178, 182, ?",
    "opts": [
      "186",
      "184",
      "188",
      "190"
    ],
    "ans": 0,
    "exp": "Add 4 to each term.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2017",
    "shift": 1,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-212",
    "subject": "Reasoning",
    "q": "If P is ranked 55 from the top and 61 from the bottom, how many people are in the row?",
    "opts": [
      "115",
      "116",
      "114",
      "117"
    ],
    "ans": 0,
    "exp": "Total = rank from top + rank from bottom − 1.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2018",
    "shift": 2,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-213",
    "subject": "Quant",
    "q": "A shop buys an article for ₹4010 and sells it for ₹4812. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2019",
    "shift": 3,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-214",
    "subject": "Quant",
    "q": "The mean of 401, 404, 407, 410 and 413 is?",
    "opts": [
      "407",
      "404",
      "410",
      "413"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 407.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2020",
    "shift": 1,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-215",
    "subject": "Reasoning",
    "q": "Complete the series: 173, 177, 181, 185, ?",
    "opts": [
      "189",
      "187",
      "191",
      "193"
    ],
    "ans": 0,
    "exp": "Add 4 to each term.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2021",
    "shift": 2,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-216",
    "subject": "Reasoning",
    "q": "If P is ranked 56 from the top and 62 from the bottom, how many people are in the row?",
    "opts": [
      "117",
      "118",
      "116",
      "119"
    ],
    "ans": 0,
    "exp": "Total = rank from top + rank from bottom − 1.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2022",
    "shift": 3,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-217",
    "subject": "Quant",
    "q": "A shop buys an article for ₹4080 and sells it for ₹4896. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2023",
    "shift": 1,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-218",
    "subject": "Quant",
    "q": "The mean of 408, 411, 414, 417 and 420 is?",
    "opts": [
      "414",
      "411",
      "417",
      "420"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 414.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2024",
    "shift": 2,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-219",
    "subject": "Reasoning",
    "q": "Complete the series: 176, 180, 184, 188, ?",
    "opts": [
      "192",
      "190",
      "194",
      "196"
    ],
    "ans": 0,
    "exp": "Add 4 to each term.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2025",
    "shift": 3,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-220",
    "subject": "Reasoning",
    "q": "If P is ranked 57 from the top and 63 from the bottom, how many people are in the row?",
    "opts": [
      "119",
      "120",
      "118",
      "121"
    ],
    "ans": 0,
    "exp": "Total = rank from top + rank from bottom − 1.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2026",
    "shift": 1,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-221",
    "subject": "Quant",
    "q": "A shop buys an article for ₹4150 and sells it for ₹4980. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2017",
    "shift": 2,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-222",
    "subject": "Quant",
    "q": "The mean of 415, 418, 421, 424 and 427 is?",
    "opts": [
      "421",
      "418",
      "424",
      "427"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 421.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2018",
    "shift": 3,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-223",
    "subject": "Reasoning",
    "q": "Complete the series: 179, 183, 187, 191, ?",
    "opts": [
      "195",
      "193",
      "197",
      "199"
    ],
    "ans": 0,
    "exp": "Add 4 to each term.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2019",
    "shift": 1,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-224",
    "subject": "Reasoning",
    "q": "If P is ranked 58 from the top and 64 from the bottom, how many people are in the row?",
    "opts": [
      "121",
      "122",
      "120",
      "123"
    ],
    "ans": 0,
    "exp": "Total = rank from top + rank from bottom − 1.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2020",
    "shift": 2,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-225",
    "subject": "Quant",
    "q": "A shop buys an article for ₹4220 and sells it for ₹5064. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2021",
    "shift": 3,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-226",
    "subject": "Quant",
    "q": "The mean of 422, 425, 428, 431 and 434 is?",
    "opts": [
      "428",
      "425",
      "431",
      "434"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 428.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2022",
    "shift": 1,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-227",
    "subject": "Reasoning",
    "q": "Complete the series: 182, 186, 190, 194, ?",
    "opts": [
      "198",
      "196",
      "200",
      "202"
    ],
    "ans": 0,
    "exp": "Add 4 to each term.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2023",
    "shift": 2,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-228",
    "subject": "Reasoning",
    "q": "If P is ranked 59 from the top and 65 from the bottom, how many people are in the row?",
    "opts": [
      "123",
      "124",
      "122",
      "125"
    ],
    "ans": 0,
    "exp": "Total = rank from top + rank from bottom − 1.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2024",
    "shift": 3,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-229",
    "subject": "Quant",
    "q": "A shop buys an article for ₹4290 and sells it for ₹5148. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2025",
    "shift": 1,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-230",
    "subject": "Quant",
    "q": "The mean of 429, 432, 435, 438 and 441 is?",
    "opts": [
      "435",
      "432",
      "438",
      "441"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 435.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2026",
    "shift": 2,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-231",
    "subject": "Reasoning",
    "q": "Complete the series: 185, 189, 193, 197, ?",
    "opts": [
      "201",
      "199",
      "203",
      "205"
    ],
    "ans": 0,
    "exp": "Add 4 to each term.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2017",
    "shift": 3,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-232",
    "subject": "Reasoning",
    "q": "If P is ranked 60 from the top and 66 from the bottom, how many people are in the row?",
    "opts": [
      "125",
      "126",
      "124",
      "127"
    ],
    "ans": 0,
    "exp": "Total = rank from top + rank from bottom − 1.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2018",
    "shift": 1,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-233",
    "subject": "Quant",
    "q": "A shop buys an article for ₹4360 and sells it for ₹5232. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2019",
    "shift": 2,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-234",
    "subject": "Quant",
    "q": "The mean of 436, 439, 442, 445 and 448 is?",
    "opts": [
      "442",
      "439",
      "445",
      "448"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 442.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2020",
    "shift": 3,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-235",
    "subject": "Reasoning",
    "q": "Complete the series: 188, 192, 196, 200, ?",
    "opts": [
      "204",
      "202",
      "206",
      "208"
    ],
    "ans": 0,
    "exp": "Add 4 to each term.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2021",
    "shift": 1,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-236",
    "subject": "Reasoning",
    "q": "If P is ranked 61 from the top and 67 from the bottom, how many people are in the row?",
    "opts": [
      "127",
      "128",
      "126",
      "129"
    ],
    "ans": 0,
    "exp": "Total = rank from top + rank from bottom − 1.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2022",
    "shift": 2,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-237",
    "subject": "Quant",
    "q": "A shop buys an article for ₹4430 and sells it for ₹5316. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2023",
    "shift": 3,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-238",
    "subject": "Quant",
    "q": "The mean of 443, 446, 449, 452 and 455 is?",
    "opts": [
      "449",
      "446",
      "452",
      "455"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 449.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2024",
    "shift": 1,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-239",
    "subject": "Reasoning",
    "q": "Complete the series: 191, 195, 199, 203, ?",
    "opts": [
      "207",
      "205",
      "209",
      "211"
    ],
    "ans": 0,
    "exp": "Add 4 to each term.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2025",
    "shift": 2,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-240",
    "subject": "Reasoning",
    "q": "If P is ranked 62 from the top and 68 from the bottom, how many people are in the row?",
    "opts": [
      "129",
      "130",
      "128",
      "131"
    ],
    "ans": 0,
    "exp": "Total = rank from top + rank from bottom − 1.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2026",
    "shift": 3,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-241",
    "subject": "Quant",
    "q": "A shop buys an article for ₹4500 and sells it for ₹5400. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2017",
    "shift": 1,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-242",
    "subject": "Quant",
    "q": "The mean of 450, 453, 456, 459 and 462 is?",
    "opts": [
      "456",
      "453",
      "459",
      "462"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 456.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2018",
    "shift": 2,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-243",
    "subject": "Reasoning",
    "q": "Complete the series: 194, 198, 202, 206, ?",
    "opts": [
      "210",
      "208",
      "212",
      "214"
    ],
    "ans": 0,
    "exp": "Add 4 to each term.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2019",
    "shift": 3,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-244",
    "subject": "Reasoning",
    "q": "If P is ranked 63 from the top and 69 from the bottom, how many people are in the row?",
    "opts": [
      "131",
      "132",
      "130",
      "133"
    ],
    "ans": 0,
    "exp": "Total = rank from top + rank from bottom − 1.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2020",
    "shift": 1,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-245",
    "subject": "Quant",
    "q": "A shop buys an article for ₹4570 and sells it for ₹5484. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2021",
    "shift": 2,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-246",
    "subject": "Quant",
    "q": "The mean of 457, 460, 463, 466 and 469 is?",
    "opts": [
      "463",
      "460",
      "466",
      "469"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 463.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2022",
    "shift": 3,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-247",
    "subject": "Reasoning",
    "q": "Complete the series: 197, 201, 205, 209, ?",
    "opts": [
      "213",
      "211",
      "215",
      "217"
    ],
    "ans": 0,
    "exp": "Add 4 to each term.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2023",
    "shift": 1,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-248",
    "subject": "Reasoning",
    "q": "If P is ranked 64 from the top and 70 from the bottom, how many people are in the row?",
    "opts": [
      "133",
      "134",
      "132",
      "135"
    ],
    "ans": 0,
    "exp": "Total = rank from top + rank from bottom − 1.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2024",
    "shift": 2,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-249",
    "subject": "Quant",
    "q": "A shop buys an article for ₹4640 and sells it for ₹5568. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2025",
    "shift": 3,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-250",
    "subject": "Quant",
    "q": "The mean of 464, 467, 470, 473 and 476 is?",
    "opts": [
      "470",
      "467",
      "473",
      "476"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 470.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2026",
    "shift": 1,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-251",
    "subject": "Reasoning",
    "q": "Complete the series: 200, 204, 208, 212, ?",
    "opts": [
      "216",
      "214",
      "218",
      "220"
    ],
    "ans": 0,
    "exp": "Add 4 to each term.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2017",
    "shift": 2,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-252",
    "subject": "Reasoning",
    "q": "If P is ranked 65 from the top and 71 from the bottom, how many people are in the row?",
    "opts": [
      "135",
      "136",
      "134",
      "137"
    ],
    "ans": 0,
    "exp": "Total = rank from top + rank from bottom − 1.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2018",
    "shift": 3,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-253",
    "subject": "Quant",
    "q": "A shop buys an article for ₹4710 and sells it for ₹5652. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2019",
    "shift": 1,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-254",
    "subject": "Quant",
    "q": "The mean of 471, 474, 477, 480 and 483 is?",
    "opts": [
      "477",
      "474",
      "480",
      "483"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 477.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2020",
    "shift": 2,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-255",
    "subject": "Reasoning",
    "q": "Complete the series: 203, 207, 211, 215, ?",
    "opts": [
      "219",
      "217",
      "221",
      "223"
    ],
    "ans": 0,
    "exp": "Add 4 to each term.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2021",
    "shift": 3,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-256",
    "subject": "Reasoning",
    "q": "If P is ranked 66 from the top and 72 from the bottom, how many people are in the row?",
    "opts": [
      "137",
      "138",
      "136",
      "139"
    ],
    "ans": 0,
    "exp": "Total = rank from top + rank from bottom − 1.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2022",
    "shift": 1,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-257",
    "subject": "Quant",
    "q": "A shop buys an article for ₹4780 and sells it for ₹5736. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2023",
    "shift": 2,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-258",
    "subject": "Quant",
    "q": "The mean of 478, 481, 484, 487 and 490 is?",
    "opts": [
      "484",
      "481",
      "487",
      "490"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 484.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2024",
    "shift": 3,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-259",
    "subject": "Reasoning",
    "q": "Complete the series: 206, 210, 214, 218, ?",
    "opts": [
      "222",
      "220",
      "224",
      "226"
    ],
    "ans": 0,
    "exp": "Add 4 to each term.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2025",
    "shift": 1,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-260",
    "subject": "Reasoning",
    "q": "If P is ranked 67 from the top and 73 from the bottom, how many people are in the row?",
    "opts": [
      "139",
      "140",
      "138",
      "141"
    ],
    "ans": 0,
    "exp": "Total = rank from top + rank from bottom − 1.",
    "topic": "Reasoning",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2026",
    "shift": 2,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-261",
    "subject": "Quant",
    "q": "A shop buys an article for ₹4850 and sells it for ₹5820. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2017",
    "shift": 3,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-262",
    "subject": "Quant",
    "q": "The mean of 485, 488, 491, 494 and 497 is?",
    "opts": [
      "491",
      "488",
      "494",
      "497"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 491.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2018",
    "shift": 1,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-263",
    "subject": "Quant",
    "q": "A shop buys an article for ₹4920 and sells it for ₹5904. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2019",
    "shift": 2,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-264",
    "subject": "Quant",
    "q": "The mean of 492, 495, 498, 501 and 504 is?",
    "opts": [
      "498",
      "495",
      "501",
      "504"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 498.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2020",
    "shift": 3,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-265",
    "subject": "Quant",
    "q": "A shop buys an article for ₹4990 and sells it for ₹5988. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2021",
    "shift": 1,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-266",
    "subject": "Quant",
    "q": "The mean of 499, 502, 505, 508 and 511 is?",
    "opts": [
      "505",
      "502",
      "508",
      "511"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 505.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2022",
    "shift": 2,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-267",
    "subject": "Quant",
    "q": "A shop buys an article for ₹5060 and sells it for ₹6072. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2023",
    "shift": 3,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-268",
    "subject": "Quant",
    "q": "The mean of 506, 509, 512, 515 and 518 is?",
    "opts": [
      "512",
      "509",
      "515",
      "518"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 512.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2024",
    "shift": 1,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-269",
    "subject": "Quant",
    "q": "A shop buys an article for ₹5130 and sells it for ₹6156. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2025",
    "shift": 2,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-270",
    "subject": "Quant",
    "q": "The mean of 513, 516, 519, 522 and 525 is?",
    "opts": [
      "519",
      "516",
      "522",
      "525"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 519.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2026",
    "shift": 3,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-271",
    "subject": "Quant",
    "q": "A shop buys an article for ₹5200 and sells it for ₹6240. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2017",
    "shift": 1,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-272",
    "subject": "Quant",
    "q": "The mean of 520, 523, 526, 529 and 532 is?",
    "opts": [
      "526",
      "523",
      "529",
      "532"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 526.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2018",
    "shift": 2,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-273",
    "subject": "Quant",
    "q": "A shop buys an article for ₹5270 and sells it for ₹6324. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2019",
    "shift": 3,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-274",
    "subject": "Quant",
    "q": "The mean of 527, 530, 533, 536 and 539 is?",
    "opts": [
      "533",
      "530",
      "536",
      "539"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 533.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2020",
    "shift": 1,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-275",
    "subject": "Quant",
    "q": "A shop buys an article for ₹5340 and sells it for ₹6408. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2021",
    "shift": 2,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-276",
    "subject": "Quant",
    "q": "The mean of 534, 537, 540, 543 and 546 is?",
    "opts": [
      "540",
      "537",
      "543",
      "546"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 540.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2022",
    "shift": 3,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-277",
    "subject": "Quant",
    "q": "A shop buys an article for ₹5410 and sells it for ₹6492. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2023",
    "shift": 1,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-278",
    "subject": "Quant",
    "q": "The mean of 541, 544, 547, 550 and 553 is?",
    "opts": [
      "547",
      "544",
      "550",
      "553"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 547.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2024",
    "shift": 2,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-279",
    "subject": "Quant",
    "q": "A shop buys an article for ₹5480 and sells it for ₹6576. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2025",
    "shift": 3,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-280",
    "subject": "Quant",
    "q": "The mean of 548, 551, 554, 557 and 560 is?",
    "opts": [
      "554",
      "551",
      "557",
      "560"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 554.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2026",
    "shift": 1,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-281",
    "subject": "Quant",
    "q": "A shop buys an article for ₹5550 and sells it for ₹6660. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2017",
    "shift": 2,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-282",
    "subject": "Quant",
    "q": "The mean of 555, 558, 561, 564 and 567 is?",
    "opts": [
      "561",
      "558",
      "564",
      "567"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 561.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2018",
    "shift": 3,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-283",
    "subject": "Quant",
    "q": "A shop buys an article for ₹5620 and sells it for ₹6744. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2019",
    "shift": 1,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-284",
    "subject": "Quant",
    "q": "The mean of 562, 565, 568, 571 and 574 is?",
    "opts": [
      "568",
      "565",
      "571",
      "574"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 568.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2020",
    "shift": 2,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-285",
    "subject": "Quant",
    "q": "A shop buys an article for ₹5690 and sells it for ₹6828. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2021",
    "shift": 3,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-286",
    "subject": "Quant",
    "q": "The mean of 569, 572, 575, 578 and 581 is?",
    "opts": [
      "575",
      "572",
      "578",
      "581"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 575.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2022",
    "shift": 1,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-287",
    "subject": "Quant",
    "q": "A shop buys an article for ₹5760 and sells it for ₹6912. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2023",
    "shift": 2,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-288",
    "subject": "Quant",
    "q": "The mean of 576, 579, 582, 585 and 588 is?",
    "opts": [
      "582",
      "579",
      "585",
      "588"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 582.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2024",
    "shift": 3,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-289",
    "subject": "Quant",
    "q": "A shop buys an article for ₹5830 and sells it for ₹6996. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2025",
    "shift": 1,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-290",
    "subject": "Quant",
    "q": "The mean of 583, 586, 589, 592 and 595 is?",
    "opts": [
      "589",
      "586",
      "592",
      "595"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 589.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2026",
    "shift": 2,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-291",
    "subject": "Quant",
    "q": "A shop buys an article for ₹5900 and sells it for ₹7080. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2017",
    "shift": 3,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-292",
    "subject": "Quant",
    "q": "The mean of 590, 593, 596, 599 and 602 is?",
    "opts": [
      "596",
      "593",
      "599",
      "602"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 596.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2018",
    "shift": 1,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-293",
    "subject": "Quant",
    "q": "A shop buys an article for ₹5970 and sells it for ₹7164. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2019",
    "shift": 2,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-294",
    "subject": "Quant",
    "q": "The mean of 597, 600, 603, 606 and 609 is?",
    "opts": [
      "603",
      "600",
      "606",
      "609"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 603.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2020",
    "shift": 3,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-295",
    "subject": "Quant",
    "q": "A shop buys an article for ₹6040 and sells it for ₹7248. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2021",
    "shift": 1,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-296",
    "subject": "Quant",
    "q": "The mean of 604, 607, 610, 613 and 616 is?",
    "opts": [
      "610",
      "607",
      "613",
      "616"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 610.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2022",
    "shift": 2,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-297",
    "subject": "Quant",
    "q": "A shop buys an article for ₹6110 and sells it for ₹7332. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2023",
    "shift": 3,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-298",
    "subject": "Quant",
    "q": "The mean of 611, 614, 617, 620 and 623 is?",
    "opts": [
      "617",
      "614",
      "620",
      "623"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 617.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2024",
    "shift": 1,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-299",
    "subject": "Quant",
    "q": "A shop buys an article for ₹6180 and sells it for ₹7416. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2025",
    "shift": 2,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-300",
    "subject": "Quant",
    "q": "The mean of 618, 621, 624, 627 and 630 is?",
    "opts": [
      "624",
      "621",
      "627",
      "630"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 624.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2026",
    "shift": 3,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-301",
    "subject": "Quant",
    "q": "A shop buys an article for ₹6250 and sells it for ₹7500. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2017",
    "shift": 1,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-302",
    "subject": "Quant",
    "q": "The mean of 625, 628, 631, 634 and 637 is?",
    "opts": [
      "631",
      "628",
      "634",
      "637"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 631.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2018",
    "shift": 2,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-303",
    "subject": "Quant",
    "q": "A shop buys an article for ₹6320 and sells it for ₹7584. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2019",
    "shift": 3,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-304",
    "subject": "Quant",
    "q": "The mean of 632, 635, 638, 641 and 644 is?",
    "opts": [
      "638",
      "635",
      "641",
      "644"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 638.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2020",
    "shift": 1,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-305",
    "subject": "Quant",
    "q": "A shop buys an article for ₹6390 and sells it for ₹7668. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2021",
    "shift": 2,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-306",
    "subject": "Quant",
    "q": "The mean of 639, 642, 645, 648 and 651 is?",
    "opts": [
      "645",
      "642",
      "648",
      "651"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 645.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2022",
    "shift": 3,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-307",
    "subject": "Quant",
    "q": "A shop buys an article for ₹6460 and sells it for ₹7752. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2023",
    "shift": 1,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-308",
    "subject": "Quant",
    "q": "The mean of 646, 649, 652, 655 and 658 is?",
    "opts": [
      "652",
      "649",
      "655",
      "658"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 652.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2024",
    "shift": 2,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-309",
    "subject": "Quant",
    "q": "A shop buys an article for ₹6530 and sells it for ₹7836. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2025",
    "shift": 3,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-310",
    "subject": "Quant",
    "q": "The mean of 653, 656, 659, 662 and 665 is?",
    "opts": [
      "659",
      "656",
      "662",
      "665"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 659.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2026",
    "shift": 1,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-311",
    "subject": "Quant",
    "q": "A shop buys an article for ₹6600 and sells it for ₹7920. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2017",
    "shift": 2,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-312",
    "subject": "Quant",
    "q": "The mean of 660, 663, 666, 669 and 672 is?",
    "opts": [
      "666",
      "663",
      "669",
      "672"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 666.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2018",
    "shift": 3,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-313",
    "subject": "Quant",
    "q": "A shop buys an article for ₹6670 and sells it for ₹8004. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2019",
    "shift": 1,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-314",
    "subject": "Quant",
    "q": "The mean of 667, 670, 673, 676 and 679 is?",
    "opts": [
      "673",
      "670",
      "676",
      "679"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 673.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2020",
    "shift": 2,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-315",
    "subject": "Quant",
    "q": "A shop buys an article for ₹6740 and sells it for ₹8088. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2021",
    "shift": 3,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-316",
    "subject": "Quant",
    "q": "The mean of 674, 677, 680, 683 and 686 is?",
    "opts": [
      "680",
      "677",
      "683",
      "686"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 680.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2022",
    "shift": 1,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-317",
    "subject": "Quant",
    "q": "A shop buys an article for ₹6810 and sells it for ₹8172. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2023",
    "shift": 2,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-318",
    "subject": "Quant",
    "q": "The mean of 681, 684, 687, 690 and 693 is?",
    "opts": [
      "687",
      "684",
      "690",
      "693"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 687.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2024",
    "shift": 3,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-319",
    "subject": "Quant",
    "q": "A shop buys an article for ₹6880 and sells it for ₹8256. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2025",
    "shift": 1,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-320",
    "subject": "Quant",
    "q": "The mean of 688, 691, 694, 697 and 700 is?",
    "opts": [
      "694",
      "691",
      "697",
      "700"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 694.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2026",
    "shift": 2,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-321",
    "subject": "Quant",
    "q": "A shop buys an article for ₹6950 and sells it for ₹8340. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2017",
    "shift": 3,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-322",
    "subject": "Quant",
    "q": "The mean of 695, 698, 701, 704 and 707 is?",
    "opts": [
      "701",
      "698",
      "704",
      "707"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 701.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2018",
    "shift": 1,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-323",
    "subject": "Quant",
    "q": "A shop buys an article for ₹7020 and sells it for ₹8424. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2019",
    "shift": 2,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-324",
    "subject": "Quant",
    "q": "The mean of 702, 705, 708, 711 and 714 is?",
    "opts": [
      "708",
      "705",
      "711",
      "714"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 708.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2020",
    "shift": 3,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-325",
    "subject": "Quant",
    "q": "A shop buys an article for ₹7090 and sells it for ₹8508. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2021",
    "shift": 1,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-326",
    "subject": "Quant",
    "q": "The mean of 709, 712, 715, 718 and 721 is?",
    "opts": [
      "715",
      "712",
      "718",
      "721"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 715.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2022",
    "shift": 2,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-327",
    "subject": "Quant",
    "q": "A shop buys an article for ₹7160 and sells it for ₹8592. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2023",
    "shift": 3,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-328",
    "subject": "Quant",
    "q": "The mean of 716, 719, 722, 725 and 728 is?",
    "opts": [
      "722",
      "719",
      "725",
      "728"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 722.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2024",
    "shift": 1,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-329",
    "subject": "Quant",
    "q": "A shop buys an article for ₹7230 and sells it for ₹8676. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2025",
    "shift": 2,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-330",
    "subject": "Quant",
    "q": "The mean of 723, 726, 729, 732 and 735 is?",
    "opts": [
      "729",
      "726",
      "732",
      "735"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 729.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2026",
    "shift": 3,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-331",
    "subject": "Quant",
    "q": "A shop buys an article for ₹7300 and sells it for ₹8760. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2017",
    "shift": 1,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-332",
    "subject": "Quant",
    "q": "The mean of 730, 733, 736, 739 and 742 is?",
    "opts": [
      "736",
      "733",
      "739",
      "742"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 736.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2018",
    "shift": 2,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-333",
    "subject": "Quant",
    "q": "A shop buys an article for ₹7370 and sells it for ₹8844. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2019",
    "shift": 3,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-334",
    "subject": "Quant",
    "q": "The mean of 737, 740, 743, 746 and 749 is?",
    "opts": [
      "743",
      "740",
      "746",
      "749"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 743.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2020",
    "shift": 1,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-335",
    "subject": "Quant",
    "q": "A shop buys an article for ₹7440 and sells it for ₹8928. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2021",
    "shift": 2,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-336",
    "subject": "Quant",
    "q": "The mean of 744, 747, 750, 753 and 756 is?",
    "opts": [
      "750",
      "747",
      "753",
      "756"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 750.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2022",
    "shift": 3,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-337",
    "subject": "Quant",
    "q": "A shop buys an article for ₹7510 and sells it for ₹9012. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2023",
    "shift": 1,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-338",
    "subject": "Quant",
    "q": "The mean of 751, 754, 757, 760 and 763 is?",
    "opts": [
      "757",
      "754",
      "760",
      "763"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 757.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2024",
    "shift": 2,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-339",
    "subject": "Quant",
    "q": "A shop buys an article for ₹7580 and sells it for ₹9096. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2025",
    "shift": 3,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-340",
    "subject": "Quant",
    "q": "The mean of 758, 761, 764, 767 and 770 is?",
    "opts": [
      "764",
      "761",
      "767",
      "770"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 764.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2026",
    "shift": 1,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-341",
    "subject": "Quant",
    "q": "A shop buys an article for ₹7650 and sells it for ₹9180. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2017",
    "shift": 2,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-342",
    "subject": "Quant",
    "q": "The mean of 765, 768, 771, 774 and 777 is?",
    "opts": [
      "771",
      "768",
      "774",
      "777"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 771.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2018",
    "shift": 3,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-343",
    "subject": "Quant",
    "q": "A shop buys an article for ₹7720 and sells it for ₹9264. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2019",
    "shift": 1,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-344",
    "subject": "Quant",
    "q": "The mean of 772, 775, 778, 781 and 784 is?",
    "opts": [
      "778",
      "775",
      "781",
      "784"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 778.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2020",
    "shift": 2,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-345",
    "subject": "Quant",
    "q": "A shop buys an article for ₹7790 and sells it for ₹9348. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2021",
    "shift": 3,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-346",
    "subject": "Quant",
    "q": "The mean of 779, 782, 785, 788 and 791 is?",
    "opts": [
      "785",
      "782",
      "788",
      "791"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 785.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2022",
    "shift": 1,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-347",
    "subject": "Quant",
    "q": "A shop buys an article for ₹7860 and sells it for ₹9432. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2023",
    "shift": 2,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-348",
    "subject": "Quant",
    "q": "The mean of 786, 789, 792, 795 and 798 is?",
    "opts": [
      "792",
      "789",
      "795",
      "798"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 792.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2024",
    "shift": 3,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-349",
    "subject": "Quant",
    "q": "A shop buys an article for ₹7930 and sells it for ₹9516. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2025",
    "shift": 1,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-350",
    "subject": "Quant",
    "q": "The mean of 793, 796, 799, 802 and 805 is?",
    "opts": [
      "799",
      "796",
      "802",
      "805"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 799.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2026",
    "shift": 2,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-351",
    "subject": "Quant",
    "q": "A shop buys an article for ₹8000 and sells it for ₹9600. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2017",
    "shift": 3,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-352",
    "subject": "Quant",
    "q": "The mean of 800, 803, 806, 809 and 812 is?",
    "opts": [
      "806",
      "803",
      "809",
      "812"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 806.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2018",
    "shift": 1,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-353",
    "subject": "Quant",
    "q": "A shop buys an article for ₹8070 and sells it for ₹9684. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2019",
    "shift": 2,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-354",
    "subject": "Quant",
    "q": "The mean of 807, 810, 813, 816 and 819 is?",
    "opts": [
      "813",
      "810",
      "816",
      "819"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 813.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2020",
    "shift": 3,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-355",
    "subject": "Quant",
    "q": "A shop buys an article for ₹8140 and sells it for ₹9768. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2021",
    "shift": 1,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-356",
    "subject": "Quant",
    "q": "The mean of 814, 817, 820, 823 and 826 is?",
    "opts": [
      "820",
      "817",
      "823",
      "826"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 820.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2022",
    "shift": 2,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-357",
    "subject": "Quant",
    "q": "A shop buys an article for ₹8210 and sells it for ₹9852. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2023",
    "shift": 3,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-358",
    "subject": "Quant",
    "q": "The mean of 821, 824, 827, 830 and 833 is?",
    "opts": [
      "827",
      "824",
      "830",
      "833"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 827.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2024",
    "shift": 1,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-359",
    "subject": "Quant",
    "q": "A shop buys an article for ₹8280 and sells it for ₹9936. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2025",
    "shift": 2,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-360",
    "subject": "Quant",
    "q": "The mean of 828, 831, 834, 837 and 840 is?",
    "opts": [
      "834",
      "831",
      "837",
      "840"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 834.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2026",
    "shift": 3,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-361",
    "subject": "Quant",
    "q": "A shop buys an article for ₹8350 and sells it for ₹10020. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2017",
    "shift": 1,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-362",
    "subject": "Quant",
    "q": "The mean of 835, 838, 841, 844 and 847 is?",
    "opts": [
      "841",
      "838",
      "844",
      "847"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 841.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2018",
    "shift": 2,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-363",
    "subject": "Quant",
    "q": "A shop buys an article for ₹8420 and sells it for ₹10104. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2019",
    "shift": 3,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-364",
    "subject": "Quant",
    "q": "The mean of 842, 845, 848, 851 and 854 is?",
    "opts": [
      "848",
      "845",
      "851",
      "854"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 848.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2020",
    "shift": 1,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-365",
    "subject": "Quant",
    "q": "A shop buys an article for ₹8490 and sells it for ₹10188. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2021",
    "shift": 2,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-366",
    "subject": "Quant",
    "q": "The mean of 849, 852, 855, 858 and 861 is?",
    "opts": [
      "855",
      "852",
      "858",
      "861"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 855.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2022",
    "shift": 3,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-367",
    "subject": "Quant",
    "q": "A shop buys an article for ₹8560 and sells it for ₹10272. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2023",
    "shift": 1,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-368",
    "subject": "Quant",
    "q": "The mean of 856, 859, 862, 865 and 868 is?",
    "opts": [
      "862",
      "859",
      "865",
      "868"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 862.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2024",
    "shift": 2,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-369",
    "subject": "Quant",
    "q": "A shop buys an article for ₹8630 and sells it for ₹10356. Find the profit percentage.",
    "opts": [
      "20%",
      "12%",
      "25%",
      "15%"
    ],
    "ans": 0,
    "exp": "Profit / cost × 100 = 2/10 × 100 = 20%.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2025",
    "shift": 3,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-370",
    "subject": "Quant",
    "q": "The mean of 863, 866, 869, 872 and 875 is?",
    "opts": [
      "869",
      "866",
      "872",
      "875"
    ],
    "ans": 0,
    "exp": "The five equally spaced numbers have mean 869.",
    "topic": "Quant",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD"
    ],
    "year": "Practice 2026",
    "shift": 1,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-371",
    "subject": "English",
    "q": "Choose the closest synonym of ABUNDANT.",
    "opts": [
      "Plentiful",
      "Scarce",
      "Empty",
      "Rare"
    ],
    "ans": 0,
    "exp": "Abundant means plentiful.",
    "topic": "English",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2017",
    "shift": 2,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-372",
    "subject": "English",
    "q": "Choose the closest synonym of ACCURATE.",
    "opts": [
      "Correct",
      "False",
      "Vague",
      "Careless"
    ],
    "ans": 0,
    "exp": "Accurate means correct.",
    "topic": "English",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2018",
    "shift": 3,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-373",
    "subject": "English",
    "q": "Choose the closest synonym of ADVERSITY.",
    "opts": [
      "Hardship",
      "Prosperity",
      "Joy",
      "Comfort"
    ],
    "ans": 0,
    "exp": "Adversity means hardship.",
    "topic": "English",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2019",
    "shift": 1,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-374",
    "subject": "English",
    "q": "Choose the closest synonym of BENEVOLENT.",
    "opts": [
      "Kind",
      "Cruel",
      "Hostile",
      "Selfish"
    ],
    "ans": 0,
    "exp": "Benevolent means kind.",
    "topic": "English",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2020",
    "shift": 2,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-375",
    "subject": "English",
    "q": "Choose the closest synonym of BRIEF.",
    "opts": [
      "Short",
      "Lengthy",
      "Endless",
      "Vast"
    ],
    "ans": 0,
    "exp": "Brief means short.",
    "topic": "English",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2021",
    "shift": 3,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-376",
    "subject": "English",
    "q": "Choose the closest synonym of CEASE.",
    "opts": [
      "Stop",
      "Begin",
      "Continue",
      "Proceed"
    ],
    "ans": 0,
    "exp": "Cease means stop.",
    "topic": "English",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2022",
    "shift": 1,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-377",
    "subject": "English",
    "q": "Choose the closest synonym of DILIGENT.",
    "opts": [
      "Hardworking",
      "Lazy",
      "Idle",
      "Careless"
    ],
    "ans": 0,
    "exp": "Diligent means hardworking.",
    "topic": "English",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2023",
    "shift": 2,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-378",
    "subject": "English",
    "q": "Choose the closest synonym of EAGER.",
    "opts": [
      "Keen",
      "Reluctant",
      "Unwilling",
      "Apathetic"
    ],
    "ans": 0,
    "exp": "Eager means keen.",
    "topic": "English",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2024",
    "shift": 3,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-379",
    "subject": "English",
    "q": "Choose the closest synonym of FRAGILE.",
    "opts": [
      "Delicate",
      "Strong",
      "Sturdy",
      "Tough"
    ],
    "ans": 0,
    "exp": "Fragile means delicate.",
    "topic": "English",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2025",
    "shift": 1,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-380",
    "subject": "English",
    "q": "Choose the closest synonym of GENUINE.",
    "opts": [
      "Authentic",
      "False",
      "Artificial",
      "Fake"
    ],
    "ans": 0,
    "exp": "Genuine means authentic.",
    "topic": "English",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2026",
    "shift": 2,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-381",
    "subject": "English",
    "q": "Choose the closest synonym of HINDER.",
    "opts": [
      "Obstruct",
      "Assist",
      "Help",
      "Promote"
    ],
    "ans": 0,
    "exp": "Hinder means obstruct.",
    "topic": "English",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2017",
    "shift": 3,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-382",
    "subject": "English",
    "q": "Choose the closest synonym of IMMENSE.",
    "opts": [
      "Enormous",
      "Tiny",
      "Minute",
      "Small"
    ],
    "ans": 0,
    "exp": "Immense means enormous.",
    "topic": "English",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2018",
    "shift": 1,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-383",
    "subject": "English",
    "q": "Choose the closest synonym of JOVIAL.",
    "opts": [
      "Cheerful",
      "Gloomy",
      "Sad",
      "Miserable"
    ],
    "ans": 0,
    "exp": "Jovial means cheerful.",
    "topic": "English",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2019",
    "shift": 2,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-384",
    "subject": "English",
    "q": "Choose the closest synonym of KEEN.",
    "opts": [
      "Eager",
      "Indifferent",
      "Apathetic",
      "Uninterested"
    ],
    "ans": 0,
    "exp": "Keen means eager.",
    "topic": "English",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2020",
    "shift": 3,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-385",
    "subject": "English",
    "q": "Choose the closest synonym of LUCID.",
    "opts": [
      "Clear",
      "Obscure",
      "Confusing",
      "Vague"
    ],
    "ans": 0,
    "exp": "Lucid means clear.",
    "topic": "English",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2021",
    "shift": 1,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-386",
    "subject": "English",
    "q": "Choose the closest synonym of MODEST.",
    "opts": [
      "Humble",
      "Arrogant",
      "Proud",
      "Boastful"
    ],
    "ans": 0,
    "exp": "Modest means humble.",
    "topic": "English",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2022",
    "shift": 2,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-387",
    "subject": "English",
    "q": "Choose the closest synonym of NOVICE.",
    "opts": [
      "Beginner",
      "Expert",
      "Veteran",
      "Master"
    ],
    "ans": 0,
    "exp": "Novice means beginner.",
    "topic": "English",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2023",
    "shift": 3,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-388",
    "subject": "English",
    "q": "Choose the closest synonym of OBSOLETE.",
    "opts": [
      "Outdated",
      "Modern",
      "Current",
      "New"
    ],
    "ans": 0,
    "exp": "Obsolete means outdated.",
    "topic": "English",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2024",
    "shift": 1,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-389",
    "subject": "English",
    "q": "Choose the closest synonym of PLACID.",
    "opts": [
      "Calm",
      "Agitated",
      "Restless",
      "Stormy"
    ],
    "ans": 0,
    "exp": "Placid means calm.",
    "topic": "English",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2025",
    "shift": 2,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-390",
    "subject": "English",
    "q": "Choose the closest synonym of RELUCTANT.",
    "opts": [
      "Unwilling",
      "Eager",
      "Ready",
      "Keen"
    ],
    "ans": 0,
    "exp": "Reluctant means unwilling.",
    "topic": "English",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2026",
    "shift": 3,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-391",
    "subject": "English",
    "q": "Choose the closest synonym of SCARCE.",
    "opts": [
      "Rare",
      "Plentiful",
      "Abundant",
      "Ample"
    ],
    "ans": 0,
    "exp": "Scarce means rare.",
    "topic": "English",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2017",
    "shift": 1,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-392",
    "subject": "English",
    "q": "Choose the closest synonym of TRANQUIL.",
    "opts": [
      "Peaceful",
      "Noisy",
      "Agitated",
      "Restless"
    ],
    "ans": 0,
    "exp": "Tranquil means peaceful.",
    "topic": "English",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2018",
    "shift": 2,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-393",
    "subject": "English",
    "q": "Choose the closest synonym of URBANE.",
    "opts": [
      "Polished",
      "Rude",
      "Crude",
      "Uncouth"
    ],
    "ans": 0,
    "exp": "Urbane means polished.",
    "topic": "English",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2019",
    "shift": 3,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-394",
    "subject": "English",
    "q": "Choose the closest synonym of VIGILANT.",
    "opts": [
      "Watchful",
      "Careless",
      "Inattentive",
      "Negligent"
    ],
    "ans": 0,
    "exp": "Vigilant means watchful.",
    "topic": "English",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2020",
    "shift": 1,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-395",
    "subject": "English",
    "q": "Choose the closest synonym of ZEALOUS.",
    "opts": [
      "Enthusiastic",
      "Apathetic",
      "Indifferent",
      "Lethargic"
    ],
    "ans": 0,
    "exp": "Zealous means enthusiastic.",
    "topic": "English",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2021",
    "shift": 2,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-396",
    "subject": "English",
    "q": "Choose the closest synonym of ALLEVIATE.",
    "opts": [
      "Ease",
      "Worsen",
      "Increase",
      "Aggravate"
    ],
    "ans": 0,
    "exp": "Alleviate means ease.",
    "topic": "English",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2022",
    "shift": 3,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-397",
    "subject": "English",
    "q": "Choose the closest synonym of CONCEAL.",
    "opts": [
      "Hide",
      "Reveal",
      "Expose",
      "Disclose"
    ],
    "ans": 0,
    "exp": "Conceal means hide.",
    "topic": "English",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2023",
    "shift": 1,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-398",
    "subject": "English",
    "q": "Choose the closest synonym of DETER.",
    "opts": [
      "Discourage",
      "Encourage",
      "Invite",
      "Persuade"
    ],
    "ans": 0,
    "exp": "Deter means discourage.",
    "topic": "English",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2024",
    "shift": 2,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-399",
    "subject": "English",
    "q": "Choose the closest synonym of ELATED.",
    "opts": [
      "Overjoyed",
      "Depressed",
      "Sorrowful",
      "Dejected"
    ],
    "ans": 0,
    "exp": "Elated means overjoyed.",
    "topic": "English",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2025",
    "shift": 3,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-400",
    "subject": "English",
    "q": "Choose the closest synonym of FEASIBLE.",
    "opts": [
      "Practical",
      "Impossible",
      "Unworkable",
      "Unrealistic"
    ],
    "ans": 0,
    "exp": "Feasible means practical.",
    "topic": "English",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2026",
    "shift": 1,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-401",
    "subject": "English",
    "q": "Choose the closest synonym of GRIM.",
    "opts": [
      "Stern",
      "Cheerful",
      "Pleasant",
      "Joyful"
    ],
    "ans": 0,
    "exp": "Grim means stern.",
    "topic": "English",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2017",
    "shift": 2,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-402",
    "subject": "English",
    "q": "Choose the closest synonym of HOSTILE.",
    "opts": [
      "Unfriendly",
      "Friendly",
      "Welcoming",
      "Kind"
    ],
    "ans": 0,
    "exp": "Hostile means unfriendly.",
    "topic": "English",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2018",
    "shift": 3,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-403",
    "subject": "English",
    "q": "Choose the closest synonym of IMPARTIAL.",
    "opts": [
      "Unbiased",
      "Prejudiced",
      "Unfair",
      "Partial"
    ],
    "ans": 0,
    "exp": "Impartial means unbiased.",
    "topic": "English",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2019",
    "shift": 1,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-404",
    "subject": "English",
    "q": "Choose the closest synonym of LETHARGIC.",
    "opts": [
      "Sluggish",
      "Energetic",
      "Active",
      "Lively"
    ],
    "ans": 0,
    "exp": "Lethargic means sluggish.",
    "topic": "English",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2020",
    "shift": 2,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-405",
    "subject": "English",
    "q": "Choose the closest synonym of METICULOUS.",
    "opts": [
      "Careful",
      "Careless",
      "Sloppy",
      "Negligent"
    ],
    "ans": 0,
    "exp": "Meticulous means careful.",
    "topic": "English",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2021",
    "shift": 3,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-406",
    "subject": "English",
    "q": "Choose the closest synonym of NIMBLE.",
    "opts": [
      "Agile",
      "Clumsy",
      "Slow",
      "Awkward"
    ],
    "ans": 0,
    "exp": "Nimble means agile.",
    "topic": "English",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2022",
    "shift": 1,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-407",
    "subject": "English",
    "q": "Choose the closest synonym of OPAQUE.",
    "opts": [
      "Nontransparent",
      "Transparent",
      "Clear",
      "See-through"
    ],
    "ans": 0,
    "exp": "Opaque means nontransparent.",
    "topic": "English",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2023",
    "shift": 2,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-408",
    "subject": "English",
    "q": "Choose the closest synonym of PRUDENT.",
    "opts": [
      "Wise",
      "Reckless",
      "Foolish",
      "Rash"
    ],
    "ans": 0,
    "exp": "Prudent means wise.",
    "topic": "English",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2024",
    "shift": 3,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-409",
    "subject": "English",
    "q": "Choose the closest synonym of QUAINT.",
    "opts": [
      "Old-fashioned",
      "Modern",
      "Contemporary",
      "Fashionable"
    ],
    "ans": 0,
    "exp": "Quaint means old-fashioned.",
    "topic": "English",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2025",
    "shift": 1,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-410",
    "subject": "English",
    "q": "Choose the closest synonym of ROBUST.",
    "opts": [
      "Strong",
      "Weak",
      "Frail",
      "Feeble"
    ],
    "ans": 0,
    "exp": "Robust means strong.",
    "topic": "English",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2026",
    "shift": 2,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-411",
    "subject": "English",
    "q": "Choose the closest synonym of SERENE.",
    "opts": [
      "Peaceful",
      "Disturbed",
      "Agitated",
      "Troubled"
    ],
    "ans": 0,
    "exp": "Serene means peaceful.",
    "topic": "English",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2017",
    "shift": 3,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-412",
    "subject": "English",
    "q": "Choose the closest synonym of TEDIOUS.",
    "opts": [
      "Boring",
      "Exciting",
      "Thrilling",
      "Interesting"
    ],
    "ans": 0,
    "exp": "Tedious means boring.",
    "topic": "English",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2018",
    "shift": 1,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-413",
    "subject": "English",
    "q": "Choose the closest synonym of UNANIMOUS.",
    "opts": [
      "Agreed by all",
      "Divided",
      "Disputed",
      "Opposed"
    ],
    "ans": 0,
    "exp": "Unanimous means agreed by all.",
    "topic": "English",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2019",
    "shift": 2,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-414",
    "subject": "English",
    "q": "Choose the closest synonym of VIVID.",
    "opts": [
      "Bright",
      "Dull",
      "Faint",
      "Dim"
    ],
    "ans": 0,
    "exp": "Vivid means bright.",
    "topic": "English",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2020",
    "shift": 3,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-415",
    "subject": "English",
    "q": "Choose the closest synonym of WARY.",
    "opts": [
      "Cautious",
      "Careless",
      "Reckless",
      "Unconcerned"
    ],
    "ans": 0,
    "exp": "Wary means cautious.",
    "topic": "English",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2021",
    "shift": 1,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-416",
    "subject": "English",
    "q": "Choose the closest synonym of YIELD.",
    "opts": [
      "Surrender",
      "Resist",
      "Oppose",
      "Defy"
    ],
    "ans": 0,
    "exp": "Yield means surrender.",
    "topic": "English",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2022",
    "shift": 2,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-417",
    "subject": "English",
    "q": "Choose the closest synonym of AUSTERE.",
    "opts": [
      "Severe",
      "Luxurious",
      "Lavish",
      "Ornate"
    ],
    "ans": 0,
    "exp": "Austere means severe.",
    "topic": "English",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2023",
    "shift": 3,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-418",
    "subject": "English",
    "q": "Choose the closest synonym of BRAZEN.",
    "opts": [
      "Shameless",
      "Modest",
      "Shy",
      "Bashful"
    ],
    "ans": 0,
    "exp": "Brazen means shameless.",
    "topic": "English",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2024",
    "shift": 1,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-419",
    "subject": "English",
    "q": "Choose the closest synonym of COHERENT.",
    "opts": [
      "Logical",
      "Confused",
      "Disjointed",
      "Inconsistent"
    ],
    "ans": 0,
    "exp": "Coherent means logical.",
    "topic": "English",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2025",
    "shift": 2,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-420",
    "subject": "English",
    "q": "Choose the closest synonym of DEFIANT.",
    "opts": [
      "Resistant",
      "Obedient",
      "Submissive",
      "Compliant"
    ],
    "ans": 0,
    "exp": "Defiant means resistant.",
    "topic": "English",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2026",
    "shift": 3,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-421",
    "subject": "English",
    "q": "Choose the closest synonym of EMINENT.",
    "opts": [
      "Distinguished",
      "Unknown",
      "Obscure",
      "Unimportant"
    ],
    "ans": 0,
    "exp": "Eminent means distinguished.",
    "topic": "English",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2017",
    "shift": 1,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-422",
    "subject": "English",
    "q": "Choose the closest synonym of FURTIVE.",
    "opts": [
      "Secretive",
      "Open",
      "Overt",
      "Public"
    ],
    "ans": 0,
    "exp": "Furtive means secretive.",
    "topic": "English",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2018",
    "shift": 2,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-423",
    "subject": "English",
    "q": "Choose the closest synonym of GARRULOUS.",
    "opts": [
      "Talkative",
      "Silent",
      "Quiet",
      "Reserved"
    ],
    "ans": 0,
    "exp": "Garrulous means talkative.",
    "topic": "English",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2019",
    "shift": 3,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-424",
    "subject": "English",
    "q": "Choose the closest synonym of HAUGHTY.",
    "opts": [
      "Arrogant",
      "Humble",
      "Modest",
      "Meek"
    ],
    "ans": 0,
    "exp": "Haughty means arrogant.",
    "topic": "English",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2020",
    "shift": 1,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-425",
    "subject": "English",
    "q": "Choose the closest synonym of INEVITABLE.",
    "opts": [
      "Unavoidable",
      "Preventable",
      "Avoidable",
      "Unlikely"
    ],
    "ans": 0,
    "exp": "Inevitable means unavoidable.",
    "topic": "English",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2021",
    "shift": 2,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-426",
    "subject": "English",
    "q": "Choose the closest synonym of JUDICIOUS.",
    "opts": [
      "Sensible",
      "Foolish",
      "Rash",
      "Unwise"
    ],
    "ans": 0,
    "exp": "Judicious means sensible.",
    "topic": "English",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2022",
    "shift": 3,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-427",
    "subject": "English",
    "q": "Choose the closest synonym of LAVISH.",
    "opts": [
      "Extravagant",
      "Frugal",
      "Thrifty",
      "Miserly"
    ],
    "ans": 0,
    "exp": "Lavish means extravagant.",
    "topic": "English",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2023",
    "shift": 1,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-428",
    "subject": "English",
    "q": "Choose the closest synonym of MUNDANE.",
    "opts": [
      "Ordinary",
      "Extraordinary",
      "Unusual",
      "Exceptional"
    ],
    "ans": 0,
    "exp": "Mundane means ordinary.",
    "topic": "English",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2024",
    "shift": 2,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-429",
    "subject": "English",
    "q": "Choose the closest synonym of NEBULOUS.",
    "opts": [
      "Vague",
      "Clear",
      "Definite",
      "Precise"
    ],
    "ans": 0,
    "exp": "Nebulous means vague.",
    "topic": "English",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2025",
    "shift": 3,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-430",
    "subject": "English",
    "q": "Choose the closest synonym of OBSTINATE.",
    "opts": [
      "Stubborn",
      "Flexible",
      "Agreeable",
      "Compliant"
    ],
    "ans": 0,
    "exp": "Obstinate means stubborn.",
    "topic": "English",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2026",
    "shift": 1,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-431",
    "subject": "GK",
    "q": "What is the SI unit of force?",
    "opts": [
      "Newton",
      "Joule",
      "Watt",
      "Pascal"
    ],
    "ans": 0,
    "exp": "Newton.",
    "topic": "GS",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2017",
    "shift": 2,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-432",
    "subject": "GK",
    "q": "Which cell organelle produces most ATP in aerobic respiration?",
    "opts": [
      "Mitochondrion",
      "Ribosome",
      "Nucleus",
      "Golgi apparatus"
    ],
    "ans": 0,
    "exp": "Mitochondrion.",
    "topic": "GS",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2018",
    "shift": 3,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-433",
    "subject": "GK",
    "q": "Which gas do green plants primarily absorb during photosynthesis?",
    "opts": [
      "Carbon dioxide",
      "Oxygen",
      "Nitrogen",
      "Hydrogen"
    ],
    "ans": 0,
    "exp": "Carbon dioxide.",
    "topic": "GS",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2019",
    "shift": 1,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-434",
    "subject": "GK",
    "q": "What is the chemical symbol of sodium?",
    "opts": [
      "Na",
      "S",
      "So",
      "N"
    ],
    "ans": 0,
    "exp": "Na.",
    "topic": "GS",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2020",
    "shift": 2,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-435",
    "subject": "GK",
    "q": "What is the approximate speed of light in vacuum?",
    "opts": [
      "3 × 10⁸ m/s",
      "3 × 10⁶ m/s",
      "3 × 10⁵ m/s",
      "3 × 10³ m/s"
    ],
    "ans": 0,
    "exp": "3 × 10⁸ m/s.",
    "topic": "GS",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2021",
    "shift": 3,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-436",
    "subject": "GK",
    "q": "Which blood cells primarily carry oxygen?",
    "opts": [
      "Red blood cells",
      "Platelets",
      "White blood cells",
      "Plasma proteins"
    ],
    "ans": 0,
    "exp": "Red blood cells.",
    "topic": "GS",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2022",
    "shift": 1,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-437",
    "subject": "GK",
    "q": "Which part of the human eye controls the amount of incoming light?",
    "opts": [
      "Iris",
      "Retina",
      "Cornea",
      "Optic nerve"
    ],
    "ans": 0,
    "exp": "Iris.",
    "topic": "GS",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2023",
    "shift": 2,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-438",
    "subject": "GK",
    "q": "What is the pH of pure water at 25°C?",
    "opts": [
      "7",
      "1",
      "10",
      "14"
    ],
    "ans": 0,
    "exp": "7.",
    "topic": "GS",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2024",
    "shift": 3,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-439",
    "subject": "GK",
    "q": "Which acid is the main acid in vinegar?",
    "opts": [
      "Acetic acid",
      "Sulfuric acid",
      "Nitric acid",
      "Hydrochloric acid"
    ],
    "ans": 0,
    "exp": "Acetic acid.",
    "topic": "GS",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2025",
    "shift": 1,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-440",
    "subject": "GK",
    "q": "Which planet is known as the Red Planet?",
    "opts": [
      "Mars",
      "Venus",
      "Mercury",
      "Jupiter"
    ],
    "ans": 0,
    "exp": "Mars.",
    "topic": "GS",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2026",
    "shift": 2,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-441",
    "subject": "GK",
    "q": "Which vitamin helps normal blood clotting?",
    "opts": [
      "Vitamin K",
      "Vitamin C",
      "Vitamin A",
      "Vitamin B1"
    ],
    "ans": 0,
    "exp": "Vitamin K.",
    "topic": "GS",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2017",
    "shift": 3,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-442",
    "subject": "GK",
    "q": "What is the SI unit of electrical resistance?",
    "opts": [
      "Ohm",
      "Ampere",
      "Volt",
      "Coulomb"
    ],
    "ans": 0,
    "exp": "Ohm.",
    "topic": "GS",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2018",
    "shift": 1,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-443",
    "subject": "GK",
    "q": "Which metal is liquid at ordinary room temperature?",
    "opts": [
      "Mercury",
      "Iron",
      "Copper",
      "Aluminium"
    ],
    "ans": 0,
    "exp": "Mercury.",
    "topic": "GS",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2019",
    "shift": 2,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-444",
    "subject": "GK",
    "q": "Which instrument measures electric current?",
    "opts": [
      "Ammeter",
      "Voltmeter",
      "Barometer",
      "Thermometer"
    ],
    "ans": 0,
    "exp": "Ammeter.",
    "topic": "GS",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2020",
    "shift": 3,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-445",
    "subject": "GK",
    "q": "What is the chemical formula of common salt?",
    "opts": [
      "NaCl",
      "KCl",
      "NaOH",
      "CaCO₃"
    ],
    "ans": 0,
    "exp": "NaCl.",
    "topic": "GS",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2021",
    "shift": 1,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-446",
    "subject": "GK",
    "q": "Which human organ produces insulin?",
    "opts": [
      "Pancreas",
      "Liver",
      "Kidney",
      "Spleen"
    ],
    "ans": 0,
    "exp": "Pancreas.",
    "topic": "GS",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2022",
    "shift": 2,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-447",
    "subject": "GK",
    "q": "Which process converts a solid directly into a gas?",
    "opts": [
      "Sublimation",
      "Condensation",
      "Freezing",
      "Melting"
    ],
    "ans": 0,
    "exp": "Sublimation.",
    "topic": "GS",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2023",
    "shift": 3,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-448",
    "subject": "GK",
    "q": "Which mirror is commonly used as a vehicle rear-view mirror?",
    "opts": [
      "Convex mirror",
      "Concave mirror",
      "Plane-concave lens",
      "Cylindrical mirror"
    ],
    "ans": 0,
    "exp": "Convex mirror.",
    "topic": "GS",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2024",
    "shift": 1,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-449",
    "subject": "GK",
    "q": "Which is the hardest naturally occurring mineral?",
    "opts": [
      "Diamond",
      "Quartz",
      "Talc",
      "Gypsum"
    ],
    "ans": 0,
    "exp": "Diamond.",
    "topic": "GS",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2025",
    "shift": 2,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-450",
    "subject": "GK",
    "q": "Which gas is most abundant in Earth's atmosphere?",
    "opts": [
      "Nitrogen",
      "Oxygen",
      "Carbon dioxide",
      "Argon"
    ],
    "ans": 0,
    "exp": "Nitrogen.",
    "topic": "GS",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2026",
    "shift": 3,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-451",
    "subject": "GK",
    "q": "Which disease is caused by iodine deficiency?",
    "opts": [
      "Goitre",
      "Scurvy",
      "Rickets",
      "Beriberi"
    ],
    "ans": 0,
    "exp": "Goitre.",
    "topic": "GS",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2017",
    "shift": 1,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-452",
    "subject": "GK",
    "q": "What is the basic structural and functional unit of life?",
    "opts": [
      "Cell",
      "Tissue",
      "Organ",
      "Organ system"
    ],
    "ans": 0,
    "exp": "Cell.",
    "topic": "GS",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2018",
    "shift": 2,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-453",
    "subject": "GK",
    "q": "Which part of a plant carries water from roots to leaves?",
    "opts": [
      "Xylem",
      "Phloem",
      "Stomata",
      "Petal"
    ],
    "ans": 0,
    "exp": "Xylem.",
    "topic": "GS",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2019",
    "shift": 3,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-454",
    "subject": "GK",
    "q": "What is the SI unit of power?",
    "opts": [
      "Watt",
      "Joule",
      "Newton",
      "Volt"
    ],
    "ans": 0,
    "exp": "Watt.",
    "topic": "GS",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2020",
    "shift": 1,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-455",
    "subject": "GK",
    "q": "Which lens corrects myopia?",
    "opts": [
      "Concave lens",
      "Convex lens",
      "Cylindrical lens only",
      "Plane glass"
    ],
    "ans": 0,
    "exp": "Concave lens.",
    "topic": "GS",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2021",
    "shift": 2,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-456",
    "subject": "GK",
    "q": "Which particle has a negative electric charge?",
    "opts": [
      "Electron",
      "Proton",
      "Neutron",
      "Photon"
    ],
    "ans": 0,
    "exp": "Electron.",
    "topic": "GS",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2022",
    "shift": 3,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-457",
    "subject": "GK",
    "q": "Which law relates voltage, current and resistance?",
    "opts": [
      "Ohm's law",
      "Boyle's law",
      "Hooke's law",
      "Newton's third law"
    ],
    "ans": 0,
    "exp": "Ohm's law.",
    "topic": "GS",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2023",
    "shift": 1,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-458",
    "subject": "GK",
    "q": "Which element has atomic number 1?",
    "opts": [
      "Hydrogen",
      "Helium",
      "Lithium",
      "Oxygen"
    ],
    "ans": 0,
    "exp": "Hydrogen.",
    "topic": "GS",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2024",
    "shift": 2,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-459",
    "subject": "GK",
    "q": "Which enzyme in saliva begins starch digestion?",
    "opts": [
      "Amylase",
      "Pepsin",
      "Lipase",
      "Trypsin"
    ],
    "ans": 0,
    "exp": "Amylase.",
    "topic": "GS",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2025",
    "shift": 3,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-460",
    "subject": "GK",
    "q": "Which blood group is the universal red-cell donor in emergencies?",
    "opts": [
      "O negative",
      "AB positive",
      "A positive",
      "B negative"
    ],
    "ans": 0,
    "exp": "O negative.",
    "topic": "GS",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2026",
    "shift": 1,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-461",
    "subject": "GK",
    "q": "Who presides over a joint sitting of the Indian Parliament?",
    "opts": [
      "Speaker of Lok Sabha",
      "President of India",
      "Vice President",
      "Chief Justice of India"
    ],
    "ans": 0,
    "exp": "Speaker of Lok Sabha.",
    "topic": "GK",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2017",
    "shift": 2,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-462",
    "subject": "GK",
    "q": "Which constitutional body conducts elections to Parliament in India?",
    "opts": [
      "Election Commission of India",
      "Finance Commission",
      "NITI Aayog",
      "UPSC"
    ],
    "ans": 0,
    "exp": "Election Commission of India.",
    "topic": "GK",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2018",
    "shift": 3,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-463",
    "subject": "GK",
    "q": "How many Fundamental Duties are currently listed in the Indian Constitution?",
    "opts": [
      "11",
      "10",
      "12",
      "9"
    ],
    "ans": 0,
    "exp": "11.",
    "topic": "GK",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2019",
    "shift": 1,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-464",
    "subject": "GK",
    "q": "Which schedule contains the anti-defection provisions?",
    "opts": [
      "Tenth Schedule",
      "Eighth Schedule",
      "Ninth Schedule",
      "Twelfth Schedule"
    ],
    "ans": 0,
    "exp": "Tenth Schedule.",
    "topic": "GK",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2020",
    "shift": 2,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-465",
    "subject": "GK",
    "q": "Who appoints the Governor of an Indian state?",
    "opts": [
      "President",
      "Prime Minister directly",
      "Chief Minister",
      "Chief Justice of India"
    ],
    "ans": 0,
    "exp": "President.",
    "topic": "GK",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2021",
    "shift": 3,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-466",
    "subject": "GK",
    "q": "Which Article deals with constitutional remedies?",
    "opts": [
      "Article 32",
      "Article 21",
      "Article 19",
      "Article 44"
    ],
    "ans": 0,
    "exp": "Article 32.",
    "topic": "GK",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2022",
    "shift": 1,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-467",
    "subject": "GK",
    "q": "What is the minimum age to become a Lok Sabha member?",
    "opts": [
      "25 years",
      "18 years",
      "21 years",
      "30 years"
    ],
    "ans": 0,
    "exp": "25 years.",
    "topic": "GK",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2023",
    "shift": 2,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-468",
    "subject": "GK",
    "q": "Which is the upper house of India's Parliament?",
    "opts": [
      "Rajya Sabha",
      "Lok Sabha",
      "Vidhan Sabha",
      "Gram Sabha"
    ],
    "ans": 0,
    "exp": "Rajya Sabha.",
    "topic": "GK",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2024",
    "shift": 3,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-469",
    "subject": "GK",
    "q": "Which Indian classical dance originated in Kerala and uses elaborate makeup?",
    "opts": [
      "Kathakali",
      "Kathak",
      "Odissi",
      "Sattriya"
    ],
    "ans": 0,
    "exp": "Kathakali.",
    "topic": "GK",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2025",
    "shift": 1,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-470",
    "subject": "GK",
    "q": "Where is the headquarters of the Reserve Bank of India?",
    "opts": [
      "Mumbai",
      "New Delhi",
      "Kolkata",
      "Chennai"
    ],
    "ans": 0,
    "exp": "Mumbai.",
    "topic": "GK",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2026",
    "shift": 2,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-471",
    "subject": "GK",
    "q": "What does GDP stand for?",
    "opts": [
      "Gross Domestic Product",
      "General Domestic Price",
      "Gross Development Plan",
      "Government Deposit Policy"
    ],
    "ans": 0,
    "exp": "Gross Domestic Product.",
    "topic": "GK",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2017",
    "shift": 3,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-472",
    "subject": "GK",
    "q": "Which civilization built the Great Bath at Mohenjo-daro?",
    "opts": [
      "Harappan civilization",
      "Vedic civilization",
      "Mauryan Empire",
      "Gupta Empire"
    ],
    "ans": 0,
    "exp": "Harappan civilization.",
    "topic": "GK",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2018",
    "shift": 1,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-473",
    "subject": "GK",
    "q": "Who founded the Mauryan Empire?",
    "opts": [
      "Chandragupta Maurya",
      "Ashoka",
      "Bindusara",
      "Samudragupta"
    ],
    "ans": 0,
    "exp": "Chandragupta Maurya.",
    "topic": "GK",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2019",
    "shift": 2,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-474",
    "subject": "GK",
    "q": "Which movement was launched in 1942 with the slogan Do or Die?",
    "opts": [
      "Quit India Movement",
      "Non-Cooperation Movement",
      "Swadeshi Movement",
      "Khilafat Movement"
    ],
    "ans": 0,
    "exp": "Quit India Movement.",
    "topic": "GK",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2020",
    "shift": 3,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-475",
    "subject": "GK",
    "q": "Which Indian state is associated with the Hornbill Festival?",
    "opts": [
      "Nagaland",
      "Goa",
      "Punjab",
      "Gujarat"
    ],
    "ans": 0,
    "exp": "Nagaland.",
    "topic": "GK",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2021",
    "shift": 1,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-476",
    "subject": "GK",
    "q": "Which strait separates India and Sri Lanka?",
    "opts": [
      "Palk Strait",
      "Strait of Malacca",
      "Bering Strait",
      "Strait of Hormuz"
    ],
    "ans": 0,
    "exp": "Palk Strait.",
    "topic": "GK",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2022",
    "shift": 2,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-477",
    "subject": "GK",
    "q": "Which soil is especially suitable for cotton cultivation in India?",
    "opts": [
      "Black soil",
      "Laterite soil",
      "Desert soil",
      "Mountain soil"
    ],
    "ans": 0,
    "exp": "Black soil.",
    "topic": "GK",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2023",
    "shift": 3,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-478",
    "subject": "GK",
    "q": "Which line of latitude passes through eight Indian states?",
    "opts": [
      "Tropic of Cancer",
      "Equator",
      "Tropic of Capricorn",
      "Arctic Circle"
    ],
    "ans": 0,
    "exp": "Tropic of Cancer.",
    "topic": "GK",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2024",
    "shift": 1,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-479",
    "subject": "GK",
    "q": "Which is India's highest civilian award?",
    "opts": [
      "Bharat Ratna",
      "Padma Vibhushan",
      "Padma Bhushan",
      "Padma Shri"
    ],
    "ans": 0,
    "exp": "Bharat Ratna.",
    "topic": "GK",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2025",
    "shift": 2,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-480",
    "subject": "GK",
    "q": "Which institution issues Indian currency notes except the one-rupee note?",
    "opts": [
      "Reserve Bank of India",
      "State Bank of India",
      "SEBI",
      "NABARD"
    ],
    "ans": 0,
    "exp": "Reserve Bank of India.",
    "topic": "GK",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2026",
    "shift": 3,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-481",
    "subject": "GK",
    "q": "Who wrote the book Discovery of India?",
    "opts": [
      "Jawaharlal Nehru",
      "Mahatma Gandhi",
      "B. R. Ambedkar",
      "Sardar Patel"
    ],
    "ans": 0,
    "exp": "Jawaharlal Nehru.",
    "topic": "GK",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2017",
    "shift": 1,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-482",
    "subject": "GK",
    "q": "Where is the Sun Temple at Konark?",
    "opts": [
      "Odisha",
      "Gujarat",
      "Rajasthan",
      "Tamil Nadu"
    ],
    "ans": 0,
    "exp": "Odisha.",
    "topic": "GK",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2018",
    "shift": 2,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-483",
    "subject": "GK",
    "q": "Which river flows through the city of Varanasi?",
    "opts": [
      "Ganga",
      "Narmada",
      "Krishna",
      "Kaveri"
    ],
    "ans": 0,
    "exp": "Ganga.",
    "topic": "GK",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2019",
    "shift": 3,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-484",
    "subject": "GK",
    "q": "Which Indian state has the longest coastline?",
    "opts": [
      "Gujarat",
      "Kerala",
      "Odisha",
      "West Bengal"
    ],
    "ans": 0,
    "exp": "Gujarat.",
    "topic": "GK",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2020",
    "shift": 1,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-485",
    "subject": "GK",
    "q": "Which constitutional amendment introduced Panchayati Raj provisions?",
    "opts": [
      "73rd Amendment",
      "42nd Amendment",
      "44th Amendment",
      "86th Amendment"
    ],
    "ans": 0,
    "exp": "73rd Amendment.",
    "topic": "GK",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2021",
    "shift": 2,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-486",
    "subject": "GK",
    "q": "Which country hosted the 2017 FIFA U-17 World Cup?",
    "opts": [
      "India",
      "Brazil",
      "Russia",
      "Qatar"
    ],
    "ans": 0,
    "exp": "India. Event year: 2017.",
    "topic": "Current Affairs",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2017",
    "shift": 3,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-487",
    "subject": "GK",
    "q": "Which major indirect tax was launched in India on 1 July 2017?",
    "opts": [
      "GST",
      "Wealth tax",
      "Estate duty",
      "Securities transaction tax"
    ],
    "ans": 0,
    "exp": "GST. Event year: 2017.",
    "topic": "Current Affairs",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2017",
    "shift": 1,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-488",
    "subject": "GK",
    "q": "Which Indian state hosted the 2018 Men's Hockey World Cup?",
    "opts": [
      "Odisha",
      "Punjab",
      "Haryana",
      "Kerala"
    ],
    "ans": 0,
    "exp": "Odisha. Event year: 2018.",
    "topic": "Current Affairs",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2018",
    "shift": 2,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-489",
    "subject": "GK",
    "q": "Who won the men's singles title at Wimbledon in 2018?",
    "opts": [
      "Novak Djokovic",
      "Roger Federer",
      "Rafael Nadal",
      "Andy Murray"
    ],
    "ans": 0,
    "exp": "Novak Djokovic. Event year: 2018.",
    "topic": "Current Affairs",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2018",
    "shift": 3,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-490",
    "subject": "GK",
    "q": "Which Indian lunar mission launched in July 2019?",
    "opts": [
      "Chandrayaan-2",
      "Chandrayaan-1",
      "Chandrayaan-3",
      "Aditya-L1"
    ],
    "ans": 0,
    "exp": "Chandrayaan-2. Event year: 2019.",
    "topic": "Current Affairs",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2019",
    "shift": 1,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-491",
    "subject": "GK",
    "q": "Which country won the 2019 ICC Men's Cricket World Cup?",
    "opts": [
      "England",
      "India",
      "Australia",
      "New Zealand"
    ],
    "ans": 0,
    "exp": "England. Event year: 2019.",
    "topic": "Current Affairs",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2019",
    "shift": 2,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-492",
    "subject": "GK",
    "q": "Which organization declared COVID-19 a pandemic in March 2020?",
    "opts": [
      "WHO",
      "UNESCO",
      "WTO",
      "IMF"
    ],
    "ans": 0,
    "exp": "WHO. Event year: 2020.",
    "topic": "Current Affairs",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2020",
    "shift": 3,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-493",
    "subject": "GK",
    "q": "Which Indian education policy was approved in July 2020?",
    "opts": [
      "National Education Policy 2020",
      "National Education Policy 1986",
      "Sarva Shiksha Abhiyan",
      "Operation Blackboard"
    ],
    "ans": 0,
    "exp": "National Education Policy 2020. Event year: 2020.",
    "topic": "Current Affairs",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2020",
    "shift": 1,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-494",
    "subject": "GK",
    "q": "Who won India's first Olympic athletics gold medal at Tokyo 2020, held in 2021?",
    "opts": [
      "Neeraj Chopra",
      "Abhinav Bindra",
      "Bajrang Punia",
      "Ravi Dahiya"
    ],
    "ans": 0,
    "exp": "Neeraj Chopra. Event year: 2021.",
    "topic": "Current Affairs",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2021",
    "shift": 2,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-495",
    "subject": "GK",
    "q": "Which city hosted COP26 in 2021?",
    "opts": [
      "Glasgow",
      "Paris",
      "Dubai",
      "Madrid"
    ],
    "ans": 0,
    "exp": "Glasgow. Event year: 2021.",
    "topic": "Current Affairs",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2021",
    "shift": 3,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-496",
    "subject": "GK",
    "q": "Which country won the 2022 FIFA Men's World Cup?",
    "opts": [
      "Argentina",
      "France",
      "Brazil",
      "Croatia"
    ],
    "ans": 0,
    "exp": "Argentina. Event year: 2022.",
    "topic": "Current Affairs",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2022",
    "shift": 1,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-497",
    "subject": "GK",
    "q": "Which city hosted the 2022 Commonwealth Games?",
    "opts": [
      "Birmingham",
      "Glasgow",
      "Gold Coast",
      "Manchester"
    ],
    "ans": 0,
    "exp": "Birmingham. Event year: 2022.",
    "topic": "Current Affairs",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2022",
    "shift": 2,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-498",
    "subject": "GK",
    "q": "Which country held the G20 presidency in 2023?",
    "opts": [
      "India",
      "Indonesia",
      "Brazil",
      "Italy"
    ],
    "ans": 0,
    "exp": "India. Event year: 2023.",
    "topic": "Current Affairs",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2023",
    "shift": 3,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-499",
    "subject": "GK",
    "q": "On which date did Chandrayaan-3 achieve its lunar soft landing?",
    "opts": [
      "23 August 2023",
      "15 August 2023",
      "14 July 2023",
      "2 September 2023"
    ],
    "ans": 0,
    "exp": "23 August 2023. Event year: 2023.",
    "topic": "Current Affairs",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2023",
    "shift": 1,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-500",
    "subject": "GK",
    "q": "Which Indian solar observatory mission launched in September 2023?",
    "opts": [
      "Aditya-L1",
      "AstroSat",
      "Mangalyaan",
      "Chandrayaan-1"
    ],
    "ans": 0,
    "exp": "Aditya-L1. Event year: 2023.",
    "topic": "Current Affairs",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2023",
    "shift": 2,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-501",
    "subject": "GK",
    "q": "Which city hosted the G20 Leaders' Summit in September 2023?",
    "opts": [
      "New Delhi",
      "Mumbai",
      "Bengaluru",
      "Hyderabad"
    ],
    "ans": 0,
    "exp": "New Delhi. Event year: 2023.",
    "topic": "Current Affairs",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2023",
    "shift": 3,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-502",
    "subject": "GK",
    "q": "Which city hosted the 2024 Summer Olympics?",
    "opts": [
      "Paris",
      "Tokyo",
      "Los Angeles",
      "London"
    ],
    "ans": 0,
    "exp": "Paris. Event year: 2024.",
    "topic": "Current Affairs",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2024",
    "shift": 1,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-503",
    "subject": "GK",
    "q": "Which country won the 2024 ICC Men's T20 World Cup?",
    "opts": [
      "India",
      "South Africa",
      "England",
      "Australia"
    ],
    "ans": 0,
    "exp": "India. Event year: 2024.",
    "topic": "Current Affairs",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2024",
    "shift": 2,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-504",
    "subject": "GK",
    "q": "Who became the youngest undisputed World Chess Champion in December 2024?",
    "opts": [
      "D. Gukesh",
      "Magnus Carlsen",
      "Viswanathan Anand",
      "R. Praggnanandhaa"
    ],
    "ans": 0,
    "exp": "D. Gukesh. Event year: 2024.",
    "topic": "Current Affairs",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2024",
    "shift": 3,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-505",
    "subject": "GK",
    "q": "Which country hosted COP29 in 2024?",
    "opts": [
      "Azerbaijan",
      "United Arab Emirates",
      "Egypt",
      "Brazil"
    ],
    "ans": 0,
    "exp": "Azerbaijan. Event year: 2024.",
    "topic": "Current Affairs",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2024",
    "shift": 1,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-506",
    "subject": "GK",
    "q": "Which country won the 2025 ICC Champions Trophy?",
    "opts": [
      "India",
      "New Zealand",
      "Australia",
      "Pakistan"
    ],
    "ans": 0,
    "exp": "India. Event year: 2025.",
    "topic": "Current Affairs",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2025",
    "shift": 2,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-507",
    "subject": "GK",
    "q": "Which country hosted COP30 in Belém in 2025?",
    "opts": [
      "Brazil",
      "France",
      "India",
      "Kenya"
    ],
    "ans": 0,
    "exp": "Brazil. Event year: 2025.",
    "topic": "Current Affairs",
    "exams": [
      "CGL",
      "MTS",
      "CHSL",
      "GD",
      "Steno"
    ],
    "year": "Practice 2025",
    "shift": 3,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-508",
    "subject": "Computer",
    "q": "What does CPU stand for?",
    "opts": [
      "Central Processing Unit",
      "Computer Power Unit",
      "Central Program Utility",
      "Control Processing User"
    ],
    "ans": 0,
    "exp": "Central Processing Unit.",
    "topic": "Computer",
    "exams": [
      "CGL",
      "CHSL"
    ],
    "year": "Practice 2024",
    "shift": 1,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-509",
    "subject": "Computer",
    "q": "Which memory is volatile?",
    "opts": [
      "RAM",
      "ROM",
      "DVD",
      "SSD"
    ],
    "ans": 0,
    "exp": "RAM.",
    "topic": "Computer",
    "exams": [
      "CGL",
      "CHSL"
    ],
    "year": "Practice 2025",
    "shift": 2,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-510",
    "subject": "Computer",
    "q": "Which device is primarily an input device?",
    "opts": [
      "Keyboard",
      "Monitor",
      "Printer",
      "Speaker"
    ],
    "ans": 0,
    "exp": "Keyboard.",
    "topic": "Computer",
    "exams": [
      "CGL",
      "CHSL"
    ],
    "year": "Practice 2026",
    "shift": 3,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-511",
    "subject": "Computer",
    "q": "What does URL stand for?",
    "opts": [
      "Uniform Resource Locator",
      "Universal Record Link",
      "Unified Routing Language",
      "User Resource List"
    ],
    "ans": 0,
    "exp": "Uniform Resource Locator.",
    "topic": "Computer",
    "exams": [
      "CGL",
      "CHSL"
    ],
    "year": "Practice 2017",
    "shift": 1,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-512",
    "subject": "Computer",
    "q": "Which protocol is commonly used for secure web browsing?",
    "opts": [
      "HTTPS",
      "FTP",
      "SMTP",
      "POP3"
    ],
    "ans": 0,
    "exp": "HTTPS.",
    "topic": "Computer",
    "exams": [
      "CGL",
      "CHSL"
    ],
    "year": "Practice 2018",
    "shift": 2,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-513",
    "subject": "Computer",
    "q": "Which shortcut usually copies selected text on Windows?",
    "opts": [
      "Ctrl+C",
      "Ctrl+V",
      "Ctrl+X",
      "Ctrl+P"
    ],
    "ans": 0,
    "exp": "Ctrl+C.",
    "topic": "Computer",
    "exams": [
      "CGL",
      "CHSL"
    ],
    "year": "Practice 2019",
    "shift": 3,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-514",
    "subject": "Computer",
    "q": "Which shortcut usually pastes copied text on Windows?",
    "opts": [
      "Ctrl+V",
      "Ctrl+C",
      "Ctrl+Z",
      "Ctrl+A"
    ],
    "ans": 0,
    "exp": "Ctrl+V.",
    "topic": "Computer",
    "exams": [
      "CGL",
      "CHSL"
    ],
    "year": "Practice 2020",
    "shift": 1,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-515",
    "subject": "Computer",
    "q": "Which shortcut usually undoes the last action?",
    "opts": [
      "Ctrl+Z",
      "Ctrl+Y",
      "Ctrl+S",
      "Ctrl+N"
    ],
    "ans": 0,
    "exp": "Ctrl+Z.",
    "topic": "Computer",
    "exams": [
      "CGL",
      "CHSL"
    ],
    "year": "Practice 2021",
    "shift": 2,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-516",
    "subject": "Computer",
    "q": "Which application is used mainly for spreadsheets?",
    "opts": [
      "Microsoft Excel",
      "Microsoft Word",
      "Microsoft Paint",
      "Microsoft PowerPoint"
    ],
    "ans": 0,
    "exp": "Microsoft Excel.",
    "topic": "Computer",
    "exams": [
      "CGL",
      "CHSL"
    ],
    "year": "Practice 2022",
    "shift": 3,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-517",
    "subject": "Computer",
    "q": "In a spreadsheet, a formula usually starts with which symbol?",
    "opts": [
      "=",
      "#",
      "@",
      "&"
    ],
    "ans": 0,
    "exp": "=.",
    "topic": "Computer",
    "exams": [
      "CGL",
      "CHSL"
    ],
    "year": "Practice 2023",
    "shift": 1,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-518",
    "subject": "Computer",
    "q": "What is a firewall primarily used for?",
    "opts": [
      "Filtering network traffic",
      "Printing documents",
      "Increasing screen size",
      "Formatting cells"
    ],
    "ans": 0,
    "exp": "Filtering network traffic.",
    "topic": "Computer",
    "exams": [
      "CGL",
      "CHSL"
    ],
    "year": "Practice 2024",
    "shift": 2,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-519",
    "subject": "Computer",
    "q": "What is phishing?",
    "opts": [
      "Deceptive messages seeking sensitive information",
      "Compressing files",
      "Backing up data",
      "Updating hardware"
    ],
    "ans": 0,
    "exp": "Deceptive messages seeking sensitive information.",
    "topic": "Computer",
    "exams": [
      "CGL",
      "CHSL"
    ],
    "year": "Practice 2025",
    "shift": 3,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-520",
    "subject": "Computer",
    "q": "Which is an example of an operating system?",
    "opts": [
      "Linux",
      "Excel",
      "Chrome",
      "Photoshop"
    ],
    "ans": 0,
    "exp": "Linux.",
    "topic": "Computer",
    "exams": [
      "CGL",
      "CHSL"
    ],
    "year": "Practice 2026",
    "shift": 1,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-521",
    "subject": "Computer",
    "q": "Which storage device has no moving mechanical parts?",
    "opts": [
      "SSD",
      "Magnetic hard disk",
      "Floppy disk",
      "Optical disc drive"
    ],
    "ans": 0,
    "exp": "SSD.",
    "topic": "Computer",
    "exams": [
      "CGL",
      "CHSL"
    ],
    "year": "Practice 2017",
    "shift": 2,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-522",
    "subject": "Computer",
    "q": "What does LAN stand for?",
    "opts": [
      "Local Area Network",
      "Large Access Node",
      "Logical Address Number",
      "Linked Application Name"
    ],
    "ans": 0,
    "exp": "Local Area Network.",
    "topic": "Computer",
    "exams": [
      "CGL",
      "CHSL"
    ],
    "year": "Practice 2018",
    "shift": 3,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-523",
    "subject": "Computer",
    "q": "Which of these is a web browser?",
    "opts": [
      "Firefox",
      "Windows",
      "Ubuntu",
      "Android"
    ],
    "ans": 0,
    "exp": "Firefox.",
    "topic": "Computer",
    "exams": [
      "CGL",
      "CHSL"
    ],
    "year": "Practice 2019",
    "shift": 1,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-524",
    "subject": "Computer",
    "q": "Which file extension commonly identifies a PDF document?",
    "opts": [
      ".pdf",
      ".exe",
      ".mp3",
      ".jpg"
    ],
    "ans": 0,
    "exp": ".pdf.",
    "topic": "Computer",
    "exams": [
      "CGL",
      "CHSL"
    ],
    "year": "Practice 2020",
    "shift": 2,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-525",
    "subject": "Computer",
    "q": "Which type of software can replicate by infecting other files?",
    "opts": [
      "Computer virus",
      "Spreadsheet",
      "Text editor",
      "Device driver"
    ],
    "ans": 0,
    "exp": "Computer virus.",
    "topic": "Computer",
    "exams": [
      "CGL",
      "CHSL"
    ],
    "year": "Practice 2021",
    "shift": 3,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-526",
    "subject": "Computer",
    "q": "Which unit equals eight bits?",
    "opts": [
      "Byte",
      "Nibble",
      "Kilobyte",
      "Megabyte"
    ],
    "ans": 0,
    "exp": "Byte.",
    "topic": "Computer",
    "exams": [
      "CGL",
      "CHSL"
    ],
    "year": "Practice 2022",
    "shift": 1,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-527",
    "subject": "Computer",
    "q": "Which device connects multiple networks and forwards packets?",
    "opts": [
      "Router",
      "Keyboard",
      "Scanner",
      "Projector"
    ],
    "ans": 0,
    "exp": "Router.",
    "topic": "Computer",
    "exams": [
      "CGL",
      "CHSL"
    ],
    "year": "Practice 2023",
    "shift": 2,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-528",
    "subject": "Computer",
    "q": "What is two-factor authentication?",
    "opts": [
      "Using two different authentication factors",
      "Typing a password twice",
      "Using two browsers",
      "Opening two tabs"
    ],
    "ans": 0,
    "exp": "Using two different authentication factors.",
    "topic": "Computer",
    "exams": [
      "CGL",
      "CHSL"
    ],
    "year": "Practice 2024",
    "shift": 3,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-529",
    "subject": "Computer",
    "q": "Which shortcut usually saves a document?",
    "opts": [
      "Ctrl+S",
      "Ctrl+P",
      "Ctrl+F",
      "Ctrl+H"
    ],
    "ans": 0,
    "exp": "Ctrl+S.",
    "topic": "Computer",
    "exams": [
      "CGL",
      "CHSL"
    ],
    "year": "Practice 2025",
    "shift": 1,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-530",
    "subject": "Computer",
    "q": "Which email field hides recipients from other recipients?",
    "opts": [
      "BCC",
      "CC",
      "To",
      "Subject"
    ],
    "ans": 0,
    "exp": "BCC.",
    "topic": "Computer",
    "exams": [
      "CGL",
      "CHSL"
    ],
    "year": "Practice 2026",
    "shift": 2,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-531",
    "subject": "Computer",
    "q": "What does DNS primarily translate?",
    "opts": [
      "Domain names into IP addresses",
      "Images into text",
      "Passwords into usernames",
      "Files into folders"
    ],
    "ans": 0,
    "exp": "Domain names into IP addresses.",
    "topic": "Computer",
    "exams": [
      "CGL",
      "CHSL"
    ],
    "year": "Practice 2017",
    "shift": 3,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-532",
    "subject": "Computer",
    "q": "Which is an example of cloud storage?",
    "opts": [
      "Google Drive",
      "BIOS",
      "CPU cache",
      "Local RAM"
    ],
    "ans": 0,
    "exp": "Google Drive.",
    "topic": "Computer",
    "exams": [
      "CGL",
      "CHSL"
    ],
    "year": "Practice 2018",
    "shift": 1,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-533",
    "subject": "Computer",
    "q": "Which spreadsheet reference is absolute?",
    "opts": [
      "$A$1",
      "A1",
      "A$",
      "1A"
    ],
    "ans": 0,
    "exp": "$A$1.",
    "topic": "Computer",
    "exams": [
      "CGL",
      "CHSL"
    ],
    "year": "Practice 2019",
    "shift": 2,
    "day": 1,
    "category": "repeated"
  },
  {
    "id": "expanded-534",
    "subject": "Computer",
    "q": "Which key removes the character to the left of the cursor?",
    "opts": [
      "Backspace",
      "Delete",
      "Shift",
      "Caps Lock"
    ],
    "ans": 0,
    "exp": "Backspace.",
    "topic": "Computer",
    "exams": [
      "CGL",
      "CHSL"
    ],
    "year": "Practice 2020",
    "shift": 3,
    "day": 2,
    "category": "repeated"
  },
  {
    "id": "expanded-535",
    "subject": "Computer",
    "q": "Which device converts paper documents into digital images?",
    "opts": [
      "Scanner",
      "Speaker",
      "Projector",
      "Plotter"
    ],
    "ans": 0,
    "exp": "Scanner.",
    "topic": "Computer",
    "exams": [
      "CGL",
      "CHSL"
    ],
    "year": "Practice 2021",
    "shift": 1,
    "day": 3,
    "category": "repeated"
  },
  {
    "id": "expanded-536",
    "subject": "Computer",
    "q": "Which is the main purpose of an antivirus program?",
    "opts": [
      "Detect and remove malicious software",
      "Edit photographs",
      "Create slides",
      "Measure internet speed"
    ],
    "ans": 0,
    "exp": "Detect and remove malicious software.",
    "topic": "Computer",
    "exams": [
      "CGL",
      "CHSL"
    ],
    "year": "Practice 2022",
    "shift": 2,
    "day": 4,
    "category": "repeated"
  },
  {
    "id": "expanded-537",
    "subject": "Computer",
    "q": "Which port type is widely used to connect modern peripherals?",
    "opts": [
      "USB",
      "VGA only",
      "PS/2 only",
      "Parallel port only"
    ],
    "ans": 0,
    "exp": "USB.",
    "topic": "Computer",
    "exams": [
      "CGL",
      "CHSL"
    ],
    "year": "Practice 2023",
    "shift": 3,
    "day": 1,
    "category": "repeated"
  }
];

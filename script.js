document.addEventListener("DOMContentLoaded", function () {

  const courses = [
    ["GE 101","General Education I","2",["P1","P2"],[],[]],
    [
      "MA 104",
      "Ordinary Differential Equations (First Half)",
      "2",
      [
        "E1",
        "E2"
      ],
      [
        "H1"
      ],
      []
    ],
    [
      "ES 113",
      "Data-Centric Computing",
      "3",
      [
        "C1"
      ],
      [],
      [
        "N1",
        "N2"
      ]
    ],
    [
      "ES 114",
      "Probability, Statistics, and Data Visualization",
      "3",
      [
        "D1"
      ],
      [],
      [
        "I1",
        "K2"
      ]
    ],
    [
      "ES 116",
      "Principles and Applications of Electrical Engineering",
      "5",
      [
        "F1",
        "F2",
        "H2"
      ],
      [
        "H2"
      ],
      [
        "I1",
        "J1",
        "I2",
        "K2",
        "J2"
      ]
    ],
    [
      "ES 116(A)",
      "Principles and Applications of Electrical Engineering",
      "5",
      [
        "F1",
        "F2"
      ],
      [
        "H2"
      ],
      [
        "K1",
        "L2"
      ]
    ],
    [
      "ES 117",
      "The World of Engineering",
      "2",
      [],
      [],
      [
        "J2",
        "M2"
      ]
    ],
    [
      "BS 192",
      "Undergraduate Science Laboratory",
      "3",
      [],
      [],
      [
        "I1",
        "K1",
        "J1",
        "L1",
        "I2",
        "M1",
        "K2",
        "L2",
        "J2",
        "M2"
      ]
    ],
    [
      "HS 192",
      "Introduction to Writing II",
      "2",
      [],
      [
        "G1",
        "G2",
        "B1",
        "B2"
      ],
      []
    ],
    [
      "PE 102",
      "Physical Education",
      "0",
      [],
      [],
      []
    ],
    [
      "IN 102",
      "Comprehensive Viva Voce",
      "0",
      [
        "C2",
        "D2"
      ],
      [],
      []
    ],
    [
      "CS 201",
      "Theory of Computing",
      "4",
      [
        "C1",
        "C2"
      ],
      [
        "H2"
      ],
      []
    ],
    [
      "PH 201",
      "Introduction to Electrodynamics",
      "4",
      [
        "L1",
        "L2"
      ],
      [
        "B2"
      ],
      []
    ],
    [
      "CL 202",
      "Chemical Engineering Thermodynamics",
      "3",
      [
        "F1",
        "F2"
      ],
      [],
      []
    ],
    [
      "CS 203",
      "Software Tools & Techniques for AI",
      "4",
      [
        "K1"
      ],
      [],
      [
        "J2",
        "M2"
      ]
    ],
    [
      "ES 202",
      "Introduction to Materials",
      "4",
      [
        "M1",
        "M2"
      ],
      [
        "J1"
      ],
      []
    ],
    [
      "ES 204",
      "Digital Systems",
      "4",
      [
        "F1",
        "F2"
      ],
      [],
      [
        "A1",
        "A2",
        "B1"
      ]
    ],
    [
      "CL 203",
      "Process Fluid Mechanics",
      "3",
      [
        "D1",
        "D2"
      ],
      [],
      []
    ],
    [
      "CL 204",
      "Heat Transfer",
      "3",
      [
        "C1",
        "C2"
      ],
      [],
      []
    ],
    [
      "MA 203",
      "Numerical Analysis ",
      "2",
      [
        "E1",
        "E2"
      ],
      [
        "H1"
      ],
      []
    ],
    [
      "MA 204",
      "Partial Differential Equations (Second Half)",
      "2",
      [
        "J1",
        "J2"
      ],
      [
        "A2"
      ],
      []
    ],
    [
      "CL 205",
      "Chemical Reaction Engineering - I",
      "3",
      [
        "G1",
        "G2"
      ],
      [],
      []
    ],
    [
      "ME 209",
      "Principles of Manufacturing Processes",
      "3",
      [
        "G1",
        "G2"
      ],
      [],
      []
    ],
    [
      "ES 221",
      "Mechanics of Solids",
      "4",
      [
        "D1",
        "D2"
      ],
      [
        "H2"
      ],
      []
    ],
    [
      "ES 212",
      "Fluid Mechanics",
      "4",
      [
        "F1",
        "F2"
      ],
      [
        "N1"
      ],
      []
    ],
    [
      "CE 202",
      "Sustainability and Environment",
      "3",
      [
        "D1"
      ],
      [],
      [
        "I1",
        "K1"
      ]
    ],
    [
      "ME 207",
      "Fluid Dynamics",
      "5",
      [
        "F1",
        "F2"
      ],
      [
        "N1"
      ],
      [
        "I1"
      ]
    ],
    [
      "ME 208",
      "Vibrations",
      "2",
      [
        "C1",
        "C2"
      ],
      [
        "M1"
      ],
      []
    ],
    [
      "MSE 203",
      "Introduction to Computational Materials Engineering",
      "4",
      [
        "F1",
        "F2"
      ],
      [
        "N1"
      ],
      []
    ],
    [
      "MSE 205",
      "Mechanical Behavior of Materials",
      "4",
      [
        "D1",
        "D2"
      ],
      [],
      [
        "I1"
      ]
    ],
    [
      "MSE 206",
      "Physics of Materials",
      "4",
      [
        "C1",
        "C2"
      ],
      [],
      []
    ],
    [
      "MSE 210",
      "Microstructural Engineering",
      "4",
      [
        "G1",
        "G2"
      ],
      [],
      [
        "K1"
      ]
    ],
    [
      "EE 224",
      "Power Systems",
      "4",
      [
        "C1",
        "C2"
      ],
      [
        "H2"
      ],
      []
    ],
    [
      "ES 245",
      "Control Systems",
      "4",
      [
        "D1",
        "D2"
      ],
      [
        "N1"
      ],
      []
    ],
    [
      "ES 301",
      "Data Structures and Algorithms II",
      "4",
      [
        "P1",
        "P2"
      ],
      [
        "J1"
      ],
      []
    ],
    [
      "CE 302",
      "Structural Analysis",
      "4",
      [
        "C1",
        "C2"
      ],
      [
        "H2"
      ],
      []
    ],
    [
      "CS 303",
      "Mathematical Foundations for AI",
      "4",
      [
        "G1",
        "G2"
      ],
      [
        "K2"
      ],
      []
    ],
    [
      "PE 104",
      "Physical Education",
      "0",
      [],
      [],
      []
    ],
    [
      "IN 104",
      "Comprehensive Viva Voce",
      "0",
      [],
      [],
      []
    ],
    [
      "CL 316",
      "Separation Processes - II",
      "3",
      [
        "G1",
        "G2"
      ],
      [],
      []
    ],
    [
      "CL 317",
      "Process Synthesis, Design, and Simulation",
      "4",
      [
        "E1"
      ],
      [],
      [
        "I2",
        "M1"
      ]
    ],
    [
      "CL 325",
      "Transport Phenomena",
      "3",
      [
        "D1",
        "D2"
      ],
      [],
      []
    ],
    [
      "CL 327",
      "Integrated Chemical Engineering Lab-II",
      "2",
      [],
      [],
      [
        "J1",
        "L1"
      ]
    ],
    [
      "IN 106",
      "Comprehensive Viva Voce (Third Year B.Tech. Students)",
      "0",
      [],
      [],
      []
    ],
    [
      "IN 108",
      "Comprehensive Viva Voce (Fourth Year B.Tech. Students)",
      "0",
      [],
      [],
      []
    ],
    [
      "CE 311",
      "Design of Reinforced Concrete Structures",
      "5",
      [
        "E1",
        "E2"
      ],
      [
        "N2"
      ],
      [
        "L2"
      ]
    ],
    [
      "CE 313",
      "Environmental Science and Engineering",
      "4",
      [
        "D1",
        "D2"
      ],
      [],
      []
    ],
    [
      "CE 314",
      "Geotechnical Engineering",
      "4",
      [
        "G1",
        "G2"
      ],
      [],
      [
        "I1",
        "K1"
      ]
    ],
    [
      "IN 106",
      "Comprehensive Viva Voce (Third Year B.Tech. Students)",
      "0",
      [],
      [],
      []
    ],
    [
      "CE 403",
      "Construction Technology & Management",
      "4",
      [
        "G1",
        "G2"
      ],
      [],
      []
    ],
    [
      "IN 108",
      "Comprehensive Viva Voce (Fourth Year B.Tech. Students)",
      "0",
      [],
      [],
      []
    ],
    [
      "CS 202",
      "Software Tools and Techniques for CSE ",
      "4",
      [
        "K1"
      ],
      [],
      [
        "C2",
        "D2"
      ]
    ],
    [
      "CS 330",
      "Operating Systems",
      "4",
      [
        "F1",
        "F2"
      ],
      [],
      [
        "H2"
      ]
    ],
    [
      "CS 331",
      "Computer Networks",
      "4",
      [
        "E1",
        "E2"
      ],
      [
        "A1"
      ],
      []
    ],
    [
      "IN 106",
      "Comprehensive Viva Voce (Third Year B.Tech. Students)",
      "0",
      [],
      [],
      []
    ],
    [
      "IN 108",
      "Comprehensive Viva Voce (Fourth Year B.Tech. Students)",
      "0",
      [],
      [],
      []
    ],
    [
      "EE 341",
      "Communication Systems",
      "4",
      [
        "G1",
        "G2"
      ],
      [
        "A1"
      ],
      []
    ],
    [
      "IN 106",
      "Comprehensive Viva Voce (Third Year B.Tech. Students)",
      "0",
      [],
      [],
      []
    ],
    [
      "IN 108",
      "Comprehensive Viva Voce (Fourth Year B.Tech. Students)",
      "0",
      [],
      [],
      []
    ],
    [
      "ME 335",
      "Synthesis and Analysis of Mechanisms",
      "3",
      [
        "P1",
        "P2"
      ],
      [],
      [
        "H1"
      ]
    ],
    [
      "ME XXX",
      "Mechanical Systems Design",
      "3",
      [
        "E1",
        "E2"
      ],
      [],
      [
        "K1"
      ]
    ],
    [
      "ES 337",
      "Energy Systems",
      "3",
      [
        "D1",
        "D2"
      ],
      [],
      []
    ],
    [
      "IN 106",
      "Comprehensive Viva Voce (Third Year B.Tech. Students)",
      "0",
      [],
      [],
      []
    ],
    [
      "IN 108",
      "Comprehensive Viva Voce (Fourth Year B.Tech. Students)",
      "0",
      [],
      [],
      []
    ],
    [
      "MSE 302",
      "Corrosion and Degradation of Materials",
      "4",
      [
        "G1",
        "G2"
      ],
      [],
      []
    ],
    [
      "MSE 312",
      "Materials and Environment",
      "2",
      [
        "E1"
      ],
      [],
      []
    ],
    [
      "IN 106",
      "Comprehensive Viva Voce (Third Year B.Tech. Students)",
      "0",
      [],
      [],
      []
    ],
    [
      "IN 108",
      "Comprehensive Viva Voce (Fourth Year B.Tech. Students)",
      "0",
      [],
      [],
      []
    ],
    [
      "PE 500",
      "Physical Education (For 2022 MSc and MA students)",
      "0",
      [],
      [],
      []
    ],
    [
      "PE 600",
      "Physical Education (For 2022 M Tech and PhD students)",
      "0",
      [],
      [],
      []
    ],
    [
      "ES 404",
      "Networks and Complex Systems",
      "4",
      [
        "P1",
        "P2"
      ],
      [],
      []
    ],
    [
      "ES 622",
      "Finite Element Methods",
      "4",
      [
        "I1",
        "I2"
      ],
      [],
      []
    ],
    [
      "CE 602",
      "Analysis and Design of Foundation Systems",
      "5",
      [
        "M1",
        "M2"
      ],
      [],
      [
        "J1",
        "L1"
      ]
    ],
    [
      "CE 605",
      "Remote Sensing of Land and Water Resources",
      "4",
      [
        "M1",
        "M2"
      ],
      [],
      []
    ],
    [
      "CE 615",
      "Structural Design for Fire",
      "4",
      [
        "M1",
        "M2"
      ],
      [],
      []
    ],
    [
      "CE 628",
      "Applied Hydraulic Transients",
      "4",
      [
        "J1",
        "J2"
      ],
      [],
      []
    ],
    [
      "CE 629",
      "Geosynthetics",
      "4",
      [
        "K1",
        "K2"
      ],
      [],
      []
    ],
    [
      "CE 632",
      "Advanced Concrete Design",
      "4",
      [
        "K1",
        "K2"
      ],
      [],
      []
    ],
    [
      "CE 636",
      "Traffic and Roadway Engineering",
      "4",
      [
        "F1",
        "F2"
      ],
      [],
      []
    ],
    [
      "CE 691-I",
      "Special Topics in Civil Engineering: Design for Dynamic Loads",
      "4",
      [
        "I1",
        "I2"
      ],
      [],
      []
    ],
    [
      "CE 691-V",
      "Special Topics in Civil Engineering: Geotechnical Infrastructure Projects",
      "4",
      [
        "N1",
        "N2"
      ],
      [],
      []
    ],
    [
      "CE 691-VII",
      "Special Topics in Civil Engineering: Engineering practices in Drinking Water Treatment",
      "4",
      [
        "J1",
        "J2"
      ],
      [],
      []
    ],
    [
      "CL 605",
      "Colloidal Domain: Where Science Meets Engineering",
      "4",
      [
        "A1",
        "A2"
      ],
      [],
      []
    ],
    [
      "ES 617",
      "Design of Experiments",
      "4",
      [
        "N1",
        "N2"
      ],
      [],
      []
    ],
    [
      "CL 627",
      "Particulate Solids: Processing & Surface Engineering",
      "4",
      [
        "K1",
        "K2"
      ],
      [],
      []
    ],
    [
      "CL 629",
      "Fundamentals of Aerosol Science",
      "4",
      [
        "N1",
        "N2"
      ],
      [],
      []
    ],
    [
      "CL 628",
      "Liquid State Theory",
      "4",
      [
        "C1",
        "C2"
      ],
      [
        "H2"
      ],
      []
    ],
    [
      "CL 630",
      "Catalyst Design for Heterogeneous Reactions",
      "4",
      [
        "P1",
        "P2"
      ],
      [],
      []
    ],
    [
      "CL 631",
      "Pharmaceutical Crystallization",
      "4",
      [
        "L1",
        "L2"
      ],
      [],
      []
    ],
    [
      "ES 658",
      "Molecular Simulations \u2013 Theory and Applications",
      "4",
      [
        "P1",
        "P2"
      ],
      [
        "H1"
      ],
      []
    ],
    [
      "CH 203",
      "Fundamentals and Applications of Spectroscopy",
      "4",
      [
        "L1",
        "L2"
      ],
      [],
      []
    ],
    [
      "CH 512",
      "Reactions and Mechanisms in Organic Chemistry",
      "4",
      [
        "D1",
        "D2"
      ],
      [],
      []
    ],
    [
      "CH 524",
      "Analytical and Computational Chemistry Laboratory",
      "2",
      [],
      [],
      [
        "K1",
        "H1"
      ]
    ],
    [
      "CH 525",
      "Physical Chemistry Laboratory",
      "2",
      [],
      [],
      [
        "J1",
        "L1",
        "N1"
      ]
    ],
    [
      "CH 526",
      "Group Theory & Spectroscopy",
      "4",
      [
        "M1",
        "M2"
      ],
      [],
      []
    ],
    [
      "CH 527",
      "Organometallic Chemistry",
      "4",
      [
        "J1",
        "J2"
      ],
      [],
      []
    ],
    [
      "CH 602",
      "Chemistry of Natural Products",
      "4",
      [
        "A1",
        "A2"
      ],
      [],
      []
    ],
    [
      "CH 615",
      "Electrochemistry",
      "4",
      [
        "E1",
        "E2"
      ],
      [],
      []
    ],
    [
      "CH 628",
      "Fluorescence Spectroscopy for Chemists and Biologists",
      "4",
      [
        "K1",
        "K2"
      ],
      [],
      []
    ],
    [
      "CH 629",
      "Medicinal Chemistry for Life",
      "4",
      [
        "F1",
        "F2"
      ],
      [],
      []
    ],
    [
      "CH 630",
      "Catalytic Chemistry",
      "4",
      [
        "G1",
        "G2"
      ],
      [],
      []
    ],
    [
      "CH 632",
      "Solid State Chemistry and Applications",
      "4",
      [
        "L1",
        "L2"
      ],
      [],
      []
    ],
    [
      "CH 638",
      "Electronic Structure Theory",
      "4",
      [
        "L1",
        "L2"
      ],
      [],
      []
    ],
    [
      "CH 639",
      "Advanced Main Group Chemistry",
      "4",
      [
        "M1",
        "M2"
      ],
      [],
      []
    ],
    [
      "MA 502",
      "Complex Analysis",
      "4",
      [
        "G1",
        "G2"
      ],
      [
        "A1"
      ],
      []
    ],
    [
      "MA 507",
      "Ordinary Differential Equations",
      "4",
      [
        "E1",
        "E2"
      ],
      [
        "B1"
      ],
      []
    ],
    [
      "MA 602",
      "Applied Vector Calculus and Differential Equations",
      "4",
      [
        "J1",
        "J2"
      ],
      [
        "A2"
      ],
      []
    ],
    [
      "MA 606",
      "Differential Topology",
      "4",
      [
        "L1",
        "L2"
      ],
      [],
      []
    ],
    [
      "MA 629 (A)",
      "Real Analysis of Several Variables",
      "4",
      [
        "I1",
        "I2"
      ],
      [
        "L2"
      ],
      []
    ],
    [
      "MA 637",
      "Numerical Analysis",
      "4",
      [
        "D1",
        "D2"
      ],
      [
        "H1"
      ],
      []
    ],
    [
      "MA 623",
      "Number Theory",
      "4",
      [
        "C1",
        "C2"
      ],
      [],
      []
    ],
    [
      "MA 625",
      "Stochastic Differential Equations",
      "4",
      [
        "K1",
        "K2"
      ],
      [],
      []
    ],
    [
      "MA 628",
      "Algebra II",
      "4",
      [
        "M1",
        "M2"
      ],
      [
        "L1"
      ],
      []
    ],
    [
      "MA 631",
      "Special Functions",
      "4",
      [
        "P1",
        "P2"
      ],
      [
        "J1"
      ],
      []
    ],
    [
      "MA 641",
      "Nonlinear Functional Analysis",
      "4",
      [
        "K1",
        "K2"
      ],
      [],
      []
    ],
    [
      "MA 691-V",
      "Special Topics in Mathematics: Commutative Algebra II",
      "4",
      [
        "P1",
        "P2"
      ],
      [
        "J1"
      ],
      []
    ],
    [
      "MA 691-VI",
      "Special Topics in Mathematics: Algebraic Geometry: An Introduction",
      "4",
      [
        "I1",
        "I2"
      ],
      [],
      []
    ],
    [
      "MA 692-V",
      "Special Topics in Mathematics: Machine Learning Methods for Partial Differential Equations",
      "1",
      [
        "P1",
        "P2"
      ],
      [],
      []
    ],
    [
      "PH 504",
      "Quantum Mechanics II",
      "4",
      [
        "G1",
        "G2"
      ],
      [
        "A1"
      ],
      []
    ],
    [
      "PH 506",
      "Methods of Experimental Physics",
      "4",
      [
        "C1"
      ],
      [],
      [
        "I1",
        "K1"
      ]
    ],
    [
      "PH 507",
      "Statistical Mechanics",
      "4",
      [
        "E1",
        "E2"
      ],
      [
        "K2"
      ],
      []
    ],
    [
      "PH 509",
      "Computational Physics",
      "4",
      [
        "D1",
        "D2"
      ],
      [],
      []
    ],
    [
      "PH 607",
      "Topics in Quantum and Statistical Mechanics",
      "4",
      [
        "L1",
        "L2"
      ],
      [],
      []
    ],
    [
      "PH 608",
      "Tools of Theoretical Physics",
      "4",
      [
        "N1",
        "N2"
      ],
      [],
      []
    ],
    [
      "PH 612",
      "Quantum Field Theory II",
      "4",
      [
        "F1",
        "F2"
      ],
      [],
      []
    ],
    [
      "PH 615",
      "Physics of Two-dimensional Materials",
      "4",
      [
        "M1",
        "M2"
      ],
      [],
      []
    ],
    [
      "PH 616",
      "Quantum Optics",
      "4",
      [
        "B1",
        "B2"
      ],
      [],
      []
    ],
    [
      "PH 643",
      "Quantum Computing and Information",
      "4",
      [
        "P1",
        "P2"
      ],
      [],
      []
    ],
    [
      "PH 644",
      "Tools of Experimental Physics",
      "4",
      [
        "F1",
        "F2"
      ],
      [],
      []
    ],
    [
      "PH 649",
      "Advanced General relativity",
      "4",
      [
        "M1",
        "M2"
      ],
      [],
      []
    ],
    [
      "PH 650",
      "Group Theory For Physics",
      "4",
      [
        "J1",
        "J2"
      ],
      [],
      []
    ],
    [
      "PH 651",
      "Nanomagnetism and Spintronics",
      "4",
      [
        "P1",
        "P2"
      ],
      [],
      []
    ],
    [
      "PH 691-IV",
      "Special Topics in Physics: Advanced Condensed Matter Physics",
      "4",
      [
        "E1",
        "E2"
      ],
      [],
      []
    ],
    [
      "FP 602",
      "Writing",
      "4",
      [
        "H2"
      ],
      [],
      [
        "F1",
        "F2"
      ]
    ],
    [
      "HS 103",
      "French Studies",
      "4",
      [
        "I1",
        "I2"
      ],
      [
        "J1"
      ],
      []
    ],
    [
      "HS 111",
      "Urdu Script & Poetry",
      "4",
      [
        "P1",
        "P2"
      ],
      [
        "J1"
      ],
      []
    ],
    [
      "HS 112",
      "Urdu Poetry Interpretation",
      "4",
      [
        "I1",
        "I2"
      ],
      [
        "J1"
      ],
      []
    ],
    [
      "HS 152",
      "Advance Japanese Learning",
      "4",
      [
        "N1",
        "N2"
      ],
      [
        "J2"
      ],
      []
    ],
    [
      "HS 153",
      "Japanese Language for Beginners",
      "4",
      [
        "M1",
        "M2"
      ],
      [
        "J1"
      ],
      []
    ],
    [
      "HS 154",
      "Mandarin for Beginners",
      "4",
      [
        "L1",
        "L2"
      ],
      [],
      []
    ],
    [
      "HS 155",
      "Mandarin for Beginners - II",
      "4",
      [
        "N1",
        "N2"
      ],
      [],
      []
    ],
    [
      "HS 223",
      "Sanskrit Literature",
      "4",
      [
        "I1",
        "I2"
      ],
      [
        "J1"
      ],
      []
    ],
    [
      "DES 302",
      "Creativity, Design and Doing",
      "4",
      [
        "M1",
        "M2"
      ],
      [],
      []
    ],
    [
      "MS 306",
      "Principles of Business Management",
      "4",
      [
        "N1",
        "N2"
      ],
      [],
      []
    ],
    [
      "HS 326",
      "Harappan Civilization",
      "4",
      [
        "I1",
        "I2"
      ],
      [],
      []
    ],
    [
      "HS 421",
      "Introduction to Linguistics",
      "4",
      [
        "N1",
        "N2"
      ],
      [],
      []
    ],
    [
      "HS 426",
      "Creative Writing in Practice",
      "4",
      [
        "M1",
        "M2"
      ],
      [],
      [
        "I2"
      ]
    ],
    [
      "MS 491-VII",
      "Special Topics in Management: Managing Sustainable Businesses",
      "4",
      [
        "I1",
        "I2"
      ],
      [],
      []
    ],
    [
      "HS 491-VIII",
      "\"Special Topics in HSS: Challenges in the Digital Society        \"",
      "4",
      [
        "M1",
        "M2"
      ],
      [],
      []
    ],
    [
      "HS 491-XI",
      "Special Topics in HSS: Understanding and Designing Comics and Graphic Novels",
      "4",
      [
        "J1",
        "J2"
      ],
      [],
      []
    ],
    [
      "MS 491-XII",
      "Special Topics in Management: International Marketing ",
      "4",
      [
        "M1",
        "M2"
      ],
      [],
      []
    ],
    [
      "MS 491-XIV",
      "Special Topics in Management: Consumer Behaviour",
      "4",
      [
        "P1",
        "P2"
      ],
      [],
      []
    ],
    [
      "MS 491-XV",
      "Special Topics in Management: Medical Products Manufacturing Quality and Regulatory ",
      "3",
      [
        "J1",
        "J2"
      ],
      [],
      []
    ],
    [
      "MS 492-I",
      "Special Topics in Management: Strategic Leadership",
      "2",
      [
        "P1",
        "P2"
      ],
      [],
      []
    ],
    [
      "MS 492-II",
      "Special Topics in Management: Business Risk Management",
      "2",
      [
        "K1",
        "K2"
      ],
      [],
      []
    ],
    [
      "MS 492-IV",
      "Special Topics in Management: Business Ethics and Responsible Leadership (First Half of Semester)",
      "2",
      [
        "L1",
        "L2"
      ],
      [],
      []
    ],
    [
      "MS 492-V",
      "Special Topics in Management: Essentials of Finance and Trade Laws",
      "2",
      [
        "K1",
        "K2"
      ],
      [],
      []
    ],
    [
      "HS 507",
      "Humanism, Antihumanism, Posthumanism",
      "4",
      [
        "P1",
        "P2"
      ],
      [],
      []
    ],
    [
      "HS 508",
      "Indian Knowledge Systems - Buddhism in India and Beyond",
      "4",
      [
        "N1",
        "N2"
      ],
      [],
      []
    ],
    [
      "HS 512",
      "Political Thought",
      "4",
      [
        "D1",
        "D2"
      ],
      [],
      []
    ],
    [
      "HS 513",
      "Perspectives in History",
      "4",
      [
        "E1",
        "E2"
      ],
      [],
      []
    ],
    [
      "HS 522",
      "History, Concepts and Theories of Development",
      "4",
      [
        "A1",
        "A2"
      ],
      [],
      []
    ],
    [
      "HS 523",
      "Quantiative Research Methods",
      "4",
      [
        "B1",
        "B2"
      ],
      [
        "A1"
      ],
      []
    ],
    [
      "HS 631",
      "Digital Cultures and New Media",
      "4",
      [
        "N1",
        "N2"
      ],
      [],
      []
    ],
    [
      "HS 635",
      "India Through the Writer\u2019s Eye",
      "4",
      [
        "J1",
        "J2"
      ],
      [],
      []
    ],
    [
      "HS 642",
      "Structures and Hydrology in Ancient India",
      "4",
      [
        "L1",
        "L2"
      ],
      [],
      []
    ],
    [
      "HS 647",
      "Literature, Theory and Social Contexts",
      "4",
      [
        "G1",
        "G2"
      ],
      [],
      []
    ],
    [
      "HS 650",
      "Critical Perspectives in Anthropology",
      "4",
      [
        "C1",
        "C2"
      ],
      [],
      []
    ],
    [
      "HS 653",
      "Academic Communication: Explanation and Paraphrasing",
      "2",
      [
        "K1",
        "K2"
      ],
      [],
      []
    ],
    [
      "HS 654",
      "Mixed Methods in Research",
      "2",
      [
        "P1",
        "P2"
      ],
      [],
      []
    ],
    [
      "MS 204",
      "Business Communication(2nd half of sem)",
      "2",
      [
        "I1",
        "I2"
      ],
      [],
      []
    ],
    [
      "MS 404",
      "Neuromarketing",
      "2",
      [
        "D1",
        "D2"
      ],
      [],
      []
    ],
    [
      "DES 602",
      "Information Design for e-learning",
      "4",
      [
        "N1",
        "N2"
      ],
      [],
      []
    ],
    [
      "HS 691-IX",
      "Special Topics in HSS: Decolonizing Social Sciences",
      "4",
      [
        "M1",
        "M2"
      ],
      [],
      []
    ],
    [
      "HS 691-X",
      "Sociology of Indigenous Peoples",
      "4",
      [
        "M1",
        "M2"
      ],
      [],
      []
    ],
    [
      "HS 491-III",
      "Special Topics in HSS: Storytelling for the Digital Era",
      "4",
      [
        "L1",
        "L2"
      ],
      [],
      []
    ],
    [
      "BE 304",
      "Introduction to Biomedical Engineering",
      "4",
      [
        "M1",
        "M2"
      ],
      [],
      []
    ],
    [
      "BE 403",
      "Stem Cells: Science and Applications",
      "4",
      [
        "I1",
        "I2"
      ],
      [],
      []
    ],
    [
      "BE 406",
      "Systems Biology",
      "4",
      [
        "B1",
        "B2"
      ],
      [],
      []
    ],
    [
      "BE 407",
      "Introduction to Cell Biology",
      "4",
      [
        "G1",
        "G2"
      ],
      [],
      []
    ],
    [
      "BE 603",
      "Biophysical Techniques",
      "4",
      [
        "D1",
        "D2"
      ],
      [],
      [
        "H1"
      ]
    ],
    [
      "BE 606",
      "Neurophysiological Basis of Movement",
      "4",
      [
        "A1",
        "A2"
      ],
      [],
      []
    ],
    [
      "BE 608",
      "Molecular Basis of Neurodegenerative Diseases",
      "4",
      [
        "F1",
        "F2"
      ],
      [],
      []
    ],
    [
      "BE 610",
      "Molecular Oncology",
      "4",
      [
        "A1",
        "A2"
      ],
      [],
      []
    ],
    [
      "BE 615",
      "Bioinformatics and Computational Biology",
      "4",
      [
        "G1"
      ],
      [],
      [
        "J1",
        "L1"
      ]
    ],
    [
      "BE 619",
      "Cellular Communication",
      "4",
      [
        "K1",
        "K2"
      ],
      [],
      []
    ],
    [
      "BE 691-I",
      "Special Topics in Biological Engineering: Analysis and Characterization of Biologicals",
      "4",
      [
        "F1",
        "F2"
      ],
      [],
      [
        "I1",
        "K1"
      ]
    ],
    [
      "BE 692",
      "Special Topics in Biological Engineering: Animal Cell Culture Techniques",
      "2",
      [],
      [],
      [
        "I2",
        "M1"
      ]
    ],
    [
      "BE 617",
      "Novel Drug Delivery Technologies: Fundamental Principles and Engineering",
      "4",
      [
        "E1",
        "E2"
      ],
      [],
      []
    ],
    [
      "BE 69X",
      "Special Topics in Biological Engineering: Bioinformatics Methods",
      "2",
      [],
      [],
      [
        "M1",
        "M2"
      ]
    ],
    [
      "CG 506",
      "Experimental Techniques in Cognitive Science",
      "4",
      [
        "I1"
      ],
      [],
      [
        "I2",
        "M1"
      ]
    ],
    [
      "CG 507",
      "Evolutionary Neuropsychology",
      "2",
      [
        "M1",
        "M2"
      ],
      [],
      []
    ],
    [
      "CG 517",
      "Introduction to Cognitive Linguistics",
      "4",
      [
        "C1",
        "C2"
      ],
      [],
      []
    ],
    [
      "CG 604",
      "Phenomenology, Embodiment, and Consciousness",
      "4",
      [
        "E1",
        "E2"
      ],
      [],
      []
    ],
    [
      "CG 605",
      "Learning and Memory",
      "4",
      [
        "G1",
        "G2"
      ],
      [],
      []
    ],
    [
      "CG 607",
      "Emotion and Cognition",
      "4",
      [
        "L1",
        "L2"
      ],
      [],
      [
        "J2"
      ]
    ],
    [
      "CG 613",
      " Analysis and Modelling of Locomotion",
      "2",
      [
        "B1",
        "B2"
      ],
      [],
      []
    ],
    [
      "CS 619",
      "Incentives in ML",
      "4",
      [
        "L1",
        "L2"
      ],
      [],
      []
    ],
    [
      "CS 327",
      "Compilers",
      "5",
      [
        "G1",
        "G2"
      ],
      [],
      [
        "H1"
      ]
    ],
    [
      "CS 328",
      "Introduction to Data Science",
      "4",
      [
        "I1",
        "I2"
      ],
      [
        "B2"
      ],
      []
    ],
    [
      "CS 432",
      "Databases",
      "4",
      [
        "J1",
        "J2"
      ],
      [],
      []
    ],
    [
      "CS 434",
      "Software Engineering and Testing",
      "4",
      [
        "N1",
        "N2"
      ],
      [
        "J2"
      ],
      []
    ],
    [
      "CS 435",
      "Human-Computer Interaction",
      "4",
      [
        "J1",
        "J2"
      ],
      [],
      []
    ],
    [
      "CS 614",
      "Advanced Algorithms",
      "4",
      [
        "F1",
        "F2"
      ],
      [],
      []
    ],
    [
      "CS 615",
      "Advanced Computer Networks",
      "4",
      [
        "D1",
        "D2"
      ],
      [],
      []
    ],
    [
      "CS 616",
      "Distributed Systems and Cloud Computing ",
      "5",
      [
        "M1",
        "M2"
      ],
      [],
      [
        "K1"
      ]
    ],
    [
      "CS 617",
      "Computational Complexity Theory",
      "4",
      [
        "M1",
        "M2"
      ],
      [],
      []
    ],
    [
      "ES 627",
      "Linear Algebra and Computation",
      "4",
      [
        "D1",
        "D2"
      ],
      [],
      []
    ],
    [
      "ES 667",
      "Deep Learning",
      "4",
      [
        "L1",
        "L2"
      ],
      [],
      []
    ],
    [
      "CS 691-XVII",
      "Special Topics in Computer Science: Combinatorial and Computational Aspects of Games",
      "4",
      [
        "M1",
        "M2"
      ],
      [],
      []
    ],
    [
      "CS 691-XIX",
      "Special Topics in Computer Science: AI for Social Good",
      "4",
      [
        "P1",
        "P2"
      ],
      [],
      []
    ],
    [
      "ES 333",
      "Microprocessors and Embedded Systems",
      "4",
      [
        "E1",
        "E2"
      ],
      [],
      [
        "K1",
        "M1"
      ]
    ],
    [
      "EE 604",
      "High Voltage DC and Flexible AC Transmission Systems",
      "4",
      [
        "J1",
        "J2"
      ],
      [],
      []
    ],
    [
      "EE 609",
      "Advanced Signal Processing",
      "4",
      [
        "C1",
        "C2"
      ],
      [],
      []
    ],
    [
      "ES 612",
      "Artificial Intelligence",
      "4",
      [
        "N1",
        "N2"
      ],
      [],
      []
    ],
    [
      "EE 618",
      "Microelectronics Lab",
      "2",
      [],
      [],
      [
        "J2",
        "M2"
      ]
    ],
    [
      "EE 619",
      "Special Electrical Machines",
      "4",
      [
        "E1",
        "E2"
      ],
      [],
      []
    ],
    [
      "EE 629",
      "Power Electronic Converters",
      "4",
      [
        "A1",
        "A2"
      ],
      [
        "B2"
      ],
      []
    ],
    [
      "ES 641",
      "Electronic Instrumentation",
      "4",
      [
        "M1",
        "M2"
      ],
      [],
      []
    ],
    [
      "EE 652",
      "IC Design Laboratory",
      "2",
      [],
      [],
      [
        "J1",
        "L1"
      ]
    ],
    [
      "EE 655",
      "Heterostructure Devices",
      "4",
      [
        "L1",
        "L2"
      ],
      [],
      []
    ],
    [
      "EE 653",
      "Analog IC Design Lab",
      "2",
      [],
      [],
      [
        "I2",
        "M1"
      ]
    ],
    [
      "ES 655",
      "Medical Imaging Systems",
      "4",
      [
        "K1",
        "K2"
      ],
      [],
      []
    ],
    [
      "EE 657",
      "VLSI System Design",
      "4",
      [
        "P1",
        "P2"
      ],
      [],
      []
    ],
    [
      "EE 658",
      "Memory Device Technologies and Applications",
      "4",
      [
        "I1",
        "I2"
      ],
      [],
      []
    ],
    [
      "EE 660",
      "Power Management IC Design",
      "4",
      [
        "N1",
        "N2"
      ],
      [],
      []
    ],
    [
      "ES 665",
      "Advanced Transportation Electrification Technology",
      "4",
      [
        "M1",
        "M2"
      ],
      [],
      []
    ],
    [
      "EE 661",
      "Fundamentals of Nanoelectronic Devices",
      "4",
      [
        "M1",
        "M2"
      ],
      [],
      []
    ],
    [
      "ES 670",
      "Matrix Methods for Signal Processing, Data Science, and Machine Learning",
      "4",
      [
        "D1",
        "D2"
      ],
      [],
      []
    ],
    [
      "ES 672",
      "Semiconductor Packaging",
      "4",
      [
        "L1",
        "L2"
      ],
      [],
      []
    ],
    [
      "EE 691-V",
      "Special Topics in Electrical Engineering: Regulation of Electric Sector",
      "4",
      [
        "J1",
        "J2"
      ],
      [],
      []
    ],
    [
      "EH 304",
      "Drone Data Acquisition, Processing and Interpretation",
      "2",
      [
        "I2"
      ],
      [],
      [
        "J1",
        "L1"
      ]
    ],
    [
      "EH 602",
      "River Morphology and Ecology",
      "4",
      [
        "G1",
        "G2"
      ],
      [],
      []
    ],
    [
      "EH 604",
      "Quantitative Geomorphology",
      "4",
      [
        "L1",
        "L2"
      ],
      [],
      []
    ],
    [
      "EH 608",
      "Biodiversity Conservation and Sustainable Development",
      "4",
      [
        "K1",
        "K2"
      ],
      [],
      []
    ],
    [
      "EH 610",
      "Engineering Seismology and Seismic Hazard Analysis",
      "4",
      [
        "N1",
        "N2"
      ],
      [],
      []
    ],
    [
      "EH 615",
      "Statistical Seismology",
      "4",
      [
        "J1",
        "J2"
      ],
      [],
      []
    ],
    [
      "EH 612",
      "Ocean and Global Change",
      "4",
      [
        "D1",
        "D2"
      ],
      [],
      []
    ],
    [
      "EH 613",
      "Carbonate Sedimentology",
      "4",
      [
        "A1",
        "A2"
      ],
      [],
      [
        "I1"
      ]
    ],
    [
      "EH 621",
      "Climate of the Past",
      "4",
      [
        "L1"
      ],
      [],
      [
        "L2",
        "K2"
      ]
    ],
    [
      "EH 622",
      "Fluid Flow and Reactions in Reservoir Rocks",
      "4",
      [
        "M1",
        "M2"
      ],
      [],
      []
    ],
    [
      "EH 623",
      "Stratigraphic Evolution of Indian Continent",
      "4",
      [
        "J1",
        "J2"
      ],
      [
        "A2"
      ],
      []
    ],
    [
      "EH 691-II",
      "Special Topics in Earth Sciences: Atmospheric Physics",
      "4",
      [
        "C1",
        "C2"
      ],
      [],
      []
    ],
    [
      "EH 691-X",
      "Special Topics in Earth Sciences: Interpreting Animals in the Human Past",
      "4",
      [
        "K1",
        "K2"
      ],
      [],
      []
    ],
    [
      "ME 361",
      "Integrated Design and Manufacturing I",
      "2",
      [
        "A1"
      ],
      [],
      [
        "J1",
        "J2"
      ]
    ],
    [
      "ME 606",
      "Combustion",
      "4",
      [
        "N1",
        "N2"
      ],
      [],
      []
    ],
    [
      "ES 613",
      "Modern Control Theory",
      "4",
      [
        "E1",
        "E2"
      ],
      [],
      []
    ],
    [
      "ES 656",
      "Human-Robot Interaction",
      "4",
      [
        "G1",
        "G2"
      ],
      [],
      []
    ],
    [
      "ME 628",
      "Advanced Fluid Mechanics",
      "4",
      [
        "D1",
        "D2"
      ],
      [
        "A1"
      ],
      []
    ],
    [
      "ES 642",
      "Control of Nonlinear Dynamical Systems",
      "4",
      [
        "C1",
        "C2"
      ],
      [],
      []
    ],
    [
      "ME 645",
      "Convective Heat Transfer",
      "4",
      [
        "K1",
        "K2"
      ],
      [],
      [
        "I2"
      ]
    ],
    [
      "ES 646",
      "Elastodynamics and Vibrations",
      "4",
      [
        "D1",
        "D2"
      ],
      [],
      []
    ],
    [
      "ME 646",
      "Introduction to Turbulence",
      "4",
      [
        "E1",
        "E2"
      ],
      [],
      []
    ],
    [
      "ES 651",
      "Computational Inelasticity",
      "4",
      [
        "E1",
        "E2"
      ],
      [],
      []
    ],
    [
      "ES 653",
      "Nonlinear Continuum Mechanics",
      "4",
      [
        "D1",
        "D2"
      ],
      [],
      []
    ],
    [
      "ES 632",
      "Energy Systems",
      "4",
      [
        "D1",
        "D2"
      ],
      [
        "B2"
      ],
      []
    ],
    [
      "ES 671",
      "Mechanics of composite materials",
      "4",
      [
        "C1",
        "C2"
      ],
      [],
      []
    ],
    [
      "ME 691-XV",
      "Special Topics in Mechanical Engineering: Advanced Nonlinear Dynamics",
      "4",
      [
        "J1",
        "J2"
      ],
      [],
      []
    ],
    [
      "MSE 355",
      "Surface Engineering",
      "4",
      [
        "L1",
        "L2"
      ],
      [],
      []
    ],
    [
      "MSE 603",
      "Thin Film Processing and Characterization",
      "4",
      [
        "A1",
        "A2"
      ],
      [],
      []
    ],
    [
      "MSE 605",
      "Biomaterials for Tissue Regeneration",
      "4",
      [
        "D1",
        "D2"
      ],
      [],
      []
    ],
    [
      "MSE 621",
      "Process Plant Design \u2013 How to Set Up a Process Industry",
      "4",
      [
        "J1",
        "J2"
      ],
      [],
      []
    ],
    [
      "ES 623",
      "Biomolecular Materials Science",
      "4",
      [
        "E1",
        "E2"
      ],
      [],
      []
    ],
    [
      "MSE 627",
      "Interfaces in Materials",
      "4",
      [
        "E1",
        "E2"
      ],
      [],
      []
    ],
    [
      "MSE 634",
      "Semiconductor Materials and Fabrication Process",
      "4",
      [
        "P1",
        "P2"
      ],
      [],
      []
    ]
  ]


  // let course = [];

  let myCourse = [];
  let myCredits = 0;
  let selectedIndex = null;

  const searchBar = document.getElementById("searchBar");
  const searchList = document.getElementById("searchList");
  const addBtn = document.getElementById("addBtn");
  const timetabelCourseContainer = document.getElementById("timetabelCourseContainer");
  const addedCourses = document.getElementById("addedCourses");
  const totalCredits = document.getElementById("totalCredits");
  // const timetable = document.getElementById("timetable");
  const slot = document.querySelectorAll(".slot");
  const generateBtn = document.getElementById("generateBtn");
  // const resetBtn = document.getElementById("resetBtn");

  // let isAnyCourse = false;
  // generateBtn.disabled = true;
  // resetBtn.disabled = true;

  // let courses = [];
  // async function fetchData() {
  //   try {
  //     let response = await fetch("courses.json");

  //     // Check if the fetch was successful
  //     if (!response.ok) {
  //       throw new Error(`Failed to fetch: ${response.statusText}`);
  //     }

  //     courses = await response.json();  // Parse the JSON data
  //     // console.log(courses);
  //   } catch (error) {
  //     console.error('Error fetching data:', error);  // Handle errors here
  //   }
  // }
  // fetchData();


  function updatesearchlist() {
    searchList.innerHTML = "";
    courses.forEach((item, i) => {
      let option = document.createElement("option");
      // let name = `${courses[i].courseCode} - ${courses[i].courseName} - ${courses[i].credits}`;
      let name = `${courses[i][0]} - ${courses[i][1]} - ${courses[i][2]}`;
      option.value = name;
      // option.innerText = name;
      searchList.appendChild(option);
    })
  }

  searchBar.addEventListener("input", () => {
    let selectedInput = searchBar.value;
    let idArr = Array.from(searchList.options);
    selectedIndex = idArr.findIndex(idArr => idArr.value === selectedInput);
  })

  function addCourse(name, selectedIndex) {
    let flag = true;
    let courseObj = name.split(" - ");
    for (let n = 0; n < myCourse.length; n++) {

      if (courseObj[0] === myCourse[n][0]) {
        flag = false;
        alert(`Course ${courseObj[0]} already added, Please select other course`);

      }
    }

    if (flag) {
      myCourse.push(courses[selectedIndex]);

      updateCourseList();

      myCourse.forEach((value, i) => {
        value.forEach((val, i) => {
          if (i == 2) {
            myCredits = myCredits + parseInt(val);
          }
        })
      })
      totalCredits.innerText = myCredits;
      myCredits = 0;
      myCourse.forEach((value, i) => {
        value.forEach((val, i) => {
          if (i == 2) {
            myCredits = myCredits + parseInt(val);
          }
        })
      })
      totalCredits.innerText = myCredits;
      myCredits = 0;
    }

  }

  function deleteCourse(id) {

    myCourse = myCourse.filter((value, i) => i != id);

    updateCourseList();

    if (myCourse.length >= 0) {
      resetTimetable();
      genTimetable();
    }

    if (myCourse.length == 0) {
      addedCourses.innerHTML = "No courses added";
    }
    

    myCourse.forEach((value, i) => {
      value.forEach((val, i) => {
        if (i == 2) {
          myCredits = myCredits + parseInt(val);
        }
      })
    })
    totalCredits.innerText = myCredits;
    myCredits = 0;
  }

  function updateCourseList() {
    addedCourses.innerHTML = "";
    myCourse.forEach((value, i) => {
      let li = document.createElement("li");
      li.classList.add("listItem")
      li.id = i;
      value.forEach((val, i) => {
        if (i <= 2) {
          let span = document.createElement("span");
          span.textContent = val;
          li.appendChild(span);
        }
      })
      span = document.createElement("span");
      span.textContent = "X";
      span.classList.add("delet-icon");
      span.addEventListener("click", () => {
        deleteCourse(i);
      });
      li.appendChild(span);
      addedCourses.appendChild(li);
      // console.log(li);

    })
  }

  searchBar.addEventListener("focus", () => {
    updatesearchlist();
  })

  addBtn.addEventListener("click", () => {
    let selectedCourse = searchBar.value;
    // console.log(`selectedCourse is: ${selectedCourse}`);
    if (selectedCourse == "") {
      alert("Please select course ...")
    }
    else {
      addCourse(selectedCourse, selectedIndex);
      searchBar.value = "";

    }

    if (myCourse.length > 0) {
      resetTimetable();
      genTimetable();
    }
    // console.log(myCourse);
    // console.log(myCourse[0][3]);
  })

  // generateBtn.addEventListener("click", () => {
  //     genTimetable();
  //     resetBtn.disabled = false;
  //     generateBtn.disabled = true;
  // })

  // resetBtn.addEventListener("click",()=>{
  //     resetTimetable();
  //     resetBtn.disabled = true;
  //     generateBtn.disabled = false;
  // })

  function resetTimetable() {
    slot.forEach((value, i) => {
      value.innerText = "";
      value.classList.remove("tutorial");
      value.classList.remove("lab");
      value.classList.remove("lecture");
      value.classList.remove("clash");
    })

  }

  function genTimetable() {
    let lectureSlot = [];
    let labSlot = [];
    let tutorialSlot = [];
    myCourse.forEach((value, i) => {

      lectureSlot = value[3];
      code = `${value[0]}\n`;
      lectureSlot.forEach((value, i) => {
        // console.log(value)
        let td = document.getElementById(value);
        if (td.innerText === "") {
          td.classList.add("lecture");
        }
        else {
          td.classList.add("clash");
        }
        td.innerText = td.innerText + code;
      })

      tutorialSlot = value[4];
      code = `${value[0]}\n`;
      tutorialSlot.forEach((value, i) => {
        // console.log(value)
        let td = document.getElementById(value);
        if (td.innerText === "") {
          td.classList.add("tutorial");
        }
        else {
          td.classList.add("clash");
        }
        td.innerText = td.innerText + code;
      })

      labSlot = value[5];
      code = `${value[0]}\n`;
      labSlot.forEach((value, i) => {
        // console.log(value)
        let td = document.getElementById(value);
        if (td.innerText === "") {
          td.classList.add("lab");
        }
        else {
          td.classList.add("clash");
        }
        td.innerText = td.innerText + code;
      })
      // labSlot = value[4];
      // console.log("lab slot :", code, labSlot);
      // labSlot.forEach((value,i)=>{console.log(`${i+1} ele : ${value}`)});

      // tutorialSlot = value[5];
      // console.log("tutorial slot :",code, tutorialSlot);
      // tutorialSlot.forEach((value,i)=>{console.log(`${i+1} ele : ${value}`)});

    })
  }

  // function exportTableToExcel() {

  //   // Table data ne worksheet ma convert karo
  //   const workbook = XLSX.utils.table_to_book(timetable, { sheet: "Sheet1" });

  //   // Excel file ne save karo
  //   XLSX.writeFile(workbook, "table_data.xlsx");
  // }

  // function exportStyledTable() {

  //   const workbook = XLSX.utils.table_to_book(timetable, { sheet: "Sheet1" });
  //   const worksheet = workbook.Sheets["Sheet1"];
  //   const range = XLSX.utils.decode_range(worksheet["!ref"]);

  //   // Iterate through table cells and fetch computed styles
  //   const rows = timetable.rows;

  //   for (let R = range.s.r; R <= range.e.r; ++R) {
  //     for (let C = range.s.c; C <= range.e.c; ++C) {
  //       const cellAddress = XLSX.utils.encode_cell({ r: R, c: C });
  //       if (!worksheet[cellAddress]) continue;

  //       // Get corresponding HTML cell
  //       const htmlCell = rows[R].cells[C];
  //       const styles = window.getComputedStyle(htmlCell);

  //       // Map browser CSS to Excel styles
  //       worksheet[cellAddress].s = {
  //         font: {
  //           // bold: styles.fontWeight === "700" || styles.fontWeight === "bold",
  //           // color: styles.color,
  //           // size: parseInt(styles.fontSize, 10),
  //         },
  //         fill: {
  //           fgColor: { rgb: "styles.backgroundColor" },
  //         },
  //         alignment: {
  //           horizontal: styles.textAlign,
  //           vertical: "center", // Default alignment
  //         },
  //         // border: {
  //         //   top: { style: "thin", color: { rgb: "000000" } },
  //         //   bottom: { style: "thin", color: { rgb: "000000" } },
  //         //   left: { style: "thin", color: { rgb: "000000" } },
  //         //   right: { style: "thin", color: { rgb: "000000" } },
  //         // },
  //       };
  //     }
  //   }

  //   // Save the workbook
  //   XLSX.writeFile(workbook, "styled_table.xlsx");
  // }

  function downloadAsImage() {

    // Use html2canvas to capture the div as an image
    html2canvas(timetabelCourseContainer).then((canvas) => {
      // Convert the canvas to a data URL
      const imgData = canvas.toDataURL("image/png");

      // Create a link element for downloading
      const link = document.createElement("a");
      link.href = imgData;
      link.download = "capture.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

    });
  }

  generateBtn.addEventListener("click", () => {
    if (myCourse.length > 0) {
      downloadAsImage();
    }
    else{
      alert("Please add courses")
    }
  })

  // resetBtn.addEventListener("click", () => {
  //   exportTableToExcel();
  // })
})
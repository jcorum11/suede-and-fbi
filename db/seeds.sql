INSERT INTO departments
    (name)
VALUES
    ("Strategy"),
    ("Production"),
    ("Research and Development"),
    ("Purchasing"),
    ("Marketing"),
    ("Human Resource Management"),
    ("Accounting"),
    ("IT"),
    ("Operations");

INSERT INTO roles
    (title, salary, department_id)
VALUES
    ("Cheif Executive Officer", 500000, 1),
    ("Cheif Business Officer", 500000, 1),
    ("Cheif Design Officer", 500000, 1),
    ("Cheif Research Officer", 500000, 1),
    ("Cheif Business development Officer", 500000, 1),
    ("Cheif Marketing Officer", 500000, 1),
    ("Cheif Human resources Officer", 500000, 1),
    ("Cheif Financial Officer", 500000, 1),
    ("Cheif Technology Officer", 500000, 1),
    ("Cheif Operating Officer", 500000, 1),
    ("Instrumentation & Controls Technician", 70000, 2),
    ("Instrument Specialist/Technician", 70000, 2),
    ("Instrument & Automation Technician", 70000, 2),
    ("Instrumentation & Process Controls Technician", 70000, 2),
    ("Automation Technician", 70000, 2),
    ("Process Control Technician", 30000, 6),
    ("Programmable Logic Controllers Technician", 70000, 2),
    ("Project Engineer", 70000, 2),
    ("Senior Project Engineer", 70000, 2),
    ("Automation Engineer/Specialist", 70000, 2),
    ("Senior Design Engineer", 70000, 2),
    ("Automation Engineer/Specialist", 70000, 2),
    ("Process Engineer", 60000, 3),
    ("Equipment Engineer", 60000, 3),
    ("Development Engineer", 60000, 3),
    ("Assembler", 60000, 3),
    ("Boiler Operator", 80000, 7),
    ("Boilermaker", 60000, 3),
    ("Bookbinder and Bindery Worker", 60000, 3),
    ("Electronic Assembler", 60000, 3),
    ("Expediter", 60000, 3),
    ("Fabricator", 60000, 3),
    ("Fiberglass Laminator/Fabricator", 60000, 3),
    ("Floor Assembler", 60000, 3),
    ("General Laborer", 60000, 3),
    ("Material Handler", 60000, 3),
    ("Packaging Engineer", 60000, 3),
    ("Painting and Coating Worker", 60000, 3),
    ("Photographic Processor", 60000, 3),
    ("Precision Assembler", 60000, 3),
    ("Processing Worker", 60000, 3),
    ("Production Painter", 60000, 3),
    ("Production Worker", 60000, 3),
    ("Semiconductor Processor", 50000, 4),
    ("Tool and Die Maker", 90000, 8),
    ("Tool Crib Attendant", 50000, 4),
    ("Tool, Die, and Gauge Maker", 50000, 4),
    ("Warehouse Associate", 50000, 4),
    ("Warehouse Worker", 50000, 4),
    ("Woodworker", 50000, 4),
    ("Recruiter", 50000, 4),
    ("Human Resource Manager", 80000, 9),
    ("Accounting Clerk", 50000, 4),
    ("Accounting Manager", 40000, 5);




INSERT INTO employees 
    (first_name, last_name, role_id, manager_id)
VALUES 
    ("Antoni",  "Le", 16, 10),
    ("Jess",  "Douglas", 27, 1),
    ("Gurdeep",  "Harwood", 27, 3),
    ("Hasnain",  "Dyer", 19, 8),
    ("Dixie",  "Fitzgerald", 3, 10),
    ("Mia-Rose", "Petersen", 44, 9),
    ("Klay",  "Sloan", 51, 7),
    ("Nell",  "O'Ryan", 7, 8),
    ("Elliott",  "Kelly", 9, 8),
    ("Olivier",  "Lucas", 28, 2),
    ("Amanda",  "Harper", 22, 9),
    ("Nichole",  "Green", 4, 5),
    ("Jaxson",  "Simpson", 30, 1),
    ("Desiree",  "Henry", 44, 6),
    ("Jocelyn",  "Yang", 28, 10),
    ("Bayley",  "Appleton", 2, 10),
    ("Hina",  "Mcfarlane", 33, 6),
    ("Daisy-May", "Riggs", 50, 2),
    ("Nellie",  "Downs", 15, 7),
    ("Farhaan",  "Holloway", 7, 6),
    ("Danny",  "Faulkner", 34, 8),
    ("Tim",  "Pruitt", 48, 7),
    ("Leena",  "Bowman", 25, 2),
    ("Konnor",  "Welsh", 20, 4),
    ("Adelle",  "Weber", 49, 2),
    ("Eloisa",  "Rossi", 50, 1),
    ("Kimberley",  "Reader", 50, 10),
    ("Haley",  "Cherry", 18, 8),
    ("Macie",  "Ferguson", 21, 8),
    ("Rowan",  "Iles", 25, 7),
    ("Lisa-Marie", "Sherman", 52, 1),
    ("Shaun",  "Medrano", 19, 1),
    ("Ioana",  "Whelan", 6, 4),
    ("Jolie",  "Ahmed", 45, 6),
    ("Virgil",  "Marshall", 16, 3),
    ("Nadine",  "Cooper", 38, 2),
    ("Miyah",  "Wells", 7, 2),
    ("Marcus",  "Briggs", 1, 3),
    ("Rhian",  "Holt", 42, 6),
    ("Melissa",  "Donovan", 16, 5),
    ("Ivy-Rose", "Phillips", 28, 4),
    ("Duncan",  "Greenwood", 17, 3),
    ("Benito",  "Hicks", 41, 9),
    ("Fred",  "Wallace", 23, 3),
    ("Yuvraj",  "Navarro", 16, 6),
    ("Asim",  "Ryan", 42, 4),
    ("Bruce",  "Benitez", 43, 1),
    ("Farrell",  "Kerr", 26, 1),
    ("Joyce",  "Hendrix", 25, 1),
    ("Barney",  "Pratt", 16, 10),
    ("Chandler",  "Needham", 27, 5),
    ("Jesse",  "Haley", 10, 7),
    ("Kyle",  "Fischer", 39, 4),
    ("Jasmin",  "Bush", 38, 2),
    ("Pearl",  "Hayden", 33, 1),
    ("Aarush",  "Senior", 43, 9),
    ("Layla",  "Pierce", 43, 6),
    ("Ammarah",  "Xiong", 1, 2),
    ("Caris",  "Burch", 10, 3),
    ("Taylah",  "Boyle", 44, 7),
    ("Tatiana",  "Waller", 49, 8),
    ("Aliza",  "Mendez", 26, 5),
    ("Payton",  "Pineda", 22, 5),
    ("Arley",  "Craft", 5, 3),
    ("Susannah",  "Sierra", 32, 3),
    ("Carly",  "Hyde", 45, 3),
    ("Patrik",  "Strong", 11, 10),
    ("Shantelle",  "Ridley", 19, 7),
    ("Saad",  "Bloggs", 33, 3),
    ("Bree",  "Rasmussen", 49, 4),
    ("Kayleigh",  "Sims", 8, 1),
    ("Ella",  "Bates", 29, 2),
    ("Ottilie",  "Brennan", 52, 3),
    ("Isabella-Rose", "Buck", 31, 7),
    ("Theia",  "Brooks", 30, 10),
    ("Kenneth",  "Warner", 53, 1),
    ("Eadie",  "Lowe", 41, 7),
    ("Kymani",  "Chase", 14, 7),
    ("Theodore",  "Beard", 4, 4),
    ("Aden",  "Lindsey", 33, 4),
    ("Damian",  "Vega", 18, 7),
    ("Levison",  "Bennett", 2, 5),
    ("Ayat",  "Macdonald", 35, 6),
    ("Sannah",  "Herring", 16, 7),
    ("Amani",  "Woodcock", 13, 9),
    ("Dione",  "Melton", 43, 1),
    ("Mylee",  "Mercado", 41, 4),
    ("Fletcher",  "Plummer", 52, 5),
    ("Tomos",  "Swift", 9, 3),
    ("Lois",  "Barlow", 41, 1),
    ("Abdullahi",  "Abbott", 40, 3),
    ("Kalum",  "Sargent", 20, 2),
    ("Sneha",  "Gilmore", 18, 2),
    ("Humzah",  "Clegg", 15, 5),
    ("Blanka",  "Neville", 10, 1),
    ("Claudia",  "Reyes", 50, 1),
    ("Rueben",  "Winter", 8, 5),
    ("Aaron",  "Hines", 44, 1),
    ("Shaunna",  "Lovell", 41, 2),
    ("Janelle",  "Byers", 18, 1);





































































































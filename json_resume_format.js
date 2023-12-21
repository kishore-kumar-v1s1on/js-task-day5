//2.create your own resume in JSON format

var resume = {
    "Name": "KISHORE KUMAR M",
    "Designation": "Analyst",
    "Email": "kishoremplus@gmail.com",
    "Phone":"+91-9500355175",
    "Address": {
      "Street": "2/14 Shanmuga Nagar, Velapadi",
      "District": "Vellore",
	  "Pincode": "632002",
    },
  "EDUCATION": {    
    "college":"Sri Balaji Chockalingam Engineering college",
	"institution": "Anna University",
    "Degree": "BE",
    "Duration": "2009-2012",
    "cgpa": "6.5",    
  },
  "SKILLS": {
	  Front_end: [ 
   "Languages:Javascript",
    "Framework:React",
    ],
   Back_end: [ 
   "Languages:PHP",
    "Framework:Codeigniter",
    "Database:mysql", 
    ]
  },
  "LANGUAGES": {
    "language": "Tamil , English",
  },
  "Hobbies": {
    "name": "Watching movies",
  },
}; 
console.log(resume);
const SCHEMES = [
  {
    "title": "Primary Cooperative Agriculture and Rural Development Bank: For Power Tiller",
    "category": "Agriculture",
    "description": "Loans for farmers covering up to 90% of the power tiller cost; listed interest rate 11–12.25%.",
    "tags": [
      "Farmer",
      "Loan",
      "Equipment"
    ]
  },
  {
    "title": "Amma Two Wheeler Scheme for Working Women",
    "category": "Women",
    "description": "Support scheme for working women in Tamil Nadu. Confirm current benefit and conditions with the department.",
    "tags": [
      "Women",
      "Transport",
      "Loan"
    ]
  },
  {
    "title": "Unemployed Youth Employment Generation Programme",
    "category": "Business",
    "description": "MSME scheme intended to support eligible unemployed youth and economically weaker sections in starting enterprises.",
    "tags": [
      "Youth",
      "MSME",
      "Loan",
      "Subsidy"
    ]
  },
  {
    "title": "Moovalur Ramamirtham Ammaiyar Ninaivu Marriage Assistance Scheme-I",
    "category": "Marriage",
    "description": "Listing describes financial assistance and an 8g gold coin for eligible brides who studied Class 10; it mentions marriages from 17 May 2011 onward.",
    "tags": [
      "Marriage",
      "Gold",
      "Financial assistance"
    ]
  },
  {
    "title": "Multimedia Training - Tamil Nadu",
    "category": "Disability",
    "description": "Training in multimedia for people with locomotor or hearing impairments.",
    "tags": [
      "Training",
      "Disability"
    ]
  },
  {
    "title": "Government Institute for the Mentally Retarded",
    "category": "Disability",
    "description": "Special education, vocational training, food and uniforms for children with intellectual disabilities.",
    "tags": [
      "Children",
      "Education",
      "Training"
    ]
  },
  {
    "title": "Early Intervention Centre for Children with Cerebral Palsy",
    "category": "Disability",
    "description": "Stimulation training for children with cerebral palsy.",
    "tags": [
      "Children",
      "Disability",
      "Training"
    ]
  },
  {
    "title": "Scholarship (I to VIII Standard) by Welfare of Differently Abled Persons",
    "category": "Education",
    "description": "Notebook scholarship for differently-abled students in government schools.",
    "tags": [
      "Student",
      "Scholarship",
      "Disability"
    ]
  },
  {
    "title": "Personal Assistance Allowance for Differently Abled Persons with High Support Need",
    "category": "Disability",
    "description": "Listing describes a ₹1,000 allowance for eligible persons with high support needs.",
    "tags": [
      "Allowance",
      "Financial assistance"
    ]
  },
  {
    "title": "Maintenance Allowance to Intellectually Disabled Persons",
    "category": "Disability",
    "description": "Maintenance allowance for eligible persons with intellectual disabilities.",
    "tags": [
      "Allowance",
      "Financial assistance"
    ]
  },
  {
    "title": "Marriage Assistance to Normal Persons Marrying Visually Impaired Persons",
    "category": "Marriage",
    "description": "Marriage assistance for an eligible person marrying a visually impaired person.",
    "tags": [
      "Marriage",
      "Disability"
    ]
  },
  {
    "title": "Scheme of Encouragement to Young Artists",
    "category": "Arts & Culture",
    "description": "Opportunities to perform through cultural organisations and grants.",
    "tags": [
      "Artist",
      "Culture",
      "Grant"
    ]
  },
  {
    "title": "Grants for Publication of Rare Books on Arts",
    "category": "Arts & Culture",
    "description": "Grant described as 60% of printing charges for 1,000 copies or ₹15,000, whichever is lower.",
    "tags": [
      "Book",
      "Grant",
      "Publication"
    ]
  },
  {
    "title": "Porkizhi to Indigent Kalaimamani Awardee Artists",
    "category": "Arts & Culture",
    "description": "₹15,000 assistance described for Kalaimamani awardees in indigent circumstances.",
    "tags": [
      "Artist",
      "Award",
      "Financial assistance"
    ]
  },
  {
    "title": "Kalai Ilamani Award",
    "category": "Arts & Culture",
    "description": "Artist award described as ₹4,000 and a certificate.",
    "tags": [
      "Artist",
      "Award"
    ]
  },
  {
    "title": "Government Working Women’s Hostel",
    "category": "Women",
    "description": "Accommodation support for working women living away from their families.",
    "tags": [
      "Women",
      "Hostel",
      "Accommodation"
    ]
  },
  {
    "title": "Chief Minister’s Girl Child Protection Scheme-II",
    "category": "Women & Children",
    "description": "Financial assistance for girl children in poor families and support for education.",
    "tags": [
      "Girl child",
      "Education",
      "Financial assistance"
    ]
  },
  {
    "title": "Animal Husbandry",
    "category": "Agriculture",
    "description": "Listing describes support related to sheep units, milch animals, calves, health coverage and artificial insemination for tribal communities.",
    "tags": [
      "Farmer",
      "Animals",
      "Subsidy"
    ]
  },
  {
    "title": "Distribution of Rhizobium",
    "category": "Agriculture",
    "description": "Subsidy on Rhizobium for farmers raising pulse seed farms.",
    "tags": [
      "Farmer",
      "Seeds",
      "Subsidy"
    ]
  },
  {
    "title": "Distribution of Certified Seeds - Oil Seeds",
    "category": "Agriculture",
    "description": "Subsidy for certified oil seeds.",
    "tags": [
      "Farmer",
      "Seeds",
      "Subsidy"
    ]
  },
  {
    "title": "Natural Death and Funeral Assistance",
    "category": "Arts & Culture",
    "description": "Financial assistance for funeral or natural-death expenses of registered folk artists.",
    "tags": [
      "Artist",
      "Funeral",
      "Financial assistance"
    ]
  },
  {
    "title": "Assistance for Purchase of Spectacles - Folk Artists",
    "category": "Arts & Culture",
    "description": "Assistance for spectacles for registered folk artists.",
    "tags": [
      "Artist",
      "Health",
      "Financial assistance"
    ]
  },
  {
    "title": "Early Intervention Centres for Children with Autism",
    "category": "Disability",
    "description": "Support to develop social stimuli, imitation, language comprehension and language use.",
    "tags": [
      "Children",
      "Disability",
      "Training"
    ]
  },
  {
    "title": "Large Sized Multi Purpose Cooperative Society Interest-Free Loan",
    "category": "Loans",
    "description": "Interest-free loans described up to ₹45,000.",
    "tags": [
      "Loan",
      "Cooperative society"
    ]
  },
  {
    "title": "Construction of Free Houses for Tribals",
    "category": "Housing",
    "description": "Free houses for eligible tribal applicants who possess free house-site pattas.",
    "tags": [
      "Housing",
      "Tribal welfare"
    ]
  },
  {
    "title": "Pre-Matric Scholarship Scheme",
    "category": "Education",
    "description": "Financial assistance for BC/MBC English-medium students in Classes 6–10 for tuition or examination fees.",
    "tags": [
      "Student",
      "Scholarship"
    ]
  },
  {
    "title": "District Central Cooperative Banks: Women Entrepreneurs Loan",
    "category": "Business",
    "description": "Loans described up to ₹5,00,000; listed interest rate 12%, subject to change.",
    "tags": [
      "Women",
      "Business",
      "Loan"
    ]
  },
  {
    "title": "District Central Cooperative Banks: Housing Construction and Repair Loan",
    "category": "Housing",
    "description": "Loans described up to ₹10,00,000 for housing construction, repair or extension.",
    "tags": [
      "Housing",
      "Loan"
    ]
  },
  {
    "title": "District Central Cooperative Banks: Consumer Durables Loan",
    "category": "Loans",
    "description": "Loan for items such as TV, fridge and two-wheelers; listing says up to 75% of cost at 14% interest.",
    "tags": [
      "Loan",
      "Consumer goods"
    ]
  },
  {
    "title": "Production of Certified Seeds",
    "category": "Agriculture",
    "description": "Subsidy for farmers producing certified pulse seeds.",
    "tags": [
      "Farmer",
      "Seeds",
      "Subsidy"
    ]
  },
  {
    "title": "Block Demonstration on Polythene Mulch Technology in Groundnut",
    "category": "Agriculture",
    "description": "Financial assistance for groundnut farmers using polythene mulch technology.",
    "tags": [
      "Farmer",
      "Groundnut",
      "Subsidy"
    ]
  },
  {
    "title": "Assistance for Funeral Rites",
    "category": "Financial Assistance",
    "description": "₹500 assistance described for eligible low-income SC/ST families.",
    "tags": [
      "Funeral",
      "Financial assistance"
    ]
  },
  {
    "title": "Afforestation Incentives and Employment to Tribals",
    "category": "Employment",
    "description": "Grants for unemployed tribal people for afforestation work.",
    "tags": [
      "Employment",
      "Tribal welfare"
    ]
  },
  {
    "title": "Adi Dravidar and Tribal Welfare Hostels: Special Guides",
    "category": "Education",
    "description": "Hostel facilities for boys and girls studying through Class XII.",
    "tags": [
      "Student",
      "Hostel",
      "Education"
    ]
  },
  {
    "title": "Primary Cooperative Agriculture and Rural Development Bank: Tea Plantation",
    "category": "Agriculture",
    "description": "Assistance described up to ₹33,000 per acre; listed interest 11–12.5%.",
    "tags": [
      "Farmer",
      "Loan",
      "Plantation"
    ]
  },
  {
    "title": "Primary Cooperative Agriculture and Rural Development Bank: Poultry Development",
    "category": "Agriculture",
    "description": "Loans for poultry development and related livestock activity.",
    "tags": [
      "Farmer",
      "Loan",
      "Poultry"
    ]
  },
  {
    "title": "Chief Minister Breakfast Scheme",
    "category": "Education",
    "description": "Breakfast for government-school primary children in Classes 1–5 on school days.",
    "tags": [
      "Children",
      "Food",
      "Student"
    ]
  },
  {
    "title": "Zero Ticket Bus Travel Scheme for Women",
    "category": "Women",
    "description": "Eligible women and transgender beneficiaries can travel free on Tamil Nadu government buses within scheme conditions.",
    "tags": [
      "Women",
      "Transport"
    ]
  },
  {
    "title": "Battery Operated Wheelchair",
    "category": "Disability",
    "description": "Wheelchairs for people with muscular dystrophy or tetraplegia, as described in the listing.",
    "tags": [
      "Disability",
      "Assistive device"
    ]
  },
  {
    "title": "Chief Minister’s Comprehensive Health Insurance Scheme",
    "category": "Health",
    "description": "Health insurance support through empanelled hospitals for eligible families; confirm current enrolment and terms.",
    "tags": [
      "Health",
      "Insurance",
      "Family"
    ]
  },
  {
    "title": "Fitter Training to Hearing Impaired Persons",
    "category": "Training",
    "description": "Two-year fitter training at ITI Guindy; listing mentions a ₹300 monthly stipend.",
    "tags": [
      "Training",
      "Disability",
      "Stipend"
    ]
  },
  {
    "title": "Scholarship Above VIII Standard - Tamil Nadu",
    "category": "Education",
    "description": "Scholarship for eligible differently-abled students in schools, colleges or training centres.",
    "tags": [
      "Student",
      "Scholarship"
    ]
  },
  {
    "title": "Readers Allowance to Visually Impaired Persons",
    "category": "Education",
    "description": "Allowance for eligible visually impaired students, based on education level.",
    "tags": [
      "Student",
      "Allowance",
      "Disability"
    ]
  },
  {
    "title": "Maintenance Allowance to Severely Affected Persons",
    "category": "Disability",
    "description": "Maintenance allowance for eligible severely affected persons who cannot be rehabilitated elsewhere.",
    "tags": [
      "Allowance",
      "Financial assistance"
    ]
  },
  {
    "title": "Maintenance Allowance for Muscular Dystrophy",
    "category": "Disability",
    "description": "Monthly maintenance allowance for eligible persons affected by muscular dystrophy.",
    "tags": [
      "Allowance",
      "Disability"
    ]
  },
  {
    "title": "Funeral Expenses Assistance for Differently Abled Person",
    "category": "Disability",
    "description": "Listing describes ₹2,000 funeral assistance.",
    "tags": [
      "Funeral",
      "Financial assistance"
    ]
  },
  {
    "title": "Poompuhar State Award",
    "category": "Arts & Culture",
    "description": "Award listing mentions ₹50,000, a 4g gold medal, tamirapathiram and certificate; pension conditions may apply to eligible awardees.",
    "tags": [
      "Artist",
      "Award",
      "Craft"
    ]
  },
  {
    "title": "Financial Assistance to Folk Artists for Instruments and Costumes",
    "category": "Arts & Culture",
    "description": "Listing describes ₹2,000 for individual artists and ₹6,000 for troupes.",
    "tags": [
      "Artist",
      "Music",
      "Grant"
    ]
  },
  {
    "title": "Kalai Valarmani Award",
    "category": "Arts & Culture",
    "description": "Artist award described as ₹6,000 and a certificate.",
    "tags": [
      "Artist",
      "Award"
    ]
  },
  {
    "title": "Annai Teresa Ninaivu Marriage Assistance for Orphan Girls-II",
    "category": "Marriage",
    "description": "Marriage assistance listing states that the bride must be at least 18 years old.",
    "tags": [
      "Marriage",
      "Orphan",
      "Financial assistance"
    ]
  },
  {
    "title": "Dr. Muthulakshmi Reddy Inter-caste Marriage Assistance Scheme-I",
    "category": "Marriage",
    "description": "Financial assistance for eligible newly married inter-caste couples.",
    "tags": [
      "Marriage",
      "Inter-caste"
    ]
  },
  {
    "title": "Prize Schemes to Students (State Level Prizes)",
    "category": "Education",
    "description": "Awards for BC/MBC/DNC students who excel in examinations.",
    "tags": [
      "Student",
      "Award",
      "Scholarship"
    ]
  },
  {
    "title": "Large Sized Multi Purpose Cooperative Society Jewel Loan",
    "category": "Loans",
    "description": "Interest-free jewel loans described up to ₹1,00,000.",
    "tags": [
      "Loan",
      "Jewel loan"
    ]
  },
  {
    "title": "Book Bank Scheme II",
    "category": "Education",
    "description": "Free textbooks for eligible Adi Dravidar and tribal students in professional courses; books are returned after the course.",
    "tags": [
      "Student",
      "Books",
      "Education"
    ]
  },
  {
    "title": "Awards to Bright Students",
    "category": "Education",
    "description": "Cash awards for high-performing students from listed communities who continue their studies after Class 10.",
    "tags": [
      "Student",
      "Award"
    ]
  },
  {
    "title": "Training of Farmers on Pulses Production Technologies",
    "category": "Agriculture",
    "description": "Agricultural training intended to improve pulse production and yield.",
    "tags": [
      "Farmer",
      "Training"
    ]
  },
  {
    "title": "Visit of Contract Farming Farmers to Research Stations",
    "category": "Agriculture",
    "description": "Support for three-day visits to research stations in Karnataka.",
    "tags": [
      "Farmer",
      "Training"
    ]
  },
  {
    "title": "Burial Ground and Pathway Provision",
    "category": "Community Support",
    "description": "Facilities for Adi Dravidar and tribal communities.",
    "tags": [
      "Community",
      "Infrastructure"
    ]
  },
  {
    "title": "Free Education Scholarship for Professional Courses",
    "category": "Education",
    "description": "Tuition, special and examination fees support for eligible BC/MBC/DNC students in professional courses.",
    "tags": [
      "Student",
      "Scholarship"
    ]
  },
  {
    "title": "Distribution of Minikits Free of Cost",
    "category": "Agriculture",
    "description": "Subsidised maize farmer minikits in selected districts.",
    "tags": [
      "Farmer",
      "Seeds",
      "Subsidy"
    ]
  },
  {
    "title": "Distribution of Rhizobium Packets - Oilseeds",
    "category": "Agriculture",
    "description": "Subsidy for eligible farmers producing or supplying foundation and certified seeds.",
    "tags": [
      "Farmer",
      "Seeds",
      "Subsidy"
    ]
  },
  {
    "title": "Production of Foundation and Certified Seeds",
    "category": "Agriculture",
    "description": "Subsidy for eligible farmers producing or supplying foundation and certified seeds.",
    "tags": [
      "Farmer",
      "Seeds",
      "Subsidy"
    ]
  },
  {
    "title": "Free Sewing Machines",
    "category": "Employment",
    "description": "Sewing machines for eligible BC/MBC/DNC tailoring workers.",
    "tags": [
      "Employment",
      "Self-employment"
    ]
  },
  {
    "title": "Primary Cooperative Agriculture and Rural Development Bank: Tractor Purchase",
    "category": "Agriculture",
    "description": "Loans described up to 90% of tractor cost.",
    "tags": [
      "Farmer",
      "Loan",
      "Equipment"
    ]
  },
  {
    "title": "New Entrepreneur-cum-Enterprise Development Scheme (NEEDS)",
    "category": "Business",
    "description": "Support intended to help educated youth become first-generation entrepreneurs.",
    "tags": [
      "Entrepreneur",
      "Loan",
      "Subsidy"
    ]
  },
  {
    "title": "Moovalur Ramamirtham Ammaiyar Higher Education Assurance Scheme",
    "category": "Education",
    "description": "Higher-education support scheme listed under Social Welfare and Women Empowerment.",
    "tags": [
      "Student",
      "Education",
      "Financial assistance"
    ]
  },
  {
    "title": "Scholarship to Son and Daughter of Differently Abled Persons",
    "category": "Education",
    "description": "Education assistance for children of differently-abled persons.",
    "tags": [
      "Student",
      "Scholarship"
    ]
  },
  {
    "title": "Free Notebooks to Children of Poor Widows",
    "category": "Education",
    "description": "Notebooks for children of poor widows up to higher secondary level and children in government homes.",
    "tags": [
      "Student",
      "Books",
      "Widow"
    ]
  },
  {
    "title": "Pension Scheme for Journalists",
    "category": "Pension",
    "description": "Monthly pension support for retired journalists.",
    "tags": [
      "Pension",
      "Retirement"
    ]
  },
  {
    "title": "Walking Device - Tamil Nadu",
    "category": "Disability",
    "description": "Walking aids for orthopedically differently-abled children with walking difficulties.",
    "tags": [
      "Disability",
      "Assistive device"
    ]
  },
  {
    "title": "Retrofitted Petrol Scooters - Tamil Nadu",
    "category": "Disability",
    "description": "Retrofitted petrol scooters for eligible orthopedically differently-abled people.",
    "tags": [
      "Disability",
      "Transport"
    ]
  },
  {
    "title": "Modular Reflective Folding Sticks (Smartcane)",
    "category": "Disability",
    "description": "Mobility sticks for visually impaired people.",
    "tags": [
      "Disability",
      "Assistive device"
    ]
  },
  {
    "title": "Early Intervention Centre for Children with Intellectual Disabilities",
    "category": "Disability",
    "description": "Early intervention support for infants and young children with intellectual disabilities.",
    "tags": [
      "Children",
      "Disability"
    ]
  },
  {
    "title": "Maintenance Allowance for Leprosy Affected Persons",
    "category": "Disability",
    "description": "Maintenance allowance for eligible persons affected by leprosy.",
    "tags": [
      "Allowance",
      "Disability"
    ]
  },
  {
    "title": "Early Intervention Centre for Hearing Impairment",
    "category": "Disability",
    "description": "Training to support speech development in infants and young children with hearing impairment.",
    "tags": [
      "Children",
      "Training"
    ]
  },
  {
    "title": "Poompuhar District Craft Award",
    "category": "Arts & Culture",
    "description": "Craft award listing mentions ₹10,000, a silver medal and certificate.",
    "tags": [
      "Craft",
      "Award"
    ]
  },
  {
    "title": "Personal Accident Relief for Differently Abled Persons",
    "category": "Disability",
    "description": "Accident relief for eligible differently-abled people; confirm the full benefit terms with the department.",
    "tags": [
      "Accident",
      "Disability",
      "Financial assistance"
    ]
  },
  {
    "title": "Living Craft Treasure Award",
    "category": "Arts & Culture",
    "description": "Handicraft award for eminent craftspersons above 65, as described in the listing.",
    "tags": [
      "Craft",
      "Award",
      "Senior citizen"
    ]
  },
  {
    "title": "Kalaichemmal Awards",
    "category": "Arts & Culture",
    "description": "Awards intended to encourage eminent painters and sculptors.",
    "tags": [
      "Artist",
      "Award",
      "Exhibition"
    ]
  },
  {
    "title": "Awards to Senior Artists in Contemporary Art Field",
    "category": "Arts & Culture",
    "description": "Listing describes a ₹15,000 award at a state exhibition.",
    "tags": [
      "Artist",
      "Award"
    ]
  },
  {
    "title": "Kalai Mudhumani Award",
    "category": "Arts & Culture",
    "description": "Artist award listing mentions ₹20,000 and certificates.",
    "tags": [
      "Artist",
      "Award"
    ]
  },
  {
    "title": "Financial Assistance to Indigent Artists",
    "category": "Arts & Culture",
    "description": "Listing describes ₹3,000 assistance for poor artists and dependents.",
    "tags": [
      "Artist",
      "Financial assistance"
    ]
  },
  {
    "title": "Dr. Dharmambal Ammaiyar Widow Remarriage Assistance Scheme-II",
    "category": "Marriage",
    "description": "Financial assistance intended to encourage widow remarriage.",
    "tags": [
      "Marriage",
      "Widow"
    ]
  },
  {
    "title": "Government Service Home - Tamil Nadu",
    "category": "Women & Children",
    "description": "Institutional care for eligible widows, destitute or deserted women, adolescent girls and differently-abled women and children.",
    "tags": [
      "Shelter",
      "Women",
      "Children"
    ]
  },
  {
    "title": "E.V.R. Maniammaiyar Marriage Assistance for Daughters of Poor Widows-II",
    "category": "Marriage",
    "description": "Financial assistance for eligible daughters of poor widows for marriage.",
    "tags": [
      "Marriage",
      "Widow"
    ]
  },
  {
    "title": "Old Age Pension under Chief Minister’s Uzhavar Padhukappu Thittam",
    "category": "Pension",
    "description": "₹1,000 pension described for elderly farmers and destitute agricultural labourers with the scheme membership card.",
    "tags": [
      "Pension",
      "Farmer",
      "Senior citizen"
    ]
  },
  {
    "title": "Indira Gandhi National Old Age Pension Scheme - Tamil Nadu",
    "category": "Pension",
    "description": "₹1,000 pension listing for destitute persons aged 60+ who meet BPL conditions.",
    "tags": [
      "Pension",
      "Senior citizen"
    ]
  },
  {
    "title": "Indira Gandhi National Disability Pension Scheme - Tamil Nadu",
    "category": "Pension",
    "description": "₹1,000 pension listing for people aged 18+ with disability of 80% or more.",
    "tags": [
      "Pension",
      "Disability"
    ]
  },
  {
    "title": "Primary Cooperative Agriculture and Rural Development Bank: Inland Fishing",
    "category": "Agriculture",
    "description": "Loans described up to ₹3,30,000 per hectare; listed interest 11–12%.",
    "tags": [
      "Fishing",
      "Loan"
    ]
  },
  {
    "title": "Primary Cooperative Agriculture and Rural Development Bank: Animal Husbandry",
    "category": "Agriculture",
    "description": "Loans for farmers undertaking animal husbandry.",
    "tags": [
      "Farmer",
      "Loan",
      "Animals"
    ]
  },
  {
    "title": "Primary Cooperative Agriculture and Rural Development Bank: Handloom and Non-Farm Activities",
    "category": "Business",
    "description": "Loans described up to ₹2,00,000; listed interest 11–12.5%.",
    "tags": [
      "Loan",
      "Handloom"
    ]
  },
  {
    "title": "Rural Girls’ Incentive Scheme",
    "category": "Education",
    "description": "Financial support for eligible MBC/DNC girl students in rural government or aided schools.",
    "tags": [
      "Student",
      "Girl child",
      "Scholarship"
    ]
  },
  {
    "title": "Revamped Micro Credit Loan for Women Vendors",
    "category": "Business",
    "description": "Loans described from ₹100 to ₹5,000 for women vendors of flowers, vegetables, fruits and similar goods.",
    "tags": [
      "Women",
      "Vendor",
      "Loan"
    ]
  },
  {
    "title": "Professional Loan for Doctors, Engineers and Self-Employed Professionals",
    "category": "Business",
    "description": "Professional loans described up to ₹10,00,000; listed interest 13%, subject to change.",
    "tags": [
      "Professional",
      "Loan"
    ]
  },
  {
    "title": "Free Education Scheme",
    "category": "Education",
    "description": "Financial support for eligible BC/MBC/DNC students in three-year BA/BSc/BCom courses at government or aided colleges.",
    "tags": [
      "Student",
      "Education"
    ]
  },
  {
    "title": "Free Education Scholarship for Three-Year Diploma",
    "category": "Education",
    "description": "Scholarship for eligible BC/MBC/DNC students at government or aided polytechnics.",
    "tags": [
      "Student",
      "Scholarship"
    ]
  },
  {
    "title": "District Central Cooperative Banks: Working Women Loan",
    "category": "Women",
    "description": "Loans described up to ₹20,000; listed interest 12%.",
    "tags": [
      "Women",
      "Loan"
    ]
  },
  {
    "title": "Pipes Carrying Water from Source to Field - Pulses ISPOM",
    "category": "Agriculture",
    "description": "Listing describes a 50% subsidy or up to ₹15,000 for qualifying pipes up to 800 metres.",
    "tags": [
      "Farmer",
      "Irrigation",
      "Subsidy"
    ]
  },
  {
    "title": "Pre-Examination Training Centre for All India Service Examinations",
    "category": "Education",
    "description": "Free training, boarding and lodging described for eligible Adi Dravidar and tribal candidates.",
    "tags": [
      "Student",
      "Training",
      "Exam"
    ]
  },
  {
    "title": "Free Textbooks for Adi Dravidar and Tribal Students",
    "category": "Education",
    "description": "Free textbooks for eligible students in Classes 1–12.",
    "tags": [
      "Student",
      "Books"
    ]
  },
  {
    "title": "Admission of Adi Dravidar/Tribal Students in Plus One at Reputed Schools",
    "category": "Education",
    "description": "Support for top-performing students to study Class 11 at reputed private schools.",
    "tags": [
      "Student",
      "Education"
    ]
  },
  {
    "title": "Free Education up to 12th Standard",
    "category": "Education",
    "description": "Free education or tuition reimbursement for listed Adi Dravidar, tribal and converted-Christian communities.",
    "tags": [
      "Student",
      "Education"
    ]
  },
  {
    "title": "Farmers Training",
    "category": "Agriculture",
    "description": "Training sessions for farmers and agricultural labourers.",
    "tags": [
      "Farmer",
      "Training"
    ]
  },
  {
    "title": "Chief Minister’s Comprehensive Health Insurance Scheme - Tamil Nadu",
    "category": "Health",
    "description": "Health-care support through empanelled government and private hospitals for eligible families.",
    "tags": [
      "Health",
      "Insurance"
    ]
  },
  {
    "title": "Chief Minister’s Solar Rooftop Capital Incentive Scheme",
    "category": "Energy",
    "description": "Listing describes a ₹20,000/kW capital incentive for grid-connected domestic rooftop solar, alongside the stated MNRE subsidy; verify current rules.",
    "tags": [
      "Solar",
      "Subsidy"
    ]
  },
  {
    "title": "Issuance of Free House Sites",
    "category": "Housing",
    "description": "Free residential land for eligible BC/MBC/DNC people without a house or land.",
    "tags": [
      "Housing",
      "Land"
    ]
  },
  {
    "title": "Primary Cooperative Agriculture and Rural Development Bank: Minor Irrigation",
    "category": "Agriculture",
    "description": "Loans described between ₹65,000 and ₹1,20,000; listed interest 11–11.75%.",
    "tags": [
      "Farmer",
      "Irrigation",
      "Loan"
    ]
  },
  {
    "title": "Destitute Differently Abled Pension Scheme",
    "category": "Pension",
    "description": "₹1,000 pension listing for destitute disabled persons aged 45+ with 60%+ disability.",
    "tags": [
      "Pension",
      "Disability"
    ]
  },
  {
    "title": "Pension Scheme - Folk Artist",
    "category": "Pension",
    "description": "Pension support for eligible registered folk artists.",
    "tags": [
      "Artist",
      "Pension"
    ]
  },
  {
    "title": "Magnifiers",
    "category": "Disability",
    "description": "Magnifiers for eligible students with low vision.",
    "tags": [
      "Student",
      "Assistive device"
    ]
  },
  {
    "title": "Braille Watches",
    "category": "Disability",
    "description": "Braille watches for eligible working visually impaired people.",
    "tags": [
      "Assistive device",
      "Disability"
    ]
  },
  {
    "title": "Sathya Ammaiyar Ninaivu Government Children Homes",
    "category": "Children & Family",
    "description": "Education, food, clothing, shelter and medical care for eligible destitute, deserted or abandoned children.",
    "tags": [
      "Children",
      "Shelter"
    ]
  },
  {
    "title": "Destitute Agricultural Labourers Pension Scheme",
    "category": "Pension",
    "description": "₹1,000 pension listing for destitute agricultural labourers aged 60+.",
    "tags": [
      "Pension",
      "Farmer"
    ]
  },
  {
    "title": "Behind-the-Ear Hearing Aids",
    "category": "Disability",
    "description": "Hearing aids for eligible students with hearing impairment.",
    "tags": [
      "Student",
      "Assistive device"
    ]
  },
  {
    "title": "Establishing Aavin Parlour for Differently Abled Persons",
    "category": "Business",
    "description": "Self-employment opportunity through an Aavin parlour for eligible differently-abled people.",
    "tags": [
      "Disability",
      "Self-employment"
    ]
  },
  {
    "title": "Tricycles",
    "category": "Disability",
    "description": "Tricycles for eligible orthopedically disabled people with both lower limbs affected.",
    "tags": [
      "Disability",
      "Assistive device"
    ]
  },
  {
    "title": "Financial Assistance on Natural Death of Differently Abled Person",
    "category": "Disability",
    "description": "Listing describes ₹15,000 for the eligible legal heir.",
    "tags": [
      "Death",
      "Financial assistance"
    ]
  },
  {
    "title": "Marriage Assistance to Normal Persons Marrying Speech and Hearing Impaired Persons",
    "category": "Marriage",
    "description": "Marriage assistance for eligible couples.",
    "tags": [
      "Marriage",
      "Disability"
    ]
  },
  {
    "title": "Financial Assistance to New Drama Productions",
    "category": "Arts & Culture",
    "description": "Listing describes ₹20,000 for new Tamil dance-drama productions.",
    "tags": [
      "Artist",
      "Grant"
    ]
  },
  {
    "title": "Scholarship to Young Artists",
    "category": "Education",
    "description": "Scholarship for graduate or postgraduate students at Government Colleges of Fine Arts in Chennai and Kumbakonam.",
    "tags": [
      "Student",
      "Artist",
      "Scholarship"
    ]
  },
  {
    "title": "Kalai Nanmani Award",
    "category": "Arts & Culture",
    "description": "Artist award listing mentions ₹15,000 and a certificate.",
    "tags": [
      "Artist",
      "Award"
    ]
  },
  {
    "title": "Awards for Traditional Artists",
    "category": "Arts & Culture",
    "description": "Awards for outstanding work at the state-level Traditional Art Exhibition.",
    "tags": [
      "Artist",
      "Award"
    ]
  },
  {
    "title": "Pension Scheme for Destitute Transgender Persons",
    "category": "Pension",
    "description": "Pension listing for destitute transgender persons over 40 who cannot earn a livelihood.",
    "tags": [
      "Pension",
      "Financial assistance"
    ]
  },
  {
    "title": "Dr. Dharmambal Ammaiyar Widow Remarriage Assistance Scheme-I",
    "category": "Marriage",
    "description": "Financial assistance for eligible widow remarriage.",
    "tags": [
      "Marriage",
      "Widow"
    ]
  },
  {
    "title": "Annai Teresa Ninaivu Marriage Assistance for Orphan Girls-I",
    "category": "Marriage",
    "description": "Financial assistance listing; bride must be at least 18.",
    "tags": [
      "Marriage",
      "Orphan"
    ]
  },
  {
    "title": "Pension for Unmarried Poor Incapacitated Women Aged 50+",
    "category": "Pension",
    "description": "Listing describes ₹1,000 per month for eligible women.",
    "tags": [
      "Pension",
      "Women"
    ]
  },
  {
    "title": "E.V.R. Maniammaiyar Marriage Assistance for Daughters of Poor Widows-I",
    "category": "Marriage",
    "description": "Financial assistance for eligible daughters of poor widows for marriage.",
    "tags": [
      "Marriage",
      "Widow"
    ]
  },
  {
    "title": "Tamil Nadu Chief Minister’s Fellowship Programme",
    "category": "Education & Employment",
    "description": "Two-year programme for young professionals intended to improve governance and public service delivery.",
    "tags": [
      "Fellowship",
      "Employment"
    ]
  },
  {
    "title": "Migrants Employment Generation Programme",
    "category": "Business",
    "description": "Support for returning non-resident Tamils affected by COVID-era migration, including entrepreneurship, loans or subsidies as listed.",
    "tags": [
      "Business",
      "Loan",
      "Subsidy"
    ]
  },
  {
    "title": "Unemployment Assistance Scheme - Tamil Nadu",
    "category": "Employment",
    "description": "Support scheme for eligible unemployed youth; confirm current criteria and benefit details.",
    "tags": [
      "Unemployment",
      "Financial assistance"
    ]
  },
  {
    "title": "District Central Cooperative Banks: Maternity Loan through SHGs",
    "category": "Women",
    "description": "Maternity loans described up to ₹2,000; listed interest 11%.",
    "tags": [
      "Women",
      "Loan"
    ]
  },
  {
    "title": "Primary Cooperative Agriculture and Rural Development Bank: Fishing Boats",
    "category": "Agriculture",
    "description": "Loans described between ₹15,000 and ₹60,000 for fishing boats or catamarans.",
    "tags": [
      "Fishing",
      "Loan"
    ]
  },
  {
    "title": "Large Sized Multi-Purpose Cooperative Society: Medium-Term Loan to Tribal Members",
    "category": "Loans",
    "description": "Interest-free medium-term loans described up to ₹60,000 for eligible tribal members.",
    "tags": [
      "Tribal welfare",
      "Loan"
    ]
  },
  {
    "title": "District Central Cooperative Banks: SSI Unit Loan and Non-Farm Activities",
    "category": "Business",
    "description": "Financial assistance for small-scale industrial units and other non-farm activities.",
    "tags": [
      "Business",
      "Loan"
    ]
  },
  {
    "title": "Employees Cooperative Societies Surety Loan",
    "category": "Loans",
    "description": "Loans described up to ₹1,50,000; listed interest 14%.",
    "tags": [
      "Loan"
    ]
  },
  {
    "title": "Postmatric Scholarship",
    "category": "Education",
    "description": "Tuition and examination-fee support for eligible BC/MBC students in Classes 11–12 English-medium schools.",
    "tags": [
      "Student",
      "Scholarship"
    ]
  },
  {
    "title": "Perarignar Anna Memorial Award",
    "category": "Education",
    "description": "Award for top two ranks in Class 12 public examinations for eligible BC/MBC/DNC students.",
    "tags": [
      "Student",
      "Award"
    ]
  },
  {
    "title": "Award of ₹20,000 to Best Writers",
    "category": "Arts & Culture",
    "description": "Award for selected writers from Adi Dravidar, tribal, converted-Christian and other communities as listed.",
    "tags": [
      "Writer",
      "Award"
    ]
  },
  {
    "title": "Book Bank Scheme I",
    "category": "Education",
    "description": "Free professional-course textbooks for eligible Adi Dravidar and tribal students; books are returned after the course.",
    "tags": [
      "Student",
      "Books"
    ]
  },
  {
    "title": "Assistance to Lawyers for Starting Practice",
    "category": "Employment",
    "description": "Assistance for eligible unemployed Adi Dravidar and tribal lawyers meeting registration and income conditions.",
    "tags": [
      "Lawyer",
      "Employment"
    ]
  },
  {
    "title": "Micro Nutrient Spray",
    "category": "Agriculture",
    "description": "Listing describes a 50% subsidy or ₹70 per hectare for farmers.",
    "tags": [
      "Farmer",
      "Subsidy"
    ]
  },
  {
    "title": "Distribution of Soil Health Card",
    "category": "Agriculture",
    "description": "Soil health card and soil nutrient testing; listing mentions a ₹5 fee.",
    "tags": [
      "Farmer",
      "Soil"
    ]
  },
  {
    "title": "Distribution of Iron Boxes Free of Cost",
    "category": "Employment",
    "description": "Free iron boxes for eligible BC/MBC/DNC people engaged in washing work.",
    "tags": [
      "Self-employment",
      "Equipment"
    ]
  },
  {
    "title": "Primary Cooperative Agriculture and Rural Development Bank: Sericulture",
    "category": "Agriculture",
    "description": "Loans described between ₹49,000 and ₹79,000 per acre for sericulture in irrigated areas.",
    "tags": [
      "Farmer",
      "Loan"
    ]
  },
  {
    "title": "Travel Concession for Differently Abled Persons in State Transport Buses",
    "category": "Disability",
    "description": "Travel concession on state-owned transport corporation buses for eligible differently-abled people.",
    "tags": [
      "Disability",
      "Transport"
    ]
  },
  {
    "title": "Assistance for Purchase of Spectacles by a Differently Abled Person",
    "category": "Disability",
    "description": "Financial assistance for spectacles for eligible differently-abled people.",
    "tags": [
      "Disability",
      "Health"
    ]
  },
  {
    "title": "Adi Dravidar and Tribal Welfare Incentive/Award of Prizes",
    "category": "Education",
    "description": "Awards for top-performing boys and girls in Classes 10 and 12.",
    "tags": [
      "Student",
      "Award"
    ]
  },
  {
    "title": "Quality Paddy Seed Distribution",
    "category": "Agriculture",
    "description": "Listing describes ₹5/kg subsidy on certified paddy seeds.",
    "tags": [
      "Farmer",
      "Seeds",
      "Subsidy"
    ]
  },
  {
    "title": "Distribution of Nuclear Polyhedrosis Virus",
    "category": "Agriculture",
    "description": "Subsidy for farmers raising pulse seed farms.",
    "tags": [
      "Farmer",
      "Subsidy"
    ]
  },
  {
    "title": "Block Demonstration Through Department and TNAU",
    "category": "Agriculture",
    "description": "Grant or subsidy for maize cultivation demonstrations on one hectare.",
    "tags": [
      "Farmer",
      "Maize",
      "Subsidy"
    ]
  },
  {
    "title": "Block Demonstration for Pulses",
    "category": "Agriculture",
    "description": "Listing describes a 50% subsidy or ₹2,000, whichever is lower, for pulse demonstrations.",
    "tags": [
      "Farmer",
      "Subsidy"
    ]
  },
  {
    "title": "Distribution of Gypsum - Oil Seeds",
    "category": "Agriculture",
    "description": "Subsidy on gypsum and transportation for farmers producing foundation or certified seeds.",
    "tags": [
      "Farmer",
      "Seeds",
      "Subsidy"
    ]
  },
  {
    "title": "Distribution of Manually Operated Plant Protection Equipment",
    "category": "Agriculture",
    "description": "Listing describes a 50% subsidy on eligible equipment.",
    "tags": [
      "Farmer",
      "Equipment",
      "Subsidy"
    ]
  },
  {
    "title": "Modular Functional Artificial Limbs",
    "category": "Disability",
    "description": "Artificial limbs for eligible orthopedically disabled students, employed or self-employed people.",
    "tags": [
      "Disability",
      "Assistive device"
    ]
  },
  {
    "title": "Annal Ambedkar Business Champions Scheme",
    "category": "Business",
    "description": "MSME scheme supporting SC/ST entrepreneurs through loans or subsidies as described.",
    "tags": [
      "Entrepreneur",
      "MSME",
      "Subsidy"
    ]
  },
  {
    "title": "MSME Skill Training and Employment Scheme",
    "category": "Training",
    "description": "Skill training and employment support, with stipend details subject to scheme rules.",
    "tags": [
      "Training",
      "Employment"
    ]
  },
  {
    "title": "Book Binder Training for Visually Impaired Candidates",
    "category": "Training",
    "description": "Book-binder training for eligible visually impaired candidates.",
    "tags": [
      "Training",
      "Disability"
    ]
  },
  {
    "title": "Goggles for Visually Impaired Persons",
    "category": "Disability",
    "description": "Goggles for eligible visually impaired people to protect from sunlight.",
    "tags": [
      "Disability",
      "Assistive device"
    ]
  },
  {
    "title": "Calipers and Crutches",
    "category": "Disability",
    "description": "Mobility devices for eligible orthopedically disabled people.",
    "tags": [
      "Disability",
      "Assistive device"
    ]
  },
  {
    "title": "Smart Phone for Hearing and Visually Impaired Persons",
    "category": "Disability",
    "description": "Smartphones for eligible students, unemployed youth or self-employed people with hearing or visual impairment.",
    "tags": [
      "Disability",
      "Assistive device"
    ]
  },
  {
    "title": "Special Education - Tamil Nadu",
    "category": "Education",
    "description": "Free special education or vocational training for eligible visually, hearing or locomotor disabled people.",
    "tags": [
      "Disability",
      "Education",
      "Training"
    ]
  },
  {
    "title": "Assistance to Law Graduates",
    "category": "Employment",
    "description": "Listing describes ₹50,000 for eligible differently-abled law graduates for Bar Council enrolment.",
    "tags": [
      "Disability",
      "Lawyer",
      "Financial assistance"
    ]
  },
  {
    "title": "Marriage Assistance to Differently Abled Persons Marrying Differently Abled Persons",
    "category": "Marriage",
    "description": "Financial assistance for eligible couples where both partners are differently-abled.",
    "tags": [
      "Marriage",
      "Disability"
    ]
  },
  {
    "title": "Modified Special Wheelchairs for Cerebral Palsy",
    "category": "Disability",
    "description": "Modified special wheelchairs for people affected by cerebral palsy.",
    "tags": [
      "Disability",
      "Assistive device"
    ]
  },
  {
    "title": "Gen Next Competition",
    "category": "Arts & Culture",
    "description": "Craft competition intended to encourage young people in traditional Tamil handicrafts.",
    "tags": [
      "Artist",
      "Craft",
      "Competition"
    ]
  },
  {
    "title": "Marriage Assistance to Normal Persons Marrying Orthopedically Differently Abled Persons",
    "category": "Marriage",
    "description": "Marriage assistance for eligible couples.",
    "tags": [
      "Marriage",
      "Disability"
    ]
  },
  {
    "title": "Unemployment Allowance to Differently Abled Persons",
    "category": "Disability",
    "description": "Unemployment allowance for eligible differently-abled people.",
    "tags": [
      "Disability",
      "Allowance"
    ]
  },
  {
    "title": "Concession in Railway Travel for Artists",
    "category": "Arts & Culture",
    "description": "Concession certificates for eligible individual artists or troupes.",
    "tags": [
      "Artist",
      "Travel"
    ]
  },
  {
    "title": "Kalaimamani Award",
    "category": "Arts & Culture",
    "description": "Award recognising notable artists across art forms.",
    "tags": [
      "Artist",
      "Award"
    ]
  },
  {
    "title": "Utility Based Handicrafts Award",
    "category": "Arts & Culture",
    "description": "Award for artisans producing utility handicrafts.",
    "tags": [
      "Craft",
      "Award"
    ]
  },
  {
    "title": "Grant-in-Aid for One-Man Art Exhibitions",
    "category": "Arts & Culture",
    "description": "Listing describes a ₹25,000 grant for solo painting or sculpture exhibitions.",
    "tags": [
      "Artist",
      "Grant"
    ]
  },
  {
    "title": "Kalai Sudarmani Award",
    "category": "Arts & Culture",
    "description": "Listing describes ₹10,000 and a certificate of appreciation for selected artists.",
    "tags": [
      "Artist",
      "Award"
    ]
  },
  {
    "title": "Awards to Junior Artists in Contemporary Art",
    "category": "Arts & Culture",
    "description": "Listing describes a ₹10,000 award at a state-level contemporary art exhibition.",
    "tags": [
      "Artist",
      "Award"
    ]
  },
  {
    "title": "Sathiyavanimuthu Ammaiyar Free Sewing Machine Scheme",
    "category": "Employment",
    "description": "Free sewing machines for eligible destitute or deserted women, widows and differently-abled people to support self-employment.",
    "tags": [
      "Women",
      "Widow",
      "Self-employment"
    ]
  },
  {
    "title": "Destitute Widow Pension Scheme",
    "category": "Pension",
    "description": "Listing describes ₹1,000 pension for eligible destitute widows aged 18+; other festival and food benefits are mentioned.",
    "tags": [
      "Pension",
      "Widow"
    ]
  },
  {
    "title": "Destitute/Deserted Wives Pension Scheme",
    "category": "Pension",
    "description": "Listing describes ₹1,000 pension for eligible destitute or deserted wives.",
    "tags": [
      "Pension",
      "Women"
    ]
  },
  {
    "title": "Indira Gandhi National Widow Pension Scheme - Tamil Nadu",
    "category": "Pension",
    "description": "Listing describes ₹1,000 pension for eligible BPL widows aged 40+.",
    "tags": [
      "Pension",
      "Widow"
    ]
  },
  {
    "title": "Differently Abled Pension Scheme",
    "category": "Pension",
    "description": "Listing describes ₹1,000 pension for people with disability level 40% or above; other benefits may be included.",
    "tags": [
      "Pension",
      "Disability"
    ]
  },
  {
    "title": "Primary Cooperative Agriculture and Rural Development Bank: Jewel Loans",
    "category": "Loans",
    "description": "Jewel loans for agricultural purposes described up to ₹2,00,000; listed interest 11.5%.",
    "tags": [
      "Farmer",
      "Jewel loan",
      "Loan"
    ]
  },
  {
    "title": "District Central Cooperative Banks: Jewel Loan",
    "category": "Loans",
    "description": "Loans secured by gold or jewellery described up to ₹1,00,000; interest subject to bank policy.",
    "tags": [
      "Jewel loan",
      "Loan"
    ]
  },
  {
    "title": "Primary Cooperative Agriculture and Rural Development Bank: Horticulture Loan",
    "category": "Agriculture",
    "description": "Horticulture loans described between ₹25,000 and ₹2,00,000 per 0.4 hectare.",
    "tags": [
      "Farmer",
      "Horticulture",
      "Loan"
    ]
  },
  {
    "title": "Small Road Transport Operators Loan (SRTO)",
    "category": "Business",
    "description": "Loans described up to ₹10,00,000 for small-scale road transport operators; listed interest 13%.",
    "tags": [
      "Transport",
      "Business",
      "Loan"
    ]
  },
  {
    "title": "Scholarship: Public Examination Fee for 10th and 12th",
    "category": "Education",
    "description": "Reimbursement of public examination fees for eligible Adi Dravidar, tribal and converted-Christian community students; listing states no income limit.",
    "tags": [
      "Student",
      "Scholarship",
      "Exam fee"
    ]
  },
  {
    "title": "Meritorious Students to Pursue Higher Secondary Education in Best Schools",
    "category": "Education",
    "description": "Financial assistance for top students based on Class 10 public exam results to pursue higher secondary education at selected schools.",
    "tags": [
      "Student",
      "Scholarship"
    ]
  },
  {
    "title": "Production of Certified Seeds of Maize",
    "category": "Agriculture",
    "description": "Subsidy to farmers producing certified maize seeds in selected districts.",
    "tags": [
      "Farmer",
      "Maize",
      "Seeds"
    ]
  },
  {
    "title": "Assistance for Marriage - Differently Abled Persons",
    "category": "Marriage",
    "description": "Listing describes ₹2,000 for marriage expenses of an eligible differently-abled person or their son/daughter.",
    "tags": [
      "Marriage",
      "Disability"
    ]
  },
  {
    "title": "Annal Gandhi Memorial Award",
    "category": "Education",
    "description": "Award for a top boy and girl from listed SC/ST communities in each district based on Class 12 results.",
    "tags": [
      "Student",
      "Award"
    ]
  },
  {
    "title": "Pension for Journalists’ Family",
    "category": "Pension",
    "description": "Monthly pension for the wife of a deceased journalist pensioner, as described in the listing.",
    "tags": [
      "Pension",
      "Family"
    ]
  },
  {
    "title": "Marriage Assistance - Folk Artist",
    "category": "Arts & Culture",
    "description": "Marriage assistance for registered folk artists or their son or daughter.",
    "tags": [
      "Artist",
      "Marriage"
    ]
  },
  {
    "title": "Child Adoption - Tamil Nadu",
    "category": "Children & Family",
    "description": "Adoption support pathway for orphaned, abandoned, destitute or neglected children; follow official CARA and state procedures.",
    "tags": [
      "Adoption",
      "Children",
      "Family"
    ]
  },
  {
    "title": "Moovalur Ramamirtham Ammaiyar Marriage Assistance Scheme-II",
    "category": "Marriage",
    "description": "Financial assistance intended to help eligible poor parents with their daughters’ marriages and promote education.",
    "tags": [
      "Marriage",
      "Financial assistance"
    ]
  },
  {
    "title": "Family Maintenance Grant to Families of Deceased Famous Artists",
    "category": "Arts & Culture",
    "description": "One-time maintenance grant described as ₹25,000 for families of deceased famous artists.",
    "tags": [
      "Artist",
      "Family",
      "Financial assistance"
    ]
  },
  {
    "title": "Assistance to Legal Heirs of Deceased Indigent Artist",
    "category": "Arts & Culture",
    "description": "Listing describes ₹3,000 for an eligible legal heir of a deceased indigent artist who received assistance.",
    "tags": [
      "Artist",
      "Family",
      "Financial assistance"
    ]
  },
  {
    "title": "Accident Relief Scheme",
    "category": "Financial Assistance",
    "description": "Listing describes ₹20,000 to eligible BPL household legal heirs after the death of the primary breadwinner.",
    "tags": [
      "BPL",
      "Family",
      "Financial assistance"
    ]
  },
  {
    "title": "Distress Relief Scheme",
    "category": "Financial Assistance",
    "description": "Listing describes ₹20,000 assistance to eligible BPL households on the death of their primary breadwinner.",
    "tags": [
      "BPL",
      "Family",
      "Financial assistance"
    ]
  },
  {
    "title": "Chief Minister’s Girl Child Protection Scheme-I",
    "category": "Women & Children",
    "description": "Financial assistance for girl children in poor families and support for girls’ education.",
    "tags": [
      "Girl child",
      "Education",
      "Financial assistance"
    ]
  },
  {
    "title": "Journalists’ Family Benefit Fund",
    "category": "Financial Assistance",
    "description": "Support for families of journalists who died in service and met the listed service conditions.",
    "tags": [
      "Journalist",
      "Family",
      "Financial assistance"
    ]
  },
  {
    "title": "Financial Assistance for Medical Treatment of Journalists",
    "category": "Health",
    "description": "Medical treatment assistance for eligible journalists through the Chief Minister’s Public Relief Fund, as listed.",
    "tags": [
      "Journalist",
      "Health"
    ]
  },
  {
    "title": "Dr. Muthulakshmi Reddy Inter-caste Marriage Assistance Scheme-II",
    "category": "Marriage",
    "description": "Financial assistance intended to encourage eligible inter-caste marriages.",
    "tags": [
      "Marriage",
      "Inter-caste"
    ]
  },
  {
    "title": "Scholarships at IIT, IIM, IIIT, NIT and Central Universities",
    "category": "Education",
    "description": "Scholarship support for eligible Tamil Nadu BC/MBC/DNC students pursuing undergraduate or postgraduate courses at listed central institutions.",
    "tags": [
      "Student",
      "Scholarship"
    ]
  },
  {
    "title": "Education Assistance - Folk Artist",
    "category": "Education",
    "description": "Education assistance for children of registered folk artists.",
    "tags": [
      "Artist",
      "Student",
      "Financial assistance"
    ]
  },
  {
    "title": "Chief Minister Merit Award",
    "category": "Education",
    "description": "Listing describes ₹3,000 per year for five years for selected SC/ST boys and girls based on Class 12 marks, while they continue education.",
    "tags": [
      "Student",
      "Award"
    ]
  },
  {
    "title": "PEACE Awareness Programme",
    "category": "Business",
    "description": "Awareness programme for MSMEs about energy audits and energy conservation.",
    "tags": [
      "MSME",
      "Energy",
      "Training"
    ]
  },
  {
    "title": "Low Tension Power Tariff Subsidy",
    "category": "Business",
    "description": "Listing describes 20% electricity tariff subsidy for 36 months for eligible MSMEs, subject to scheme conditions.",
    "tags": [
      "MSME",
      "Electricity",
      "Subsidy"
    ]
  },
  {
    "title": "Quality Certification Reimbursement",
    "category": "Business",
    "description": "Reimbursement described up to ₹2,00,000 for national quality certification and ₹10,00,000 for international certification.",
    "tags": [
      "MSME",
      "Certification",
      "Reimbursement"
    ]
  },
  {
    "title": "Trademark or GI Registration Subsidy",
    "category": "Business",
    "description": "Subsidy intended to encourage MSMEs to register trademarks or geographical indications.",
    "tags": [
      "MSME",
      "IPR",
      "Subsidy"
    ]
  },
  {
    "title": "Patent Registration Subsidy",
    "category": "Business",
    "description": "Subsidy intended to encourage MSMEs to register patents.",
    "tags": [
      "MSME",
      "IPR",
      "Subsidy"
    ]
  },
  {
    "title": "Capital Subsidy",
    "category": "Business",
    "description": "Listing describes 25% subsidy on eligible plant and machinery costs for MSMEs, with additional support for certain entrepreneur categories.",
    "tags": [
      "MSME",
      "Machinery",
      "Subsidy"
    ]
  },
  {
    "title": "Grant-in-Aid for Group Art Exhibitions",
    "category": "Arts & Culture",
    "description": "Listing describes a ₹50,000 grant to a group of five artists for an art exhibition.",
    "tags": [
      "Artist",
      "Grant",
      "Exhibition"
    ]
  },
  {
    "title": "Distribution of Certified Seeds of Maize",
    "category": "Agriculture",
    "description": "Subsidy for maize farmers purchasing certified seeds in specified districts.",
    "tags": [
      "Farmer",
      "Seeds",
      "Subsidy"
    ]
  },
  {
    "title": "Back Ended Interest Subsidy (BEIS)",
    "category": "Business",
    "description": "Interest subsidy for eligible new micro and small manufacturing enterprises that have taken term loans.",
    "tags": [
      "MSME",
      "Loan",
      "Subsidy"
    ]
  },
  {
    "title": "Old Age Homes - Tamil Nadu",
    "category": "Senior Citizen",
    "description": "Living support intended to improve the living standards of older people.",
    "tags": [
      "Senior citizen",
      "Shelter",
      "Food"
    ]
  },
  {
    "title": "Team Production Award",
    "category": "Arts & Culture",
    "description": "Award for groups of artisans producing handicraft items; listing mentions three groups each year.",
    "tags": [
      "Craft",
      "Group",
      "Award"
    ]
  },
  {
    "title": "Generator Subsidy - Tamil Nadu",
    "category": "Business",
    "description": "Listing describes 25% subsidy for generator sets up to 125 KVA for manufacturers in Tamil Nadu.",
    "tags": [
      "Manufacturer",
      "Generator",
      "Subsidy"
    ]
  },
  {
    "title": "Integrated Pest Management Demonstration and Training",
    "category": "Agriculture",
    "description": "Financial assistance for a group of farmers to conduct pest-management demonstrations and training.",
    "tags": [
      "Farmer",
      "Training"
    ]
  },
  {
    "title": "Financial Assistance to NGOs for Schools for Children with Intellectual Disability",
    "category": "Disability",
    "description": "Financial assistance for eligible NGOs running schools for children with intellectual disabilities.",
    "tags": [
      "NGO",
      "Children",
      "Disability"
    ]
  },
  {
    "title": "Generator Subsidy for MSMEs",
    "category": "Business",
    "description": "Listing describes 25% generator-cost subsidy for eligible MSMEs, up to a maximum of ₹5,00,000 and capacity limits.",
    "tags": [
      "MSME",
      "Generator",
      "Subsidy"
    ]
  },
  {
    "title": "PEACE Incentive for Implementing Energy Audit Recommendations",
    "category": "Business",
    "description": "Incentive for eligible MSMEs implementing energy-audit recommendations.",
    "tags": [
      "MSME",
      "Energy",
      "Subsidy"
    ]
  },
  {
    "title": "PEACE Detailed Energy Audit",
    "category": "Business",
    "description": "Detailed energy audit to identify energy use, inefficiencies and opportunities for improvement.",
    "tags": [
      "MSME",
      "Energy",
      "Audit"
    ]
  },
  {
    "title": "Subsidy for Fund Raising from SME Exchange",
    "category": "Business",
    "description": "Subsidy intended to help eligible high-growth SMEs raise equity capital through SME Exchange IPOs.",
    "tags": [
      "MSME",
      "Funding",
      "Subsidy"
    ]
  },
  {
    "title": "Reimbursement of Stamp Duty and Registration Charges",
    "category": "Business",
    "description": "Reimbursement intended for eligible MSEs investing in backward blocks.",
    "tags": [
      "MSME",
      "Reimbursement"
    ]
  },
  {
    "title": "Handicrafts Export Award",
    "category": "Arts & Culture",
    "description": "Award listing mentions ₹40,000, a 4g gold medal, tamirapattiram and certificate for eligible handicraft exporters.",
    "tags": [
      "Exporter",
      "Craft",
      "Award"
    ]
  },
  {
    "title": "Payroll Subsidy",
    "category": "Business",
    "description": "Reimbursement of employee EPF contributions for eligible MSMEs, up to ₹24,000 per employee per year.",
    "tags": [
      "MSME",
      "Employee",
      "Reimbursement"
    ]
  },
  {
    "title": "PEACE Training Programme",
    "category": "Business",
    "description": "Training for MSMEs to improve energy performance and efficiency and reduce energy costs.",
    "tags": [
      "MSME",
      "Energy",
      "Training"
    ]
  },
  {
    "title": "Farmers Interest Group (FIG)",
    "category": "Agriculture",
    "description": "Grants for groups of 15 farmers for agricultural development, equipment, training, ID cards and district meetings.",
    "tags": [
      "Farmer",
      "Group",
      "Grant"
    ]
  }
];

const I18N = {
  en: {
    tagline:"Tamil Nadu Government Schemes", state:"Tamil Nadu", eyebrow:"GOVERNMENT SCHEME FINDER",
    heroTitle:'Find the support<br><em>you may qualify for.</em>',
    heroDesc:"Explore Tamil Nadu schemes in simple language. Search by name or answer a few questions to discover relevant options.",
    schemesListed:"scheme records",languageAvailable:"two languages",support:"Support",personalized:"Personalized matches",
    explore:"EXPLORE",findScheme:"Find a scheme",reset:"Reset filters ↺",searchPlaceholder:"Search schemes, benefits, or keywords…",
    category:"Scheme category",allCategories:"All categories",whoFor:"Who is it for?",everyone:"All beneficiaries",benefitType:"Benefit type",allBenefits:"All benefits",
    sort:"Sort:",relevance:"Relevance",az:"Name A–Z",noResults:"No matching schemes found",tryDifferent:"Try a different search term or reset the filters.",resetFilters:"Reset filters",
    quickCheck:"QUICK CHECK",eligibilityTitle:"Find schemes for your situation",eligibilityDesc:"Answer a few optional questions. We’ll show schemes whose descriptions match your answers. Final eligibility depends on official rules.",
    privacy:"Your answers stay in this page and are not sent to a server.",ageLabel:"Your age",preferNot:"Choose / prefer not to say",occupationLabel:"Your situation / occupation",chooseOne:"Choose an option",
    communityLabel:"Community category (optional)",notSpecify:"Prefer not to specify",disabilityLabel:"Disability status (optional)",incomeLabel:"Household situation (optional)",maritalLabel:"Marital / family situation (optional)",
    checkMatches:"Show matching schemes",eligibilityDisclaimer:"This is a basic guide, not an official eligibility decision.",footerText:"A simple discovery interface based on scheme listings supplied for this project. Verify details with the relevant department before applying.",
    madeFor:"Made for easier scheme discovery",projectCredit:"A STUDENT PROJECT",madeByLabel:"Made by",madeByName:"Mohammad Owais Quazi",mentorLabel:"Under the mentorship of",mentorName:"Mr. Divyanshu Chouhan",important:"Important",verifyDetails:"The listing text may be incomplete. Confirm current eligibility, documents, deadlines and benefit amount with the official Tamil Nadu department or myScheme before applying.",
    checkEligibility:"Check my possible matches",matchCount:"schemes shown",schemeCountLabel:"schemes in this catalogue",viewDetails:"View details",schemeSummary:"Scheme summary",simpleMeaning:"In simple words",whoMayBenefit:"Who may find this scheme relevant?",beforeApply:"Before you apply",detailAudiencePrefix:"The listing is tagged for",detailAudienceFallback:"people interested in this category",checklistItems:["Check the latest rules and who can apply.","Ask the department which documents are required.","Confirm the current benefit amount, deadline and application method."],noDescription:"No further description was supplied in the listing.",
    ageMatch:"Age",occupationMatch:"Occupation",communityMatch:"Community",disabilityMatch:"Disability",incomeMatch:"Household",familyMatch:"Family situation",
    matchNote:"These are possible matches based on the information provided, not confirmation that you qualify. Check the official scheme rules.",
    allResults:"Showing",resultsFor:"matching schemes",close:"Close"
  },
  hi: {
    tagline:"तमिलनाडु सरकारी योजनाएँ",state:"तमिलनाडु",eyebrow:"सरकारी योजना खोजें",
    heroTitle:'ऐसी सहायता खोजें<br><em>जिसके आप पात्र हो सकते हैं।</em>',
    heroDesc:"तमिलनाडु की योजनाएँ आसान भाषा में देखें। नाम से खोजें या कुछ सवालों के जवाब देकर संबंधित योजनाएँ पाएँ।",
    schemesListed:"योजना रिकॉर्ड",languageAvailable:"दो भाषाएँ",support:"सहायता",personalized:"आपके लिए संभावित योजनाएँ",
    explore:"खोजें",findScheme:"योजना खोजें",reset:"फ़िल्टर हटाएँ ↺",searchPlaceholder:"योजना, लाभ या शब्द खोजें…",
    category:"योजना की श्रेणी",allCategories:"सभी श्रेणियाँ",whoFor:"किसके लिए?",everyone:"सभी लाभार्थी",benefitType:"लाभ का प्रकार",allBenefits:"सभी लाभ",
    sort:"क्रम:",relevance:"प्रासंगिकता",az:"नाम A–Z",noResults:"कोई मिलती-जुलती योजना नहीं मिली",tryDifferent:"दूसरा शब्द खोजें या फ़िल्टर हटाएँ।",resetFilters:"फ़िल्टर हटाएँ",
    quickCheck:"त्वरित जाँच",eligibilityTitle:"अपनी स्थिति के अनुसार योजनाएँ खोजें",eligibilityDesc:"कुछ वैकल्पिक सवालों के जवाब दें। आपके जवाबों से मिलती जानकारी वाली योजनाएँ दिखेंगी। अंतिम पात्रता सरकारी नियमों पर निर्भर है।",
    privacy:"आपके जवाब इसी पेज पर रहते हैं और किसी सर्वर पर नहीं भेजे जाते।",ageLabel:"आपकी उम्र",preferNot:"चुनें / बताना नहीं चाहते",occupationLabel:"आपकी स्थिति / काम",chooseOne:"एक विकल्प चुनें",
    communityLabel:"समुदाय श्रेणी (वैकल्पिक)",notSpecify:"नहीं बताना चाहते",disabilityLabel:"दिव्यांगता की स्थिति (वैकल्पिक)",incomeLabel:"परिवार की आर्थिक स्थिति (वैकल्पिक)",maritalLabel:"वैवाहिक / पारिवारिक स्थिति (वैकल्पिक)",
    checkMatches:"मिलती-जुलती योजनाएँ दिखाएँ",eligibilityDisclaimer:"यह शुरुआती मार्गदर्शन है, आधिकारिक पात्रता का निर्णय नहीं।",footerText:"यह पेज इस परियोजना के लिए दिए गए योजना विवरणों पर आधारित है। आवेदन से पहले संबंधित विभाग से जानकारी की पुष्टि करें।",
    madeFor:"योजनाएँ आसानी से खोजने के लिए",projectCredit:"विद्यार्थी द्वारा बनाया गया प्रोजेक्ट",madeByLabel:"निर्माता",madeByName:"Mohammad Owais Quazi",mentorLabel:"मार्गदर्शन",mentorName:"श्री Divyanshu Chouhan सर",important:"ज़रूरी सूचना",verifyDetails:"योजना का विवरण अधूरा हो सकता है। आवेदन से पहले पात्रता, दस्तावेज़, अंतिम तारीख और लाभ की राशि की पुष्टि तमिलनाडु के संबंधित विभाग या myScheme से करें।",
    checkEligibility:"मेरे लिए संभावित योजनाएँ देखें",matchCount:"योजनाएँ दिखाई गईं",schemeCountLabel:"इस सूची में योजनाएँ",viewDetails:"विवरण देखें",schemeSummary:"योजना की आसान जानकारी",simpleMeaning:"आसान शब्दों में",whoMayBenefit:"यह योजना किन लोगों के काम आ सकती है?",beforeApply:"आवेदन करने से पहले",detailAudiencePrefix:"सूची में इस योजना के साथ ये श्रेणियाँ दी गई हैं:",detailAudienceFallback:"इस श्रेणी में रुचि रखने वाले लोग",checklistItems:["नियम और पात्रता की नई जानकारी जाँचें।","संबंधित विभाग से ज़रूरी दस्तावेज़ पूछें।","लाभ की मौजूदा राशि, आख़िरी तारीख और आवेदन का तरीका पक्का करें।"],noDescription:"सूची में अतिरिक्त विवरण नहीं दिया गया।",
    ageMatch:"उम्र",occupationMatch:"काम",communityMatch:"समुदाय",disabilityMatch:"दिव्यांगता",incomeMatch:"आर्थिक स्थिति",familyMatch:"पारिवारिक स्थिति",
    matchNote:"ये आपके जवाबों के आधार पर संभावित योजनाएँ हैं, पात्रता की पुष्टि नहीं। आधिकारिक नियम ज़रूर जाँचें।",
    allResults:"दिखाई जा रही हैं",resultsFor:"मिलती-जुलती योजनाएँ",close:"बंद करें"
  }
};

let language = "en";
let currentSchemes = [...SCHEMES];
let lastEligibilityMatches = null;
const $ = (id) => document.getElementById(id);

function t(key){ return I18N[language][key] || I18N.en[key] || key; }
function translatedCategory(category){
  if(language !== "hi") return category;
  const map = {"Agriculture":"कृषि","Education":"शिक्षा","Disability":"दिव्यांग सहायता","Women":"महिला सहायता","Women & Children":"महिला एवं बाल कल्याण","Children & Family":"बच्चे और परिवार","Marriage":"विवाह सहायता","Arts & Culture":"कला एवं संस्कृति","Business":"व्यापार / MSME","Loans":"ऋण","Pension":"पेंशन","Health":"स्वास्थ्य","Housing":"आवास","Employment":"रोज़गार","Training":"प्रशिक्षण","Senior Citizen":"वरिष्ठ नागरिक","Financial Assistance":"आर्थिक सहायता","Community Support":"सामुदायिक सहायता","Energy":"ऊर्जा","Education & Employment":"शिक्षा और रोज़गार","Agriculture & Farmers Welfare":"कृषि और किसान कल्याण","Social Welfare":"सामाजिक कल्याण","Financial Services":"वित्तीय सेवाएँ","Skill Development":"कौशल विकास","Rural Development":"ग्रामीण विकास","Environment":"पर्यावरण","Food & Nutrition":"खाद्य और पोषण","Sanitation":"स्वच्छता","Public Welfare":"जन कल्याण","Labour":"श्रम","Fisheries":"मत्स्य पालन","Animal Husbandry":"पशुपालन","Technology":"तकनीक","Energy & Power":"ऊर्जा और बिजली"};
  return map[category] || (language === "hi" ? translateRoughly(category) : category);
}
function translateText(key, fallback){ return language==="hi" ? (fallback || key) : key; }

function applyTranslations(){
  document.documentElement.lang = language === "hi" ? "hi" : "en";
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const key=el.dataset.i18n;
    if(I18N[language][key]) el.innerHTML=I18N[language][key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el=>{
    const key=el.dataset.i18nPlaceholder;
    if(I18N[language][key]) el.placeholder=I18N[language][key];
  });
  $("languageBtn").textContent = language === "en" ? "हिन्दी" : "English";
  document.querySelectorAll("select option[data-en][data-hi]").forEach(option=>{
    option.textContent = option.dataset[language];
  });
  $("dialogClose").setAttribute("aria-label", language === "hi" ? "बंद करें" : "Close");
  populateFilterOptions();
  renderSchemes();
  if($("schemeDialog").open && window.selectedScheme) showDialog(window.selectedScheme);
}
function populateFilterOptions(){
  const categories=[...new Set(SCHEMES.map(s=>s.category))].sort();
  const benefits=[...new Set(SCHEMES.flatMap(s=>s.tags))].sort();
  const cat=$("categoryFilter"), ben=$("benefitFilter");
  const catValue=cat.value, benValue=ben.value;
  cat.innerHTML=`<option value="">${t("allCategories")}</option>`+categories.map(c=>`<option value="${escapeHtml(c)}">${escapeHtml(translatedCategory(c))}</option>`).join("");
  ben.innerHTML=`<option value="">${t("allBenefits")}</option>`+benefits.map(b=>`<option value="${escapeHtml(b)}">${escapeHtml(language==="hi" ? translateTag(b) : b)}</option>`).join("");
  cat.value=catValue; ben.value=benValue;
}
function translateTag(tag){
  const map={"Farmer":"किसान","Loan":"ऋण","Equipment":"उपकरण","Women":"महिलाएँ","Transport":"परिवहन","Youth":"युवा","MSME":"MSME","Subsidy":"सब्सिडी","Marriage":"विवाह","Gold":"सोना","Financial assistance":"आर्थिक सहायता","Training":"प्रशिक्षण","Children":"बच्चे","Education":"शिक्षा","Student":"विद्यार्थी","Scholarship":"छात्रवृत्ति","Disability":"दिव्यांगता","Artist":"कलाकार","Culture":"संस्कृति","Grant":"अनुदान","Award":"पुरस्कार","Pension":"पेंशन","Business":"व्यापार","Health":"स्वास्थ्य","Insurance":"बीमा","Family":"परिवार","Widow":"विधवा","Senior citizen":"वरिष्ठ नागरिक","Seeds":"बीज","Farmer":"किसान","Self-employment":"स्वरोज़गार","Allowance":"भत्ता","Housing":"आवास","Hostel":"छात्रावास","Shelter":"आश्रय","Food":"भोजन","Exam fee":"परीक्षा शुल्क","IPR":"बौद्धिक संपदा","Electricity":"बिजली","Reimbursement":"प्रतिपूर्ति","Entrepreneur":"उद्यमी","Jewel loan":"गहना ऋण"};
  return map[tag] || translateRoughly(tag);
}
function escapeHtml(value){
  return String(value).replace(/[&<>"']/g, ch=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
}
function getFilteredSchemes(){
  const q=$("searchInput").value.trim().toLowerCase();
  const cat=$("categoryFilter").value, audience=$("audienceFilter").value, benefit=$("benefitFilter").value;
  let list=SCHEMES.filter(s=>{
    const haystack=[s.title,s.category,s.description,...s.tags].join(" ").toLowerCase();
    const searchMatch=!q || haystack.includes(q);
    const catMatch=!cat || s.category===cat;
    const benefitMatch=!benefit || s.tags.includes(benefit);
    const audienceMap={"Student":["student","scholarship","education","school","college"],"Farmer":["farmer","agriculture","seed","irrigation","poultry","horticulture"],"Women":["women","widow","girl","marriage","maternity"],"Person with disability":["disability","differently","visually","hearing","wheelchair","assistive"],"Artist":["artist","craft","art","folk"],"MSME / Business":["msme","business","enterprise","loan","subsidy"],"Senior citizen":["senior","old age","pension","aged"],"Tribal / Adi Dravidar":["tribal","adi dravidar","sc/st","scheduled"],"Family":["family","child","children","widow","marriage"]};
    const words=audienceMap[audience]||[];
    const audienceMatch=!audience || (s.title+" "+s.category+" "+s.description+" "+s.tags.join(" ")).toLowerCase().includes(words.find(w=>(s.title+" "+s.category+" "+s.description+" "+s.tags.join(" ")).toLowerCase().includes(w))||"__NO_MATCH__");
    return searchMatch && catMatch && benefitMatch && audienceMatch;
  });
  if($("sortFilter").value==="az") list.sort((a,b)=>a.title.localeCompare(b.title));
  return list;
}
function renderSchemes(){
  const list=lastEligibilityMatches || getFilteredSchemes();
  const grid=$("schemeGrid");
  $("schemeCount").textContent=SCHEMES.length;
  $("resultsSummary").textContent=lastEligibilityMatches
    ? `${list.length} ${t("matchCount")} · ${t("matchNote")}`
    : `${t("allResults")} ${list.length} ${t("resultsFor")}`;
  grid.innerHTML="";
  list.forEach((s,index)=>{
    const card=document.createElement("article");
    card.className="scheme-card";
    const tags=s.tags.slice(0,3).map(tag=>`<span class="tag">${escapeHtml(language==="hi"?translateTag(tag):tag)}</span>`).join("");
    card.innerHTML=`<div class="card-top"><span class="card-category">${escapeHtml(translatedCategory(s.category))}</span><span class="card-arrow">↗</span></div><h3>${escapeHtml(language==="hi"?translateSchemeTitle(s.title):s.title)}</h3><p>${escapeHtml(language==="hi"?translateDescription(s.description):s.description)}</p><div class="card-bottom"><div class="tag-list">${tags}</div><button class="details-link" type="button">${t("viewDetails")} →</button></div>`;
    card.querySelector("button").addEventListener("click",()=>showDialog(s));
    card.querySelector(".card-arrow").addEventListener("click",()=>showDialog(s));
    grid.appendChild(card);
  });
  $("emptyState").hidden=list.length!==0;
  grid.hidden=list.length===0;
}
const HI_PHRASES = [
  ["financial assistance", "आर्थिक सहायता"], ["financial support", "आर्थिक मदद"], ["assistance for", "के लिए सहायता"],
  ["support for", "के लिए मदद"], ["free of cost", "निःशुल्क"], ["free training", "निःशुल्क प्रशिक्षण"],
  ["eligible differently-abled people", "पात्र दिव्यांग लोगों"], ["differently-abled people", "दिव्यांग लोग"],
  ["persons with disabilities", "दिव्यांग व्यक्ति"], ["person with disability", "दिव्यांग व्यक्ति"],
  ["eligible students", "पात्र विद्यार्थियों"], ["eligible women", "पात्र महिलाओं"], ["eligible farmers", "पात्र किसानों"],
  ["eligible families", "पात्र परिवारों"], ["eligible candidates", "पात्र उम्मीदवारों"], ["eligible people", "पात्र लोगों"],
  ["for eligible", "पात्र लोगों के लिए"], ["for students", "विद्यार्थियों के लिए"], ["for farmers", "किसानों के लिए"],
  ["for women", "महिलाओं के लिए"], ["for children", "बच्चों के लिए"], ["for artists", "कलाकारों के लिए"],
  ["government schools", "सरकारी स्कूलों"], ["government-school", "सरकारी स्कूल"], ["government or aided", "सरकारी या सहायता प्राप्त"],
  ["school students", "स्कूली विद्यार्थियों"], ["higher education", "उच्च शिक्षा"], ["self-employment", "स्वरोज़गार"],
  ["interest-free", "बिना ब्याज वाला"], ["interest subsidy", "ब्याज पर सब्सिडी"], ["interest rate", "ब्याज दर"],
  ["low income", "कम आय"], ["below poverty line", "गरीबी रेखा से नीचे"], ["destitute", "निराश्रित"],
  ["widow remarriage", "विधवा पुनर्विवाह"], ["marriage assistance", "विवाह सहायता"], ["hearing impairment", "सुनने में दिव्यांगता"],
  ["visually impaired", "दृष्टिबाधित"], ["hearing impaired", "सुनने में दिव्यांग"], ["locomotor disability", "चलने-फिरने की दिव्यांगता"],
  ["monthly pension", "मासिक पेंशन"], ["pension listing", "पेंशन योजना के विवरण में"], ["medical treatment", "इलाज"],
  ["health-care", "स्वास्थ्य सेवा"], ["public examination", "बोर्ड परीक्षा"], ["examination fees", "परीक्षा शुल्क"],
  ["tuition and examination-fee support", "ट्यूशन और परीक्षा शुल्क में सहायता"], ["free textbooks", "मुफ़्त पाठ्यपुस्तकें"],
  ["textbooks", "पाठ्यपुस्तकें"], ["scholarship", "छात्रवृत्ति"], ["subsidy", "सब्सिडी"], ["reimbursement", "खर्च की भरपाई"],
  ["loan", "ऋण"], ["loans", "ऋण"], ["grant", "अनुदान"], ["award", "पुरस्कार"], ["certificate", "प्रमाणपत्र"],
  ["training", "प्रशिक्षण"], ["education", "शिक्षा"], ["students", "विद्यार्थियों"], ["student", "विद्यार्थी"],
  ["farmers", "किसानों"], ["farmer", "किसान"], ["women", "महिलाएँ"], ["children", "बच्चे"], ["child", "बच्चा"],
  ["artists", "कलाकारों"], ["artist", "कलाकार"], ["widows", "विधवाएँ"], ["widow", "विधवा"], ["senior citizens", "वरिष्ठ नागरिकों"],
  ["old age", "बुढ़ापे"], ["elderly", "बुज़ुर्ग"], ["employment", "रोज़गार"], ["unemployed", "बेरोज़गार"],
  ["business", "व्यवसाय"], ["enterprise", "उद्यम"], ["manufacturing", "निर्माण"], ["industrial units", "औद्योगिक इकाइयाँ"],
  ["electricity", "बिजली"], ["solar", "सौर ऊर्जा"], ["energy", "ऊर्जा"], ["equipment", "उपकरण"], ["devices", "उपकरण"],
  ["machine", "मशीन"], ["machines", "मशीनें"], ["seed", "बीज"], ["seeds", "बीज"], ["agriculture", "कृषि"],
  ["agricultural", "कृषि संबंधी"], ["irrigation", "सिंचाई"], ["housing", "आवास"], ["household", "परिवार"], ["family", "परिवार"],
  ["food", "भोजन"], ["shelter", "आश्रय"], ["clothing", "कपड़े"], ["medical care", "चिकित्सा देखभाल"],
  ["per month", "प्रति माह"], ["per year", "प्रति वर्ष"], ["per hectare", "प्रति हेक्टेयर"], ["up to", "तक"],
  ["intended to", "का उद्देश्य है"], ["intended for", "के लिए है"], ["described as", "के रूप में बताया गया है"],
  ["listing describes", "दिए गए विवरण के अनुसार"], ["the listing mentions", "दिए गए विवरण में"], ["as described in the listing", "दिए गए विवरण के अनुसार"],
  ["confirm current", "वर्तमान जानकारी की पुष्टि करें"], ["subject to scheme conditions", "योजना की शर्तों के अधीन"],
  ["Chief Minister", "मुख्यमंत्री"], ["two wheeler", "दोपहिया वाहन"], ["old age", "बुढ़ापे"], ["welfare", "कल्याण"], ["development", "विकास"], ["public relief", "जन राहत"], ["public", "जन"], ["department", "विभाग"], ["working", "कामकाजी"], ["employee", "कर्मचारी"], ["employees", "कर्मचारी"], ["rural", "ग्रामीण"], ["urban", "शहरी"], ["certificate", "प्रमाणपत्र"], ["export", "निर्यात"], ["handicrafts", "हस्तशिल्प"], ["craft", "शिल्प"], ["marriage", "विवाह"], ["pension", "पेंशन"], ["bus travel", "बस यात्रा"], ["ticket", "टिकट"], ["Tamil Nadu", "तमिलनाडु"], ["government", "सरकारी"], ["scheme", "योजना"], ["for", "के लिए"], ["and", "और"],
  ["with", "के साथ"], ["people", "लोगों"], ["person", "व्यक्ति"], ["who", "जो"], ["their", "उनके"], ["the", ""],
  ["eligible", "पात्र"], ["free", "मुफ़्त"], ["financial", "आर्थिक"], ["benefit", "लाभ"], ["support", "सहायता"],
  ["assistance", "सहायता"], ["scheme", "योजना"], ["programme", "कार्यक्रम"], ["program", "कार्यक्रम"], ["based on", "के आधार पर"],
  ["selected", "चयनित"], ["registered", "पंजीकृत"], ["rural", "ग्रामीण"], ["urban", "शहरी"], ["poor", "गरीब"],
  ["young", "युवा"], ["women's", "महिलाओं की"], ["children's", "बच्चों की"], ["supporting", "सहायता देने वाला"],
  ["provides", "देता है"], ["providing", "देने के लिए"], ["for eligible", "पात्र लोगों के लिए"]
];
function translateRoughly(text){
  let out=String(text);
  for(const [from,to] of HI_PHRASES){
    const escaped=from.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
    out=out.replace(new RegExp("\\b"+escaped+"\\b",'gi'),to);
  }
  return out.replace(/\s+/g,' ').replace(/\s+([.,;:])/g,'$1').trim();
}
function translateSchemeTitle(title){
  const exact={"Old Age Homes - Tamil Nadu":"तमिलनाडु में वृद्धाश्रम","Chief Minister Breakfast Scheme":"मुख्यमंत्री नाश्ता योजना","Zero Ticket Bus Travel Scheme for Women":"महिलाओं के लिए निःशुल्क बस यात्रा योजना","Destitute Widow Pension Scheme":"निराश्रित विधवा पेंशन योजना","Amma Two Wheeler Scheme for Working Women":"कामकाजी महिलाओं के लिए अम्मा दोपहिया योजना","Chief Minister Merit Award":"मुख्यमंत्री मेरिट पुरस्कार","Farmers Interest Group (FIG)":"किसान हित समूह (FIG)","Handicrafts Export Award":"हस्तशिल्प निर्यात पुरस्कार","Payroll Subsidy":"वेतन सब्सिडी","Child Adoption - Tamil Nadu":"तमिलनाडु में बाल दत्तक ग्रहण","Generator Subsidy - Tamil Nadu":"जनरेटर सब्सिडी"};
  if(exact[title]) return exact[title];
  return translateRoughly(title).replace(/\b[A-Z]{2,}\b/g,m=>m);
}
function translateDescription(desc){
  const exact={"Breakfast for government-school primary children in Classes 1–5 on school days.":"सरकारी स्कूलों की कक्षा 1–5 के बच्चों को स्कूल के दिनों में नाश्ता दिया जाता है।","Living support intended to improve the living standards of older people.":"बुज़ुर्गों के जीवन स्तर को बेहतर बनाने के लिए रहने और देखभाल की सहायता।","Free sewing machines for eligible destitute or deserted women, widows and differently-abled people to support self-employment.":"स्वरोज़गार के लिए पात्र निराश्रित महिलाओं, विधवाओं और दिव्यांग लोगों को मुफ़्त सिलाई मशीनें दी जाती हैं।"};
  if(exact[desc]) return exact[desc];
  return translateRoughly(desc);
}
function schemeMeaning(s){
  const text=(s.title+" "+s.description+" "+s.tags.join(" ")).toLowerCase();
  let extraEn="Read this as a short summary of the scheme listing. The exact rules and available benefit can change, so confirm them before applying.";
  let extraHi="यह योजना की सूची में दी गई जानकारी का आसान सार है। नियम और मिलने वाला लाभ बदल सकते हैं, इसलिए आवेदन से पहले पुष्टि करें।";
  if(/loan|loans|interest rate|jewel loan/.test(text)){
    extraEn="This is loan-related support, not necessarily a free grant. Check the interest rate, repayment period, security needed and any fees before accepting a loan.";
    extraHi="यह ऋण से जुड़ी सहायता है; इसे मुफ़्त अनुदान न समझें। ऋण लेने से पहले ब्याज दर, लौटाने की अवधि, ज़मानत और अन्य शुल्क पूछें।";
  } else if(/scholarship|student|school|college|tuition|textbook|education/.test(text)){
    extraEn="This is education-related support. The class or course, marks, family income, community and institution may affect eligibility, depending on the official rules.";
    extraHi="यह पढ़ाई से जुड़ी सहायता है। आधिकारिक नियमों के अनुसार कक्षा या कोर्स, अंक, परिवार की आय, समुदाय और संस्थान जैसी शर्तें लागू हो सकती हैं।";
  } else if(/subsidy|reimbursement/.test(text)){
    extraEn="A subsidy or reimbursement usually covers only a specified part of an eligible cost. Ask whether you must pay first and claim later, and what limits apply.";
    extraHi="सब्सिडी या खर्च की भरपाई में आम तौर पर पात्र खर्च का कुछ हिस्सा ही मिलता है। पूछें कि पहले पैसा खुद देना होगा या नहीं और कितनी सीमा लागू है।";
  } else if(/pension|monthly allowance|maintenance allowance/.test(text)){
    extraEn="This is ongoing financial support in the listing. Age, income, disability, residence or other conditions may apply; confirm the current amount and renewal process.";
    extraHi="सूची के अनुसार यह नियमित आर्थिक सहायता है। उम्र, आय, दिव्यांगता, निवास या अन्य शर्तें हो सकती हैं; मौजूदा राशि और नवीनीकरण का तरीका पूछें।";
  } else if(/award|medal|certificate|prize/.test(text)){
    extraEn="This appears to be an award or recognition programme. Check who can be nominated, selection criteria, dates and whether the listed cash or items are current.";
    extraHi="यह पुरस्कार या सम्मान से जुड़ी योजना लगती है। कौन आवेदन या नामांकन कर सकता है, चयन के नियम, तारीखें और पुरस्कार की मौजूदा जानकारी जाँचें।";
  } else if(/free|wheelchair|textbooks|machine|device|bus travel|breakfast|food|hostel|training/.test(text)){
    extraEn="The listing describes a service, item or training rather than only cash support. Confirm who provides it, where it is available and whether any certificate or referral is required.";
    extraHi="सूची में पैसे के बजाय सेवा, सामान या प्रशिक्षण का ज़िक्र है। पता करें कि यह कहाँ मिलता है, कौन देता है और किसी प्रमाणपत्र या रेफ़रल की ज़रूरत है या नहीं।";
  }
  return language==="hi"?extraHi:extraEn;
}
function schemeAudience(s){
  const tags=s.tags.map(tag=>language==="hi"?translateTag(tag):tag);
  const prefix=language==="hi"?I18N.hi.detailAudiencePrefix:I18N.en.detailAudiencePrefix;
  return prefix+" "+(tags.length?tags.join(", "):(language==="hi"?I18N.hi.detailAudienceFallback:I18N.en.detailAudienceFallback))+". "+(language==="hi"?"ये टैग केवल शुरुआती संकेत हैं; असली पात्रता सरकारी नियम तय करते हैं।":"These tags are only a guide; the official rules decide eligibility.");
}
function showDialog(s){
  window.selectedScheme=s;
  $("dialogCategory").textContent=translatedCategory(s.category);
  $("dialogTitle").textContent=language==="hi"?translateSchemeTitle(s.title):s.title;
  $("dialogDescription").textContent=language==="hi"?translateDescription(s.description):s.description;
  $("dialogMeaning").textContent=schemeMeaning(s);
  $("dialogAudience").textContent=schemeAudience(s);
  $("dialogChecklist").innerHTML=I18N[language].checklistItems.map(item=>`<li>${escapeHtml(item)}</li>`).join("");
  $("dialogTags").innerHTML=s.tags.map(tag=>`<span class="tag">${escapeHtml(language==="hi"?translateTag(tag):tag)}</span>`).join("");
  if(!$("schemeDialog").open) $("schemeDialog").showModal();
}
function resetFilters(){
  $("searchInput").value=""; $("categoryFilter").value=""; $("audienceFilter").value=""; $("benefitFilter").value=""; $("sortFilter").value="relevance";
  lastEligibilityMatches=null; renderSchemes();
}
function runEligibility(event){
  event.preventDefault();
  const answers={age:$("age").value,occupation:$("occupation").value,community:$("community").value,disability:$("disability").value,income:$("income").value,family:$("family").value};
  const rules=[
    {field:"occupation",value:"student",terms:["student","scholarship","education","school","college","training","award"]},
    {field:"occupation",value:"farmer",terms:["farmer","agriculture","seed","irrigation","poultry","horticulture","fishing"]},
    {field:"occupation",value:"business",terms:["msme","business","enterprise","loan","subsidy","manufacturer"]},
    {field:"occupation",value:"artist",terms:["artist","craft","art ","folk"]},
    {field:"occupation",value:"unemployed",terms:["unemploy","employment","youth","training","entrepreneur"]},
    {field:"occupation",value:"worker",terms:["working","worker","employee","payroll","women"]},
    {field:"disability",value:"yes",terms:["disability","differently","visually","hearing","wheelchair","assistive","cerebral","blind","leprosy"]},
    {field:"income",value:"bpl",terms:["bpl","poor","destitute","indigent","widow","financial assistance","pension"]},
    {field:"income",value:"low",terms:["poor","destitute","financial assistance","pension","subsidy","scholarship"]},
    {field:"family",value:"widow",terms:["widow","remarriage","destitute","pension","wife"]},
    {field:"family",value:"marriage",terms:["marriage","inter-caste"]},
    {field:"family",value:"girlchild",terms:["girl child","girl","daughter","children","education"]},
    {field:"community",value:"scst",terms:["sc/st","tribal","adi dravidar","scheduled","annal ambedkar","chief minister merit"]},
    {field:"community",value:"bcm",terms:["bc/m bc","bc/m bc/dnc","backward","most backward","dnc","postmatric","pre-matric"]}
  ];
  const chosen=rules.filter(r=>answers[r.field]===r.value);
  const score=s=>{
    const text=(s.title+" "+s.category+" "+s.description+" "+s.tags.join(" ")).toLowerCase();
    return chosen.reduce((total,r)=>total+(r.terms.some(term=>text.includes(term))?1:0),0);
  };
  let matches=SCHEMES.map(s=>({s,score:score(s)})).filter(x=>x.score>0).sort((a,b)=>b.score-a.score).map(x=>x.s);
  if(!chosen.length){
    $("eligibilityNote").textContent=language==="hi"?"कम-से-कम एक सवाल का जवाब चुनें।":"Choose at least one answer to get suggestions.";
    return;
  }
  lastEligibilityMatches=matches;
  $("eligibilityNote").textContent=t("matchNote");
  $("searchInput").value=""; $("categoryFilter").value=""; $("audienceFilter").value=""; $("benefitFilter").value="";
  renderSchemes();
  $("schemeGrid").scrollIntoView({behavior:"smooth",block:"start"});
}
document.addEventListener("DOMContentLoaded",()=>{
  $("year").textContent=new Date().getFullYear();
  populateFilterOptions();
  renderSchemes();
  $("languageBtn").addEventListener("click",()=>{language=language==="en"?"hi":"en";applyTranslations();});
  ["searchInput","categoryFilter","audienceFilter","benefitFilter","sortFilter"].forEach(id=>{
    $(id).addEventListener(id==="searchInput"?"input":"change",()=>{lastEligibilityMatches=null;renderSchemes();});
  });
  $("resetBtn").addEventListener("click",resetFilters);
  $("emptyReset").addEventListener("click",resetFilters);
  $("eligibilityForm").addEventListener("submit",runEligibility);
  $("dialogClose").addEventListener("click",()=>$("schemeDialog").close());
  $("dialogCheck").addEventListener("click",()=>{$("schemeDialog").close();$("eligibility").scrollIntoView({behavior:"smooth"});});
  $("schemeDialog").addEventListener("click",e=>{if(e.target===$("schemeDialog"))$("schemeDialog").close();});
});

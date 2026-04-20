import type { Employee } from "./types";

function avatar(seed: string) {
  return `https://api.dicebear.com/9.x/notionists/svg?seed=${encodeURIComponent(seed)}`;
}

export const employees: Employee[] = [
  // ── CEO ───────────────────────────────────────────────
  { id: "1", parentId: "", name: "Jordan Chen", title: "CEO", department: "Executive", imageUrl: avatar("jordan-chen") },

  // ── C-Suite ───────────────────────────────────────────
  { id: "2", parentId: "1", name: "Priya Patel", title: "CTO", department: "Engineering", imageUrl: avatar("priya-patel") },
  { id: "3", parentId: "1", name: "Marcus Johnson", title: "CPO", department: "Product", imageUrl: avatar("marcus-johnson") },
  { id: "4", parentId: "1", name: "Sarah Kim", title: "VP Sales", department: "Sales", imageUrl: avatar("sarah-kim") },
  { id: "5", parentId: "1", name: "David Okafor", title: "VP Marketing", department: "Marketing", imageUrl: avatar("david-okafor") },
  { id: "6", parentId: "1", name: "Rachel Torres", title: "VP Customer Success", department: "Customer Success", imageUrl: avatar("rachel-torres") },
  { id: "7", parentId: "1", name: "Michael Zhang", title: "CFO", department: "Finance", imageUrl: avatar("michael-zhang") },
  { id: "8", parentId: "1", name: "Lisa Nakamura", title: "COO", department: "Operations", imageUrl: avatar("lisa-nakamura") },

  // ── Engineering (reports to CTO #2) ───────────────────
  { id: "9", parentId: "2", name: "Alex Rivera", title: "VP Engineering", department: "Engineering", imageUrl: avatar("alex-rivera") },

  // Frontend
  { id: "10", parentId: "9", name: "Emily Watson", title: "Frontend Lead", department: "Engineering", imageUrl: avatar("emily-watson") },
  { id: "11", parentId: "10", name: "Liam Park", title: "Sr. Frontend Engineer", department: "Engineering", imageUrl: avatar("liam-park") },
  { id: "12", parentId: "10", name: "Sophia Andersen", title: "Frontend Engineer", department: "Engineering", imageUrl: avatar("sophia-andersen") },
  { id: "13", parentId: "10", name: "Noah Garcia", title: "Frontend Engineer", department: "Engineering", imageUrl: avatar("noah-garcia") },
  { id: "14", parentId: "10", name: "Ava Nguyen", title: "Frontend Engineer", department: "Engineering", imageUrl: avatar("ava-nguyen") },
  { id: "15", parentId: "10", name: "Ethan Brown", title: "Frontend Engineer", department: "Engineering", imageUrl: avatar("ethan-brown") },
  { id: "16", parentId: "10", name: "Mia Thompson", title: "Frontend Engineer", department: "Engineering", imageUrl: avatar("mia-thompson") },

  // Backend
  { id: "17", parentId: "9", name: "James Liu", title: "Backend Lead", department: "Engineering", imageUrl: avatar("james-liu") },
  { id: "18", parentId: "17", name: "Isabella Martinez", title: "Sr. Backend Engineer", department: "Engineering", imageUrl: avatar("isabella-martinez") },
  { id: "19", parentId: "17", name: "Benjamin Taylor", title: "Backend Engineer", department: "Engineering", imageUrl: avatar("benjamin-taylor") },
  { id: "20", parentId: "17", name: "Charlotte Wilson", title: "Backend Engineer", department: "Engineering", imageUrl: avatar("charlotte-wilson") },
  { id: "21", parentId: "17", name: "Lucas Harris", title: "Backend Engineer", department: "Engineering", imageUrl: avatar("lucas-harris") },
  { id: "22", parentId: "17", name: "Amelia Clark", title: "Backend Engineer", department: "Engineering", imageUrl: avatar("amelia-clark") },

  // DevOps / Infrastructure
  { id: "23", parentId: "9", name: "Samuel Patel", title: "Infrastructure Lead", department: "Engineering", imageUrl: avatar("samuel-patel") },
  { id: "24", parentId: "23", name: "Harper Lee", title: "DevOps Engineer", department: "Engineering", imageUrl: avatar("harper-lee") },
  { id: "25", parentId: "23", name: "Daniel Scott", title: "DevOps Engineer", department: "Engineering", imageUrl: avatar("daniel-scott") },
  { id: "26", parentId: "23", name: "Ella Robinson", title: "SRE", department: "Engineering", imageUrl: avatar("ella-robinson") },

  // Mobile
  { id: "27", parentId: "9", name: "Christopher Yang", title: "Mobile Lead", department: "Engineering", imageUrl: avatar("christopher-yang") },
  { id: "28", parentId: "27", name: "Grace Walker", title: "iOS Engineer", department: "Engineering", imageUrl: avatar("grace-walker") },
  { id: "29", parentId: "27", name: "Jack Hall", title: "Android Engineer", department: "Engineering", imageUrl: avatar("jack-hall") },
  { id: "30", parentId: "27", name: "Lily Allen", title: "Mobile Engineer", department: "Engineering", imageUrl: avatar("lily-allen") },

  // QA
  { id: "31", parentId: "9", name: "Nina Kowalski", title: "QA Lead", department: "Engineering", imageUrl: avatar("nina-kowalski") },
  { id: "32", parentId: "31", name: "Oscar Young", title: "QA Engineer", department: "Engineering", imageUrl: avatar("oscar-young") },
  { id: "33", parentId: "31", name: "Zoe King", title: "QA Engineer", department: "Engineering", imageUrl: avatar("zoe-king") },
  { id: "34", parentId: "31", name: "Ryan Wright", title: "QA Engineer", department: "Engineering", imageUrl: avatar("ryan-wright") },

  // Data Engineering
  { id: "35", parentId: "9", name: "Omar Hassan", title: "Data Engineering Lead", department: "Engineering", imageUrl: avatar("omar-hassan") },
  { id: "36", parentId: "35", name: "Chloe Lopez", title: "Data Engineer", department: "Engineering", imageUrl: avatar("chloe-lopez") },
  { id: "37", parentId: "35", name: "Mason Green", title: "Data Engineer", department: "Engineering", imageUrl: avatar("mason-green") },

  // ── Product (reports to CPO #3) ───────────────────────
  { id: "38", parentId: "3", name: "Diana Lee", title: "Head of Product", department: "Product", imageUrl: avatar("diana-lee") },
  { id: "39", parentId: "38", name: "Henry Adams", title: "Sr. Product Manager", department: "Product", imageUrl: avatar("henry-adams") },
  { id: "40", parentId: "38", name: "Aria Nelson", title: "Product Manager", department: "Product", imageUrl: avatar("aria-nelson") },
  { id: "41", parentId: "38", name: "Leo Carter", title: "Product Manager", department: "Product", imageUrl: avatar("leo-carter") },
  { id: "42", parentId: "38", name: "Stella Mitchell", title: "Product Analyst", department: "Product", imageUrl: avatar("stella-mitchell") },

  // Design (reports to CPO — design under product)
  { id: "43", parentId: "3", name: "Tyler Brooks", title: "Head of Design", department: "Design", imageUrl: avatar("tyler-brooks") },
  { id: "44", parentId: "43", name: "Penelope Perez", title: "Sr. Product Designer", department: "Design", imageUrl: avatar("penelope-perez") },
  { id: "45", parentId: "43", name: "Sebastian Roberts", title: "Product Designer", department: "Design", imageUrl: avatar("sebastian-roberts") },
  { id: "46", parentId: "43", name: "Layla Turner", title: "Product Designer", department: "Design", imageUrl: avatar("layla-turner") },
  { id: "47", parentId: "43", name: "Nolan Phillips", title: "UX Researcher", department: "Design", imageUrl: avatar("nolan-phillips") },

  // ── Sales (reports to VP Sales #4) ────────────────────
  // Enterprise
  { id: "48", parentId: "4", name: "Robert Chen", title: "Director, Enterprise Sales", department: "Sales", imageUrl: avatar("robert-chen") },
  { id: "49", parentId: "48", name: "Vivian Campbell", title: "Sr. Account Executive", department: "Sales", imageUrl: avatar("vivian-campbell") },
  { id: "50", parentId: "48", name: "Nathan Parker", title: "Account Executive", department: "Sales", imageUrl: avatar("nathan-parker") },
  { id: "51", parentId: "48", name: "Hazel Edwards", title: "Account Executive", department: "Sales", imageUrl: avatar("hazel-edwards") },
  { id: "52", parentId: "48", name: "Adrian Collins", title: "Account Executive", department: "Sales", imageUrl: avatar("adrian-collins") },

  // SMB
  { id: "53", parentId: "4", name: "Michelle Park", title: "Director, SMB Sales", department: "Sales", imageUrl: avatar("michelle-park") },
  { id: "54", parentId: "53", name: "Eli Stewart", title: "SDR", department: "Sales", imageUrl: avatar("eli-stewart") },
  { id: "55", parentId: "53", name: "Aurora Sanchez", title: "SDR", department: "Sales", imageUrl: avatar("aurora-sanchez") },
  { id: "56", parentId: "53", name: "Caleb Morris", title: "SDR", department: "Sales", imageUrl: avatar("caleb-morris") },
  { id: "57", parentId: "53", name: "Isla Rogers", title: "SDR", department: "Sales", imageUrl: avatar("isla-rogers") },

  // Solutions Engineering
  { id: "58", parentId: "4", name: "Kevin O'Brien", title: "Solutions Engineering Lead", department: "Sales", imageUrl: avatar("kevin-obrien") },
  { id: "59", parentId: "58", name: "Ruby Reed", title: "Solutions Engineer", department: "Sales", imageUrl: avatar("ruby-reed") },
  { id: "60", parentId: "58", name: "Axel Cook", title: "Solutions Engineer", department: "Sales", imageUrl: avatar("axel-cook") },

  // ── Marketing (reports to VP Marketing #5) ────────────
  { id: "61", parentId: "5", name: "Amanda Silva", title: "Content Lead", department: "Marketing", imageUrl: avatar("amanda-silva") },
  { id: "62", parentId: "61", name: "Jasper Bailey", title: "Content Marketer", department: "Marketing", imageUrl: avatar("jasper-bailey") },
  { id: "63", parentId: "61", name: "Willow Cooper", title: "Content Marketer", department: "Marketing", imageUrl: avatar("willow-cooper") },

  { id: "64", parentId: "5", name: "Brian Murphy", title: "Growth Lead", department: "Marketing", imageUrl: avatar("brian-murphy") },
  { id: "65", parentId: "64", name: "Luna Richardson", title: "Growth Marketer", department: "Marketing", imageUrl: avatar("luna-richardson") },
  { id: "66", parentId: "64", name: "Miles Cox", title: "Growth Marketer", department: "Marketing", imageUrl: avatar("miles-cox") },

  { id: "67", parentId: "5", name: "Jessica Huang", title: "Brand Lead", department: "Marketing", imageUrl: avatar("jessica-huang") },
  { id: "68", parentId: "67", name: "Sienna Ward", title: "Brand Designer", department: "Marketing", imageUrl: avatar("sienna-ward") },

  { id: "69", parentId: "5", name: "Derek James", title: "Events Manager", department: "Marketing", imageUrl: avatar("derek-james") },

  // ── Customer Success (reports to VP CS #6) ────────────
  { id: "70", parentId: "6", name: "Daniel Green", title: "CS Team Lead", department: "Customer Success", imageUrl: avatar("daniel-green") },
  { id: "71", parentId: "70", name: "Piper Howard", title: "Sr. CSM", department: "Customer Success", imageUrl: avatar("piper-howard") },
  { id: "72", parentId: "70", name: "Theo Morgan", title: "CSM", department: "Customer Success", imageUrl: avatar("theo-morgan") },
  { id: "73", parentId: "70", name: "Ivy Bell", title: "CSM", department: "Customer Success", imageUrl: avatar("ivy-bell") },
  { id: "74", parentId: "70", name: "Xavier Murphy", title: "CSM", department: "Customer Success", imageUrl: avatar("xavier-murphy") },
  { id: "75", parentId: "70", name: "Daisy Foster", title: "CSM", department: "Customer Success", imageUrl: avatar("daisy-foster") },

  { id: "76", parentId: "6", name: "Ashley Williams", title: "Support Lead", department: "Customer Success", imageUrl: avatar("ashley-williams") },
  { id: "77", parentId: "76", name: "Roman Gray", title: "Support Engineer", department: "Customer Success", imageUrl: avatar("roman-gray") },
  { id: "78", parentId: "76", name: "Ellie James", title: "Support Engineer", department: "Customer Success", imageUrl: avatar("ellie-james") },
  { id: "79", parentId: "76", name: "Finn Russell", title: "Support Engineer", department: "Customer Success", imageUrl: avatar("finn-russell") },
  { id: "80", parentId: "76", name: "Scarlett Price", title: "Support Engineer", department: "Customer Success", imageUrl: avatar("scarlett-price") },

  // ── Finance (reports to CFO #7) ───────────────────────
  { id: "81", parentId: "7", name: "Thomas Wright", title: "Finance Director", department: "Finance", imageUrl: avatar("thomas-wright") },
  { id: "82", parentId: "81", name: "Naomi Bennett", title: "Financial Analyst", department: "Finance", imageUrl: avatar("naomi-bennett") },
  { id: "83", parentId: "81", name: "Kai Wood", title: "Financial Analyst", department: "Finance", imageUrl: avatar("kai-wood") },

  { id: "84", parentId: "7", name: "Catherine Barnes", title: "Accounting Manager", department: "Finance", imageUrl: avatar("catherine-barnes") },
  { id: "85", parentId: "84", name: "Dylan Ross", title: "Accountant", department: "Finance", imageUrl: avatar("dylan-ross") },

  // ── Operations (reports to COO #8) ────────────────────
  { id: "86", parentId: "8", name: "Jennifer Adams", title: "HR Director", department: "Operations", imageUrl: avatar("jennifer-adams") },
  { id: "87", parentId: "86", name: "Audrey Henderson", title: "HR Manager", department: "Operations", imageUrl: avatar("audrey-henderson") },
  { id: "88", parentId: "86", name: "Levi Coleman", title: "Recruiter", department: "Operations", imageUrl: avatar("levi-coleman") },
  { id: "89", parentId: "86", name: "Clara Jenkins", title: "Recruiter", department: "Operations", imageUrl: avatar("clara-jenkins") },
  { id: "90", parentId: "86", name: "Owen Perry", title: "Recruiter", department: "Operations", imageUrl: avatar("owen-perry") },

  { id: "91", parentId: "8", name: "Carlos Mendez", title: "IT Manager", department: "Operations", imageUrl: avatar("carlos-mendez") },
  { id: "92", parentId: "91", name: "Violet Powell", title: "IT Support Specialist", department: "Operations", imageUrl: avatar("violet-powell") },
  { id: "93", parentId: "91", name: "Jace Long", title: "IT Support Specialist", department: "Operations", imageUrl: avatar("jace-long") },

  { id: "94", parentId: "8", name: "Patricia Sullivan", title: "Legal Counsel", department: "Operations", imageUrl: avatar("patricia-sullivan") },
  { id: "95", parentId: "8", name: "George Butler", title: "Office Manager", department: "Operations", imageUrl: avatar("george-butler") },

  // ── Additional hires to reach 100 ────────────────────
  { id: "96", parentId: "10", name: "Mateo Flores", title: "Frontend Engineer", department: "Engineering", imageUrl: avatar("mateo-flores") },
  { id: "97", parentId: "17", name: "Freya Simmons", title: "Backend Engineer", department: "Engineering", imageUrl: avatar("freya-simmons") },
  { id: "98", parentId: "38", name: "Hugo Foster", title: "Associate PM", department: "Product", imageUrl: avatar("hugo-foster") },
  { id: "99", parentId: "53", name: "Eliana Bryant", title: "SDR", department: "Sales", imageUrl: avatar("eliana-bryant") },
  { id: "100", parentId: "70", name: "Beckett Hayes", title: "CSM", department: "Customer Success", imageUrl: avatar("beckett-hayes") },
];

export const DEPARTMENT_COLORS: Record<string, string> = {
  Executive: "#7A005D",
  Engineering: "#2563eb",
  Product: "#7c3aed",
  Design: "#c026d3",
  Sales: "#059669",
  Marketing: "#d97706",
  "Customer Success": "#0891b2",
  Finance: "#4f46e5",
  Operations: "#64748b",
};

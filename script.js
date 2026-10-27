const $ = s => document.querySelector(s), root = document.documentElement;
try { const t = localStorage.getItem('th'); if (t) root.dataset.theme = t; } catch (e) { }

/* ── Default Demo Dataset ────────────────────────────────── */
const DEFAULT_D = {
  notes: [
    { id: 1, t: `8086 pin diagram and modes`, s: 'COAM', y: 'SE', r: 4.8, by: 'Anjali' },
    { id: 2, t: `IoT access technologies cheat sheet`, s: 'IoT', y: 'SE', r: 4.6, by: 'Neha' },
    { id: 3, t: `E-waste management, last-night notes`, s: 'EVS', y: 'SE', r: 4.4, by: 'Riya' },
    { id: 4, t: `Trees and graphs solved PYQs`, s: 'DSA', y: 'SE', r: 4.7, by: 'Kabir' },
    { id: 5, t: `Normalisation walkthrough`, s: 'DBMS', y: 'TE', r: 4.2, by: 'Isha' },
    { id: 6, t: `Scheduling numericals, step by step`, s: 'OS', y: 'TE', r: 4.5, by: 'Omkar' },
    { id: 7, t: `8086 memory segmentation and 20-bit address calculations`, s: 'COAM', y: 'SE', r: 4.9, by: 'Tanvi' },
    { id: 8, t: `8255 PPI modes and control word register guide`, s: 'COAM', y: 'SE', r: 4.5, by: 'Aditya' },
    { id: 9, t: `MQTT vs CoAP protocol comparison table`, s: 'IoT', y: 'SE', r: 4.7, by: 'Pooja' },
    { id: 10, t: `ESP32 GPIO pinout and sensor interfacing cheat sheet`, s: 'IoT', y: 'SE', r: 4.8, by: 'Siddharth' },
    { id: 11, t: `Air and Water Pollution Control Acts (SPPU syllabus)`, s: 'EVS', y: 'SE', r: 4.3, by: 'Shruti' },
    { id: 12, t: `Biodiversity hotspots of Western Ghats short notes`, s: 'EVS', y: 'SE', r: 4.6, by: 'Aniket' },
    { id: 13, t: `Dijkstra and Prim-Kruskal algorithms with solved dry runs`, s: 'DSA', y: 'SE', r: 4.9, by: 'Kavya' },
    { id: 14, t: `AVL tree rotations & B-Tree insertion step-by-step`, s: 'DSA', y: 'SE', r: 4.7, by: 'Sarah' },
    { id: 15, t: `SQL Joins and nested subqueries cheat sheet`, s: 'DBMS', y: 'TE', r: 4.6, by: 'Manish' },
    { id: 16, t: `ACID properties & Concurrency control protocols (2PL, Timestamp)`, s: 'DBMS', y: 'TE', r: 4.8, by: 'Snehal' },
    { id: 17, t: `Deadlock Banker's algorithm solved numericals`, s: 'OS', y: 'TE', r: 4.9, by: 'Pranav' },
    { id: 18, t: `Paging, segmentation and page replacement (LRU/FIFO/Optimal)`, s: 'OS', y: 'TE', r: 4.6, by: 'Divya' },
    { id: 19, t: `Distributed database fragmentation & 2PC commit protocol`, s: 'DBMS', y: 'BE', r: 4.7, by: 'Gaurav' },
    { id: 20, t: `Distributed OS mutual exclusion & election algorithms`, s: 'OS', y: 'BE', r: 4.8, by: 'Shreya' },
    { id: 21, t: `Industrial IoT edge computing architectures case study`, s: 'IoT', y: 'BE', r: 4.5, by: 'Nikhil' },
    { id: 22, t: `Advanced dynamic programming & NP-completeness proof templates`, s: 'DSA', y: 'BE', r: 4.9, by: 'Sushil' }
  ],
  ev: [
    { id: 1, t: `PixelRush UI/UX sprint`, c: 'Hackathon', d: '2026-10-26', m: 'On campus', v: 'SIT auditorium', img: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=400&auto=format&fit=crop&q=80' },
    { id: 2, t: `Docker & Kubernetes for Backend Devs`, c: 'Workshop', d: '2026-10-28', m: 'Online', v: 'Google Meet', img: 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?w=400&auto=format&fit=crop&q=80' },
    { id: 3, t: `Cracking Off-Campus Tier-1 SDE Offers`, c: 'Talk', d: '2026-10-31', m: 'On campus', v: 'PICT Audi', img: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&auto=format&fit=crop&q=80' },
    { id: 4, t: `Flutter in an evening`, c: 'Workshop', d: '2026-11-03', m: 'Online', v: 'Google Meet', img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&auto=format&fit=crop&q=80' },
    { id: 5, t: `Smart Pune Mobility Hackathon`, c: 'Hackathon', d: '2026-11-06', m: 'Pune', v: 'COEP Boat Club Audi', img: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&auto=format&fit=crop&q=80' },
    { id: 6, t: `Placement prep with alumni`, c: 'Talk', d: '2026-11-08', m: 'On campus', v: 'Seminar hall', img: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=400&auto=format&fit=crop&q=80' },
    { id: 7, t: `Hands-on Generative AI & RAG Pipeline`, c: 'Workshop', d: '2026-11-10', m: 'Online', v: 'Teams Live', img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&auto=format&fit=crop&q=80' },
    { id: 8, t: `Inter-college hack 24`, c: 'Hackathon', d: '2026-11-14', m: 'Pune', v: 'Hinjewadi Phase 1', img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&auto=format&fit=crop&q=80' },
    { id: 9, t: `PCB Design & Embedded C Firmware`, c: 'Workshop', d: '2026-11-17', m: 'On campus', v: 'Lab 5', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&auto=format&fit=crop&q=80' },
    { id: 10, t: `MS in US vs Germany: Complete Roadmap`, c: 'Talk', d: '2026-11-20', m: 'On campus', v: 'Auditorium 2', img: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&auto=format&fit=crop&q=80' },
    { id: 11, t: `InnoWave 36-hr AI Hackathon`, c: 'Hackathon', d: '2026-11-24', m: 'Pune', v: 'Kharadi EON Free Zone', img: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&auto=format&fit=crop&q=80' },
    { id: 12, t: `Open Source & GSoC Student Panel`, c: 'Talk', d: '2026-11-27', m: 'Online', v: 'YouTube Live', img: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&auto=format&fit=crop&q=80' }
  ],
  jobs: [
    { id: 1, co: 'Persistent Systems', role: 'SDE intern', st: 'Applied', dl: '2026-10-22' },
    { id: 2, co: 'Barclays Global Tech', role: 'Summer Technology Analyst', st: 'Interview', dl: '2026-10-23' },
    { id: 3, co: 'Zensar', role: 'Frontend intern', st: 'Interview', dl: '2026-10-30' },
    { id: 4, co: 'Cummins Tech India', role: 'Embedded intern', st: 'Selected', dl: '2026-11-12' },
    { id: 5, co: 'Veritas Technologies', role: 'Cloud Infrastructure intern', st: 'Applied', dl: '2026-10-29' },
    { id: 6, co: 'PTC Pune', role: 'IoT Solutions intern', st: 'Applied', dl: '2026-11-04' },
    { id: 7, co: 'Tata Elxsi', role: 'Automotive Software intern', st: 'Selected', dl: '2026-11-15' },
    { id: 8, co: 'PhonePe', role: 'Backend engineering intern', st: 'Applied', dl: '2026-11-02' },
    { id: 9, co: 'Cognizant GenC Next', role: 'Associate Software Engineer', st: 'Interview', dl: '2026-11-05' },
    { id: 10, co: 'Bajaj Finserv Health', role: 'Full Stack intern', st: 'Interview', dl: '2026-11-09' },
    { id: 11, co: 'Infosys Springboard', role: 'AI/ML intern', st: 'Applied', dl: '2026-11-18' },
    { id: 12, co: 'BMC Software', role: 'DevOps intern', st: 'Selected', dl: '2026-11-20' },
    { id: 13, co: 'Early-stage startup', role: 'UI intern', st: 'Rejected', dl: '2026-10-10' },
    { id: 14, co: 'Siemens Digital', role: 'Simulation Software intern', st: 'Rejected', dl: '2026-10-15' }
  ],
  lf: [
    { id: 1, k: 'lost', t: 'Casio fx-991CW ClassWiz calculator', w: 'Library, second floor reading room', d: '18 Oct', img: 'https://images.unsplash.com/photo-1594980596870-8aa52a78d8cd?w=400&auto=format&fit=crop&q=80' },
    { id: 2, k: 'found', t: 'Blue steel Milton water bottle', w: 'Canteen corner table', d: '19 Oct', img: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=400&auto=format&fit=crop&q=80' },
    { id: 3, k: 'lost', t: 'Comp Engg ID card & Metro pass', w: 'Computer Lab 4', d: '17 Oct', img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&auto=format&fit=crop&q=80' },
    { id: 4, k: 'found', t: 'White AirPods case (initials RK)', w: 'Main gate bench', d: '20 Oct', img: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=400&auto=format&fit=crop&q=80' },
    { id: 5, k: 'lost', t: 'Boat Airdopes black charging case', w: 'Basketball court bench', d: '20 Oct', img: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?w=400&auto=format&fit=crop&q=80' },
    { id: 6, k: 'found', t: 'Two-wheeler keys with Honda keychain', w: 'Two-wheeler parking lot B', d: '19 Oct', img: 'https://images.unsplash.com/photo-1582139329536-e7284fece509?w=400&auto=format&fit=crop&q=80' },
    { id: 7, k: 'lost', t: 'Mini drafter & drawing sheet roll', w: 'Civil Dept Workshop', d: '19 Oct', img: 'https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?w=400&auto=format&fit=crop&q=80' },
    { id: 8, k: 'found', t: 'Black rimmed spectacles in case', w: 'Seminar Hall row 5', d: '18 Oct', img: 'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?w=400&auto=format&fit=crop&q=80' },
    { id: 9, k: 'lost', t: 'Blue Parker Vector fountain pen', w: 'Central Library ground floor', d: '16 Oct', img: 'https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=400&auto=format&fit=crop&q=80' },
    { id: 10, k: 'found', t: 'Sandisk 64GB red-black USB drive', w: 'CAD/CAM Lab PC-12', d: '17 Oct', img: 'https://images.unsplash.com/photo-1618410320928-25228d811631?w=400&auto=format&fit=crop&q=80' },
    { id: 11, k: 'lost', t: 'Fastrack smart fitness watch (black)', w: 'Gymnasium locker room', d: '15 Oct', img: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&auto=format&fit=crop&q=80' },
    { id: 12, k: 'found', t: 'Purple folding umbrella with strap', w: 'North canteen walkway', d: '16 Oct', img: 'https://images.unsplash.com/photo-1517404215738-15263e9f9178?w=400&auto=format&fit=crop&q=80' }
  ],
  mess: [
    { n: 'Annapurna Mess', p: 80, v: 1, r: 4.4, o: 7, c: 22, img: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=400&auto=format&fit=crop&q=80', rv: ['Unlimited thali, consistent everyday.', 'Hot rotis served directly to the table.', 'Clean dining hall with quick service.'] },
    { n: 'Dosa Corner', p: 60, v: 1, r: 4.6, o: 7, c: 23, img: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=400&auto=format&fit=crop&q=80', rv: ['Best value near the north gate.', 'Ghee Mysore masala dosa is phenomenal.', 'Very pocket friendly for snacks and breakfast.'] },
    { n: 'Cafe Brewtal', p: 140, v: 0, r: 4.2, o: 9, c: 23, img: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=400&auto=format&fit=crop&q=80', rv: ['Good for group study evenings and project discussions.', 'Fast Wi-Fi and power sockets at every booth.', 'Cold coffee and peri-peri fries are solid.'] },
    { n: 'Chicken Junction', p: 120, v: 0, r: 4.0, o: 11, c: 2, img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=400&auto=format&fit=crop&q=80', rv: ['Open late, reliable for midnight hunger runs.', 'Butter chicken thali with tandoori roti is popular.'] },
    { n: 'Shree Krishna Pure Veg', p: 75, v: 1, r: 4.5, o: 8, c: 22, img: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=400&auto=format&fit=crop&q=80', rv: ['Homestyle dal fry and jeera rice reminds of home.', 'Sunday special sweet dish included in unlimited meal.', 'Great hygiene and polite staff.'] },
    { n: 'Poona Canteen & Tiffin', p: 70, v: 1, r: 4.3, o: 7, c: 21, img: 'https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=400&auto=format&fit=crop&q=80', rv: ['Affordable monthly subscription for hostel students.', 'Good variety in vegetable curries everyday.'] },
    { n: 'Biryani Hub & Rolls', p: 110, v: 0, r: 4.2, o: 11, c: 23, img: 'https://images.unsplash.com/photo-1633945274405-b6c8069047b0?w=400&auto=format&fit=crop&q=80', rv: ['Quick chicken shawarma and egg rolls grab-and-go.', 'Generous portion size for the price.'] },
    { n: 'Chai Tapri & Maggi Point', p: 40, v: 1, r: 4.7, o: 6, c: 23, img: 'https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=400&auto=format&fit=crop&q=80', rv: ['Adrak elaichi chai and cheese corn maggi during exam breaks.', 'Campus favorite hangout spot behind library.'] }
  ],
  tasks: [
    { t: `Revise 8086 addressing modes & block diagram`, d: 1 },
    { t: `Solve IoT access technology PYQs (Zigbee, LoRa, BLE)`, d: 1 },
    { t: `Practice Dijkstra and AVL rotation numericals`, d: 0 },
    { t: `Review BCNF decomposition rules and multi-valued dependencies`, d: 0 },
    { t: `Banker's algorithm safety state numericals practice`, d: 0 },
    { t: `E-waste management rules and flowcharts revision`, d: 0 }
  ],
  timetable: [
    { d: '1 Dec', s: 'COAM', t: '9:00 am - 11:30 am' },
    { d: '4 Dec', s: 'IoT', t: '9:00 am - 11:30 am' },
    { d: '7 Dec', s: 'EVS', t: '2:00 pm - 4:30 pm' },
    { d: '10 Dec', s: 'DSA', t: '9:00 am - 11:30 am' },
    { d: '14 Dec', s: 'DBMS', t: '9:00 am - 11:30 am' },
    { d: '18 Dec', s: 'OS', t: '9:00 am - 11:30 am' }
  ],
  examInfo: {
    paper: 'COAM',
    date: '2026-12-01T09:00:00',
    label: '1 December, 9:00 am'
  },
  T: {
    COAM: [['8086 architecture', 9], ['Addressing modes', 7], ['Pipelining', 6], ['Interrupts & IVT', 5], ['8255 PPI', 4], ['Memory segmentation', 4]],
    IoT: [['Access technologies', 8], ['MQTT and CoAP', 7], ['IoT architecture', 6], ['Sensors & Actuators', 5], ['ESP32 & GPIO', 4], ['Cloud platforms', 3]],
    EVS: [['E-waste management', 7], ['Biodiversity', 6], ['Energy sources', 5], ['EIA methodology', 4], ['Pollution control acts', 4]],
    DSA: [['Binary search trees', 8], ['Graph traversals (BFS/DFS)', 7], ['Dijkstra shortest path', 6], ['Dynamic programming', 5], ['Hashing & collisions', 4], ['B-Trees', 4]],
    DBMS: [['Normalization (1NF-BCNF)', 9], ['ACID & Transactions', 7], ['Relational Algebra & SQL', 6], ['Concurrency control (2PL)', 5], ['ER modeling', 4], ['B+ Tree indexing', 4]],
    OS: [['CPU scheduling', 8], ['Deadlock Banker\'s algorithm', 7], ['Paging & Page replacement', 6], ['Semaphores & Mutex', 5], ['Virtual memory', 4], ['System calls & IPC', 4]]
  },
  Q: [
    ['COAM', `Explain the 8086 architecture with a neat block diagram`, 5],
    ['COAM', `List and explain the 8086 addressing modes with examples`, 4],
    ['COAM', `Compare pipelined and non-pipelined execution in 8086`, 3],
    ['COAM', `Explain 8086 Interrupt Vector Table (IVT) structure`, 4],
    ['COAM', `Describe Mode 0, Mode 1, Mode 2 of 8255 PPI with BSR control word`, 3],
    ['IoT', `Compare Zigbee, Bluetooth and LoRa access technologies`, 5],
    ['IoT', `Explain the MQTT publish and subscribe model with QoS levels`, 4],
    ['IoT', `Differentiate between CoAP and HTTP in constrained environments`, 4],
    ['IoT', `Explain 4-layer IoT reference architecture with diagram`, 3],
    ['IoT', `Describe smart agriculture / smart city case study using IoT`, 3],
    ['EVS', `Describe e-waste management methods and disposal hierarchy in India`, 4],
    ['EVS', `Explain the causes, effects and conservation of biodiversity loss`, 3],
    ['EVS', `Discuss Environmental Impact Assessment (EIA) steps and significance`, 4],
    ['EVS', `Compare renewable and non-renewable energy sources with environmental impact`, 3],
    ['DSA', `Construct AVL tree for given numbers and explain rotation types (LL, RR, LR, RL)`, 5],
    ['DSA', `Apply Dijkstra's algorithm to find single-source shortest path with trace table`, 4],
    ['DSA', `Compare BFS and DFS with time complexity and traversal implementations`, 4],
    ['DSA', `Solve 0/1 Knapsack problem using dynamic programming tabular method`, 3],
    ['DSA', `Explain open addressing collision resolution techniques in hashing`, 3],
    ['DBMS', `Explain 1NF, 2NF, 3NF and BCNF with functional dependencies and suitable examples`, 5],
    ['DBMS', `Explain ACID properties and state transition diagram of a transaction`, 4],
    ['DBMS', `Describe Conflict Serializability and precedence graph method with example`, 4],
    ['DBMS', `Compare strict two-phase locking (2PL) and rigorous 2PL protocols`, 3],
    ['DBMS', `Construct B+ tree of order 4 for given keys and show step-by-step insertions`, 3],
    ['OS', `Calculate average waiting time and turnaround time for FCFS, SJF, and Round Robin`, 5],
    ['OS', `Explain Banker's algorithm for deadlock avoidance with safety and resource-request algorithm`, 4],
    ['OS', `Compare FIFO, LRU, and Optimal page replacement algorithms with page fault calculations`, 4],
    ['OS', `Explain Producer-Consumer problem and solve it using counting semaphores`, 3],
    ['OS', `Describe paging hardware with TLB and calculate effective memory access time`, 3]
  ]
};

/* ── Persistence Layer ───────────────────────────────────── */
const loadData = () => {
  try {
    const raw = localStorage.getItem('sppu_data_v4');
    if (raw) return JSON.parse(raw);
  } catch (e) { }
  return JSON.parse(JSON.stringify(DEFAULT_D));
};
let D = loadData();
const saveData = () => {
  try {
    localStorage.setItem('sppu_data_v4', JSON.stringify(D));
  } catch (e) { }
};

const loadBookmarks = () => {
  try {
    const raw = localStorage.getItem('sppu_bookmarks');
    if (raw) return new Set(JSON.parse(raw));
  } catch (e) { }
  return new Set([1, 7, 13]);
};
const loadRegs = () => {
  try {
    const raw = localStorage.getItem('sppu_regs');
    if (raw) return new Set(JSON.parse(raw));
  } catch (e) { }
  return new Set([1]);
};

const S = {
  v: 'home',
  bm: loadBookmarks(),
  regs: loadRegs(),
  q: '',
  sub: 'All',
  yr: 'All',
  ec: 'All',
  ed: '',
  jf: 'All',
  lt: 'lost',
  diet: 'All',
  bud: 'Any',
  ps: 'COAM',
  contactItem: null
};

const saveBookmarks = () => {
  try { localStorage.setItem('sppu_bookmarks', JSON.stringify(Array.from(S.bm))); } catch (e) { }
};
const saveRegs = () => {
  try { localStorage.setItem('sppu_regs', JSON.stringify(Array.from(S.regs))); } catch (e) { }
};

const NAV = [
  ['home', 'Home'],
  ['notes', 'Notes'],
  ['planner', 'Exam planner'],
  ['events', 'Events'],
  ['jobs', 'Jobs'],
  ['lost', 'Lost and found'],
  ['mess', 'Mess and cafes'],
  ['pyq', 'PYQ radar']
];

const getExamDate = () => new Date(D.examInfo?.date || '2026-12-01T09:00:00');
const days = s => Math.ceil((new Date(s + 'T23:59:59') - new Date()) / 864e5);
const hd = (t, p) => `<header class="ph"><h1 class="d"><span class="hl">${t}<svg class="pen" viewBox="0 0 32 32" aria-hidden="true"><path d="M13 22h6l-1.6 8h-2.8z" style="fill:var(--c);stroke:var(--ink)" stroke-width="1.4" stroke-linejoin="round"/><rect x="11" y="6" width="10" height="17" rx="2" style="fill:var(--paper);stroke:var(--ink)" stroke-width="1.4"/><rect x="11" y="6" width="10" height="5.5" rx="2" style="fill:var(--c);stroke:var(--ink)" stroke-width="1.4"/><path d="M14.5 15h3M14.5 18h3" style="stroke:var(--line)" stroke-width="1.2" stroke-linecap="round"/></svg></span></h1><p class="lead">${p}</p></header>`;
const chips = (k, o) => o.map(x => `<button class="chip${S[k] == x ? ' on' : ''}" data-a="set" data-k="${k}" data-val="${x}">${x}</button>`).join('');
const sel = (k, o) => `<select data-k="${k}">${o.map(x => `<option${S[k] == x ? ' selected' : ''}>${x}</option>`).join('')}</select>`;
const star = `<svg viewBox="0 0 24 24"><path d="M6 3h12v18l-6-4-6 4z"/></svg>`;
const open = m => { const h = new Date().getHours(); return m.o < m.c ? h >= m.o && h < m.c : h >= m.o || h < m.c; };
const active = () => D.jobs.filter(j => ['Applied', 'Interview'].includes(j.st)).length;

const ticket = () => {
  const info = D.examInfo || { paper: 'COAM', label: '1 December, 9:00 am' };
  return `<div class="ticket">
    <div class="row sp">
      <div class="d">Next paper: ${info.paper}</div>
      <button class="btn s alt" style="background:var(--paper);border-color:var(--ink);padding:2px 8px;font-size:12px" data-a="edEx">Edit target</button>
    </div>
    <div class="sm" style="color:inherit">${info.label}</div>
    <div class="cd" data-cd></div>
  </div>`;
};

const tick = () => {
  let ms = Math.max(0, getExamDate() - new Date()),
    p = [['days', 864e5], ['hrs', 36e5], ['min', 6e4], ['sec', 1e3]].map(([n, u]) => {
      const v = Math.floor(ms / u);
      ms -= v * u;
      return `<div><span>${String(v).padStart(2, '0')}</span><small>${n}</small></div>`;
    }).join('');
  document.querySelectorAll('[data-cd]').forEach(e => e.innerHTML = p);
};

/* ── List Renderers ──────────────────────────────────────── */
const L = {
  notes: () => {
    const q = S.q.toLowerCase(),
      r = D.notes.filter(n => (S.sub == 'All' || n.s == S.sub) && (S.yr == 'All' || n.y == S.yr) && n.t.toLowerCase().includes(q));
    return r.length ? `<div class="grid">${r.map(n => `
      <div class="card" data-a="pvN" data-id="${n.id}" style="cursor:pointer" role="button" tabindex="0">
        <div class="row sp">
          <span class="tag">${n.s}</span>
          <button class="ib${S.bm.has(n.id) ? ' on' : ''}" data-a="bm" data-id="${n.id}" aria-label="Save note" onclick="event.stopPropagation()">${star}</button>
        </div>
        <h3 style="margin-top:10px">${n.t}</h3>
        <div class="sm">${n.y} year, shared by ${n.by}</div>
        <div class="row sp" style="margin-top:12px;padding-top:8px;border-top:1px dashed var(--line);align-items:center">
          <span class="mono sm">★ ${Number(n.r).toFixed(1)}/5</span>
          <div class="row" style="gap:4px">
            <button class="btn s alt" data-a="vwN" data-id="${n.id}" onclick="event.stopPropagation()">View</button>
            <button class="btn s alt" data-a="edN" data-id="${n.id}" onclick="event.stopPropagation()">Edit</button>
            <button class="btn s alt" style="color:var(--mar);border-color:color-mix(in srgb,var(--mar) 40%,var(--line))" data-a="delN" data-id="${n.id}" onclick="event.stopPropagation()">Delete</button>
          </div>
        </div>
      </div>
    `).join('')}</div>` : `<p class="empty">No notes match yet. Upload the first set.</p>`;
  },

  events: () => {
    const r = D.ev.filter(e => (S.ec == 'All' || e.c == S.ec) && (!S.ed || e.d >= S.ed));
    return r.length ? `<div class="grid">${r.map((e, i) => {
      const isReg = S.regs.has(e.id || i);
      return `
        <div class="card" data-a="pvEv" data-i="${i}" style="cursor:pointer" role="button" tabindex="0">
          ${e.img ? `<div class="polaroid"><img src="${e.img}" alt="${e.t}" loading="lazy" onerror="this.parentElement.style.display='none'"><span class="badge">${e.c}</span></div>` : ''}
          <div class="row">
            <span class="tag">${e.c}</span>
            <span class="tag q">${e.m}</span>
          </div>
          <h3 style="margin-top:8px">${e.t}</h3>
          <div class="sm">${new Date(e.d).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })} at ${e.v}</div>
          <div class="row sp" style="margin-top:12px;padding-top:8px;border-top:1px dashed var(--line);align-items:center">
            <div class="row" style="gap:6px">
              <button class="btn s ${isReg ? 'alt' : ''}" style="${isReg ? 'background:var(--c);color:var(--on);font-weight:600' : ''}" data-a="reg" data-i="${i}" onclick="event.stopPropagation();A.reg({i:'${i}'})">${isReg ? 'Registered ✓' : 'Register'}</button>
              <button class="btn s alt" data-a="cal" data-i="${i}" onclick="event.stopPropagation();A.cal({i:'${i}'})"><svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="12" height="9" rx="1"/><path d="M5 2v3M11 2v3M2 7h12"/></svg></button>
            </div>
            <div class="row" style="gap:4px">
              <button class="btn s alt" data-a="edEv" data-i="${i}" onclick="event.stopPropagation()">Edit</button>
              <button class="btn s alt" style="color:var(--mar);border-color:color-mix(in srgb,var(--mar) 40%,var(--line))" data-a="delEv" data-i="${i}" onclick="event.stopPropagation()">Delete</button>
            </div>
          </div>
        </div>
      `;
    }).join('')}</div>` : `<p class="empty">No events from that date. Try an earlier one.</p>`;
  },

  jobs: () => {
    const r = D.jobs.filter(j => S.jf == 'All' || j.st == S.jf);
    return r.map(j => {
      const n = days(j.dl), due = n >= 0 && n <= 3 && ['Applied', 'Interview'].includes(j.st);
      return `
        <div class="card" style="margin-bottom:12px;cursor:pointer" data-a="pvJ" data-id="${j.id}" role="button" tabindex="0">
          <div class="row sp">
            <div>
              <h3 style="margin:0">${j.co}</h3>
              <div class="sm">${j.role}, apply by ${new Date(j.dl).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}</div>
            </div>
            <div class="row">
              ${due ? `<span class="tag" style="--c:var(--mar)">Due in ${n} day${n == 1 ? '' : 's'}</span>` : ''}
              <select data-job="${j.id}" onclick="event.stopPropagation()">
                ${['Applied', 'Interview', 'Selected', 'Rejected'].map(s => `<option${j.st == s ? ' selected' : ''}>${s}</option>`).join('')}
              </select>
            </div>
          </div>
          <div class="row sp" style="margin-top:10px;padding-top:8px;border-top:1px dashed var(--line);align-items:center">
            <span class="mono sm" style="color:var(--mute)">Status: <b>${j.st}</b></span>
            <div class="row" style="gap:4px">
              <button class="btn s alt" data-a="edJ" data-id="${j.id}" onclick="event.stopPropagation()">Edit</button>
              <button class="btn s alt" style="color:var(--mar);border-color:color-mix(in srgb,var(--mar) 40%,var(--line))" data-a="delJ" data-id="${j.id}" onclick="event.stopPropagation()">Delete</button>
            </div>
          </div>
        </div>
      `;
    }).join('') || `<p class="empty">Nothing at this stage.</p>`;
  },

  lost: () => {
    const q = S.q.toLowerCase(),
      r = D.lf.filter(x => x.k == S.lt && x.t.toLowerCase().includes(q));
    return r.length ? `<div class="grid">${r.map(x => `
      <div class="card" data-a="pvLf" data-id="${x.id}" style="cursor:pointer" role="button" tabindex="0">
        <div class="polaroid">
          ${x.img ? `<img src="${x.img}" alt="${x.t}" loading="lazy" onerror="this.parentElement.innerHTML='Item photo'">` : 'Item photo'}
          <span class="badge" style="background:${x.k == 'lost' ? 'var(--mar)' : '#10b981'}">${x.k.toUpperCase()}</span>
        </div>
        <h3>${x.t}</h3>
        <div class="sm">${x.w}, ${x.d}</div>
        <div style="margin-top:12px;padding-top:8px;border-top:1px dashed var(--line)">
          <button class="btn s" data-a="contact" data-id="${x.id}" onclick="event.stopPropagation();A.contact({id:'${x.id}'})"><svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" style="margin-right:4px"><path d="M3 8h10M8 3v10"/></svg>Contact ${x.k == 'lost' ? 'owner' : 'finder'}</button>
        </div>
      </div>
    `).join('')}</div>` : `<p class="empty">Nothing reported. Post what you found or lost.</p>`;
  },

  mess: () => {
    const r = D.mess.filter(m => (S.diet == 'All' || (S.diet == 'Veg' ? m.v : !m.v)) && (S.bud == 'Any' || m.p <= +S.bud.slice(-3)));
    return r.map(m => `
      <div class="card" style="margin-bottom:12px;cursor:pointer" data-a="pvM" data-n="${m.n}" role="button" tabindex="0">
        ${m.img ? `<div class="polaroid" style="height:115px;margin-bottom:10px"><img src="${m.img}" alt="${m.n}" loading="lazy" onerror="this.parentElement.style.display='none'"><span class="badge">${m.v ? 'Pure Veg' : 'Non-Veg'}</span></div>` : ''}
        <div class="row sp">
          <h3 style="margin:0">${m.n}</h3>
          <span class="tag" style="--c:${open(m) ? 'var(--lost)' : 'var(--rule)'}">${open(m) ? 'Open now' : 'Closed'}</span>
        </div>
        <div class="sm">Rs ${m.p} per meal, ${m.v ? 'veg' : 'non-veg'}, rated ${m.r} ★ (Timing: ${m.o}:00 - ${m.c}:00)</div>
        <div style="margin-top:10px;padding-top:8px;border-top:1px dashed var(--line)">
          <button class="btn s alt" data-a="rv" onclick="event.stopPropagation()">Reviews (${m.rv ? m.rv.length : 0})</button>
        </div>
        <div class="rev">
          ${(m.rv || []).map((x, ri) => `
            <div class="row sp" style="margin:4px 0;padding:2px 0">
              <p style="margin:0;font-size:13px;flex:1">${x}</p>
              <button class="btn s alt" style="padding:1px 6px;font-size:11px;color:var(--mar);margin-left:8px" data-a="delrv" data-n="${m.n}" data-ri="${ri}" onclick="event.stopPropagation()">×</button>
            </div>
          `).join('')}
          <div class="row" style="margin-top:8px">
            <input placeholder="Add a review" id="r${m.n.replace(/\s+/g, '')}" style="flex:1" onclick="event.stopPropagation()">
            <button class="btn s" data-a="addrv" data-n="${m.n}" onclick="event.stopPropagation()">Post</button>
          </div>
        </div>
      </div>
    `).join('') || `<p class="empty">No places match. Raise the budget.</p>`;
  },

  pyq: () => {
    const q = S.q.toLowerCase(),
      r = D.Q.filter(x => x[0] == S.ps && x[1].toLowerCase().includes(q));
    return r.map(x => {
      const idxQ = D.Q.indexOf(x);
      return `
      <div class="card" style="margin-bottom:12px;cursor:pointer" data-a="pvQ" data-i="${idxQ}" role="button" tabindex="0">
        <div class="row sp">
          <span class="tag">${x[0]}</span>
          <div class="row" style="gap:4px">
            <button class="btn s alt" style="padding:2px 8px;font-size:12px" data-a="edQ" data-i="${idxQ}" onclick="event.stopPropagation()">Edit</button>
            <button class="btn s alt" style="padding:2px 8px;font-size:12px;color:var(--mar);border-color:color-mix(in srgb,var(--mar) 40%,var(--line))" data-a="delQ" data-i="${idxQ}" onclick="event.stopPropagation()">Delete</button>
          </div>
        </div>
        <h3 style="margin-top:8px;margin-bottom:4px">${x[1]}</h3>
        <div class="sm" style="color:var(--mute)">Asked <b>${x[2]}</b> times in the last 5 papers</div>
      </div>
    `;
    }).join('') || `<p class="empty">No question matches. Try a shorter word.</p>`;
  }
};

/* ── View Templates ──────────────────────────────────────── */
const V = {
  home: () => {
    const nx = D.ev[0] || { d: '2026-10-26', t: 'PixelRush sprint' },
      t = (k, l, b, s) => `<button class="tile" style="--c:var(--${k})" data-a="go" data-v="${k}"><div class="sm">${l}</div><div class="d">${b}</div><div class="sm">${s}</div></button>`;
    return `<div class="view">
      <section class="hero">
        <div>
          <h1 class="d">Everything for the semester, in one place.</h1>
          <p class="lead">Notes, exam countdown, events, internships, lost property, cheap meals and past papers. Fully editable and synced locally.</p>
          <div class="row" style="margin-top:18px">
            <button class="btn" data-a="go" data-v="notes">Find notes</button>
            <button class="btn alt" data-a="go" data-v="pyq">Check past papers</button>
            <a class="btn alt" href="login.html">Demo sign in</a>
          </div>
        </div>
        ${ticket()}
      </section>
      <div class="tiles">
        ${t('notes', 'Saved notes', S.bm.size, `of ${D.notes.length} in the Pathshala`)}
        ${t('jobs', 'Applications in progress', active(), 'across your pipeline')}
        ${t('events', 'Next event', new Date(nx.d).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' }), nx.t)}
        ${t('lost', 'Open reports', D.lf.length, 'lost and found')}
        ${t('mess', 'Open right now', D.mess.filter(open).length, `of ${D.mess.length} places`)}
        ${t('pyq', 'Most asked topic', '8086', `asked 9 times in COAM`)}
      </div>
      ${me()}
    </div>`;
  },

  notes: () => {
    const bms = D.notes.filter(n => S.bm.has(n.id));
    return `<div class="view" style="--c:var(--notes)">
      ${hd('Campus notes', 'Find notes and past papers by subject and year, rate them, edit or upload your own notes.')}
      <div class="bar">
        <input type="search" placeholder="Search notes" data-k="q" value="${S.q}">
        ${sel('sub', ['All', 'COAM', 'IoT', 'EVS', 'DSA', 'DBMS', 'OS'])}
        ${sel('yr', ['All', 'SE', 'TE', 'BE'])}
        <button class="btn" data-a="upN">+ Upload notes</button>
      </div>
      ${bms.length ? `<div style="margin-bottom:18px">
        <div class="row sp" style="margin-bottom:10px">
          <h3 style="margin:0">Bookmarked notes</h3>
          <span class="sm">${bms.length} saved</span>
        </div>
        <div class="grid">${bms.map(n => `
          <div class="card" data-a="pvN" data-id="${n.id}" style="cursor:pointer" role="button" tabindex="0">
            <div class="row sp">
              <span class="tag">${n.s}</span>
              <button class="ib on" data-a="bm" data-id="${n.id}" aria-label="Remove bookmark" onclick="event.stopPropagation()">${star}</button>
            </div>
            <h3 style="margin-top:10px">${n.t}</h3>
            <div class="sm">${n.y} year, shared by ${n.by}</div>
            <div class="row sp" style="margin-top:12px;padding-top:8px;border-top:1px dashed var(--line);align-items:center">
              <span class="mono sm">★ ${Number(n.r).toFixed(1)}/5</span>
              <span class="sm">Bookmarked</span>
            </div>
          </div>
        `).join('')}</div>
      </div>` : ''}
      <h3 style="margin:0 0 10px">All notes</h3>
      <div id="list">${L.notes()}</div>
      ${me()}
    </div>`;
  },

  planner: () => `<div class="view" style="--c:var(--planner)">
    ${hd('Exam planner', 'Count down to your first paper, customize your timetable, and tick off your study plan.')}
    <div class="two">
      <div>
        ${ticket()}
        <div class="row sp" style="margin-top:26px;margin-bottom:8px">
          <h3 style="margin:0">Exam timetable</h3>
          <button class="btn s" data-a="addPpr">+ Add paper</button>
        </div>
        <table>
          <thead><tr><th>Date</th><th>Paper</th><th>Time</th><th style="text-align:right">Action</th></tr></thead>
          <tbody>
            ${(D.timetable || []).map((p, i) => `
              <tr>
                <td><b>${p.d}</b></td>
                <td><span class="tag">${p.s}</span></td>
                <td class="mono sm">${p.t}</td>
                <td style="text-align:right">
                  <button class="btn s alt" style="padding:2px 7px;font-size:12px" data-a="edPpr" data-i="${i}">Edit</button>
                  <button class="btn s alt" style="padding:2px 7px;font-size:12px;color:var(--mar);margin-left:4px" data-a="delPpr" data-i="${i}">×</button>
                </td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>
      <div class="card">
        <h3>My study plan</h3>
        ${(D.tasks || []).map((x, i) => `
          <div class="row sp" style="margin:8px 0;padding:4px 0;border-bottom:1px solid var(--rule)">
            <label class="row" style="cursor:pointer;flex:1;min-width:0">
              <input type="checkbox" data-a="tt" data-i="${i}" ${x.d ? 'checked' : ''}>
              <span style="${x.d ? 'text-decoration:line-through;color:var(--mute)' : ''};word-break:break-word">${x.t}</span>
            </label>
            <div class="row" style="gap:4px">
              <button class="btn s alt" style="padding:2px 6px;font-size:11px" data-a="edT" data-i="${i}">Edit</button>
              <button class="btn s alt" style="padding:2px 6px;font-size:11px;color:var(--mar)" data-a="delT" data-i="${i}">×</button>
            </div>
          </div>
        `).join('')}
        <div class="row" style="margin-top:12px">
          <input id="nt" placeholder="Add a task" style="flex:1">
          <button class="btn s" data-a="addT">Add</button>
        </div>
      </div>
    </div>
    ${me()}
  </div>`,

  events: () => `<div class="view" style="--c:var(--events)">
    ${hd('Event radar', 'Hackathons, workshops and talks around campus. Register, edit, or host your own event.')}
    <div class="bar">
      ${chips('ec', ['All', 'Hackathon', 'Workshop', 'Talk'])}
      <input type="date" data-k="ed" value="${S.ed}" aria-label="From date">
      <button class="btn" data-a="addEv">+ Host Event</button>
    </div>
    <div id="list">${L.events()}</div>
    ${me()}
  </div>`,

  jobs: () => {
    const c = s => D.jobs.filter(j => j.st == s).length;
    return `<div class="view" style="--c:var(--jobs)">
      ${hd('Job and internship tracker', 'Keep every application in one pipeline and never miss a deadline.')}
      <div class="sum">
        ${['Applied', 'Interview', 'Selected', 'Rejected'].map(s => `
          <button class="${S.jf == s ? 'on' : ''}" data-a="set" data-k="jf" data-val="${S.jf == s ? 'All' : s}">
            <span class="d">${c(s)}</span>${s}
          </button>
        `).join('')}
      </div>
      <div class="bar">
        <button class="btn" data-a="addJ">+ Add opportunity</button>
      </div>
      <div id="list">${L.jobs()}</div>
      ${me()}
    </div>`;
  },

  lost: () => `<div class="view" style="--c:var(--lost)">
    ${hd('Lost and found', 'Report what you lost or found with photos so it gets back to its owner, without scrolling chat groups. (USERS COLLEGE ONLY)')}
    <div class="bar">
      ${chips('lt', ['lost', 'found'])}
      <input type="search" placeholder="Search items" data-k="q" value="${S.q}">
      <button class="btn" data-a="rep">+ Report an item</button>
    </div>
    <div id="list">${L.lost()}</div>
    ${me()}
  </div>`,

  mess: () => `<div class="view" style="--c:var(--mess)">
    ${hd('Mess and cafe finder', 'Affordable meals near campus, with photos, prices, diet filters and live opening status.')}
    <div class="two">
      <div>
        <div class="bar">
          ${chips('diet', ['All', 'Veg', 'Non-veg'])}
          ${sel('bud', ['Any', 'Under 80', 'Under 120'])}
          <button class="btn" data-a="addM">+ Add Place</button>
        </div>
        <div id="list">${L.mess()}</div>
      </div>
      <div class="card">
        <h3>Around campus</h3>
        <div style="position:relative;border-radius:8px;overflow:hidden;border:1px solid var(--line);margin-top:10px">
          <img src="screenshots/image.png" alt="Campus map of mess and cafe locations" style="width:100%;display:block;object-fit:cover" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='block'">
          <svg viewBox="0 0 300 220" width="100%" style="display:none" role="img" aria-label="Map of places near campus">
            <path d="M0 70H300M0 150H300M90 0V220M210 0V220" stroke="var(--line)" stroke-width="6" fill="none"/>
            ${[[60, 40], [150, 110], [250, 60], [120, 185], [45, 120], [205, 160], [235, 35], [175, 195]].map((p, i) => `
              <circle cx="${p[0]}" cy="${p[1]}" r="13" fill="var(--c)" stroke="var(--ink)"/>
              <text x="${p[0]}" y="${p[1] + 5}" text-anchor="middle" font-size="13" fill="#15213b">${i + 1}</text>
            `).join('')}
          </svg>
        </div>
        <p class="sm" style="margin-top:8px">Pins follow the list order.</p>
      </div>
    </div>
    ${me()}
  </div>`,

  pyq: () => {
    const t = D.T[S.ps] || D.T.COAM, mx = t.length ? Math.max(...t.map(x => x[1]), 1) : 1;
    return `<div class="view" style="--c:var(--pyq)">
      ${hd('PYQ radar', 'Past papers are scattered across chat groups and old PDFs, and nobody knows which topics repeat. Pick a subject and see what examiners ask most.')}
      <div class="bar">
        ${chips('ps', ['COAM', 'IoT', 'EVS', 'DSA', 'DBMS', 'OS'])}
        <input type="search" placeholder="Search questions" data-k="q" value="${S.q}">
        <button class="btn" data-a="addQ">+ Add Question</button>
      </div>
      <div class="two">
        <div id="list">${L.pyq()}</div>
        <div class="card">
          <div class="row sp">
            <h3 style="margin:0">Topic recurrence</h3>
            <button class="btn s alt" data-a="edFq">+ Add Topic</button>
          </div>
          ${t.map(x => `<div class="fq"><span>${x[0]}</span><div><i style="width:${x[1] / mx * 100}%"></i></div><b class="mono">${x[1]}</b></div>`).join('')}
          <p class="sm">Analyzed from historical SPPU endsem question papers.</p>
        </div>
      </div>
      ${me()}
    </div>`;
  }
};

const me = () => `<footer class="me">
  <div>
    <h2 class="d">Me, The Product</h2>
    <p>I'm a 3rd-year Computer Science undergraduate with a strong focus on Full Stack Development and Artificial Intelligence/Machine Learning. I enjoy building scalable web applications and exploring how intelligent systems can enhance user experiences and solve real-world problems.</p>
    <div class="shimmer-footer">
      <span class="shimmer-text">Made with 🤍 by Sush!l RK</span>
    </div>
  </div>
  <div>
    <div class="row" style="margin-bottom:14px">
      <span class="chip">UI and UX</span>
      <span class="chip">Frontend</span>
      <span class="chip">Computer Engineering</span>
    </div>
    <div class="row">
      <a class="btn" href="resume/SUSHIL_RK_Resume(DA) (1).pdf" download>Download resume</a>
      <a class="btn alt" style="color:#eef2ff;border-color:#3a4870" href="https://sushilrk.vercel.app" target="_blank" rel="noopener">Open portfolio</a>
    </div>
  </div>
</footer>`;

const bad = () => ({ notes: S.bm.size, jobs: active(), lost: D.lf.length });
const syncUser = () => {
  try {
    const u = JSON.parse(localStorage.getItem('sppu_user')),
      n = $('#u-name');
    if (n) n.textContent = u && u.name ? u.name.split(' ')[0] : 'Demo Login';
  } catch (e) { }
};

/* ── Scroll-reveal observer ─────────────────────────────── */
const _ro = new IntersectionObserver((entries) => {
  entries.forEach(en => {
    if (!en.isIntersecting) return;
    en.target.dataset.revealed = '1';
    en.target.classList.add('reveal-visible');
    const delay = parseFloat(en.target.style.transitionDelay) || 0;
    setTimeout(() => {
      en.target.classList.remove('reveal-hidden', 'reveal-visible');
      en.target.style.transitionDelay = '';
    }, delay + 900);
    _ro.unobserve(en.target);
  });
}, { threshold: 0.06, rootMargin: '0px 0px -24px 0px' });

function observeCards() {
  const fresh = [];
  document.querySelectorAll('.card, .tile').forEach(el => {
    if (el.dataset.revealed) return;
    el.classList.add('reveal-hidden');
    fresh.push(el);
  });
  if (!fresh.length) return;

  requestAnimationFrame(() => requestAnimationFrame(() => {
    fresh.forEach(el => {
      const peers = el.parentElement
        ? Array.from(el.parentElement.querySelectorAll('.card, .tile'))
        : [el];
      const pos = peers.indexOf(el);
      const delay = Math.min(180 + pos * 200, 1600);
      el.style.transitionDelay = `${delay}ms`;
      _ro.observe(el);
    });
  }));
}
/* ────────────────────────────────────────────────────────── */

function render() {
  const w = $('#v');
  w.className = S.fresh ? 'sw' : '';
  S.fresh = 0;
  w.innerHTML = V[S.v]();
  nav();
  tick();
  syncUser();
  observeCards();
}

function nav() {
  syncSide();
  bnSync();
}

const list = () => {
  const l = $('#list');
  if (l) {
    l.innerHTML = L[S.v]();
    observeCards();
  }
};

const M = h => {
  $('#m').innerHTML = `<div class="sheet">${h}</div>`;
  $('#m').classList.add('on');
};
const X = () => $('#m').classList.remove('on');
const fld = (id, p, v = '') => `<input id="${id}" placeholder="${p}" value="${v}">`;
const v = id => $('#' + id).value.trim();

/* ── Action Handlers ─────────────────────────────────────── */
const A = {
  go: d => { S.v = d.v; S.q = ''; S.fresh = 1; $('#v').style.setProperty('--hd', '.4s'); X(); render(); window.scrollTo({ top: 0, behavior: 'smooth' }); },
  set: d => { S[d.k] = d.val; S.q = ''; render(); },
  th: () => {
    const dk = root.dataset.theme ? root.dataset.theme == 'dark' : matchMedia('(prefers-color-scheme:dark)').matches,
      n = dk ? 'light' : 'dark';
    root.dataset.theme = n;
    try { localStorage.setItem('th', n); } catch (e) { }
  },
  bm: d => {
    const i = +d.id;
    S.bm.has(i) ? S.bm.delete(i) : S.bm.add(i);
    saveBookmarks();
    if (S.v == 'notes') render(); else { list(); render0(); }
  },
  resetData: () => {
    if (confirm('Reset all modules back to initial demo data?')) {
      localStorage.removeItem('sppu_data_v4');
      localStorage.removeItem('sppu_regs');
      localStorage.removeItem('sppu_bookmarks');
      D = JSON.parse(JSON.stringify(DEFAULT_D));
      S.bm = new Set([1, 7, 13]);
      S.regs = new Set([1]);
      render();
    }
  },

  /* Notes */
  upN: () => M(`
    <h2 class="d">Upload Notes</h2>
    ${fld('f1', 'Title / Topic name')}
    <label class="sm">Subject</label>
    <select id="f2"><option>COAM</option><option>IoT</option><option>EVS</option><option>DSA</option><option>DBMS</option><option>OS</option></select>
    <label class="sm">Year</label>
    <select id="f3"><option>SE</option><option>TE</option><option>BE</option></select>
    ${fld('f4', 'Your name (shared by)', 'You')}
    ${fld('f5', 'Rating (1 to 5)', '4.8')}
    <div class="row sp"><button class="btn" data-a="svN">Share notes</button><button class="btn alt" data-a="x">Cancel</button></div>
  `),
  svN: () => {
    if (!v('f1')) return $('#f1').focus();
    D.notes.unshift({
      id: Date.now(),
      t: v('f1'),
      s: $('#f2').value,
      y: $('#f3').value,
      r: parseFloat(v('f5')) || 4.5,
      by: v('f4') || 'You'
    });
    saveData();
    X();
    render();
  },
  edN: d => {
    const n = D.notes.find(x => x.id == d.id);
    if (!n) return;
    M(`
      <h2 class="d">Edit Note</h2>
      ${fld('f1', 'Title', n.t)}
      <label class="sm">Subject</label>
      <select id="f2">${['COAM', 'IoT', 'EVS', 'DSA', 'DBMS', 'OS'].map(s => `<option${n.s == s ? ' selected' : ''}>${s}</option>`).join('')}</select>
      <label class="sm">Year</label>
      <select id="f3">${['SE', 'TE', 'BE'].map(y => `<option${n.y == y ? ' selected' : ''}>${y}</option>`).join('')}</select>
      ${fld('f4', 'Shared by', n.by)}
      ${fld('f5', 'Rating (1 to 5)', n.r)}
      <div class="row sp">
        <button class="btn" data-a="svEdN" data-id="${n.id}">Save changes</button>
        <button class="btn alt" data-a="x">Cancel</button>
      </div>
    `);
  },
  svEdN: d => {
    const n = D.notes.find(x => x.id == d.id);
    if (!n) return;
    n.t = v('f1') || n.t;
    n.s = $('#f2').value;
    n.y = $('#f3').value;
    n.by = v('f4') || n.by;
    n.r = parseFloat(v('f5')) || n.r;
    saveData();
    X();
    render();
  },
  delN: d => {
    if (confirm('Delete this note from the Pathshala?')) {
      D.notes = D.notes.filter(n => n.id != d.id);
      S.bm.delete(+d.id);
      saveBookmarks();
      saveData();
      render();
    }
  },
  vwN: d => {
    const n = D.notes.find(x => x.id == d.id);
    if (!n) return;
    M(`
      <div class="row sp">
        <span class="tag">${n.s}</span>
        <span class="sm">${n.y} Year</span>
      </div>
      <h2 class="d" style="margin-top:6px">${n.t}</h2>
      <p class="sm" style="color:var(--mute)">Shared by ${n.by} • Rated ${n.r} of 5 ★</p>
      <div style="background:var(--rule);padding:12px;border-radius:6px;font-size:13.5px">
        <b>Key Highlights:</b>
        <ul style="padding-left:18px;margin-top:6px;line-height:1.5">
          <li>Complete SPPU 2019/2024 syllabus alignment</li>
          <li>Handwritten diagrams, pinouts and block schemes</li>
          <li>Dry-run trace tables and previous 5 years repeat questions</li>
        </ul>
      </div>
      <div class="row sp" style="margin-top:10px">
        <button class="btn" data-a="x" onclick="alert('Downloading note PDF: ' + '${n.t.replace(/'/g, "\\'")}')">Download Note PDF</button>
        <button class="btn alt" data-a="x">Close</button>
      </div>
    `);
  },

  /* Exam Planner */
  edEx: () => {
    const info = D.examInfo || { paper: 'COAM', label: '1 December, 9:00 am' };
    M(`
      <h2 class="d">Edit Next Exam Target</h2>
      ${fld('f1', 'Paper name (e.g. COAM)', info.paper)}
      ${fld('f2', 'Display label (e.g. 1 December, 9:00 am)', info.label)}
      <label class="sm">Countdown target date & time</label>
      <input id="f3" type="datetime-local" value="${info.date ? info.date.slice(0, 16) : '2026-12-01T09:00'}">
      <div class="row sp"><button class="btn" data-a="svEx">Save target</button><button class="btn alt" data-a="x">Cancel</button></div>
    `);
  },
  svEx: () => {
    D.examInfo = {
      paper: v('f1') || 'COAM',
      label: v('f2') || '1 December, 9:00 am',
      date: v('f3') ? v('f3') + ':00' : '2026-12-01T09:00:00'
    };
    saveData();
    X();
    render();
  },
  addPpr: () => M(`
    <h2 class="d">Add Exam Paper</h2>
    ${fld('f1', 'Date (e.g. 21 Dec)')}
    ${fld('f2', 'Paper name (e.g. CNS / AI)')}
    ${fld('f3', 'Time slot (e.g. 9:00 am - 11:30 am)', '9:00 am - 11:30 am')}
    <div class="row sp"><button class="btn" data-a="svPpr">Add paper</button><button class="btn alt" data-a="x">Cancel</button></div>
  `),
  svPpr: () => {
    if (!v('f1') || !v('f2')) return $('#f1').focus();
    D.timetable.push({ d: v('f1'), s: v('f2'), t: v('f3') || '9:00 am - 11:30 am' });
    saveData();
    X();
    render();
  },
  edPpr: d => {
    const p = D.timetable[+d.i];
    if (!p) return;
    M(`
      <h2 class="d">Edit Paper</h2>
      ${fld('f1', 'Date', p.d)}
      ${fld('f2', 'Paper name', p.s)}
      ${fld('f3', 'Time slot', p.t)}
      <div class="row sp"><button class="btn" data-a="svEdPpr" data-i="${d.i}">Save</button><button class="btn alt" data-a="x">Cancel</button></div>
    `);
  },
  svEdPpr: d => {
    const p = D.timetable[+d.i];
    if (!p) return;
    p.d = v('f1') || p.d;
    p.s = v('f2') || p.s;
    p.t = v('f3') || p.t;
    saveData();
    X();
    render();
  },
  delPpr: d => {
    if (confirm('Remove this paper from timetable?')) {
      D.timetable.splice(+d.i, 1);
      saveData();
      render();
    }
  },
  tt: (d, e) => {
    D.tasks[+d.i].d = e.checked ? 1 : 0;
    saveData();
    render();
  },
  addT: () => {
    const i = $('#nt');
    if (!i.value.trim()) return i.focus();
    D.tasks.push({ t: i.value.trim(), d: 0 });
    saveData();
    render();
  },
  edT: d => {
    const t = D.tasks[+d.i];
    if (!t) return;
    const n = prompt('Edit study task:', t.t);
    if (n !== null && n.trim()) {
      t.t = n.trim();
      saveData();
      render();
    }
  },
  delT: d => {
    D.tasks.splice(+d.i, 1);
    saveData();
    render();
  },

  /* Events */
  addEv: () => M(`
    <h2 class="d">Host / Submit Event</h2>
    ${fld('f1', 'Event Title')}
    <label class="sm">Category</label>
    <select id="f2"><option>Hackathon</option><option>Workshop</option><option>Talk</option></select>
    <label class="sm">Date</label>
    <input id="f3" type="date" value="2026-11-05">
    <label class="sm">Mode</label>
    <select id="f4"><option>On campus</option><option>Online</option><option>Pune</option></select>
    ${fld('f5', 'Venue / Platform', 'Auditorium')}
    ${fld('f6', 'Cover Image URL (optional)')}
    <div class="row sp"><button class="btn" data-a="svEv">Publish Event</button><button class="btn alt" data-a="x">Cancel</button></div>
  `),
  svEv: () => {
    if (!v('f1')) return $('#f1').focus();
    D.ev.unshift({
      id: Date.now(),
      t: v('f1'),
      c: $('#f2').value,
      d: v('f3') || '2026-11-05',
      m: $('#f4').value,
      v: v('f5') || 'Campus',
      img: v('f6') || 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=400&auto=format&fit=crop&q=80'
    });
    saveData();
    X();
    render();
  },
  edEv: d => {
    const e = D.ev[+d.i];
    if (!e) return;
    M(`
      <h2 class="d">Edit Event</h2>
      ${fld('f1', 'Title', e.t)}
      <label class="sm">Category</label>
      <select id="f2">${['Hackathon', 'Workshop', 'Talk'].map(c => `<option${e.c == c ? ' selected' : ''}>${c}</option>`).join('')}</select>
      <label class="sm">Date</label>
      <input id="f3" type="date" value="${e.d}">
      <label class="sm">Mode</label>
      <select id="f4">${['On campus', 'Online', 'Pune'].map(m => `<option${e.m == m ? ' selected' : ''}>${m}</option>`).join('')}</select>
      ${fld('f5', 'Venue', e.v)}
      ${fld('f6', 'Image URL', e.img || '')}
      <div class="row sp"><button class="btn" data-a="svEdEv" data-i="${d.i}">Save changes</button><button class="btn alt" data-a="x">Cancel</button></div>
    `);
  },
  svEdEv: d => {
    const e = D.ev[+d.i];
    if (!e) return;
    e.t = v('f1') || e.t;
    e.c = $('#f2').value;
    e.d = v('f3') || e.d;
    e.m = $('#f4').value;
    e.v = v('f5') || e.v;
    e.img = v('f6') || e.img;
    saveData();
    X();
    render();
  },
  delEv: d => {
    if (confirm('Delete this event?')) {
      D.ev.splice(+d.i, 1);
      saveData();
      render();
    }
  },
  reg: d => {
    const i = +d.i;
    const isReg = S.regs.has(i);
    if (isReg) {
      S.regs.delete(i);
      alert('Registration cancelled.');
    } else {
      S.regs.add(i);
      alert('Registered successfully! Added to your schedule.');
    }
    saveRegs();
    render();
  },
  cal: d => {
    const e = D.ev[+d.i],
      a = e.d.replace(/-/g, ''),
      b = new Date(e.d);
    b.setDate(b.getDate() + 1);
    open_(`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(e.t)}&location=${encodeURIComponent(e.v)}&dates=${a}/${b.toISOString().slice(0, 10).replace(/-/g, '')}`);
  },

  /* Jobs */
  addJ: () => M(`
    <h2 class="d">Add Opportunity</h2>
    ${fld('f1', 'Company')}
    ${fld('f2', 'Role (e.g. SDE intern)')}
    <label class="sm">Application Deadline</label>
    <input id="f3" type="date" value="${new Date(Date.now() + 6048e5).toISOString().slice(0, 10)}" aria-label="Deadline">
    <label class="sm">Status</label>
    <select id="f4"><option>Applied</option><option>Interview</option><option>Selected</option><option>Rejected</option></select>
    <div class="row sp"><button class="btn" data-a="svJ">Add to pipeline</button><button class="btn alt" data-a="x">Cancel</button></div>
  `),
  svJ: () => {
    if (!v('f1')) return $('#f1').focus();
    D.jobs.unshift({
      id: Date.now(),
      co: v('f1'),
      role: v('f2') || 'Intern',
      st: $('#f4').value || 'Applied',
      dl: v('f3') || new Date(Date.now() + 6048e5).toISOString().slice(0, 10)
    });
    saveData();
    X();
    render();
  },
  edJ: d => {
    const j = D.jobs.find(x => x.id == d.id);
    if (!j) return;
    M(`
      <h2 class="d">Edit Application</h2>
      ${fld('f1', 'Company', j.co)}
      ${fld('f2', 'Role', j.role)}
      <label class="sm">Deadline</label>
      <input id="f3" type="date" value="${j.dl}">
      <label class="sm">Status</label>
      <select id="f4">${['Applied', 'Interview', 'Selected', 'Rejected'].map(s => `<option${j.st == s ? ' selected' : ''}>${s}</option>`).join('')}</select>
      <div class="row sp"><button class="btn" data-a="svEdJ" data-id="${j.id}">Save</button><button class="btn alt" data-a="x">Cancel</button></div>
    `);
  },
  svEdJ: d => {
    const j = D.jobs.find(x => x.id == d.id);
    if (!j) return;
    j.co = v('f1') || j.co;
    j.role = v('f2') || j.role;
    j.dl = v('f3') || j.dl;
    j.st = $('#f4').value || j.st;
    saveData();
    X();
    render();
  },
  delJ: d => {
    if (confirm('Delete this opportunity?')) {
      D.jobs = D.jobs.filter(x => x.id != d.id);
      saveData();
      render();
    }
  },

  /* Preview handlers */
  pvN: d => {
    const n = D.notes.find(x => x.id == d.id);
    if (!n) return;
    M(`
      <div class="row sp">
        <span class="tag">${n.s}</span>
        <button class="ib" data-a="x" aria-label="Close"><svg viewBox="0 0 20 20"><path d="M5 5l10 10M15 5L5 15"/></svg></button>
      </div>
      <h2 class="d" style="margin-top:6px">${n.t}</h2>
      <p class="sm" style="color:var(--mute)">${n.y} Year • Shared by ${n.by} • Rated ${n.r} of 5 ★</p>
      <div style="background:var(--rule);padding:12px;border-radius:6px;font-size:13.5px">
        <b>Preview</b>
        <ul style="padding-left:18px;margin-top:6px;line-height:1.5">
          <li>Complete syllabus alignment</li>
          <li>Diagrams, pinouts & block schemes</li>
          <li>Numericals & trace tables</li>
          <li>High-yield questions</li>
        </ul>
      </div>
      <div class="row sp" style="margin-top:10px">
        <button class="btn" data-a="vwN" data-id="${n.id}">Full View</button>
        <button class="btn alt" data-a="x">Close</button>
      </div>
    `);
  },
  pvEv: d => {
    const e = D.ev[+d.i];
    if (!e) return;
    M(`
      <div class="row sp">
        <div class="row" style="gap:6px">
          <span class="tag">${e.c}</span>
          <span class="tag q">${e.m}</span>
        </div>
        <button class="ib" data-a="x" aria-label="Close"><svg viewBox="0 0 20 20"><path d="M5 5l10 10M15 5L5 15"/></svg></button>
      </div>
      ${e.img ? `<div class="polaroid" style="height:140px"><img src="${e.img}" alt="${e.t}"></div>` : ''}
      <h2 class="d" style="margin-top:6px">${e.t}</h2>
      <p class="sm">${new Date(e.d).toLocaleDateString('en-IN', { weekday: 'long', day: 'numeric', month: 'short', year: 'numeric' })} • ${e.v}</p>
      <div style="background:var(--rule);padding:10px 12px;border-radius:6px;font-size:13.5px">Campus event • Register to get updates</div>
      <div class="row sp" style="margin-top:10px">
        <button class="btn" data-a="reg" data-i="${d.i}">Register</button>
        <button class="btn alt" data-a="cal" data-i="${d.i}"><svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="4" width="12" height="9" rx="1"/><path d="M5 2v3M11 2v3M2 7h12"/></svg></button>
      </div>
    `);
  },
  pvJ: d => {
    const j = D.jobs.find(x => x.id == d.id);
    if (!j) return;
    M(`
      <div class="row sp">
        <h2 class="d" style="margin:0">${j.co}</h2>
        <button class="ib" data-a="x" aria-label="Close"><svg viewBox="0 0 20 20"><path d="M5 5l10 10M15 5L5 15"/></svg></button>
      </div>
      <p class="sm" style="color:var(--mute)">${j.role}</p>
      <div class="row" style="gap:6px;margin-top:8px">
        <span class="tag" style="--c:var(--jobs)">${j.st}</span>
        <span class="tag q">Apply by ${new Date(j.dl).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}</span>
      </div>
      <div style="background:var(--rule);padding:10px 12px;border-radius:6px;font-size:13.5px;margin-top:10px">Track status in Jobs tab</div>
      <div class="row sp" style="margin-top:10px">
        <button class="btn" data-a="edJ" data-id="${j.id}">Edit</button>
        <button class="btn alt" data-a="x">Close</button>
      </div>
    `);
  },
  pvLf: d => {
    const x = D.lf.find(i => i.id == d.id);
    if (!x) return;
    M(`
      <div class="row sp">
        <span class="tag" style="--c:${x.k == 'lost' ? 'var(--mar)' : '#10b981'}">${x.k.toUpperCase()}</span>
        <button class="ib" data-a="x" aria-label="Close"><svg viewBox="0 0 20 20"><path d="M5 5l10 10M15 5L5 15"/></svg></button>
      </div>
      <div class="polaroid" style="height:140px">
        ${x.img ? `<img src="${x.img}" alt="${x.t}">` : 'Item photo'}
      </div>
      <h2 class="d" style="margin-top:6px">${x.t}</h2>
      <p class="sm" style="color:var(--mute)">${x.w} • ${x.d}</p>
      <div style="background:var(--rule);padding:10px 12px;border-radius:6px;font-size:13.5px">Reach out if you have info</div>
      <div class="row sp" style="margin-top:10px">
        <button class="btn" data-a="contact" data-id="${x.id}" onclick="A.contact({id:'${x.id}'})"><svg viewBox="0 0 16 16" width="14" height="14" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" style="margin-right:4px"><path d="M3 8h10M8 3v10"/></svg>Contact ${x.k == 'lost' ? 'owner' : 'finder'}</button>
        <button class="btn alt" data-a="x">Close</button>
      </div>
    `);
  },
  pvM: d => {
    const m = D.mess.find(x => x.n == d.n);
    if (!m) return;
    M(`
      <div class="row sp">
        <div class="row" style="gap:6px">
          <h2 class="d" style="margin:0">${m.n}</h2>
          <span class="tag" style="--c:${open(m) ? 'var(--lost)' : 'var(--rule)'}">${open(m) ? 'Open now' : 'Closed'}</span>
        </div>
        <button class="ib" data-a="x" aria-label="Close"><svg viewBox="0 0 20 20"><path d="M5 5l10 10M15 5L5 15"/></svg></button>
      </div>
      ${m.img ? `<div class="polaroid" style="height:140px"><img src="${m.img}" alt="${m.n}"></div>` : ''}
      <p class="sm" style="color:var(--mute)">Rs ${m.p}/meal • ${m.v ? 'Pure Veg' : 'Non-Veg'} • ${m.r} ★</p>
      <p class="sm">Timing: ${m.o}:00 - ${m.c}:00</p>
      <div style="background:var(--rule);padding:10px 12px;border-radius:6px;font-size:13.5px">Reviews: ${(m.rv || []).length}</div>
      <div class="row sp" style="margin-top:10px">
        <button class="btn" data-a="rv" onclick="X()">View Reviews</button>
        <button class="btn alt" data-a="x">Close</button>
      </div>
    `);
  },
  pvQ: d => {
    const q = D.Q[+d.i];
    if (!q) return;
    M(`
      <div class="row sp">
        <span class="tag">${q[0]}</span>
        <button class="ib" data-a="x" aria-label="Close"><svg viewBox="0 0 20 20"><path d="M5 5l10 10M15 5L5 15"/></svg></button>
      </div>
      <h2 class="d" style="margin-top:6px;font-size:22px;line-height:1.3">${q[1]}</h2>
      <p class="sm">Asked <b>${q[2]}</b> times in the last 5 papers</p>
      <div style="background:var(--rule);padding:10px 12px;border-radius:6px;font-size:13.5px">PYQ Radar • ${q[0]}</div>
      <div class="row sp" style="margin-top:10px">
        <button class="btn" data-a="edQ" data-i="${d.i}">Edit</button>
        <button class="btn alt" data-a="x">Close</button>
      </div>
    `);
  },

  /* Lost and Found */
  rep: () => M(`
    <h2 class="d">Report Item</h2>
    <label class="sm">Report Type</label>
    <select id="f4"><option value="lost">I lost it</option><option value="found">I found it</option></select>
    ${fld('f1', 'What is it? (e.g. Casio calculator)')}
    ${fld('f2', 'Where on campus? (e.g. Library 2nd floor)')}
    ${fld('f3', 'When / Date', 'Today')}
    ${fld('f5', 'Item Image URL (optional)')}
    <div class="row sp"><button class="btn" data-a="svR">Post report</button><button class="btn alt" data-a="x">Cancel</button></div>
  `),
  svR: () => {
    if (!v('f1')) return $('#f1').focus();
    D.lf.unshift({
      id: Date.now(),
      k: $('#f4').value,
      t: v('f1'),
      w: v('f2') || 'Campus',
      d: v('f3') || 'Today',
      img: v('f5') || 'https://images.unsplash.com/photo-1594980596870-8aa52a78d8cd?w=400&auto=format&fit=crop&q=80'
    });
    S.lt = $('#f4').value;
    saveData();
    X();
    render();
  },
  edR: d => {
    const x = D.lf.find(i => i.id == d.id);
    if (!x) return;
    M(`
      <h2 class="d">Edit Report</h2>
      <label class="sm">Status</label>
      <select id="f4"><option value="lost"${x.k == 'lost' ? ' selected' : ''}>Lost</option><option value="found"${x.k == 'found' ? ' selected' : ''}>Found</option></select>
      ${fld('f1', 'Item name', x.t)}
      ${fld('f2', 'Location', x.w)}
      ${fld('f3', 'Date', x.d)}
      ${fld('f5', 'Image URL', x.img || '')}
      <div class="row sp"><button class="btn" data-a="svEdR" data-id="${x.id}">Save changes</button><button class="btn alt" data-a="x">Cancel</button></div>
    `);
  },
  svEdR: d => {
    const x = D.lf.find(i => i.id == d.id);
    if (!x) return;
    x.k = $('#f4').value;
    x.t = v('f1') || x.t;
    x.w = v('f2') || x.w;
    x.d = v('f3') || x.d;
    x.img = v('f5') || x.img;
    saveData();
    X();
    render();
  },
  delR: d => {
    if (confirm('Delete this report?')) {
      D.lf = D.lf.filter(i => i.id != d.id);
      saveData();
      render();
    }
  },
  contact: d => {
    const x = D.lf.find(i => i.id == d.id);
    S.contactItem = x;
    M(`
      <div class="row sp">
        <span class="tag" style="--c:${x.k == 'lost' ? 'var(--mar)' : '#10b981'}">${x.k.toUpperCase()}</span>
      </div>
      <h2 class="d" style="margin-top:8px">Contact ${x.k == 'lost' ? 'owner' : 'finder'}</h2>
      <p class="sm" style="color:var(--mute);margin-bottom:12px">About: <b>${x.t}</b><br>Found at: ${x.w} • ${x.d}</p>
      <div style="background:var(--rule);padding:12px;border-radius:6px;margin-bottom:14px">
        <div class="sm" style="font-weight:500;margin-bottom:6px">Your message:</div>
        <textarea id="f1" style="width:100%;min-height:80px;padding:10px;border:1px solid var(--line);border-radius:6px;background:var(--bg);color:var(--ink);font-family:inherit;font-size:14px;resize:vertical" placeholder="Describe a specific detail or identifier only the true owner would know (e.g., serial number, unique markings, case color, initials on item...)"></textarea>
      </div>
      <div class="row sp"><button class="btn" data-a="snd">Send message</button><button class="btn alt" data-a="x">Cancel</button></div>
    `);
  },
  snd: () => {
    const x = S.contactItem;
    M(`
      <div style="text-align:center;padding:20px 0">
        <div style="width:60px;height:60px;margin:0 auto 16px;border-radius:50%;background:#10b981;display:flex;align-items:center;justify-content:center">
          <svg viewBox="0 0 24 24" width="32" height="32" fill="none" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 13l4 4L19 7"/></svg>
        </div>
        <h2 class="d">Message Sent!</h2>
        <p class="sm" style="color:var(--mute);margin-bottom:16px">The ${x?.k == 'lost' ? 'owner' : 'finder'} will receive your message and can reply directly through Pathshala.</p>
        <button class="btn" data-a="x">Done</button>
      </div>
    `);
  },
  x: X,

  /* Mess and Cafes */
  addM: () => M(`
    <h2 class="d">Add Mess or Cafe</h2>
    ${fld('f1', 'Place Name')}
    ${fld('f2', 'Price per meal (Rs)', '80')}
    <label class="sm">Dietary</label>
    <select id="f3"><option value="1">Pure Veg</option><option value="0">Non-Veg</option></select>
    ${fld('f4', 'Rating (1 to 5)', '4.5')}
    <div class="row" style="gap:8px">
      ${fld('f5', 'Opens at (hr 0-23)', '8')}
      ${fld('f6', 'Closes at (hr 0-23)', '22')}
    </div>
    ${fld('f7', 'Cover Photo URL')}
    <div class="row sp"><button class="btn" data-a="svM">Add Place</button><button class="btn alt" data-a="x">Cancel</button></div>
  `),
  svM: () => {
    if (!v('f1')) return $('#f1').focus();
    D.mess.unshift({
      n: v('f1'),
      p: parseInt(v('f2'), 10) || 80,
      v: parseInt($('#f3').value, 10),
      r: parseFloat(v('f4')) || 4.2,
      o: parseInt(v('f5'), 10) || 8,
      c: parseInt(v('f6'), 10) || 22,
      img: v('f7') || 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?w=400&auto=format&fit=crop&q=80',
      rv: ['Newly added campus dining spot!']
    });
    saveData();
    X();
    render();
  },
  edM: d => {
    const m = D.mess.find(x => x.n == d.n);
    if (!m) return;
    M(`
      <h2 class="d">Edit Place</h2>
      ${fld('f1', 'Place Name', m.n)}
      ${fld('f2', 'Price per meal (Rs)', m.p)}
      <label class="sm">Dietary</label>
      <select id="f3"><option value="1"${m.v ? ' selected' : ''}>Pure Veg</option><option value="0"${!m.v ? ' selected' : ''}>Non-Veg</option></select>
      ${fld('f4', 'Rating (1 to 5)', m.r)}
      <div class="row" style="gap:8px">
        ${fld('f5', 'Opens at (hr)', m.o)}
        ${fld('f6', 'Closes at (hr)', m.c)}
      </div>
      ${fld('f7', 'Image URL', m.img || '')}
      <div class="row sp"><button class="btn" data-a="svEdM" data-old="${m.n}">Save changes</button><button class="btn alt" data-a="x">Cancel</button></div>
    `);
  },
  svEdM: d => {
    const m = D.mess.find(x => x.n == d.old);
    if (!m) return;
    m.n = v('f1') || m.n;
    m.p = parseInt(v('f2'), 10) || m.p;
    m.v = parseInt($('#f3').value, 10);
    m.r = parseFloat(v('f4')) || m.r;
    m.o = parseInt(v('f5'), 10) || m.o;
    m.c = parseInt(v('f6'), 10) || m.c;
    m.img = v('f7') || m.img;
    saveData();
    X();
    render();
  },
  delM: d => {
    if (confirm(`Remove ${d.n} from mess list?`)) {
      D.mess = D.mess.filter(x => x.n != d.n);
      saveData();
      render();
    }
  },
  rv: (d, e) => e.closest('.card').classList.toggle('open'),
  addrv: (d, e) => {
    const i = e.previousElementSibling;
    if (!i.value.trim()) return i.focus();
    const m = D.mess.find(x => x.n == d.n);
    if (m) {
      if (!m.rv) m.rv = [];
      m.rv.push(i.value.trim());
      saveData();
      render();
    }
  },
  delrv: d => {
    const m = D.mess.find(x => x.n == d.n);
    if (m && m.rv) {
      m.rv.splice(+d.ri, 1);
      saveData();
      render();
    }
  },

  /* PYQ Radar */
  addQ: () => M(`
    <h2 class="d">Add PYQ Question</h2>
    <label class="sm">Subject</label>
    <select id="f1">${['COAM', 'IoT', 'EVS', 'DSA', 'DBMS', 'OS'].map(s => `<option${S.ps == s ? ' selected' : ''}>${s}</option>`).join('')}</select>
    <textarea id="f2" placeholder="Full Question text asked in SPPU exam"></textarea>
    ${fld('f3', 'Times asked in past 5 papers (e.g. 4)', '3')}
    <div class="row sp"><button class="btn" data-a="svQ">Add question</button><button class="btn alt" data-a="x">Cancel</button></div>
  `),
  svQ: () => {
    if (!v('f2')) return $('#f2').focus();
    const sub = $('#f1').value,
      txt = v('f2'),
      cnt = parseInt(v('f3'), 10) || 3;
    D.Q.unshift([sub, txt, cnt]);
    saveData();
    X();
    render();
  },
  edQ: d => {
    const q = D.Q[+d.i];
    if (!q) return;
    M(`
      <h2 class="d">Edit PYQ Question</h2>
      <label class="sm">Subject</label>
      <select id="f1">${['COAM', 'IoT', 'EVS', 'DSA', 'DBMS', 'OS'].map(s => `<option${q[0] == s ? ' selected' : ''}>${s}</option>`).join('')}</select>
      <textarea id="f2" placeholder="Question text">${q[1]}</textarea>
      ${fld('f3', 'Times asked', q[2])}
      <div class="row sp"><button class="btn" data-a="svEdQ" data-i="${d.i}">Save</button><button class="btn alt" data-a="x">Cancel</button></div>
    `);
  },
  svEdQ: d => {
    const q = D.Q[+d.i];
    if (!q) return;
    q[0] = $('#f1').value;
    q[1] = v('f2') || q[1];
    q[2] = parseInt(v('f3'), 10) || q[2];
    saveData();
    X();
    render();
  },
  delQ: d => {
    if (confirm('Delete this PYQ question?')) {
      D.Q.splice(+d.i, 1);
      saveData();
      render();
    }
  },
  edFq: () => M(`
    <h2 class="d">Add / Edit Topic Weight</h2>
    <label class="sm">Current Subject: <b>${S.ps}</b></label>
    ${fld('f1', 'Topic name (e.g. Cache Mapping)')}
    ${fld('f2', 'Occurrences count (e.g. 7)', '5')}
    <div class="row sp"><button class="btn" data-a="svFq">Add Topic</button><button class="btn alt" data-a="x">Cancel</button></div>
  `),
  svFq: () => {
    if (!v('f1')) return $('#f1').focus();
    if (!D.T[S.ps]) D.T[S.ps] = [];
    D.T[S.ps].unshift([v('f1'), parseInt(v('f2'), 10) || 5]);
    saveData();
    X();
    render();
  }
};

const open_ = u => window.open(u, '_blank', 'noopener');
const render0 = () => {
  const b = bad();
  document.querySelectorAll('.it').forEach(n => {
    const k = n.dataset.v, c = n.querySelector('b');
    if (c && b[k] != null) c.textContent = b[k] || '';
  });
};

/* ── Global Event Delegation ─────────────────────────────── */
document.addEventListener('click', e => {
  if (e.target.id == 'm') return X();
  const a = e.target.closest('[data-a]');
  if (a && a.type != 'checkbox') A[a.dataset.a]?.(a.dataset, a);
});

document.addEventListener('keydown', e => {
  if ((e.key === 'Enter' || e.key === ' ') && e.target.closest('.card[role="button"]')) {
    const a = e.target.closest('.card[role="button"]');
    if (a.dataset.a && e.target === a) {
      e.preventDefault();
      A[a.dataset.a]?.(a.dataset, a);
    }
  }
});

document.addEventListener('change', e => {
  const t = e.target;
  if (t.type == 'checkbox' && t.dataset.a) A.tt(t.dataset, t);
  if (t.dataset.job) {
    const j = D.jobs.find(x => x.id == t.dataset.job);
    if (j) {
      j.st = t.value;
      saveData();
      render();
    }
  }
});

document.addEventListener('input', e => {
  const k = e.target.dataset.k;
  if (k) {
    S[k] = e.target.value;
    list();
  }
});

const idx = k => NAV.findIndex(x => x[0] == k), PX = 42;
const closeDD = X;
const mark = i => {
  document.querySelectorAll('.thumb').forEach(t => {
    t.style.setProperty('--c', `var(--${NAV[i][0]})`);
    t.setAttribute('aria-valuenow', i);
    t.setAttribute('aria-valuetext', NAV[i][1]);
  });
  document.querySelectorAll('.trk').forEach(k => k.querySelectorAll('.it').forEach((r, j) => r.classList.toggle('hot', j == i)));
  bnHot(i);
};

const place = i => {
  document.querySelectorAll('.thumb').forEach(t => t.style.transform = `translateY(${i * PX}px)`);
  mark(i);
  bnPlace(i);
};

const trkHtml = () => {
  const b = bad();
  return `<div class="trk">${NAV.map(x => `<button class="it" style="--c:var(--${x[0]})" data-a="pick" data-v="${x[0]}"><i></i>${x[1]}<b>${b[x[0]] || ''}</b></button>`).join('')}<div class="thumb" role="slider" tabindex="0" aria-orientation="vertical" aria-label="Turn pages" aria-valuemin="0" aria-valuemax="${NAV.length - 1}"></div></div>`;
};

const LOGO = `<svg class="lg" viewBox="0 0 40 40" width="38" height="38" aria-hidden="true"><rect x="2" y="2" width="36" height="36" rx="10" style="fill:var(--paper);stroke:var(--ink)" stroke-width="2"/><path d="M13 2v36" style="stroke:var(--mar)" stroke-width="1.5" opacity=".7"/><rect x="15" y="18.5" width="19" height="8" rx="2" transform="rotate(-4 24 22)" style="fill:var(--notes)"/><path d="M31 15c-2-2.7-9-2.7-10 1.5-.8 3.5 3 4.1 5 4.9 3 1.2 4.6 2.6 3.6 5.8-1.2 3.2-8.1 3.2-10.6-.2" fill="none" style="stroke:var(--ink)" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
const snap = s => {
  const t = $(s);
  if (!t) return;
  t.style.transition = 'none';
  place(idx(S.v));
  t.offsetWidth;
  t.style.transition = '';
};

function sideBuild() {
  $('#side').innerHTML = `<div class="sh"><button class="brand" data-a="go" data-v="home">${LOGO}<span><b>SPPU</b><small>Pathshala</small></span></button><button class="tg" data-a="side" aria-label="Close sidebar" aria-expanded="true">${TG}</button></div>${trkHtml()}<p class="sm" style="padding:10px 8px 0">Drag the glass to turn the page.</p>`;
  snap('#side .thumb');
  $('#bm').innerHTML = `<span style="display:inline-flex;align-items:center;gap:8px">${LOGO.replace('width="38" height="38"', 'width="30" height="30"')}SPPU Pathshala</span>`;
}

function syncSide() {
  const b = bad();
  document.querySelectorAll('.it').forEach(r => {
    const c = r.querySelector('b');
    if (c) c.textContent = b[r.dataset.v] || '';
  });
  S.hi = idx(S.v);
  if (!dg && !bq) place(S.hi);
}

const go2 = j => {
  S.hi = j;
  place(j);
  const k = NAV[j][0];
  clearTimeout(S.kt);
  if (k != S.v) S.kt = setTimeout(() => { closeDD(); turn(k); }, 320);
};

A.more = () => {
  M(`<h2 class="d">Pages</h2>${trkHtml()}<p class="sm">Drag the glass to turn the page.</p>`);
  snap('#m .thumb');
};
A.pick = d => go2(idx(d.v));

function turn(k) {
  if (k == S.v || S.busy) return;
  if (matchMedia('(prefers-reduced-motion:reduce)').matches) return A.go({ v: k });
  const m = $('.main'), w = $('#v'), o = { duration: 720, easing: 'cubic-bezier(.4,.0,.2,1)', fill: 'forwards' };
  S.busy = 1; window.scrollTo({ top: 0, behavior: 'auto' }); S.q = ''; X();
  const f = document.createElement('div');
  f.className = 'flip';
  f.innerHTML = `<div class="fr">${w.innerHTML}<i class="shd"></i></div><div class="bk">${V[k]()}<i class="shd"></i></div>`;
  f.querySelector('.fr').style.setProperty('--pt', w.offsetTop + 'px');
  f.querySelector('.bk').style.setProperty('--pt', w.offsetTop + 'px');
  m.appendChild(f);
  const r = a => ({ transform: `perspective(1600px) rotateY(${a}deg)` }),
    op = [{ opacity: 1 }, { opacity: 1, offset: .7 }, { opacity: 0 }];
  f.querySelectorAll('.fr,.bk').forEach(x => x.animate(op, o));
  f.querySelectorAll('.shd').forEach(x => x.animate([{ opacity: 0 }, { opacity: .6, offset: .5 }, { opacity: 0 }], o));
  S.v = k;
  S.fresh = 1;
  w.style.setProperty('--hd', '.6s');
  render();
  const an = f.animate([r(0), r(-168)], o);
  an.onfinish = () => { f.remove(); S.busy = 0; };
  setTimeout(() => { S.busy = 0; }, 1500);
}

let dg = null;
document.addEventListener('pointerdown', e => {
  const t = e.target.closest('.thumb');
  if (!t) return;
  dg = { y: e.clientY, b: S.hi * PX, t, raf: null };
  t.setPointerCapture(e.pointerId);
  t.classList.add('drag');
  e.preventDefault();
});
document.addEventListener('pointermove', e => {
  if (!dg) return;
  if (dg.raf) return;
  dg.raf = requestAnimationFrame(() => {
    const y = Math.max(0, Math.min((NAV.length - 1) * PX, dg.b + e.clientY - dg.y)),
      j = Math.round(y / PX);
    dg.p = y;
    dg.t.style.transform = `translateY(${y}px)`;
    if (j != S.hi) { S.hi = j; mark(j); }
    dg.raf = null;
  });
});
const up = () => {
  if (!dg) return;
  const t = dg.t;
  if (dg.raf) cancelAnimationFrame(dg.raf);
  dg = null;
  t.classList.remove('drag');
  t.style.transform = '';
  go2(S.hi);
};
document.addEventListener('pointerup', up);
document.addEventListener('pointercancel', up);

document.addEventListener('keydown', e => {
  if (e.key == 'Escape') { closeDD(); X(); }
  if (e.target.classList.contains('thumb') && (e.key == 'ArrowDown' || e.key == 'ArrowUp')) {
    e.preventDefault();
    go2(Math.max(0, Math.min(NAV.length - 1, S.hi + (e.key == 'ArrowDown' ? 1 : -1))));
  }
});

const TG = `<svg viewBox="0 0 20 20" aria-hidden="true"><rect x="2.5" y="4" width="15" height="12" rx="3.2"/><path d="M7.5 4v12"/></svg>`;
A.side = () => {
  const c = $('.app').classList.toggle('col');
  document.querySelectorAll('[data-a=side]').forEach(b => b.setAttribute('aria-expanded', !c));
  try { localStorage.setItem('sb', c ? '1' : '0'); } catch (e) { }
};
try { if (localStorage.getItem('sb') == '1') $('.app').classList.add('col'); } catch (e) { }

/* ── Mobile liquid-glass navbar: 3 sections + More ─────── */
const ICONS = {
  home: '<path d="M3 11l9-8 9 8"/><path d="M5 9.5V20h14V9.5"/><path d="M10 20v-6h4v6"/>',
  notes: '<path d="M7 3h8l4 4v14H7z"/><path d="M15 3v4h4"/><path d="M10 12h6M10 16h6"/>',
  planner: '<circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2M9.5 2h5"/>',
  events: '<rect x="3" y="5" width="18" height="16" rx="3.5"/><path d="M3 10h18M8 3v4M16 3v4"/>',
  jobs: '<rect x="3" y="7" width="18" height="13" rx="3"/><path d="M9 7V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7M3 13h18"/>',
  lost: '<circle cx="11" cy="11" r="7"/><path d="M20.5 20.5L16 16"/>',
  mess: '<path d="M5 3v6a2 2 0 0 0 4 0V3M7 3v18"/><path d="M17 21V3c-2.2 1.2-3.5 4-3.5 7.5H17"/>',
  pyq: '<path d="M5 20V11M12 20V4M19 20v-6"/>',
  more: '<g fill="currentColor" stroke="none"><circle cx="5.5" cy="12" r="1.6"/><circle cx="12" cy="12" r="1.6"/><circle cx="18.5" cy="12" r="1.6"/></g>'
};

const PRI = ['home', 'notes', 'planner'], MORE = 3, BN = $('#bn'), BP = 6;
let bq = null, tw = 87, lens;
const lw = () => tw - 4, tcx = p => BP + p * tw + tw / 2, tabAt = c => Math.max(0, Math.min(MORE, Math.floor((c - BP) / tw))), fx = e => e.clientX - BN.getBoundingClientRect().left;
const sheet = () => $('#m').classList.contains('on') && $('#m .trk');
const posOf = i => {
  if (sheet()) return MORE;
  const p = PRI.indexOf(NAV[i][0]);
  return p < 0 ? MORE : p;
};

function bnBuild() {
  BN.setAttribute('aria-label', 'Sections');
  const Lst = [...PRI.map(k => [k, NAV[idx(k)][1]]), ['more', 'More']];
  BN.innerHTML = '<i class="bg"></i>' + Lst.map((x, p) => `<button class="bt" type="button" data-p="${p}" style="--c:var(--${x[0] == 'more' ? 'mess' : x[0]})" aria-label="${x[1]}"><svg viewBox="0 0 24 24" aria-hidden="true">${ICONS[x[0]]}</svg><span>${x[1]}</span><b></b></button>`).join('') + '<i class="bl" aria-hidden="true"></i>';
  lens = BN.querySelector('.bl');
}

function bnHot(i) {
  const p = posOf(i);
  BN.querySelectorAll('.bt').forEach((t, j) => t.classList.toggle('hot', j == p));
  BN.style.setProperty('--c', `var(--${NAV[i][0]})`);
}
function bnFocus(p) {
  BN.querySelectorAll('.bt').forEach((t, j) => t.classList.toggle('hot', j == p));
  BN.style.setProperty('--c', `var(--${p < MORE ? PRI[p] : 'mess'})`);
}
function bnPlace(i) {
  if (lens && BN.clientWidth) lens.style.transform = `translate3d(${tcx(posOf(i)) - lw() / 2}px,0,0)`;
}
function bnMeasure() {
  const W = BN.clientWidth;
  if (!W) return;
  tw = (W - BP * 2) / 4;
  BN.style.setProperty('--tw', tw + 'px');
  BN.style.setProperty('--lw', lw() + 'px');
  lens.style.transition = 'none';
  bnPlace(S.hi ?? idx(S.v));
  lens.offsetWidth;
  lens.style.transition = '';
}
function bnSync() {
  if (!lens) return;
  const b = bad(), c = [0, b.notes, 0, (b.jobs || 0) + (b.lost || 0)], i = idx(S.v);
  BN.querySelectorAll('.bt').forEach((t, p) => {
    t.querySelector('b').textContent = c[p] || '';
    p == posOf(i) ? t.setAttribute('aria-current', 'page') : t.removeAttribute('aria-current');
  });
}

function pick(p) {
  const i = S.hi ?? idx(S.v);
  if (p == null) { bnPlace(i); bnHot(i); return; }
  if (p == MORE) return A.more();
  go2(idx(PRI[p]));
}

function bnGrab() {
  const q = bq;
  if (!q || q.m) return;
  q.m = 1;
  clearTimeout(q.t);
  lens.classList.add('drag', 'catch');
  setTimeout(() => lens.classList.remove('catch'), 230);
  bnDrag();
}
function bnDrag() {
  const q = bq;
  if (!q || !q.m) return;
  q.raf = 0;
  const c = Math.max(tcx(0), Math.min(tcx(MORE), q.f));
  q.c = c;
  lens.style.transform = `translate3d(${c - lw() / 2}px,0,0)`;
  const p = tabAt(c);
  if (p != q.p) { q.p = p; bnFocus(p); }
}

BN.addEventListener('pointerdown', e => {
  if (e.button > 0 || bq) return;
  bq = { x0: e.clientX, y0: e.clientY, f: fx(e), m: 0 };
  BN.setPointerCapture(e.pointerId);
  bq.t = setTimeout(bnGrab, 240);
  e.preventDefault();
});
BN.addEventListener('pointermove', e => {
  const q = bq;
  if (!q) return;
  q.f = fx(e);
  if (!q.m) {
    if (Math.abs(e.clientX - q.x0) > 8) bnGrab();
    return;
  }
  if (!q.raf) q.raf = requestAnimationFrame(bnDrag);
});
const bnDone = (e, ok) => {
  const q = bq;
  if (!q) return;
  bq = null;
  clearTimeout(q.t);
  cancelAnimationFrame(q.raf);
  try { BN.releasePointerCapture(e.pointerId); } catch (x) { }
  lens.classList.remove('drag', 'catch');
  lens.style.transform = '';
  pick(!ok ? null : q.m ? (q.p ?? tabAt(q.f)) : Math.abs(e.clientY - q.y0) > 44 ? null : tabAt(fx(e)));
};
BN.addEventListener('pointerup', e => bnDone(e, 1));
BN.addEventListener('pointercancel', e => bnDone(e, 0));
BN.addEventListener('click', e => {
  if (e.detail) return;
  const t = e.target.closest('.bt');
  if (t) pick(+t.dataset.p);
});
BN.addEventListener('contextmenu', e => e.preventDefault());

bnBuild();
new ResizeObserver(bnMeasure).observe(BN);
new MutationObserver(() => {
  const i = S.hi ?? idx(S.v);
  bnPlace(i);
  bnHot(i);
}).observe($('#m'), { attributes: true, attributeFilter: ['class'] });

sideBuild();
S.fresh = 1;
render();
setInterval(tick, 1000);

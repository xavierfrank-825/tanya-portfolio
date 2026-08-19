export const profile = {
  name: 'Tanya Gupta',
  role: 'Data Analyst',
  location: 'Bengaluru, India',
  email: 'tanyagupta650@gmail.com',
  phone: '+91-6205190709',
  linkedin: 'linkedin.com/in/tanya-gupta-015546251',
  linkedinUrl: 'https://linkedin.com/in/tanya-gupta-015546251',
  summary:
    "Entry-level Data Analyst with a Bachelor's degree in Computer Science & Engineering. Skilled in SQL, Python, Power BI, and Excel — with a habit of turning raw tables into dashboards people actually use.",
  status: 'Open to Data Analyst roles',
}

export const kpis = [
  { label: 'Projects shipped', value: 4, suffix: '' },
  { label: 'Records analyzed', value: 10, suffix: 'K+' },
  { label: 'Core tools', value: 6, suffix: '+' },
  { label: 'CGPA', value: 8.24, suffix: '/10', decimals: 2 },
]

// Illustrative trend used purely for the hero "report canvas" visual —
// shaped to echo the record volumes called out in her project work.
export const trendSeries = [18, 26, 22, 34, 30, 42, 38, 50, 46, 58, 54, 66]

export const skillGroups = [
  {
    title: 'Languages',
    field: 'languages',
    items: ['SQL', 'Python'],
  },
  {
    title: 'Data Visualization',
    field: 'viz',
    items: ['Power BI', 'Microsoft Excel', 'Google Sheets'],
  },
  {
    title: 'Database',
    field: 'db',
    items: ['MySQL'],
  },
  {
    title: 'Power BI Toolkit',
    field: 'powerbi',
    items: ['Power Query', 'DAX', 'Data Modeling', 'Data Cleaning'],
  },
  {
    title: 'Excel Toolkit',
    field: 'excel',
    items: ['Pivot Tables', 'VLOOKUP / XLOOKUP', 'Charts'],
  },
]

export const projects = [
  {
    title: 'Quick Bite Food Delivery Dashboard',
    tool: 'Power BI',
    description:
      'Interactive dashboard analyzing 5,000+ food delivery records, with 10+ KPIs covering revenue, orders, delivery time, and ratings.',
    metrics: [
      { label: 'Records', value: '5,000+' },
      { label: 'KPIs built', value: '10+' },
    ],
    stack: ['Power Query', 'DAX', 'Slicers', 'Drill-through'],
  },
  {
    title: 'Grocery Store Sales Dashboard',
    tool: 'Power BI',
    description:
      'Dashboard built to analyze and present business data for faster, data-driven decisions on sales trends and top products.',
    metrics: [
      { label: 'Visuals & KPIs', value: '8+' },
      { label: 'Focus', value: 'Monthly trends' },
    ],
    stack: ['Power Query', 'DAX', 'Calculated Measures'],
  },
  {
    title: 'Online Book Store Analysis',
    tool: 'SQL',
    description:
      'Data analysis using joins, subqueries, aggregate and window functions to report on sales, customers, and bestselling titles.',
    metrics: [
      { label: 'Reports', value: 'Sales · Customers' },
      { label: 'Techniques', value: 'Joins · Window fns' },
    ],
    stack: ['Joins', 'Subqueries', 'Aggregates', 'Window Functions'],
  },
  {
    title: 'Sales Data Analysis',
    tool: 'Python',
    description:
      'Visualized trends across 5,000+ sales records with Matplotlib to surface monthly and seasonal patterns.',
    metrics: [
      { label: 'Records', value: '5,000+' },
      { label: 'Method', value: 'EDA' },
    ],
    stack: ['Python', 'Matplotlib', 'EDA'],
  },
]

export const education = {
  degree: 'Bachelor of Engineering (Computer Science & Engineering)',
  school: 'Sathyabama Institute of Science and Technology',
  period: '2021 – 2025',
  cgpa: '8.24 / 10.00',
  coursework: [
    'Data Structures',
    'Algorithms',
    'Object-Oriented Programming',
    'Database Management Systems',
  ],
}

export const certifications = [
  { name: 'Power BI Certification', issuer: 'Skill Course E-Learning' },
  { name: 'SQL Certification', issuer: 'Skill Course E-Learning' },
  { name: 'Core Python Certification', issuer: 'Cisco Networking Academy' },
]

export const achievements = [
  'Developed 4 end-to-end data analytics projects using SQL, Python, and Power BI.',
  'Created interactive dashboards for sales and customer analysis.',
  'Solved SQL problems involving joins, window functions, and aggregations.',
]

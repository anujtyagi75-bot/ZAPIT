/* ZAP IT — shared engine. Offline, no dependencies. */
window.ZAP = (function () {
  "use strict";
  var ROLES = [
    {n:"Frontend Dev",ico:"🎨"},{n:"Backend Dev",ico:"⚙️"},{n:"Full Stack",ico:"🧩"},
    {n:"Data Analyst",ico:"📊"},{n:"Data Scientist",ico:"🔬"},{n:"Data Engineer",ico:"🛢️"},
    {n:"ML / AI Eng",ico:"🤖"},{n:"DevOps / SRE",ico:"♾️"},{n:"Cloud Eng",ico:"☁️"},
    {n:"Mobile Dev",ico:"📱"},{n:"Game Dev",ico:"🎮"},{n:"Embedded / IoT",ico:"🔌"},
    {n:"QA / SDET",ico:"🧪"},{n:"Cybersecurity",ico:"🛡️"},{n:"UI/UX Designer",ico:"✏️"},
    {n:"Product Manager",ico:"📋"},{n:"Business Analyst",ico:"📑"},{n:"Digital Marketing",ico:"📣"}
  ];

  var MARKET = {
"Frontend Dev": {"desc": "Builds the UI — React components, CSS layouts, REST API calls. Works at every company that has a web product.", "examples": "Razorpay checkout UI, CRED dashboard, Swiggy food listing page", "demand": "HIGH", "supply": "V.HIGH", "position": "TIGHT", "trend": "↗ UP", "demandSub": "▲ +18% QoQ", "supplySub": "38 / role", "posSub": "Competitive", "trendSub": "6m outlook", "listings": 2431, "supplyN": 92400, "ratio": "38:1", "topTier": "9:1", "t1": {"co": "TCS · Infosys · Wipro · Capgemini", "vol": "~14,000/qtr", "filter": "CGPA ≥ 6.5 · Aptitude · Basic coding", "strategy": "Polish basics. Aptitude wins.", "salary": "₹3.0–4.5L"}, "t2": {"co": "Razorpay · CRED · Zerodha · Freshworks", "vol": "~1,800/qtr", "filter": "React · TypeScript · GitHub portfolio · Take-home", "strategy": "Ship 2 real apps. Projects decide entry.", "salary": "₹6.0–10.0L"}, "t3": {"co": "Amazon · Google · Atlassian · Adobe", "vol": "~340/qtr", "filter": "DSA (LC Med/Hard) · System design · Perf", "strategy": "Skills + judgment. 6-month DSA prep min.", "salary": "₹12.0–28.0L"}, "clusters": [{"nm": "Generalist (HTML/CSS/JS)", "share": 70, "jobs": 1702, "salary": "₹3–4L"}, {"nm": "Modern App Builder (React+TS)", "share": 20, "jobs": 486, "salary": "₹5–8L"}, {"nm": "Performance Engineer", "share": 10, "jobs": 243, "salary": "₹10–15L"}], "matrix": {"stakes": ["HTML5/CSS3", "Git basics", "Responsive design"], "mult": ["React 18+Hooks", "TypeScript", "REST API+async"], "drop": ["jQuery", "Bootstrap-only"], "bets": ["Core Web Vitals", "DSA (Tier 3)", "Vitest/Jest"]}, "gaps": [["Projects", "2+ deployed apps with real users", "Tutorial clones on localhost", "WIDE"], ["Stack", "React+TypeScript+REST API", "jQuery or plain JS", "WIDE"], ["Portfolio", "Live URLs + active GitHub", "Empty repos", "WIDE"], ["Fundamentals", "Can explain closures/async", "Can code but can't explain", "MEDIUM"]], "trends": [["TypeScript", 41, "up"], ["React 18+Hooks", 32, "up"], ["API-driven apps", 28, "up"], ["Bootstrap-only", -38, "down"], ["jQuery-heavy roles", -44, "down"]], "bands": {"basic": {"amt": "₹3–5L", "desc": "Service tier", "share": "~70%"}, "skilled": {"amt": "₹5–9L", "desc": "Mid-tier product", "share": "~22%"}, "diff": {"amt": "₹9–18L", "desc": "Top product", "share": "~8%"}}, "split": [70, 20, 10]},
"Backend Dev": {"desc": "Builds APIs, databases, server logic. Powers what the frontend calls — auth, data, business logic.", "examples": "Paytm payment APIs, Zerodha order execution engine, Swiggy order management service", "demand": "V.HIGH", "supply": "HIGH", "position": "BALANCED", "trend": "↗ UP", "demandSub": "▲ +24% QoQ", "supplySub": "22 / role", "posSub": "Workable", "trendSub": "6m outlook", "listings": 3120, "supplyN": 68600, "ratio": "22:1", "topTier": "6:1", "t1": {"co": "TCS · Infosys · Cognizant · HCL", "vol": "~16,000/qtr", "filter": "Java/Python basics · SQL · Aptitude", "strategy": "Java + DB fundamentals. Be reliable.", "salary": "₹3.5–5.0L"}, "t2": {"co": "Postman · Zoho · Razorpay · BrowserStack", "vol": "~2,100/qtr", "filter": "REST design · SQL depth · Auth flow", "strategy": "Build 1 backend with auth + DB + deployed.", "salary": "₹7.0–12.0L"}, "t3": {"co": "Amazon · Stripe · Atlassian · Microsoft", "vol": "~420/qtr", "filter": "DSA · Distributed systems · System design", "strategy": "Scale thinking not just CRUD.", "salary": "₹14.0–32.0L"}, "clusters": [{"nm": "CRUD Generalist", "share": 62, "jobs": 1934, "salary": "₹4–5L"}, {"nm": "API & Services Engineer", "share": 26, "jobs": 811, "salary": "₹7–11L"}, {"nm": "Systems Engineer", "share": 12, "jobs": 374, "salary": "₹14–22L"}], "matrix": {"stakes": ["SQL basics", "Git", "One server framework"], "mult": ["REST API design", "Go/Node/Python depth", "PostgreSQL+Redis"], "drop": ["PHP-only CRUD", "XML/SOAP services"], "bets": ["DSA (Tier 3)", "System design", "Kafka/queues"]}, "gaps": [["APIs", "Idempotent · versioned · documented", "Quick CRUD no contract", "WIDE"], ["Database", "Indexes · transactions · normalization", "SELECT * everywhere", "WIDE"], ["Quality", "Tests + PR reviews", "No tests no process", "MEDIUM"], ["Tooling", "Docker · CI/CD", "Local-only dev", "WIDE"]], "trends": [["Go/Rust backend", 46, "up"], ["Microservices+Kafka", 33, "up"], ["PostgreSQL depth", 29, "up"], ["PHP/Perl roles", -41, "down"], ["SOAP/XML", -52, "down"]], "bands": {"basic": {"amt": "₹3.5–5.5L", "desc": "Service CRUD", "share": "~62%"}, "skilled": {"amt": "₹7–11L", "desc": "Product API engineer", "share": "~26%"}, "diff": {"amt": "₹14–22L", "desc": "Systems/distributed", "share": "~12%"}}, "split": [62, 26, 12]},
"Full Stack": {"desc": "Builds both frontend and backend — owns features end to end. Most common role in Indian product startups.", "examples": "Meesho seller dashboard (frontend+backend), Groww portfolio tracker, Razorpay merchant portal", "demand": "HIGH", "supply": "HIGH", "position": "BALANCED", "trend": "↗ UP", "demandSub": "▲ +20% QoQ", "supplySub": "28 / role", "posSub": "Workable", "trendSub": "6m outlook", "listings": 2780, "supplyN": 78000, "ratio": "28:1", "topTier": "7:1", "t1": {"co": "TCS · Infosys · LTI · Mindtree", "vol": "~9,800/qtr", "filter": "MERN basics · 1 full tutorial app", "strategy": "Tutorial app fluency.", "salary": "₹3.5–5.0L"}, "t2": {"co": "Zerodha · Atlan · Hasura · CRED", "vol": "~1,600/qtr", "filter": "End-to-end shipped app · auth · DB · deploy", "strategy": "Own 1 real product end-to-end.", "salary": "₹7.0–12.0L"}, "t3": {"co": "Stripe · Linear · Vercel · GitHub", "vol": "~280/qtr", "filter": "Architecture · DSA · trade-off judgment", "strategy": "Trade-off articulation dominates.", "salary": "₹14.0–26.0L"}, "clusters": [{"nm": "MERN Tutorial Stack", "share": 64, "jobs": 1779, "salary": "₹4–5L"}, {"nm": "Production Full Stack", "share": 25, "jobs": 695, "salary": "₹7–11L"}, {"nm": "Architect-Track", "share": 11, "jobs": 306, "salary": "₹14–22L"}], "matrix": {"stakes": ["HTML/CSS", "Git", "One FE + one BE framework"], "mult": ["TypeScript", "Postgres/strong DB", "Next.js", "Deploy+CI"], "drop": ["jQuery in stack", "Mongoose-only", "PHP backend"], "bets": ["DSA (Tier 3)", "System design", "Edge/serverless"]}, "gaps": [["End-to-end", "Real users real bugs iteration", "Tutorial clone localhost", "WIDE"], ["Deploy", "Live monitored CI/CD", "Localhost only", "WIDE"], ["Architecture", "Knows trade-offs", "One way only", "MEDIUM"], ["Quality", "Tests types lint", "None", "WIDE"]], "trends": [["Next.js/Remix", 44, "up"], ["TypeScript everywhere", 39, "up"], ["Serverless/edge", 27, "up"], ["MongoDB-only stacks", -22, "down"], ["PHP full-stack", -37, "down"]], "bands": {"basic": {"amt": "₹3.5–5.0L", "desc": "Tutorial-stack generalist", "share": "~64%"}, "skilled": {"amt": "₹7–11L", "desc": "Production full-stack", "share": "~25%"}, "diff": {"amt": "₹14–22L", "desc": "Architect-track", "share": "~11%"}}, "split": [64, 25, 11]},
"Data Analyst": {"desc": "Turns raw data into business decisions — SQL queries, dashboards, A/B tests, product metrics.", "examples": "Swiggy delivery time analysis, PhonePe transaction anomaly detection, Meesho seller growth metrics", "demand": "V.HIGH", "supply": "V.HIGH", "position": "TIGHT", "trend": "↗ UP", "demandSub": "▲ +22% QoQ", "supplySub": "44 / role", "posSub": "Crowded", "trendSub": "6m outlook", "listings": 2680, "supplyN": 118000, "ratio": "44:1", "topTier": "11:1", "t1": {"co": "TCS · Wipro · Capgemini · Accenture", "vol": "~11,000/qtr", "filter": "SQL · Excel · basic BI tool", "strategy": "SQL + Power BI fluency.", "salary": "₹3.5–5.5L"}, "t2": {"co": "Swiggy · Meesho · PhonePe · Zomato", "vol": "~1,400/qtr", "filter": "SQL depth · Python/pandas · 1 case study", "strategy": "Ship 1 published product case study.", "salary": "₹8.0–13.0L"}, "t3": {"co": "Uber · Booking · Walmart Labs · LinkedIn", "vol": "~260/qtr", "filter": "Stats + product sense + SQL fluency", "strategy": "Hypothesis-driven thinking.", "salary": "₹14.0–24.0L"}, "clusters": [{"nm": "Dashboards & Reporting", "share": 68, "jobs": 1822, "salary": "₹4–6L"}, {"nm": "Product Analyst", "share": 22, "jobs": 590, "salary": "₹8–12L"}, {"nm": "Quant / Decision Science", "share": 10, "jobs": 268, "salary": "₹14–22L"}], "matrix": {"stakes": ["SQL basics", "Excel", "One BI tool"], "mult": ["SQL depth (window/CTE)", "Python pandas", "Product metrics framing"], "drop": ["VBA-only", "Static reporting", "Pivot-only"], "bets": ["Statistics+causal inference", "Experimentation design", "Exec storytelling"]}, "gaps": [["SQL", "Window functions CTEs optimization", "SELECT * + WHERE only", "WIDE"], ["Case studies", "Published with insight", "None published", "WIDE"], ["Stats", "Confidence intervals + experiments", "Mean/median only", "MEDIUM"], ["Communication", "Exec-ready storytelling", "Raw numbers dump", "WIDE"]], "trends": [["SQL depth", 34, "up"], ["Python pandas", 31, "up"], ["Product analytics tools", 27, "up"], ["Excel-only roles", -28, "down"], ["VBA/macro work", -39, "down"]], "bands": {"basic": {"amt": "₹3.5–5.5L", "desc": "Dashboard generalist", "share": "~68%"}, "skilled": {"amt": "₹8–12L", "desc": "Product analyst", "share": "~22%"}, "diff": {"amt": "₹14–22L", "desc": "Quant/decision science", "share": "~10%"}}, "split": [68, 22, 10]},
"Data Scientist": {"desc": "Builds ML models to predict/classify/recommend. Bridges business problems and statistical solutions.", "examples": "Flipkart demand forecasting, Ola surge price prediction, CRED credit risk scoring", "demand": "HIGH", "supply": "V.HIGH", "position": "TIGHT", "trend": "↗ UP", "demandSub": "▲ +14% QoQ", "supplySub": "52 / role", "posSub": "Selective", "trendSub": "6m outlook", "listings": 920, "supplyN": 48000, "ratio": "52:1", "topTier": "14:1", "t1": {"co": "TCS · Wipro · LTIMindtree · Mu Sigma", "vol": "~2,400/qtr", "filter": "Python · sklearn · 1 ML project", "strategy": "Pipelines beat notebooks.", "salary": "₹4.0–6.0L"}, "t2": {"co": "Fractal · Tiger Analytics · Walmart · Flipkart", "vol": "~700/qtr", "filter": "ML + stats + business framing", "strategy": "End-to-end case studies.", "salary": "₹10.0–16.0L"}, "t3": {"co": "Google · Microsoft · Uber · Booking", "vol": "~120/qtr", "filter": "Research + DSA + ML systems", "strategy": "Math depth matters.", "salary": "₹18.0–32.0L"}, "clusters": [{"nm": "Notebook Generalist", "share": 60, "jobs": 552, "salary": "₹4–7L"}, {"nm": "Applied ML Engineer", "share": 28, "jobs": 258, "salary": "₹10–15L"}, {"nm": "ML Research/Systems", "share": 12, "jobs": 110, "salary": "₹18–28L"}], "matrix": {"stakes": ["Python", "pandas/numpy", "sklearn"], "mult": ["Feature engineering", "Statistics fluency", "Evaluation rigor"], "drop": ["Kaggle copy-paste", "Hyperparameter brute force"], "bets": ["MLOps+deployment", "DL fundamentals", "Causal modeling"]}, "gaps": [["Projects", "End-to-end deployed model", "Notebook only", "WIDE"], ["Stats", "Hypothesis test + experiments", "Just mean/median", "WIDE"], ["Business framing", "Tied to revenue metric", "Model accuracy isolated", "WIDE"]], "trends": [["LLM fine-tuning/RAG", 58, "up"], ["MLOps/model deploy", 42, "up"], ["Causal inference", 24, "up"], ["Pure Kaggle only", -19, "down"], ["Standalone notebooks", -26, "down"]], "bands": {"basic": {"amt": "₹4–7L", "desc": "Notebook generalist", "share": "~60%"}, "skilled": {"amt": "₹10–15L", "desc": "Applied ML deployed", "share": "~28%"}, "diff": {"amt": "₹18–28L", "desc": "Research/systems ML", "share": "~12%"}}, "split": [60, 28, 12]},
"Data Engineer": {"desc": "Builds pipelines that move and transform data — ETL, data warehouses, streaming. Makes data available for analysts and scientists.", "examples": "Swiggy real-time order analytics pipeline, PhonePe transaction data warehouse, Razorpay payment event streaming", "demand": "V.HIGH", "supply": "MEDIUM", "position": "LOOSE", "trend": "↗ UP", "demandSub": "▲ +31% QoQ", "supplySub": "12 / role", "posSub": "Favourable", "trendSub": "6m outlook", "listings": 1640, "supplyN": 19600, "ratio": "12:1", "topTier": "4:1", "t1": {"co": "TCS · Infosys · Cognizant · Capgemini", "vol": "~4,200/qtr", "filter": "SQL · Python · 1 ETL tool", "strategy": "Build reliable pipelines.", "salary": "₹4.0–6.0L"}, "t2": {"co": "Atlan · Postman · Razorpay · Swiggy", "vol": "~900/qtr", "filter": "Spark · Airflow · cloud warehouse", "strategy": "Build 1 real pipeline end-to-end.", "salary": "₹9.0–15.0L"}, "t3": {"co": "Netflix · Uber · Stripe · Databricks", "vol": "~140/qtr", "filter": "Distributed systems · streaming · cost", "strategy": "Scale + cost thinking.", "salary": "₹16.0–30.0L"}, "clusters": [{"nm": "ETL Generalist", "share": 55, "jobs": 902, "salary": "₹5–8L"}, {"nm": "Lakehouse Engineer", "share": 32, "jobs": 525, "salary": "₹10–16L"}, {"nm": "Streaming/Platform", "share": 13, "jobs": 213, "salary": "₹18–28L"}], "matrix": {"stakes": ["SQL", "Python", "One ETL tool"], "mult": ["Spark/dbt", "Cloud warehouse (Snowflake/BQ)", "Airflow"], "drop": ["Informatica-only", "Cron-only pipelines"], "bets": ["Kafka/Flink streaming", "Cost optimization", "Data governance"]}, "gaps": [["Pipelines", "Idempotent monitored alerting", "Manual reruns no alerts", "WIDE"], ["Data modeling", "Star/lakehouse design", "One big flat table", "MEDIUM"], ["Cloud", "Real Snowflake/BQ skills", "On-prem SQL only", "WIDE"]], "trends": [["dbt+Snowflake", 48, "up"], ["Kafka streaming", 36, "up"], ["Lakehouse (Iceberg/Delta)", 41, "up"], ["Informatica-only", -32, "down"], ["Cron-only pipelines", -38, "down"]], "bands": {"basic": {"amt": "₹4–6L", "desc": "ETL generalist", "share": "~55%"}, "skilled": {"amt": "₹10–16L", "desc": "Lakehouse engineer", "share": "~32%"}, "diff": {"amt": "₹18–28L", "desc": "Streaming/platform", "share": "~13%"}}, "split": [55, 32, 13]},
"ML / AI Eng": {"desc": "Deploys ML models as production services — RAG pipelines, LLM apps, model serving. The applied side of AI.", "examples": "Krutrim LLM inference API, Sarvam AI speech pipeline, Postman AI API documentation generator", "demand": "V.HIGH", "supply": "MEDIUM", "position": "LOOSE", "trend": "↗ UP", "demandSub": "▲ +52% QoQ", "supplySub": "9 / role", "posSub": "Favourable", "trendSub": "6m outlook", "listings": 1080, "supplyN": 9700, "ratio": "9:1", "topTier": "3:1", "t1": {"co": "TCS · Infosys · LTIMindtree · Wipro", "vol": "~1,800/qtr", "filter": "Python · 1 ML library · API basics", "strategy": "Wrap models in REST APIs.", "salary": "₹5.0–7.0L"}, "t2": {"co": "Sarvam · Krutrim · Glance · Postman AI", "vol": "~500/qtr", "filter": "LLM fine-tune · RAG · serving · eval", "strategy": "Ship 1 production RAG product.", "salary": "₹12.0–20.0L"}, "t3": {"co": "OpenAI India · Microsoft Research · Meta AI", "vol": "~80/qtr", "filter": "DL depth · ML systems · research", "strategy": "Math + systems judgment.", "salary": "₹22.0–45.0L"}, "clusters": [{"nm": "Model Wrapper Engineer", "share": 50, "jobs": 540, "salary": "₹6–9L"}, {"nm": "LLM Application Engineer", "share": 36, "jobs": 389, "salary": "₹13–22L"}, {"nm": "Research/Systems ML", "share": 14, "jobs": 151, "salary": "₹24–40L"}], "matrix": {"stakes": ["Python", "One ML/DL library", "Linear algebra basics"], "mult": ["LLM serving+fine-tune", "RAG/retrieval", "Eval harness", "MLOps"], "drop": ["Notebook-only ML", "Kaggle copy-paste"], "bets": ["PyTorch deep", "Distributed training", "Quantization/serving"]}, "gaps": [["Production", "Served monitored model", "Notebook only", "WIDE"], ["Evaluation", "Rigorous eval+ablations", "Vibes-based", "WIDE"], ["Systems", "Throughput+cost thinking", "Latency unknown", "MEDIUM"]], "trends": [["LLM fine-tuning", 72, "up"], ["RAG/vector DB", 61, "up"], ["MLOps+monitoring", 44, "up"], ["Tabular Kaggle only", -22, "down"], ["Pickle-only deploys", -29, "down"]], "bands": {"basic": {"amt": "₹5–7L", "desc": "Model wrapper engineer", "share": "~50%"}, "skilled": {"amt": "₹13–22L", "desc": "LLM app engineer", "share": "~36%"}, "diff": {"amt": "₹24–40L", "desc": "Research/systems ML", "share": "~14%"}}, "split": [50, 36, 14]},
"DevOps / SRE": {"desc": "Keeps software running reliably in production — CI/CD pipelines, Kubernetes, monitoring, incident response.", "examples": "Razorpay payment uptime engineering, CRED 99.99% reliability SRE, BrowserStack cross-platform test infra", "demand": "HIGH", "supply": "MEDIUM", "position": "LOOSE", "trend": "↗ UP", "demandSub": "▲ +21% QoQ", "supplySub": "14 / role", "posSub": "Favourable", "trendSub": "6m outlook", "listings": 1480, "supplyN": 20700, "ratio": "14:1", "topTier": "5:1", "t1": {"co": "TCS · Infosys · Capgemini · HCL", "vol": "~3,800/qtr", "filter": "Linux · 1 cloud · Jenkins basics", "strategy": "Cloud cert + Linux fluency.", "salary": "₹4.0–6.0L"}, "t2": {"co": "Razorpay · CRED · Postman · BrowserStack", "vol": "~700/qtr", "filter": "K8s · Terraform · observability", "strategy": "Run 1 prod K8s cluster end-to-end.", "salary": "₹10.0–16.0L"}, "t3": {"co": "Amazon · Atlassian · Stripe · LinkedIn", "vol": "~120/qtr", "filter": "Distributed reliability · SRE practices", "strategy": "Reliability math: SLOs error budgets.", "salary": "₹18.0–32.0L"}, "clusters": [{"nm": "CI/CD Generalist", "share": 54, "jobs": 799, "salary": "₹5–8L"}, {"nm": "Cloud Platform Engineer", "share": 32, "jobs": 474, "salary": "₹11–17L"}, {"nm": "SRE/Reliability Engineer", "share": 14, "jobs": 207, "salary": "₹19–30L"}], "matrix": {"stakes": ["Linux", "One cloud", "Docker", "One CI tool"], "mult": ["Kubernetes+Helm", "Terraform/IaC", "Observability (Prom+Grafana)"], "drop": ["Shell-script-only ops", "Manual deployments"], "bets": ["SRE/SLO practice", "Chaos engineering", "Service mesh"]}, "gaps": [["IaC", "Terraform everywhere", "ClickOps console", "WIDE"], ["K8s", "Production-grade cluster", "Local Minikube only", "WIDE"], ["Observability", "Distributed tracing+SLOs", "Grep logs only", "MEDIUM"]], "trends": [["K8s+Helm", 38, "up"], ["Terraform/OpenTofu", 32, "up"], ["OpenTelemetry", 29, "up"], ["Jenkins-only CI", -24, "down"], ["Shell-script ops", -31, "down"]], "bands": {"basic": {"amt": "₹4–6L", "desc": "CI/CD generalist", "share": "~54%"}, "skilled": {"amt": "₹11–17L", "desc": "Cloud platform engineer", "share": "~32%"}, "diff": {"amt": "₹19–30L", "desc": "SRE/reliability engineer", "share": "~14%"}}, "split": [54, 32, 14]},
"Cloud Eng": {"desc": "Designs and manages cloud infrastructure — AWS/GCP/Azure architectures, security, cost optimization.", "examples": "Swiggy AWS infra for 10M daily orders, PhonePe multi-region disaster recovery, Zomato cloud cost optimization", "demand": "HIGH", "supply": "MEDIUM", "position": "BALANCED", "trend": "↗ UP", "demandSub": "▲ +18% QoQ", "supplySub": "18 / role", "posSub": "Workable", "trendSub": "6m outlook", "listings": 1380, "supplyN": 24800, "ratio": "18:1", "topTier": "5:1", "t1": {"co": "TCS · Infosys · Capgemini · HCL", "vol": "~3,200/qtr", "filter": "1 cloud cert · Linux · networking basics", "strategy": "Pass AWS SA Associate. Be reliable.", "salary": "₹4.0–6.0L"}, "t2": {"co": "Razorpay · Swiggy · PhonePe · Meesho", "vol": "~640/qtr", "filter": "IaC · landing zones · cost awareness", "strategy": "Own a real multi-service cloud env.", "salary": "₹11.0–18.0L"}, "t3": {"co": "Amazon · Google · Microsoft · Cloudflare", "vol": "~120/qtr", "filter": "Architecture depth · security · cost · multi-cloud", "strategy": "Cost + security judgment.", "salary": "₹18.0–26.0L"}, "clusters": [{"nm": "Cloud Ops Generalist", "share": 60, "jobs": 828, "salary": "₹4–6L"}, {"nm": "Cloud Platform Engineer", "share": 28, "jobs": 386, "salary": "₹12–18L"}, {"nm": "Cloud Architect/Specialist", "share": 12, "jobs": 166, "salary": "₹18–26L"}], "matrix": {"stakes": ["1 cloud basics", "Linux", "Networking basics"], "mult": ["IaC (Terraform)", "Cloud architecture", "Security baseline"], "drop": ["Console-only ops", "Single VM thinking"], "bets": ["Cost optimization/FinOps", "Multi-cloud", "Security specialization"]}, "gaps": [["IaC", "Terraform in production", "Manual console", "WIDE"], ["Security", "Least-privilege IAM+VPC", "Open security groups", "WIDE"], ["Cost", "Tag+budget+optimize", "Surprise cloud bills", "MEDIUM"]], "trends": [["IaC adoption", 34, "up"], ["FinOps/cloud cost", 29, "up"], ["Multi-cloud", 22, "up"], ["Console-only roles", -28, "down"], ["On-prem migration only", -19, "down"]], "bands": {"basic": {"amt": "₹4–6L", "desc": "Cloud ops generalist", "share": "~60%"}, "skilled": {"amt": "₹11–18L", "desc": "Cloud platform engineer", "share": "~28%"}, "diff": {"amt": "₹18–26L", "desc": "Cloud architect", "share": "~12%"}}, "split": [60, 28, 12]},
"Mobile Dev": {"desc": "Builds iOS and Android apps — native Kotlin/Swift or cross-platform React Native/Flutter.", "examples": "Swiggy delivery tracking app, Dream11 fantasy cricket game UI, CRED bill payment mobile flows", "demand": "MEDIUM", "supply": "MEDIUM", "position": "BALANCED", "trend": "→ FLAT", "demandSub": "▲ +6% QoQ", "supplySub": "19 / role", "posSub": "Workable", "trendSub": "6m outlook", "listings": 1180, "supplyN": 22400, "ratio": "19:1", "topTier": "5:1", "t1": {"co": "TCS · Infosys · LTIMindtree · Tech Mahindra", "vol": "~3,200/qtr", "filter": "Java/Kotlin basics OR Flutter basics", "strategy": "One platform fluency.", "salary": "₹3.5–5.0L"}, "t2": {"co": "Swiggy · Dream11 · Meesho · CRED", "vol": "~900/qtr", "filter": "1 published app · API integration · UX polish", "strategy": "Ship 1 app on Play/App Store.", "salary": "₹8.0–13.0L"}, "t3": {"co": "Google · Meta · Adobe · Atlassian India", "vol": "~180/qtr", "filter": "DSA + platform internals + perf", "strategy": "Internals over framework.", "salary": "₹16.0–28.0L"}, "clusters": [{"nm": "Hybrid/Template Apps", "share": 58, "jobs": 684, "salary": "₹4–5L"}, {"nm": "Native + UX Polish", "share": 30, "jobs": 354, "salary": "₹8–12L"}, {"nm": "Platform Engineer", "share": 12, "jobs": 142, "salary": "₹16–24L"}], "matrix": {"stakes": ["One platform basics", "Git", "REST/API basics"], "mult": ["Kotlin OR Swift depth", "Published app on store", "MVVM/clean architecture"], "drop": ["Pure Cordova/Ionic", "Java-only Android 2025"], "bets": ["Jetpack Compose/SwiftUI deep", "Performance profiling", "DSA (Tier 3)"]}, "gaps": [["Apps", "Published and maintained", "Tutorial only never submitted", "WIDE"], ["UX", "Pixel polish+animations", "Material default", "MEDIUM"], ["Integration", "Auth+REST+offline", "Local data only", "WIDE"]], "trends": [["Jetpack Compose", 42, "up"], ["SwiftUI", 36, "up"], ["Flutter (selective)", 18, "up"], ["Cordova/Ionic", -44, "down"], ["Java-only Android", -29, "down"]], "bands": {"basic": {"amt": "₹3.5–5.0L", "desc": "Hybrid/template apps", "share": "~58%"}, "skilled": {"amt": "₹8–12L", "desc": "Published native app", "share": "~30%"}, "diff": {"amt": "₹16–24L", "desc": "Platform/perf engineer", "share": "~12%"}}, "split": [58, 30, 12]},
"Game Dev": {"desc": "Builds video games — gameplay mechanics, graphics, physics, multiplayer networking using Unity or Unreal.", "examples": "Dream11 UI game mechanics, MPL mini-games, Nazara puzzle game studio projects", "demand": "MEDIUM", "supply": "MEDIUM", "position": "BALANCED", "trend": "↗ UP", "demandSub": "▲ +14% QoQ", "supplySub": "21 / role", "posSub": "Workable", "trendSub": "6m outlook", "listings": 380, "supplyN": 8000, "ratio": "21:1", "topTier": "6:1", "t1": {"co": "Studios · service game devs · TCS Gaming", "vol": "~600/qtr", "filter": "Unity/Unreal basics · 1 jam game", "strategy": "1 jam-quality game on itch.io.", "salary": "₹3.5–5.0L"}, "t2": {"co": "Dream11 · MPL · Sumo Digital · Lumikai", "vol": "~140/qtr", "filter": "Engine depth · gameplay programming · math", "strategy": "Ship 1 polished real-feel game.", "salary": "₹8.0–14.0L"}, "t3": {"co": "Ubisoft India · EA · Rockstar · Riot", "vol": "~30/qtr", "filter": "Engine internals · graphics · perf", "strategy": "Specialism: engine or graphics.", "salary": "₹16.0–26.0L"}, "clusters": [{"nm": "Indie/Jam Games", "share": 56, "jobs": 213, "salary": "₹4–6L"}, {"nm": "Studio Gameplay Programmer", "share": 32, "jobs": 122, "salary": "₹9–14L"}, {"nm": "Engine/Graphics Engineer", "share": 12, "jobs": 46, "salary": "₹16–24L"}], "matrix": {"stakes": ["Unity OR Unreal", "C# OR C++", "Linear algebra basics"], "mult": ["Engine depth", "Gameplay programming", "Performance profiling"], "drop": ["Asset-flip games", "Tutorial copy games"], "bets": ["Engine internals", "Graphics/shader", "Multiplayer/netcode"]}, "gaps": [["Shipped", "Polished playable game", "Half-built jams", "WIDE"], ["Code quality", "Engineering-grade code", "Spaghetti coroutines", "WIDE"], ["Polish", "Juice feedback game feel", "Default asset behavior", "MEDIUM"]], "trends": [["Unreal Engine 5", 34, "up"], ["Mobile gaming", 29, "up"], ["Multiplayer/netcode", 22, "up"], ["Cocos2d/old frameworks", -31, "down"], ["Pure asset-flip studios", -44, "down"]], "bands": {"basic": {"amt": "₹3.5–5.0L", "desc": "Indie/jam game dev", "share": "~56%"}, "skilled": {"amt": "₹9–14L", "desc": "Studio gameplay programmer", "share": "~32%"}, "diff": {"amt": "₹16–24L", "desc": "Engine/graphics engineer", "share": "~12%"}}, "split": [56, 32, 12]},
"Embedded / IoT": {"desc": "Programs microcontrollers and hardware devices — firmware, sensors, communication protocols, RTOS.", "examples": "Ola Electric battery management firmware, Ather scooter ECU software, Bosch India automotive sensors", "demand": "MEDIUM", "supply": "MEDIUM", "position": "BALANCED", "trend": "↗ UP", "demandSub": "▲ +11% QoQ", "supplySub": "17 / role", "posSub": "Workable", "trendSub": "6m outlook", "listings": 680, "supplyN": 11600, "ratio": "17:1", "topTier": "5:1", "t1": {"co": "Tata Elxsi · L&T Tech · TCS · HCL", "vol": "~1,400/qtr", "filter": "C · 1 MCU (Arduino/STM32) · electronics basics", "strategy": "Real boards not Tinkercad sims.", "salary": "₹3.5–5.0L"}, "t2": {"co": "Ola Electric · Ather · Pure EV · Ultraviolette", "vol": "~260/qtr", "filter": "RTOS · CAN bus · firmware design", "strategy": "1 shipped firmware product/repo.", "salary": "₹8.0–13.0L"}, "t3": {"co": "Qualcomm · Intel India · NVIDIA · Bosch", "vol": "~60/qtr", "filter": "Computer arch · low-level perf · DSP", "strategy": "Hardware-software co-design.", "salary": "₹14.0–24.0L"}, "clusters": [{"nm": "MCU/Firmware Basics", "share": 60, "jobs": 408, "salary": "₹4–5L"}, {"nm": "Production Firmware Engineer", "share": 28, "jobs": 190, "salary": "₹9–13L"}, {"nm": "Systems/Driver Engineer", "share": 12, "jobs": 82, "salary": "₹15–22L"}], "matrix": {"stakes": ["C programming", "One MCU platform", "Basic electronics"], "mult": ["RTOS (FreeRTOS/Zephyr)", "CAN/SPI/I2C protocols", "Firmware architecture"], "drop": ["Arduino-tutorial only", "Block-diagram simulation only"], "bets": ["Linux kernel drivers", "DSP algorithms", "ARM Cortex internals"]}, "gaps": [["Hands-on", "Real hardware+debugging", "Tinkercad simulation only", "WIDE"], ["Production", "Shipped firmware with error handling", "Hobby Arduino sketch", "MEDIUM"], ["Debug tools", "JTAG+oscilloscope+logic analyzer", "Serial print only", "MEDIUM"]], "trends": [["EV/battery management", 54, "up"], ["RTOS roles", 27, "up"], ["IoT cloud+edge", 24, "up"], ["8-bit MCU only", -28, "down"], ["Pure Arduino level", -33, "down"]], "bands": {"basic": {"amt": "₹3.5–5.0L", "desc": "MCU basics hobbyist", "share": "~60%"}, "skilled": {"amt": "₹9–13L", "desc": "Production firmware engineer", "share": "~28%"}, "diff": {"amt": "₹15–22L", "desc": "Systems/driver engineer", "share": "~12%"}}, "split": [60, 28, 12]},
"QA / SDET": {"desc": "Tests software at scale — writes automated test frameworks, does API testing, performance testing. Not manual clicking.", "examples": "BrowserStack cross-browser test automation, Razorpay payment flow regression suite, Postman API contract testing", "demand": "MEDIUM", "supply": "HIGH", "position": "TIGHT", "trend": "→ FLAT", "demandSub": "▲ +4% QoQ", "supplySub": "36 / role", "posSub": "Crowded", "trendSub": "6m outlook", "listings": 1640, "supplyN": 59000, "ratio": "36:1", "topTier": "9:1", "t1": {"co": "TCS · Infosys · Wipro · Cognizant", "vol": "~6,200/qtr", "filter": "Manual testing + 1 automation tool basics", "strategy": "Be process-disciplined.", "salary": "₹3.0–4.5L"}, "t2": {"co": "BrowserStack · Postman · CRED · Razorpay", "vol": "~900/qtr", "filter": "Coding (Java/Py/JS) · Playwright/Selenium · API", "strategy": "Become an SDET not a manual tester.", "salary": "₹7.0–12.0L"}, "t3": {"co": "Microsoft · Atlassian · Adobe · LinkedIn", "vol": "~140/qtr", "filter": "Test architecture · performance · chaos", "strategy": "Engineering-grade test system thinking.", "salary": "₹14.0–22.0L"}, "clusters": [{"nm": "Manual + Basic Automation", "share": 64, "jobs": 1050, "salary": "₹3.5–5L"}, {"nm": "SDET (Software Dev in Test)", "share": 26, "jobs": 426, "salary": "₹8–12L"}, {"nm": "Test Architect", "share": 10, "jobs": 164, "salary": "₹14–20L"}], "matrix": {"stakes": ["Manual testing", "One automation tool", "Bug reporting"], "mult": ["Coding (Java/Python/JS)", "API testing (Postman+code)", "Playwright or Cypress", "CI/CD integration"], "drop": ["UFT/QTP legacy", "Manual-only role", "Excel-based test mgmt"], "bets": ["Performance testing (Gatling/k6)", "Contract testing (Pact)", "Chaos/resilience testing"]}, "gaps": [["Coding", "Real test code in framework", "Record+playback only", "WIDE"], ["API testing", "Postman+automated assertions", "UI-only testing", "WIDE"], ["CI pipeline", "Tests integrated in CI/CD", "Local-only test runs", "MEDIUM"]], "trends": [["Playwright adoption", 58, "up"], ["API test automation", 37, "up"], ["Performance testing", 24, "up"], ["UFT/QTP legacy", -46, "down"], ["Manual-only roles", -31, "down"]], "bands": {"basic": {"amt": "₹3–4.5L", "desc": "Manual + basic automation", "share": "~64%"}, "skilled": {"amt": "₹8–12L", "desc": "SDET", "share": "~26%"}, "diff": {"amt": "₹14–20L", "desc": "Test architect", "share": "~10%"}}, "split": [64, 26, 10]},
"Cybersecurity": {"desc": "Protects systems from attacks — penetration testing, threat hunting, SOC analysis, cloud security.", "examples": "CRED security team securing payment flows, Razorpay PCI-DSS compliance engineering, Zomato user data protection", "demand": "V.HIGH", "supply": "MEDIUM", "position": "LOOSE", "trend": "↗ UP", "demandSub": "▲ +28% QoQ", "supplySub": "16 / role", "posSub": "Favourable", "trendSub": "6m outlook", "listings": 1240, "supplyN": 19800, "ratio": "16:1", "topTier": "5:1", "t1": {"co": "TCS · Wipro · Infosys · Cognizant", "vol": "~3,200/qtr", "filter": "Networking · 1 cert (CEH/Security+) · SOC basics", "strategy": "Cert + SIEM tool fluency.", "salary": "₹4.0–6.0L"}, "t2": {"co": "Lucideus · K7 Security · Quick Heal · CRED", "vol": "~600/qtr", "filter": "Red/Blue team skills · scripting · threat modeling", "strategy": "CTF wins + public write-ups.", "salary": "₹9.0–15.0L"}, "t3": {"co": "Microsoft India · Google · Palo Alto · CrowdStrike", "vol": "~110/qtr", "filter": "Cloud sec · AppSec · reverse engineering", "strategy": "Specialism + published research/CVE.", "salary": "₹16.0–28.0L"}, "clusters": [{"nm": "SOC Analyst L1", "share": 62, "jobs": 769, "salary": "₹4.5–7L"}, {"nm": "Offensive/Defensive Engineer", "share": 26, "jobs": 322, "salary": "₹10–15L"}, {"nm": "AppSec/Cloud Sec/Research", "share": 12, "jobs": 149, "salary": "₹17–26L"}], "matrix": {"stakes": ["Networking fundamentals", "1 security cert", "SOC L1 basics"], "mult": ["Scripting (Python/Bash)", "Cloud security (AWS/Azure)", "Threat modeling"], "drop": ["Compliance-only no technical depth", "Manual log scanning only"], "bets": ["AppSec/DevSecOps", "Reverse engineering", "CTF+bug bounty research"]}, "gaps": [["Hands-on", "Real CTF/bounty findings", "Tool tutorials only", "WIDE"], ["Cloud security", "AWS/Azure posture", "On-prem firewall only", "WIDE"], ["Code reading", "Can analyze code", "Network-only background", "MEDIUM"]], "trends": [["Cloud security", 47, "up"], ["DevSecOps/shift-left", 36, "up"], ["Threat hunting+SOAR", 29, "up"], ["Pure compliance-only", -22, "down"], ["Antivirus-only SOC", -34, "down"]], "bands": {"basic": {"amt": "₹4–6L", "desc": "SOC analyst L1", "share": "~62%"}, "skilled": {"amt": "₹10–15L", "desc": "Offensive/defensive engineer", "share": "~26%"}, "diff": {"amt": "₹17–26L", "desc": "AppSec/cloud sec/research", "share": "~12%"}}, "split": [62, 26, 12]},
"UI/UX Designer": {"desc": "Designs how products look and feel — user research, wireframes, prototypes, design systems.", "examples": "CRED's award-winning dark mode UI, Razorpay merchant dashboard UX, Zomato food ordering flow redesign", "demand": "MEDIUM", "supply": "HIGH", "position": "TIGHT", "trend": "→ FLAT", "demandSub": "▲ +5% QoQ", "supplySub": "42 / role", "posSub": "Crowded", "trendSub": "6m outlook", "listings": 840, "supplyN": 35300, "ratio": "42:1", "topTier": "11:1", "t1": {"co": "TCS · Infosys · Cognizant agency arms", "vol": "~1,800/qtr", "filter": "Figma fluency · portfolio of UI screens", "strategy": "Be screen-fluent.", "salary": "₹3.5–5.0L"}, "t2": {"co": "Zomato · CRED · Razorpay · Postman", "vol": "~340/qtr", "filter": "UX research · case studies · interaction depth", "strategy": "3 real case studies with research.", "salary": "₹8.0–14.0L"}, "t3": {"co": "Adobe India · Atlassian · Google · Microsoft", "vol": "~90/qtr", "filter": "Design systems · craft depth + research rigor", "strategy": "Design systems + research credibility.", "salary": "₹16.0–28.0L"}, "clusters": [{"nm": "Screen/UI Designer", "share": 62, "jobs": 521, "salary": "₹4–6L"}, {"nm": "Product Designer", "share": 28, "jobs": 235, "salary": "₹9–14L"}, {"nm": "Design Systems/Senior", "share": 10, "jobs": 84, "salary": "₹16–24L"}], "matrix": {"stakes": ["Figma proficiency", "Typography basics", "Color theory"], "mult": ["UX research process", "Interaction design", "Rapid prototyping"], "drop": ["Photoshop-only", "Print design only", "Zero user research"], "bets": ["Design systems+tokens", "Accessibility (WCAG)", "AI-assisted design tools"]}, "gaps": [["Research", "User interviews+synthesis", "Zero user research", "WIDE"], ["Process", "Case study with artifacts", "Just screens on Dribbble", "WIDE"], ["Systems", "Tokens+component library", "One-off disconnected screens", "MEDIUM"]], "trends": [["Product design skills", 26, "up"], ["Design systems", 22, "up"], ["Motion/AI-assisted design", 19, "up"], ["UI-only without research", -18, "down"], ["Photoshop primary workflow", -34, "down"]], "bands": {"basic": {"amt": "₹3.5–5.0L", "desc": "Screen/UI designer", "share": "~62%"}, "skilled": {"amt": "₹9–14L", "desc": "Product designer", "share": "~28%"}, "diff": {"amt": "₹16–24L", "desc": "Systems/senior designer", "share": "~10%"}}, "split": [62, 28, 10]},
"Product Manager": {"desc": "Defines what gets built and why — writes PRDs, sets priorities, coordinates engineering/design/business.", "examples": "Swiggy 'Schedule Order' feature PM, PhonePe UPI Lite PM, CRED rewards program PM", "demand": "MEDIUM", "supply": "V.HIGH", "position": "TIGHT", "trend": "→ FLAT", "demandSub": "▲ +3% QoQ", "supplySub": "58 / role", "posSub": "Selective", "trendSub": "6m outlook", "listings": 480, "supplyN": 27800, "ratio": "58:1", "topTier": "19:1", "t1": {"co": "Infosys · Wipro · TCS BPS · Cognizant", "vol": "~600/qtr", "filter": "Domain knowledge · execution · BA skills", "strategy": "Pivot in via BA or APM.", "salary": "₹5.0–8.0L"}, "t2": {"co": "Razorpay · Swiggy · Meesho · CRED", "vol": "~180/qtr", "filter": "Structured thinking · written craft · metric sense", "strategy": "APM programs are the door.", "salary": "₹12.0–18.0L"}, "t3": {"co": "Microsoft India · Google · Atlassian · Linear", "vol": "~40/qtr", "filter": "Vision + product craft + storytelling", "strategy": "Side projects with real users.", "salary": "₹22.0–35.0L"}, "clusters": [{"nm": "Associate PM/BA", "share": 54, "jobs": 259, "salary": "₹5–9L"}, {"nm": "Product Manager", "share": 32, "jobs": 154, "salary": "₹13–20L"}, {"nm": "Senior PM/Founder-Track", "share": 14, "jobs": 67, "salary": "₹22–32L"}], "matrix": {"stakes": ["Agile basics", "Ticket management", "Stakeholder communication"], "mult": ["Metric sense (hypothesis+data)", "User research process", "Writing craft (PRDs/memos)", "SQL basics"], "drop": ["PowerPoint-only PM", "Internal IT BA paths"], "bets": ["Founder side-project", "Public product writing", "Open-source PM"]}, "gaps": [["Writing craft", "Written PRDs+verbal clarity", "Slide decks only", "WIDE"], ["Metrics", "Hypothesis+data validation", "Vibes+gut only", "WIDE"], ["Users", "Talked to 20+ real users", "Zero user interviews", "WIDE"]], "trends": [["AI-product PMs", 62, "up"], ["Growth PMs", 28, "up"], ["Technical PMs", 24, "up"], ["Pure documentation BA roles", -19, "down"], ["Slide-deck-only PMs", -31, "down"]], "bands": {"basic": {"amt": "₹5–9L", "desc": "APM/BA level", "share": "~54%"}, "skilled": {"amt": "₹13–20L", "desc": "Product Manager", "share": "~32%"}, "diff": {"amt": "₹22–32L", "desc": "Senior/founder-track PM", "share": "~14%"}}, "split": [54, 32, 14]},
"Business Analyst": {"desc": "Bridges business needs and technology — gathers requirements, writes specifications, manages stakeholders.", "examples": "HDFC Bank digital transformation BA, Infosys BPM insurance process automation, PhonePe product metrics BA", "demand": "HIGH", "supply": "V.HIGH", "position": "TIGHT", "trend": "→ FLAT", "demandSub": "▲ +9% QoQ", "supplySub": "46 / role", "posSub": "Crowded", "trendSub": "6m outlook", "listings": 1840, "supplyN": 84600, "ratio": "46:1", "topTier": "12:1", "t1": {"co": "TCS · Infosys · Cognizant · Capgemini", "vol": "~7,800/qtr", "filter": "Communication · SQL/Excel · agile basics", "strategy": "Process + SQL fluency.", "salary": "₹3.5–5.5L"}, "t2": {"co": "PhonePe · Razorpay · Swiggy · Zoho", "vol": "~700/qtr", "filter": "SQL depth · product sense · written craft", "strategy": "Become near-PM in thinking.", "salary": "₹8.0–13.0L"}, "t3": {"co": "Goldman Sachs · JPMorgan · Microsoft · Adobe", "vol": "~140/qtr", "filter": "Domain depth + analytical fluency", "strategy": "Domain specialism + tooling depth.", "salary": "₹14.0–22.0L"}, "clusters": [{"nm": "Generalist BA", "share": 64, "jobs": 1178, "salary": "₹4–6L"}, {"nm": "Product-Leaning BA", "share": 24, "jobs": 442, "salary": "₹9–13L"}, {"nm": "Domain Specialist BA", "share": 12, "jobs": 221, "salary": "₹14–20L"}], "matrix": {"stakes": ["Communication", "Excel basics", "Agile fundamentals"], "mult": ["SQL depth", "Product metrics framing", "Written craft for execs"], "drop": ["Pure documentation roles", "Excel-only analysis", "Waterfall-heavy BA"], "bets": ["Domain specialism (BFSI/Health)", "Light Python/SQL automation", "Data visualization"]}, "gaps": [["Tooling", "SQL+visualization tools", "Excel and pivot tables only", "MEDIUM"], ["Written output", "Crisp product writing for execs", "Endless 50-page docs", "WIDE"], ["Metrics", "Hypothesis-driven analysis", "Reporting only", "WIDE"]], "trends": [["Product-BA hybrid", 26, "up"], ["Analytics BA", 22, "up"], ["AI-aware BA", 18, "up"], ["Documentation-only BA", -21, "down"], ["Waterfall-heavy BA", -29, "down"]], "bands": {"basic": {"amt": "₹3.5–5.5L", "desc": "Generalist BA", "share": "~64%"}, "skilled": {"amt": "₹9–13L", "desc": "Product-leaning BA", "share": "~24%"}, "diff": {"amt": "₹14–20L", "desc": "Domain specialist", "share": "~12%"}}, "split": [64, 24, 12]},
"Digital Marketing": {"desc": "Drives growth through digital channels — performance marketing, SEO, content, analytics, ROAS optimization.", "examples": "Meesho paid ads team driving ₹100Cr GMV, CRED performance marketing for member acquisition, Razorpay B2B content marketing", "demand": "HIGH", "supply": "V.HIGH", "position": "TIGHT", "trend": "↗ UP", "demandSub": "▲ +12% QoQ", "supplySub": "48 / role", "posSub": "Crowded", "trendSub": "6m outlook", "listings": 1320, "supplyN": 63400, "ratio": "48:1", "topTier": "14:1", "t1": {"co": "Agencies · TCS Digital · Cognizant Marketing", "vol": "~4,400/qtr", "filter": "Tool fluency · content basics · campaigns", "strategy": "Run 3 real campaigns yourself.", "salary": "₹3.0–5.0L"}, "t2": {"co": "Razorpay · Zomato · CRED · Meesho", "vol": "~500/qtr", "filter": "Performance marketing · analytics · ROAS", "strategy": "Show a ROAS-led case study.", "salary": "₹7.0–12.0L"}, "t3": {"co": "Adobe India · Google · Microsoft · HubSpot", "vol": "~80/qtr", "filter": "Brand + performance + analytics depth", "strategy": "Build public following + analytics case.", "salary": "₹14.0–22.0L"}, "clusters": [{"nm": "Campaign Executor", "share": 66, "jobs": 871, "salary": "₹3.5–5L"}, {"nm": "Performance Marketer", "share": 24, "jobs": 317, "salary": "₹7–12L"}, {"nm": "Growth/Brand Lead", "share": 10, "jobs": 132, "salary": "₹14–20L"}], "matrix": {"stakes": ["Ad platforms (Meta/Google)", "Content creation", "SEO fundamentals"], "mult": ["Analytics+attribution modeling", "ROAS mindset", "Funnel design+conversion"], "drop": ["Vanity metric reporting", "Content without metrics"], "bets": ["Public personal brand/newsletter", "AI-driven creative testing", "CRM+lifecycle marketing"]}, "gaps": [["Metrics", "ROAS owned+attribution", "Reach+engagement only", "WIDE"], ["Funnel", "End-to-end funnel ownership", "Top-of-funnel content only", "WIDE"], ["Creative", "Performance-tested creative", "Canva template only", "MEDIUM"]], "trends": [["AI creative testing", 47, "up"], ["Lifecycle CRM marketing", 28, "up"], ["Performance marketing", 24, "up"], ["Banner-ad executor roles", -26, "down"], ["Vanity metric roles", -32, "down"]], "bands": {"basic": {"amt": "₹3–5L", "desc": "Campaign executor", "share": "~66%"}, "skilled": {"amt": "₹7–12L", "desc": "Performance marketer", "share": "~24%"}, "diff": {"amt": "₹14–20L", "desc": "Growth/brand lead", "share": "~10%"}}, "split": [66, 24, 10]},
};

  /* ---------- utilities ---------- */
  function esc(s){ s=(s==null?"":""+s); return s.replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c];}); }
  function stars(n){ n=Math.max(0,Math.min(5,Math.round(n))); return '<span class="stars">'+'★'.repeat(n)+'☆'.repeat(5-n)+'</span>'; }
  function indic(text){ return '<span class="indic-badge" title="Indicative data — illustrative, not a verified live feed">◷ '+esc(text||"Indicative")+'</span>'; }
  function ratingBar(pct,cls){ pct=Math.max(4,Math.min(100,pct)); return '<div class="skill-bar-track"><div class="skill-bar-fill '+(cls||"imp")+'" style="width:'+pct+'%"></div></div>'; }

  /* ---------- info panel: Bento Grid (What / Why / Features / Did You Know?) ---------- */
  function mountInfo(elId, cfg){
    var el=document.getElementById(elId); if(!el) return;
    var feats=(cfg.features||[]).map(function(f){return '<li>'+esc(f)+'</li>';}).join('');
    var diyk=(cfg.examples||[]).map(function(e){return '<li>'+esc(e)+'</li>';}).join('');
    el.innerHTML =
      '<div class="info-head">&#x2139;&#xFE0F; About this agent</div>'+
      '<div class="info-bento">'+
        '<div class="info-card what"><div class="ic-label">&#128204; What it is</div><p>'+esc(cfg.what||'')+'</p></div>'+
        '<div class="info-card why"><div class="ic-label">&#9989; Why it helps</div><p>'+esc(cfg.why||'')+'</p></div>'+
        '<div class="info-card how"><div class="ic-label">&#9889; Key Features</div><ul>'+feats+'</ul></div>'+
        '<div class="info-card ex"><div class="ic-label">&#128161; Did You Know?</div><ul>'+diyk+'</ul></div>'+
      '</div>';
  }

  /* ---------- CTA row: inject after info panel, hide config until clicked ---------- */
  function mountInfoCTA(ctaLabel, hintText){
    ctaLabel = ctaLabel || '&#9889; Start the Agent &rarr;';
    hintText = hintText || '<strong>Ready?</strong> Select your role(s) below and generate your report.';
    var cp = document.querySelector('.config-panel');
    if(cp) cp.classList.add('hidden');
    var infoEl = document.getElementById('info');
    if(!infoEl) return;
    var cta = document.createElement('div');
    cta.className = 'info-cta-row';
    cta.innerHTML = '<span class="cta-hint">'+hintText+'</span>'+
      '<button class="info-cta-btn" id="infoCTABtn">'+ctaLabel+'</button>';
    infoEl.parentNode.insertBefore(cta, infoEl.nextSibling);
    document.getElementById('infoCTABtn').addEventListener('click', function(){
      cta.style.display = 'none';
      if(cp){ cp.classList.remove('hidden'); setTimeout(function(){ cp.scrollIntoView({behavior:'smooth', block:'start'}); }, 60); }
    });
  }

  /* ---------- chip / role selector (All + multi-select) ---------- */
  function mountChips(elId, items, opts){
    opts=opts||{}; var el=document.getElementById(elId); if(!el) return;
    var multi=opts.multi!==false;
    var norm=items.map(function(it){ return (typeof it==="string")?{n:it,ico:""}:it; });
    var html="";
    if(opts.all!==false){
      html+='<button type="button" class="role-btn all-roles" data-all="1">⊕ '+esc(opts.allLabel||"All Roles")+'</button>';
    }
    html+=norm.map(function(it){
      var sub=it.sub?'<span class="rsub">'+esc(it.sub)+'</span>':'';
      return '<button type="button" class="role-btn" data-val="'+esc(it.n)+'"'+(it.tip?' data-tip="'+esc(it.tip)+'"':'')+'>'+
             (it.ico?'<span class="rico">'+it.ico+'</span>':'')+esc(it.n)+sub+'</button>';
    }).join('');
    el.innerHTML=html;
    el.dataset.multi=multi?"1":"0";
    if(opts.restore&&opts.restore.length){ el.querySelectorAll('.role-btn:not(.all-roles)').forEach(function(b){ if(opts.restore.indexOf(b.dataset.val)>-1) b.classList.add('sel'); }); }
    el.addEventListener('click',function(e){
      var b=e.target.closest('.role-btn'); if(!b||!el.contains(b)) return;
      if(b.dataset.all){
        var on=b.classList.toggle('sel');
        el.querySelectorAll('.role-btn:not(.all-roles)').forEach(function(x){ x.classList.toggle('sel',on); });
      } else {
        if(el.dataset.multi!=="1"){ el.querySelectorAll('.role-btn:not(.all-roles)').forEach(function(x){ if(x!==b) x.classList.remove('sel'); }); }
        b.classList.toggle('sel');
        var allBtn=el.querySelector('.all-roles');
        if(allBtn){ var total=el.querySelectorAll('.role-btn:not(.all-roles)').length; var sel=el.querySelectorAll('.role-btn:not(.all-roles).sel').length; allBtn.classList.toggle('sel',total>0&&sel===total); }
      }
      updateCount(el);
      if(opts.onChange) opts.onChange(selected(elId));
    });
    updateCount(el);
  }
  function updateCount(el){
    var c=el.parentNode&&el.parentNode.querySelector('[data-rolecount]');
    if(c){ var n=el.querySelectorAll('.role-btn:not(.all-roles).sel').length; c.textContent=n?(n+' selected'):'none selected'; c.style.color=n?'var(--emerald)':'var(--slate-light)'; }
  }
  function selected(elId){ var el=document.getElementById(elId); if(!el) return []; return Array.prototype.slice.call(el.querySelectorAll('.role-btn:not(.all-roles).sel')).map(function(b){return b.dataset.val;}); }

  /* ---------- report show + run ---------- */
  function showReport(){ var rw=document.getElementById('report-wrap'); if(rw){ rw.classList.add('visible'); setTimeout(function(){ rw.scrollIntoView({behavior:'smooth',block:'start'}); },60);} var b=document.getElementById('run-btn'); if(b) b.innerHTML='🔄 Re-generate Report'; }

  /* ---------- Recommendations (report-tied, no problems) ---------- */
  function recommendations(recs){
    var r=(recs||[]).map(function(x,i){ return '<div class="rec-block"><div class="rb-label">✓ DO THIS '+(i+1)+'</div><div class="rb-title">'+esc(x.t)+'</div><div class="rb-body">'+esc(x.b)+'</div></div>'; }).join('');
    return '<div class="agg-block"><h2 class="sec" style="margin-top:28px">✓ Recommendations <span class="sec-tip">your next moves, based on this report</span></h2>'+r+'</div>';
  }
  /* backward-compat: ignore problems, render recommendations only */
  function problemsRecs(problems, recs){ return recommendations(recs); }
  /* ---------- Key takeaways callout ---------- */
  function takeaways(list){
    return '<div class="takeaways"><div class="tk-label">⭐ KEY TAKEAWAYS</div><ul>'+(list||[]).map(function(x){return '<li>'+esc(x)+'</li>';}).join('')+'</ul></div>';
  }
  /* ---------- Next-step CTA (agent chaining) ---------- */
  function nextStep(cfg){
    if(!cfg) return '';
    return '<a class="next-step" href="'+esc(cfg.href)+'"><div class="ns-eyebrow">➡ NEXT IN YOUR JOURNEY</div><div class="ns-title">'+esc(cfg.label)+'</div><div class="ns-desc">'+esc(cfg.desc||'')+'</div><div class="ns-go">Open agent →</div></a>';
  }
  /* ---------- cross-agent memory (localStorage, graceful) ---------- */
  function remember(k,v){ try{ localStorage.setItem('zapit.'+k, JSON.stringify(v)); }catch(e){} }
  function recall(k){ try{ var v=localStorage.getItem('zapit.'+k); return v?JSON.parse(v):null; }catch(e){ return null; } }
  function carryBanner(elId, roles){
    var el=document.getElementById(elId); if(!el) return;
    if(roles&&roles.length){ el.innerHTML='<div class="carry">↳ Carried over from your last agent: <b>'+roles.map(esc).join(', ')+'</b> — pre-selected below. Change it any time.</div>'; }
    else el.innerHTML='';
  }

  /* ========================================================== *
   *  NEW (feedback pass): links, beginner help, legends,
   *  cheatsheets, sample-report previews, takeaways-last.
   * ========================================================== */

  /* ---------- LINKS: make every skill / tool / cert / training clickable ----------
     Curated direct links where we know them; everything else falls back to a
     safe Google search so NOTHING on the page is a dead-end. */
  var LINKS = {
    // languages / core
    "javascript":"https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    "javascript (es6+)":"https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    "html5 / css3":"https://developer.mozilla.org/en-US/docs/Learn",
    "typescript":"https://www.typescriptlang.org/docs/",
    "python":"https://docs.python.org/3/tutorial/",
    "java":"https://dev.java/learn/",
    "go (golang)":"https://go.dev/learn/",
    "sql":"https://www.w3schools.com/sql/",
    "sql (advanced)":"https://mode.com/sql-tutorial/",
    // frameworks / libs
    "react 18 + hooks":"https://react.dev/learn",
    "react":"https://react.dev/learn",
    "react + typescript":"https://react.dev/learn/typescript",
    "next.js":"https://nextjs.org/learn",
    "node.js / rest apis":"https://nodejs.org/en/learn",
    "node":"https://nodejs.org/en/learn",
    "tailwind css":"https://tailwindcss.com/docs",
    "spring boot":"https://spring.io/guides",
    "java + spring boot":"https://spring.io/guides",
    "django":"https://docs.djangoproject.com/en/stable/intro/",
    "flask":"https://flask.palletsprojects.com/",
    "fastapi":"https://fastapi.tiangolo.com/tutorial/",
    "pandas / data analysis":"https://pandas.pydata.org/docs/getting_started/",
    "pandas":"https://pandas.pydata.org/docs/getting_started/",
    "tensorflow":"https://www.tensorflow.org/learn",
    "pytorch":"https://pytorch.org/tutorials/",
    "machine learning (sklearn)":"https://scikit-learn.org/stable/getting_started.html",
    "spark":"https://spark.apache.org/docs/latest/quick-start.html",
    "dbt":"https://docs.getdbt.com/docs/introduction",
    "airflow":"https://airflow.apache.org/docs/",
    "flutter / mobile":"https://docs.flutter.dev/",
    "flutter":"https://docs.flutter.dev/",
    // tools / infra
    "git + github":"https://docs.github.com/en/get-started",
    "git":"https://git-scm.com/doc",
    "vs code":"https://code.visualstudio.com/docs",
    "docker":"https://docs.docker.com/get-started/",
    "kubernetes + docker":"https://kubernetes.io/docs/tutorials/",
    "kubernetes":"https://kubernetes.io/docs/tutorials/",
    "terraform / iac":"https://developer.hashicorp.com/terraform/tutorials",
    "terraform":"https://developer.hashicorp.com/terraform/tutorials",
    "postman":"https://learning.postman.com/docs/getting-started/introduction/",
    "figma":"https://help.figma.com/hc/en-us",
    "figma (handoff)":"https://help.figma.com/hc/en-us",
    "power bi / tableau":"https://learn.microsoft.com/en-us/power-bi/",
    "power bi":"https://learn.microsoft.com/en-us/power-bi/",
    "playwright / sdet":"https://playwright.dev/docs/intro",
    "playwright":"https://playwright.dev/docs/intro",
    // cloud / ai
    "cloud — aws":"https://aws.amazon.com/getting-started/",
    "cloud":"https://aws.amazon.com/getting-started/",
    "devops / ci-cd":"https://docs.github.com/en/actions",
    "genai / llm apps (rag)":"https://www.deeplearning.ai/short-courses/",
    "system design basics":"https://github.com/donnemartin/system-design-primer",
    "product / metrics sense":"https://www.lennysnewsletter.com/",
    // certs
    "meta front-end (coursera)":"https://www.coursera.org/professional-certificates/meta-front-end-developer",
    "freecodecamp responsive web":"https://www.freecodecamp.org/learn/responsive-web-design/",
    "aws sa-associate":"https://aws.amazon.com/certification/certified-solutions-architect-associate/",
    "aws certified cloud practitioner":"https://aws.amazon.com/certification/certified-cloud-practitioner/",
    "google data analytics (coursera)":"https://www.coursera.org/professional-certificates/google-data-analytics",
    "ckad (kubernetes)":"https://www.cncf.io/training/certification/ckad/",
    "comptia security+":"https://www.comptia.org/certifications/security",
    "security+":"https://www.comptia.org/certifications/security"
  };
  /* keyword fallbacks so partial matches still resolve to something useful */
  var LINK_KEYS = {
    "aws":"https://aws.amazon.com/getting-started/","azure":"https://learn.microsoft.com/en-us/training/azure/",
    "gcp":"https://cloud.google.com/learn","kafka":"https://kafka.apache.org/quickstart",
    "redis":"https://redis.io/docs/latest/","postgres":"https://www.postgresql.org/docs/",
    "mongo":"https://www.mongodb.com/docs/","snowflake":"https://docs.snowflake.com/",
    "graphql":"https://graphql.org/learn/","rest":"https://developer.mozilla.org/en-US/docs/Web/HTTP",
    "kotlin":"https://kotlinlang.org/docs/home.html","swift":"https://developer.apple.com/swift/",
    "unity":"https://learn.unity.com/","unreal":"https://dev.epicgames.com/community/unreal-engine/learning",
    "figma":"https://help.figma.com/hc/en-us","selenium":"https://www.selenium.dev/documentation/",
    "cypress":"https://docs.cypress.io/","langchain":"https://python.langchain.com/docs/introduction/",
    "rag":"https://www.deeplearning.ai/short-courses/","llm":"https://www.deeplearning.ai/short-courses/",
    "owasp":"https://owasp.org/www-project-top-ten/","ga4":"https://support.google.com/analytics",
    "coursera":"https://www.coursera.org/","udemy":"https://www.udemy.com/","nptel":"https://nptel.ac.in/",
    "freecodecamp":"https://www.freecodecamp.org/learn/"
  };
  function linkFor(name){
    var k=(name||'').toLowerCase().trim();
    if(LINKS[k]) return LINKS[k];
    for(var key in LINK_KEYS){ if(k.indexOf(key)>-1) return LINK_KEYS[key]; }
    return 'https://www.google.com/search?q='+encodeURIComponent(name+' tutorial');
  }
  /* render a name as a clickable, new-tab link */
  function linkName(name, label){
    return '<a class="zlink" href="'+esc(linkFor(name))+'" target="_blank" rel="noopener">'+esc(label||name)+' ↗</a>';
  }
  /* link chip (for term lists) */
  function linkChip(name, cls){
    return '<a class="tag '+(cls||'tc')+' zchip" href="'+esc(linkFor(name))+'" target="_blank" rel="noopener" style="margin:2px;text-decoration:none">'+esc(name)+' ↗</a>';
  }

  /* ---------- priority + proficiency words (fixes "all green / can't tell") ---------- */
  function priWord(r){ return r>=5?"MUST-HAVE":r>=4?"MUST-HAVE":r>=3?"GOOD-TO-HAVE":"OPTIONAL"; }
  function priClass(r){ return r>=4?"must":r>=3?"imp":r>=2?"good":"learn"; }   /* color band */
  function profWord(r){ return r>=5?"Proficient":r>=3?"Working":"Awareness"; }
  function priorityLegend(){
    return '<div class="legend">'+
      '<span class="lg-ttl">How to read the bars:</span>'+
      '<span class="lg-item"><span class="lg-dot must"></span><b>Green = Must-have</b> (learn first, clears the filter)</span>'+
      '<span class="lg-item"><span class="lg-dot imp"></span><b>Blue = Important</b> (Tier-2 expectation)</span>'+
      '<span class="lg-item"><span class="lg-dot good"></span><b>Amber = Good-to-have</b> (nice bonus)</span>'+
      '<span class="lg-item"><span class="lg-dot learn"></span><b>Purple = Bet / cert</b> (premium unlock)</span>'+
      '<span class="lg-item">★ stars = how strong the hiring signal is (1–5). Tap any name to open a free learning link ↗</span>'+
      '</div>';
  }
  /* a clean, beginner-friendly skill row: name(link) + priority + proficiency + bar(colored) + stars */
  function skillLine(x, opts){
    opts=opts||{};
    var r=x.r||0, pct=Math.max(8,r*20), band=priClass(r);
    var pri='<span class="pill pill-'+band+'" title="'+esc(priWord(r)+' for this role')+'">'+priWord(r)+'</span>';
    var prof=opts.prof!==false?'<span class="pill pill-ghost" title="How deep you need to go">'+profWord(r)+'</span>':'';
    var cat=opts.cat?(' <span class="pill pill-ghost">'+esc(opts.cat)+'</span>'):'';
    var note=x.note?'<div class="sl-note">'+esc(x.note)+'</div>':'';
    return '<div class="skill-row"><div><b>'+linkName(x.n)+'</b> '+pri+' '+prof+cat+note+'</div>'+
      ratingBar(pct, band)+'<div style="text-align:right" title="Hiring signal '+r+'/5">'+stars(r)+'</div></div>';
  }

  /* ---------- beginner "ABC" explainer (assume a blank-slate fresher) ---------- */
  var PLAIN = {
    "Frontend Dev":"The part of an app you can SEE and click — buttons, pages, forms. Frontend devs build the screens.",
    "Backend Dev":"The hidden engine behind the screen — it stores data, checks passwords, does the maths. Users never see it.",
    "Full Stack":"Does BOTH the visible screen (frontend) and the hidden engine (backend) — owns a whole feature end to end.",
    "Data Analyst":"Turns messy data into simple answers and charts that help a business decide what to do next.",
    "Data Scientist":"Builds 'smart guess' models — e.g. predicting which customer will leave — using maths and code.",
    "Data Engineer":"Builds the pipes that move data from A to B reliably so analysts and scientists can use it.",
    "ML / AI Eng":"Takes AI/ML models and puts them live inside real apps so customers actually use them.",
    "DevOps / SRE":"Keeps the app running 24×7 — automates releases, watches for crashes, fixes outages.",
    "Cloud Eng":"Sets up and runs the rented computers (AWS/Azure/GCP) that apps live on.",
    "Mobile Dev":"Builds the apps on your phone (Android / iPhone).",
    "Game Dev":"Builds video games — the characters, physics, levels and controls.",
    "Embedded / IoT":"Programs tiny chips inside devices — EV batteries, sensors, smart gadgets.",
    "QA / SDET":"Makes sure software actually works by writing automated tests that catch bugs before users do.",
    "Cybersecurity":"Protects apps and data from hackers — finds the holes before the bad guys do.",
    "UI/UX Designer":"Decides how an app looks and feels so it's easy and pleasant to use.",
    "Product Manager":"Decides WHAT to build and why — talks to users, sets priorities, coordinates the team.",
    "Business Analyst":"The bridge between business people and the tech team — turns 'what we need' into clear specs.",
    "Digital Marketing":"Grows the product online — ads, SEO, content — and measures what brings paying customers."
  };
  function beginnerBox(role){
    var txt = PLAIN[role];
    if(!txt) return '';
    return '<div class="beginner"><div class="bg-tag">🟢 NEW HERE? START WITH THIS</div>'+
      '<p><b>'+esc(role)+'</b> — in one line: '+esc(txt)+'</p>'+
      '<p class="bg-sub">No prior knowledge needed. Read the plain-English line above, then the detail below builds on it step by step.</p></div>';
  }
  /* generic ABC glossary block (front-end / back-end etc. for a true beginner) */
  function abcGlossary(){
    var rows=[
      ["Frontend","The screen you see and tap (buttons, pages)."],
      ["Backend","The hidden engine (stores data, checks logins)."],
      ["Database","Where all the data is saved, like a giant spreadsheet."],
      ["API","A waiter that carries requests between frontend and backend."],
      ["Deploy","Putting your project ONLINE so anyone can open the link."],
      ["Git / GitHub","A free place to store code and show recruiters your work."],
      ["ATS","Robot software that scans your resume before any human sees it."],
      ["Framework","A ready-made toolkit (e.g. React) so you don't build from zero."]
    ];
    return '<div class="acc-item"><div class="acc-hdr">📘 New to tech terms? Decode the jargon<span class="acc-ico">▼</span></div>'+
      '<div class="acc-body"><table class="t"><thead><tr><th>WORD</th><th>WHAT IT MEANS (SIMPLY)</th></tr></thead><tbody>'+
      rows.map(function(r){return '<tr><td><b>'+esc(r[0])+'</b></td><td>'+esc(r[1])+'</td></tr>';}).join('')+
      '</tbody></table></div></div>';
  }

  /* unified help guide box containing optional legend and jargon decoder */
  function guideBox(includeLegend){
    var html = '<div class="help-guide-box">';
    if(includeLegend){
      html += priorityLegend();
    }
    html += abcGlossary();
    html += '</div>';
    return html;
  }

  /* ---------- cheatsheet / quick-refresher card ---------- */
  function cheatCard(title, lines, dlBtnHtml){
    return '<div class="cheat"><div class="cheat-tag">🧾 CHEATSHEET · QUICK REFRESHER</div><div class="cheat-ttl">'+esc(title)+'</div>'+
      '<ul class="cheat-list">'+(lines||[]).map(function(l){return '<li>'+l+'</li>';}).join('')+'</ul>'+(dlBtnHtml||'')+'</div>';
  }

  /* ---------- "see a sample report" preview (every agent) ---------- */
  function sampleReport(title, bodyHtml){
    return '<div class="acc-item sample"><div class="acc-hdr">👁 See a sample '+esc(title)+' (example — tap to preview)<span class="acc-ico">▼</span></div>'+
      '<div class="acc-body">'+bodyHtml+'</div></div>';
  }

  /* ---------- closeout: Recommendations FIRST, then Key Takeaways LAST ---------- */
  function closeout(recs, next, tkList){
    return recommendations(recs) + (tkList&&tkList.length?takeaways(tkList):'') + (next?nextStep(next):'');
  }

  /* ---------- small render primitives ---------- */
  function kpiRow(items){ return '<div class="kpi-row">'+items.map(function(k){return '<div class="kpi '+(k.cls||"trend")+'"><div class="lbl">'+esc(k.lbl)+'</div><div class="val">'+esc(k.val)+'</div><div class="sub">'+esc(k.sub||"")+'</div></div>';}).join('')+'</div>'; }
  function table(headers, rows){ return '<table class="t"><thead><tr>'+headers.map(function(h){return '<th>'+esc(h)+'</th>';}).join('')+'</tr></thead><tbody>'+rows.map(function(r){return '<tr>'+r.map(function(c){return '<td>'+c+'</td>';}).join('')+'</tr>';}).join('')+'</tbody></table>'; }
  function download(fn, text){
    // Prefix UTF-8 BOM so Windows editors reliably detect report exports as Unicode.
    var b=new Blob(["\uFEFF",text],{type:'text/plain;charset=utf-8'});
    var a=document.createElement('a');
    a.href=URL.createObjectURL(b);
    a.download=fn;
    document.body.appendChild(a);
    a.click();
    setTimeout(function(){URL.revokeObjectURL(a.href);a.remove();},100);
  }

  /* ---------- global interaction delegation ---------- */
  document.addEventListener('click', function(e){
    var t=e.target;
    /* checkboxes removed — markers are now static (we don't track progress) */
    var ah=t.closest&&t.closest('.acc-hdr');
    if(ah){ var body=ah.nextElementSibling; if(body){ body.classList.toggle('open'); var ic=ah.querySelector('.acc-ico'); if(ic) ic.style.transform=body.classList.contains('open')?'rotate(180deg)':''; } }
    if(t.classList.contains('reveal-btn')){ var fc=t.closest('.flashcard'); var ans=fc&&fc.querySelector('.fc-ans'); if(ans){ ans.classList.toggle('show'); t.textContent=ans.classList.contains('show')?'Hide Answer':'Show Answer'; } }
    if(t.classList.contains('tab-btn')){ var nav=t.closest('.tab-nav'); var wrap=nav&&nav.nextElementSibling; if(nav){ nav.querySelectorAll('.tab-btn').forEach(function(b){b.classList.remove('active');}); t.classList.add('active'); if(wrap){ var idx=Array.prototype.slice.call(nav.querySelectorAll('.tab-btn')).indexOf(t); var ps=wrap.querySelectorAll('.tab-panel'); ps.forEach(function(p){p.classList.remove('active');}); if(ps[idx]) ps[idx].classList.add('active'); } } }
    if(t.classList.contains('quiz-opt')){ var q=t.closest('.quiz-q'); if(q&&!q.dataset.done){ q.dataset.done="1"; var ok=t.dataset.correct==="1"; var fb=q.querySelector('.quiz-feedback'); q.querySelectorAll('.quiz-opt').forEach(function(o){ o.disabled=true; if(o.dataset.correct==="1") o.classList.add('correct'); }); if(!ok) t.classList.add('wrong'); if(fb){ fb.className='quiz-feedback show '+(ok?'pass':'fail'); fb.textContent=(ok?'✓ Correct! ':'✗ Not quite. ')+(t.dataset.exp||''); } } }
  });

  return { ROLES:ROLES, MARKET:MARKET, SKILLS:{}, esc:esc, stars:stars, indic:indic, ratingBar:ratingBar,
    mountInfo:mountInfo, mountInfoCTA:mountInfoCTA, mountChips:mountChips, mountRoles:function(elId,opts){ return mountChips(elId, ROLES, opts); },
    selected:selected, showReport:showReport, problemsRecs:problemsRecs, recommendations:recommendations,
    takeaways:takeaways, nextStep:nextStep, remember:remember, recall:recall, carryBanner:carryBanner,
    kpiRow:kpiRow, table:table, download:download,
    /* feedback-pass exports */
    linkFor:linkFor, linkName:linkName, linkChip:linkChip,
    priWord:priWord, priClass:priClass, profWord:profWord, priorityLegend:priorityLegend, skillLine:skillLine,
    PLAIN:PLAIN, beginnerBox:beginnerBox, abcGlossary:abcGlossary, guideBox:guideBox,
    cheatCard:cheatCard, sampleReport:sampleReport, closeout:closeout };
})();

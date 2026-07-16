export const projects = [
  {
    title: "ATS Resume Screening Platform",
    description: "A comprehensive applicant tracking system utilizing NLP for resume parsing and job matching.",
    tech: ["FastAPI", "MySQL", "SQLAlchemy", "Alembic", "JWT"],
    features: [
      "Resume Parsing & TF-IDF Based Job Recommendation",
      "Cosine Similarity Matching for ATS Score calculation",
      "Authentication & Role Management",
      "Recruiter and Candidate Dashboards"
    ],
    architecture: "Implemented Repository Pattern and Service Layer for maintainable database design.",
    github: "https://github.com/KJoshiSaiGovind/ATS-Analyzer.git",
    live: "https://ats-analyzer-chi.vercel.app/",
    problem: "Recruiters spend too much time manually screening resumes.",
    solution: "Automated the process using NLP techniques to instantly match candidates to job descriptions.",
  },
  {
    title: "TrafficWise – Intelligent Traffic Analytics",
    description: "Full-stack machine learning platform for predicting vehicle traffic volume with interactive data visualizations.",
    tech: ["Flask", "MySQL", "Scikit-learn", "XGBoost", "Chart.js", "Docker"],
    features: [
      "REST APIs for real-time traffic prediction",
      "Interactive dashboard with KPI cards and visualizations",
      "Automatic evaluation of multiple regression models",
      "Dockerized deployment with Gunicorn"
    ],
    architecture: "Flask backend serving ML models connected to MySQL with connection pooling.",
    github: "https://github.com/KJoshiSaiGovind/UrbanTrafficAnalysis.git",
    live: "#",
    problem: "Lack of intelligent forecasting makes it difficult to anticipate and manage traffic congestion.",
    solution: "Engineered a predictive ML pipeline with a comprehensive analytics dashboard to forecast peak hours and trends.",
  },
  {
    title: "IoT Malware Detection System",
    description: "A machine learning based REST API for detecting threats in IoT environments.",
    tech: ["Python", "FastAPI", "MalConv", "Machine Learning"],
    features: [
      "95% Accuracy in threat detection",
      "REST API for real-time scanning"
    ],
    architecture: "FastAPI backend serving a trained MalConv deep learning model.",
    github: "https://github.com/KJoshiSaiGovind",
    live: "#",
    problem: "IoT devices are increasingly vulnerable to specialized malware.",
    solution: "Developed a deep learning model to accurately classify malicious binaries.",
  },
  {
    title: "Food Recipe Sharing Platform",
    description: "A full-stack platform for users to manage and share culinary recipes.",
    tech: ["FastAPI", "Python", "SQL", "HTML", "CSS"],
    features: [
      "User Authentication",
      "CRUD APIs for Recipe Management",
      "Normalized Database Design"
    ],
    architecture: "Monolithic architecture with a FastAPI backend and SSR/Static frontend integration.",
    github: "https://github.com/KJoshiSaiGovind/Recipe-Sharing.git",
    live: "https://recipe-sharing143.netlify.app/",
    problem: "People need a centralized place to share and discover structured recipes.",
    solution: "Built a robust, normalized database system to handle structured recipe data efficiently.",
  },
  {
    title: "ETL Data Pipeline",
    description: "Automated workflow management system for data extraction, transformation, and loading.",
    tech: ["Apache Airflow", "Docker", "Python"],
    features: [
      "Automated Scheduling",
      "Workflow Management",
      "Dockerized deployments"
    ],
    architecture: "Airflow DAGs running within Docker containers for isolated and reproducible ETL processes.",
    github: "https://github.com/KJoshiSaiGovind/Airflow_Amazon.git",
    live: "#",
    problem: "Manual data processing is error-prone and time-consuming.",
    solution: "Implemented automated, scheduled DAGs to handle data pipelines flawlessly.",
  },
  {
    title: "PDF Document Structure Extraction",
    description: "An automated tool to parse complex PDF documents and extract structured JSON data.",
    tech: ["Python", "PdfPlumber", "JSON"],
    features: [
      "Document Parsing",
      "Automated JSON Extraction"
    ],
    architecture: "Python script utilizing PdfPlumber to map graphical text elements to logical structures.",
    github: "https://github.com/KJoshiSaiGovind/PDF-Document-Structure-Extraction.git",
    live: "https://pdf-document-structure-extraction-website.streamlit.app/",
    problem: "Extracting tabular or structured data from PDFs is difficult.",
    solution: "Created a robust parser that intelligently identifies document structure.",
  },
  {
    title: "YouTube Video Downloader",
    description: "A REST API service allowing users to download videos in multiple formats.",
    tech: ["Python", "FastAPI"],
    features: [
      "REST APIs for processing video URLs",
      "Support for multiple resolution formats"
    ],
    architecture: "Stateless API wrapping around video processing libraries.",
    github: "https://github.com/KJoshiSaiGovind/youtube_downloader_fastapi.git",
    live: "#",
    problem: "Need for a programmatic way to fetch video streams.",
    solution: "Developed a fast, asynchronous API using FastAPI to handle download requests.",
  },
  {
    title: "Sales Performance Dashboard",
    description: "Data visualization dashboard providing actionable business insights.",
    tech: ["Python", "SQL", "Pandas", "Matplotlib"],
    features: [
      "Exploratory Data Analysis (EDA)",
      "Interactive Visualizations",
      "Business Insight Generation"
    ],
    architecture: "Data loaded via SQL, processed with Pandas, and visualized statically/dynamically.",
    github: "https://github.com/KJoshiSaiGovind/Sales-Performance-Analysis-Dashboard.git",
    live: "#",
    problem: "Raw sales data is hard to interpret for stakeholders.",
    solution: "Cleaned and visualized data to highlight key performance indicators.",
  },
  {
    title: "Customer Churn Prediction",
    description: "Predictive analytics model to identify customers at risk of leaving.",
    tech: ["Python", "Machine Learning", "SQL"],
    features: [
      "EDA on customer behavior data",
      "Predictive Analytics modeling"
    ],
    architecture: "End-to-end ML pipeline from SQL extraction to model inference.",
    github: "https://github.com/KJoshiSaiGovind/Customer-Churn-Analysis-and-Prediction.git",
    live: "#",
    problem: "Businesses lose revenue from unexpected customer churn.",
    solution: "Trained a machine learning classifier to accurately predict at-risk customers.",
  }
];

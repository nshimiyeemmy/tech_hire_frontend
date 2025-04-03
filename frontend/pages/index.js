import Head from 'next/head'
import Image from 'next/image'
import Home from '../component/Home';
import Layout from '../component/layout/Layout'
import styles from '../styles/Home.module.css'

export default function Main({ data }) {
  return (
    <Layout>
      <Home data={data}/>
    </Layout>
  );
}

// Mock data structure that mimics what would come from the API
export async function getStaticProps() {
  // Creating mock data that resembles job listings
  const mockData = {
    jobs: [
      {
        id: 1,
        title: "Frontend Developer",
        description: "We are looking for an experienced frontend developer...",
        location: "New York",
        company: "Tech Solutions Inc.",
        companyId: 101,
        salary: "70000-90000",
        jobType: "Full Time",
        education: "Bachelors",
        experience: "2-5 Years",
        industry: "Information Technology",
        createdAt: new Date().toISOString(),
      },
      {
        id: 2,
        title: "Backend Engineer",
        description: "Backend developer with Node.js experience...",
        location: "San Francisco",
        company: "Innovation Labs",
        companyId: 102,
        salary: "80000-110000",
        jobType: "Full Time",
        education: "Masters",
        experience: "3-5 Years",
        industry: "Software Development",
        createdAt: new Date().toISOString(),
      },
      {
        id: 3,
        title: "UX Designer",
        description: "Looking for a creative UX designer...",
        location: "Remote",
        company: "Design Studio",
        companyId: 103,
        salary: "60000-80000",
        jobType: "Contract",
        education: "Bachelors",
        experience: "1-3 Years",
        industry: "Design",
        createdAt: new Date().toISOString(),
      },
      {
        id: 4,
        title: "Data Scientist",
        description: "Data scientist with machine learning experience...",
        location: "Chicago",
        company: "Data Insights",
        companyId: 104,
        salary: "90000-120000",
        jobType: "Full Time",
        education: "PhD",
        experience: "3-7 Years",
        industry: "Data Science",
        createdAt: new Date().toISOString(),
      },
    ],
    count: 4,
    resPerPage: 10,
    filteredJobsCount: 4
  };

  return {
    props: {
      data: mockData
    },
    // Re-generate the page at most once per 60 seconds
    revalidate: 60
  };
}

import Layout from "../../component/layout/Layout";
import MyJobs from "../../component/MyJobs";
import { isAuthenticatedUser } from "../../utils/isAuthenticated";
import axios from "axios";

export default function MyJobsPage({ jobs, access_token }) {
  return (
    <Layout title="My Jobs">
      <MyJobs jobs={jobs} access_token={access_token} />
    </Layout>
  );
}

export async function getServerSideProps({ req }) {
  const access_token = req.cookies.access;

  const user = await isAuthenticatedUser(access_token);

  if (!user) {
    return {
      redirect: {
        destination: "/auth/login",
        permanent: false,
      },
    };
  }

  const res = await axios.get(`${process.env.API}/api/me/jobs/`, {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  });

  const jobs = res.data;

  return {
    props: {
      jobs,
      access_token,
    },
  };
}
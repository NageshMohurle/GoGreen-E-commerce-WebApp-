import React from 'react'
import Layout from '../../component/Layout/Layout'
import UserMenu from '../../component/Layout/UserMenu'
import { useAuth } from "../../context/auth";

const Dashboard = () => {
  const [auth] = useAuth();
  return (
    <Layout title={'GoGreenApp-Dashboard'}>
      <div className="container-flui p-3" style={{ marginTop: '100px' }}>
        <div className="row">
          <div className="col-md-3">
            <UserMenu />
          </div>
          <div className="col-md-9">
            <div className="card w-75 p-3">
              <h3>{auth?.user?.name}</h3>
              <h3>{auth?.user?.email}</h3>
              <h3>{auth?.user?.address}</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Dashboard
import HeaderBox from "@/components/customs/HeaderBox";
import TotalBalanceBox from "@/components/customs/TotalBalanceBox";
import RightSidebar from "@/components/customs/RightSidebar";
import { getLoggedInUser } from "@/lib/actions/user.actions";

const Dashboard = async () => {
  const loggedIn = await getLoggedInUser();

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.name || "Guest"}
            subtext="Access and manage your account and transactions efficiently."
          />

          <TotalBalanceBox
            accounts={[]}
            totalBanks={1}
            totalCurrentBalance={1250.35}
          />
        </header>
        RECENT TRANSACTIONS
      </div>

      <RightSidebar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 100 }, { currentBalance: 400 }]}
      />
    </section>
  );
};

export default Dashboard;

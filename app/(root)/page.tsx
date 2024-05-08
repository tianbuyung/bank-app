import HeaderBox from "@/components/customs/HeaderBox";
import TotalBalanceBox from "@/components/customs/TotalBalanceBox";
import RightSidebar from "@/components/customs/RightSidebar";

const Dashboard = () => {
  const loggedIn = {
    firstName: "Septian",
    lastName: "Maulana",
    email: "septiandev028@gmail.com",
  };

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || "Guest"}
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

      <RightSidebar user={loggedIn} transactions={[]} banks={[{}, {}]} />
    </section>
  );
};

export default Dashboard;

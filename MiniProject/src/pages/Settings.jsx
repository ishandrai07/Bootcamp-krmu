import Sidebar from "../components/Sidebar";
import ThemeToggle from "../components/ThemeToggle";
import PageWrapper from "../components/PageWrapper";

const Settings = () => {
  return (
    <PageWrapper>
      <div className="flex min-h-screen bg-slate-950 text-white">

        <Sidebar />

        <main className="flex-1 p-8">

          <h1 className="text-4xl font-bold mb-10">
            Settings
          </h1>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="glass p-6 rounded-xl">
              <h2 className="text-xl font-bold mb-4">
                Appearance
              </h2>

              <ThemeToggle />
            </div>

            <div className="glass p-6 rounded-xl">
              <h2 className="text-xl font-bold mb-4">
                Notifications
              </h2>

              <input
                type="checkbox"
                defaultChecked
              />
            </div>

            <div className="glass p-6 rounded-xl">
              <h2 className="text-xl font-bold mb-4">
                Language
              </h2>

              <select className="bg-slate-800 p-3 rounded-lg">
                <option>English</option>
                <option>Hindi</option>
              </select>
            </div>

          </div>

        </main>
      </div>
    </PageWrapper>
  );
};

export default Settings;
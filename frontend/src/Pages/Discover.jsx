import { Search } from "lucide-react";
import { useState } from "react";
import { dummyConnectionData } from "../assets/assets";
import UserCard from "../components/UserCard";
import Loading from "../components/Loading";

const Discover = () => {
  const [input, setInput] = useState([]);
  const [users, setUsers] = useState(dummyConnectionData);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    if (e.key === "Enter") {
      setUsers([]);
      setLoading(true);
      setTimeout(() => {
        setUsers(dummyConnectionData);
        setLoading(false);
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-50 to-white">
      <div className="max-w-6xl mx-auto p-6">
        {/* title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-slate-900 mb-2">
            Discover People
          </h1>
          <p className="text-blue-400">
            Connect with amazing people and grow your network
          </p>
        </div>

        {/* search */}
        <div className="mb-8 shadow-md rounded-md border border-slate-200/60 bg-white/80">
          <div className="p-1">
            <div className="relative">
              <Search className="absolute left-5 top-1/4 transform -translage-y-1/2 text-slate-400 w-5 h-5 items-center" />
              <input
                type="text"
                placeholder="Discover People"
                className=" pl-10 sm:pl-12 py-2 w-full rounded-md max-sm:text-sm outline-none"
                onChange={(e) => setInput(e.target.value)}
                value={input}
                onKeyUp={handleSearch}
              />
            </div>
          </div>
        </div>

        {/* discover card */}

        <div className="flex flex-wrap gap-6">
          {
            users.map((user) => (
              <UserCard user={user} key={user._id}/>
            ))
          }
        </div>
        {
          loading && (
            <Loading height="60vh"/>
          )
        }
      </div>
    </div>
  );
};

export default Discover;

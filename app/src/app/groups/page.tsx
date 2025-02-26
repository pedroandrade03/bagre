"use client";

import { useEffect, useState } from "react";
import Footer from "@/components/layout/footer";
import Group from "@/components/layout/group";
import { GroupBanner } from "@/components/layout/group-banner";
import Header from "@/components/layout/header";
import Line from "@/components/layout/line";

export default function Groups() {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/groups/")
      .then((response) => response.json())
      .then((data) => setGroups(data))
      .catch((error) => console.error("Error fetching groups", error));
  }, []);

  return (
    <div className="bg-[#191919] w-screen">
      <Header />
      <div className="flex flex-col items-center justify-center md:p-12">
        <GroupBanner />
        <Line />
        <div className="flex w-full">
          <div className="px-12 md:px-24 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 max-w-5xl mx-auto">
            {groups.map((group, index) => (
              <div key={index} className="flex justify-center bg-white">
                <Group data={group} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

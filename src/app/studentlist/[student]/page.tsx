"use client";
import React from "react";
import { useRouter } from "next/navigation";
interface StudentPageProps {
    params: {
      student: string;
    };
  }
  
  const page: React.FC<StudentPageProps> = ({ params }) => {
    const navigate = useRouter()
  return (
    <div>
      <h1>Students Details</h1>
      {/* <h2>student id:{params.student}</h2> */}
      <button onClick={()=>navigate.push('/')}>Redirect</button>
    </div>
  );
}

export default page;

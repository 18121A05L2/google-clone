import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { FaGreaterThan, FaLessThan } from "react-icons/fa";

export default function PaginationButtons() {
  const router = useRouter();
  const startIndex = Number(router.query.start) || 0;
  return (
    <div className="flex justify-between max-w-sm pl-8 text-blue-500 mb-[3rem]">
      {startIndex >= 10 && (
        <Link
          href={`/search/?input=${router.query.input}&start=${startIndex - 10}`}
        >
          <div className="flex items-center gap-1 text-[1.2rem]">
            <FaLessThan className="cursor-pointer h-4" />
            <p className="link text-blue-500 ">Prev</p>
          </div>
        </Link>
      )}
      <Link
        href={`/search/?input=${router.query.input}&start=${startIndex + 10}`}
      >
        <div className="flex items-center gap-1 text-[1.2rem]">
          <FaGreaterThan className="cursor-pointer h-4" />
          <p className="link text-blue-500 ">Next</p>
        </div>
      </Link>
    </div>
  );
}

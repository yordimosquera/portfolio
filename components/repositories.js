import React from "react";
import { motion } from "motion/react";
import { StarIcon } from "@heroicons/react/24/solid";
import { githubProfileUrl } from "../services/fetchRepos";

// Fixed locale and time zone so server and client render the same date.
const dateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  year: "numeric",
  timeZone: "UTC",
});

export default function Repositories({ repos }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="relative flex flex-col min-h-screen max-w-7xl mx-auto px-10 pt-40 pb-20 items-center justify-center"
    >
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Repositories
      </h3>

      {!repos?.length ? (
        <p className="text-lg text-gray-400 text-center">
          {repos ? "No public repositories yet." : "Couldn't load repositories right now."}{" "}
          <a
            href={githubProfileUrl}
            target="_blank"
            rel="noreferrer"
            className="underline decoration-[#F7AB0A]/50 hover:text-[#F7AB0A]"
          >
            See them on GitHub
          </a>
        </p>
      ) : (
        <ul className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {repos.map((repo) => (
            <li key={repo.id}>
              <a
                href={repo.url}
                target="_blank"
                rel="noreferrer"
                className="flex h-full flex-col gap-3 rounded-md bg-[#292929] p-6 opacity-70 transition-opacity duration-200 hover:opacity-100 focus-visible:opacity-100"
              >
                <h4 className="text-xl font-semibold break-words">
                  {repo.name}
                  <span className="sr-only"> (opens GitHub in a new tab)</span>
                </h4>
                <p className="grow text-sm text-gray-300">
                  {repo.description || "No description"}
                </p>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                  {repo.language && (
                    <span className="flex items-center gap-1">
                      <span aria-hidden className="h-2.5 w-2.5 rounded-full bg-[#F7AB0A]" />
                      {repo.language}
                    </span>
                  )}
                  <span className="flex items-center gap-1">
                    <StarIcon aria-hidden className="h-4 w-4 text-[#F7AB0A]" />
                    {repo.stars}
                    <span className="sr-only"> stars</span>
                  </span>
                  <span className="ml-auto">
                    Updated{" "}
                    <time dateTime={repo.updatedAt}>
                      {dateFormatter.format(new Date(repo.updatedAt))}
                    </time>
                  </span>
                </div>
              </a>
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}

"use client";

import { useState } from "react";
import Markdown from "react-markdown";

export const IdeaForm = ({
  onSubmit,
}: {
  onSubmit: (idea: string) => Promise<string>;
}) => {
  const [validation, setValidation] = useState("");

  const [loading, setLoading] = useState(false);

  return (
    <>
      <form
        className="flex flex-col gap-4 items-center"
        onSubmit={async (e) => {
          e.preventDefault();
          const idea = e.currentTarget.idea.value as string;
          if (!idea) return;
          setLoading(true);
          const validation = await onSubmit(idea);
          setLoading(false);
          setValidation(validation);
        }}
      >
        <textarea
          className="textarea textarea-primary max-w-[380px] w-full h-[200px]"
          placeholder="Idea"
          name="idea"
          required
          minLength={20}
        ></textarea>
        <button className="btn btn-success">Validate</button>
        {loading ? (
          <div>
            <span className="loading loading-ball loading-xs"></span>
            <span className="loading loading-ball loading-sm"></span>
            <span className="loading loading-ball loading-md"></span>
            <span className="loading loading-ball loading-lg"></span>
          </div>
        ) : (
          <article className="prose w-full pb-4">
            <Markdown>{validation}</Markdown>
          </article>
        )}
      </form>
    </>
  );
};

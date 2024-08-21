import { IdeaForm } from "@/components/idea-form";
import { Thread, Assistant } from "experts";

class ValidatorAssistant extends Assistant {
  constructor() {
    super({
      name: "Idea Validation Bot",
      id: "asst_hQigiwp2kHady4YgpMQWdNnt",
    });
  }
}

export default function Home() {
  const validateIdea = async (idea: string) => {
    "use server";
    console.log("got shit");
    const thread = await Thread.create();
    const assistant = await ValidatorAssistant.create();
    const output = (await assistant.ask(
      idea +
        "Respond with proper markdown. headings, subheadings, section, all the bells and whistles. even emojis are welcome.",
      thread.id
    )) as string;
    return output;
  };

  return (
    <div className="w-full h-full flex flex-col gap-10">
      <h1 className="text-3xl font-bold mt-[200px] mx-auto">
        Validate Your Idea!
      </h1>
      <IdeaForm onSubmit={validateIdea} />
    </div>
  );
}

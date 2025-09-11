import { ChatBot } from "@/app/[locale]/chat/_components/chatbot";
import { aiTypeFlag } from "@/lib/flags-api";

const Page: NextPage = async () => {
  const aiType = await aiTypeFlag();

  return (
    <main className="pt-24 container">
      <div className="border rounded-xl">
        <ChatBot aiType={aiType} />
      </div>
    </main>
  );
};

export default Page;

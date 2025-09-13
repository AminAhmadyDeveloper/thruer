import { ChatBot } from "@/app/[locale]/chat/_components/chatbot";
import { payedAiFlag } from "@/lib/flags-api";

const Page: NextPage = async () => {
  const payedAi = await payedAiFlag();

  return (
    <main className="pt-24 container">
      <div className="border rounded-xl">
        <ChatBot payedAi={payedAi} />
      </div>
    </main>
  );
};

export default Page;

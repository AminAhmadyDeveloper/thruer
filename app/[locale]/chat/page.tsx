import { ChatBot } from "@/app/[locale]/chat/_components/chatbot";
import { payedAiFlag } from "@/lib/flags-api";

const Page: NextPage = async () => {
  const payedAi = await payedAiFlag();

  return (
    <main className="container pt-24">
      <div className="rounded-xl border">
        <ChatBot payedAi={payedAi} />
      </div>
    </main>
  );
};

export default Page;

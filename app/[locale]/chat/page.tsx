import { ChatBot } from "@/app/[locale]/chat/_components/chatbot";
import { payedAiFlag } from "@/lib/flags-api";

const Page: NextPage = async () => {
  const isPayed = await payedAiFlag();

  return (
    <main className="pt-24 container">
      <div className="border rounded-xl">
        <ChatBot isPayed={isPayed} />
      </div>
    </main>
  );
};

export default Page;
